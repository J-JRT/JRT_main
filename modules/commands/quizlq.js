const timeout = 30
const coinsup = Math.floor(Math.random() * 2000) + 100
const coinsdown = 100000
const tientrochoi = 5000
module.exports.config = {
    name: "quizlq",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "araxy",
    description: "câu hỏi về liên quân",
    commandCategory: "Game",
    usages: "quizlq",
    cooldowns: 5
};
module.exports.run = async function ({ api, args, event, Currencies, Users }) {
  const axios = require("axios");
    const fs = require("fs-extra");
    const request = require("request");
   
    const { senderID ,threadID, messageID } = event;
    var info = await api.getUserInfo(event.senderID);
    var nameSender = info[event.senderID].name;
    var arraytag = [], img = [];
        arraytag.push({id: event.senderID, tag: nameSender});
        let balance = (await Currencies.getData(senderID)).money;
    if (balance <= 5000) return api.sendMessage('[⚜️] Bạn kiếm thêm tiền để chơi nhé!!!',threadID,messageID);
     await Currencies.decreaseMoney(event.senderID, parseInt(tientrochoi));
const araxy = (await axios.get('https://apicailoznheuwu.duongduong216.repl.co/quest/lienquan')).data
    let Avatar = (await axios.get(araxy.skillInfo , { responseType: "arraybuffer" } )).data; 
         fs.writeFileSync(__dirname + "/cache/lienquan.png", Buffer.from(Avatar, "utf-8") );
         img.push(fs.createReadStream(__dirname + "/cache/lienquan.png"));
     var msg = {body: `[⚜️] ${nameSender} trả lời câu hỏi này để được 1 số tiền hời nhé UwU (-${tientrochoi}$)\n${araxy.question}\n${araxy.options_}` ,mentions: arraytag,attachment: img}
        
        return api.sendMessage(msg, event.threadID, (error, info) => {
        global.client.handleReply.push({
            type: "reply",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID,
            answer: araxy.answer_
        })
    }) 
}
module.exports.handleReply = async function ({ args, event, Users, Currencies, api, handleReply }) {
    const axios = global.nodemodule['axios'];  
    let { author, answer, messageID } = handleReply;
    if (event.senderID != author) return api.sendMessage("[⚜️] Đừng xàm nhiều trả lời đi!!!", event.threadID, event.messageID); 
    switch (handleReply.type) {
        case "reply": {
            const dapan = event.body
            if (dapan == answer) {
               await Currencies.increaseMoney(event.senderID, parseInt(coinsup))
               
               var namePlayer = await Users.getData(event.senderID)
                api.unsendMessage(handleReply.messageID)
                var msg = {body: `[⚜️] ${namePlayer.name} đã trả lời chính xác!\nĐáp án: ${answer} (+${coinsup}$)`}
                return api.sendMessage(msg, event.threadID, event.messageID)
            }
            else
               await Currencies.decreaseMoney(event.senderID, parseInt(coinsdown))
            return api.sendMessage(`[⚜️] Câu trả lời không đúng. Đáp án: ${answer} (-${coinsdown}$)!!!`, event.threadID, event.messageID),
            api.unsendMessage(handleReply.messageID);
        }
    }
}