module.exports.config = {
    name: "dhbcemoji",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "DVB", // Dựa trên demo của ntkhang not phải bot mirai
    description: "game đuổi hình bắt chữ emoji",
    commandCategory: "trò chơi",
    usages: "",
    cooldowns: 5,
};

module.exports.run = async function ({ api, event, args, Users, permssion, getText }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const datagame = (await axios.get("https://goatbot.tk/api/duoihinhbatchuemoji")).data;
    const random = datagame.data;
    var msg = { body: `Hãy reply tin nhắn này với câu trả lời\n${random.emoji1}${random.emoji2}\n${random.wordcomplete.replace(/\S/g, "█ ")}`};
    api.sendMessage(msg, event.threadID, (error, info) => {
        global.client.handleReply.push({
            type: "reply",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID,
            wordcomplete: random.wordcomplete
        })
    });
    console.log(datagame)
};

module.exports.handleReply = async function ({ api, event, args, handleReply, client, __GLOBAL, Threads, Users, Currencies}) {
    const axios = global.nodemodule['axios'];
    switch (handleReply.type) {
    case "reply": {
        let { author,  wordcomplete, messageID} = handleReply;
        if (event.senderID != author)
            return api.sendMessage("Bạn không phải là người chơi của câu hỏi này", event.threadID, event.messageID);
        function formatText(text) {
            return text.normalize("NFD")
                .toLowerCase()
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/đ/g, "d")
                .replace(/Đ/g, "D");
        }(formatText(event.body) == formatText(wordcomplete)) ? api.sendMessage("Chúc mừng bạn đã trả lời đúng", event.threadID, event.messageID): api.sendMessage(`Sai rồi, đáp án đúng là: ${wordcomplete}`, event.threadID, event.messageID),
            api.unsendMessage(handleReply.messageID);
    }
  }
};
