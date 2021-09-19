const fs = require("fs");
module.exports.config = {
name: "tôi hiểu",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "huy hoàng và Hân - Fixed by LTD",
    description: "Ngu nè",
    commandCategory: "Không cần dấu lệnh",
    usages: "ko cần prefix chỉ cần chat :)",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
    var { threadID, messageID } = event;
    if (event.body.indexOf("tôi hiểu")==0 || (event.body.indexOf("tôi hiểu")==0)) {
        var msg = {
                body: "chỉ chân thành là đủ...",
                attachment: fs.createReadStream(__dirname + `/noprefix/toihieu.mp4`)
            }
            api.sendMessage(msg, threadID, messageID);
        }
    }
    module.exports.run = function({ api, event, client, __GLOBAL }) {

}