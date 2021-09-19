module.exports.config = {
	name: "naughty",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Lê Đại",
	description: "Random ảnh naughty :))",
	commandCategory: "random-img",
	usages: "naughty",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://naughty.ttktrungkien.repl.co').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/naughty.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/naughty.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/naughty.${ext}`)).on("close", callback);
			})
}