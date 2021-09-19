const fs = require("fs");
module.exports.config = {
    name: "ảo tưởng",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "VanHung - Fixed by LTD", 
    description: "no prefix",
    commandCategory: "Không cần dấu lệnh",
    usages: "Mày bị ảo tưởng à ",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
    var { threadID, messageID } = event;
    if (event.body.indexOf("ảo tưởng")==0 || (event.body.indexOf("Ảo tưởng")==0)) {
        var msg = {
                body: "Mày bị ảo tưởng à ?? 🙃",
                attachment: fs.createReadStream(__dirname + `/noprefix/aotuong.mp4`)
            }
            api.sendMessage(msg, threadID, messageID);
        }
    }
    module.exports.run = function({ api, event, client, __GLOBAL }) {

}