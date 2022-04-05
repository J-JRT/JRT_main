
   module.exports.config = {
	name: "lyrics",
    version: "1.0.0", 
	hasPermssion: 0,
	credits: "manhG",
	description: "công cụ tìm lời bài hát", 
	commandCategory: "Công cụ",
	usages: "[artist, title]",
	cooldowns: 5,
    dependencies: {
        "lyrics-finder":""
    }
};
module.exports.run = async function ({ api, args, event }) {
   const { threadID, messageID } = event;
  const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
    const lyricsFinder = require('lyrics-finder');
    if (!args[0]) return api.sendMessage('Vui lòng trả lời tin nhắn này kèm theo tên bài hát bạn cần tìm lời bài hát !!',
        threadID, (error, info) => {
            global.client.handleReply.push({
                name: "lyrics",
                messageID: info.messageID,
                author: event.senderID,
            })
        }, event.messageID)
    let lyrics = await lyricsFinder(args.join(" ")) || "Không thể tìm thấy lời bài hát này !!";
    return api.sendMessage(lyrics, threadID, messageID);
}

module.exports.handleReply = async function({ api, event, handleReply, getText }) {
    const { threadID, messageID } = event
    if (event.senderID != handleReply.author) return
    const lyricsFinder = require('lyrics-finder');
    let lyrics = await lyricsFinder(event.body) || "Not Found!";
    return api.sendMessage(lyrics, threadID, messageID);
}