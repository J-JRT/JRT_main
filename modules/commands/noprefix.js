module.exports.config = {
    name: "noprefix",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "HTHB",
    description: "",
    commandCategory: "không cần dấu lệnh",
    usages: "",
    cooldowns: 0,
    denpendencies: {
        "fs": "",
        "request": ""
    }
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "anlon.gif")) request("https://i.redd.it/fhfb6iv99l561.gif").pipe(fs.createWriteStream(dirMaterial + "anlon.gif"));
}
module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
    const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
    var msg = "100069809563420" {
                body: `Bye ${name} chúc mừng bạn đã chửi bot và ăn lồn vì tin nhắn này sẽ được gửi đến chủ BOT !`,
                attachment: fs.createReadStream(__dirname + `/noprefix/anlon.gif`)
            }
    if (event.body.toLowerCase() == "bot óc"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "bot cặc"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "bot rác"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "bot lồn"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "bot ngu"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
        };
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID)
    }
