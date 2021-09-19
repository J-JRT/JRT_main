const fs = require("fs");
module.exports.config = {
    name: "chán",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "huyhoàng - Fixed by LTD", 
    description: "no prefix",
    commandCategory: "Không cần dấu lệnh",
    usages: "chán",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
    var { threadID, messageID } = event;
    if (event.body.indexOf("chán")==0 || (event.body.indexOf("Chán")==0)) {
        var msg = {
                body: "Tôi cười chưa chắc tôi đã vui :(",
                attachment: fs.createReadStream(__dirname + `/noprefix/chan.mp4`)
            }
            api.sendMessage(msg, threadID, messageID);
        }
    }
    module.exports.run = function({ api, event, client, __GLOBAL }) {

}