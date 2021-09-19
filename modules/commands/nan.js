const fs = require("fs");
module.exports.config = {
name: "nản",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "huy hoàng - Fixed by LTD",
    description: "Ngu nè",
    commandCategory: "Không cần dấu lệnh",
    usages: "ko cần prefix chỉ cần nản",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
    var { threadID, messageID } = event;
    if (event.body.indexOf("nản")==0 || (event.body.indexOf("Nản")==0)) {
        var msg = {
                body: "Quá Mệt",
                attachment: fs.createReadStream(__dirname + `/noprefix/nan.mp4`)
            }
            api.sendMessage(msg, threadID, messageID);
        }
    }
    module.exports.run = function({ api, event, client, __GLOBAL }) {

}
