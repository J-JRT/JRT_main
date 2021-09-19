const fs = require("fs");
module.exports.config = {
name: "Lì xì",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "VanHung",
    description: "Li xì à",
    commandCategory: "Không cần dấu lệnh",
    usages: "ko cần prefix chỉ cần chat lì xì",
    cooldowns: 5,
};
module.exports.event = function({ api, event, client, __GLOBAL }) {
    var { threadID, messageID } = event;
    if (event.body.indexOf("lì xì")==0 || (event.body.indexOf("Lì xì")==0)) {
        var msg = {
                body: "cc 🙂",
                attachment: fs.createReadStream(__dirname + `/noprefix/lixicailol.mp3`)
            }
            api.sendMessage(msg, threadID, messageID);
        }
    }
    module.exports.run = function({ api, event, client, __GLOBAL }) {

}