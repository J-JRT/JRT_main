const fs = require("fs");
module.exports.config = {
    name: "vẻ bề ngoài",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "VanHung - Fixed by LTD", 
    description: "no prefix",
    commandCategory: "Không cần dấu lệnh",
    usages: "Buồn",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
    var { threadID, messageID } = event;
    if (event.body.indexOf("vẻ bề ngoài quan trọng đến thế à")==0 || (event.body.indexOf("Vẻ bề ngoài quan trọng đến thế à")==0)) {
        var msg = {
                body: "Vẻ bề ngoài quan trọng đến thế à ????",
                attachment: fs.createReadStream(__dirname + `/noprefix/vebengoai.mp3`)
            }
            api.sendMessage(msg, threadID, messageID);
        }
    }
    module.exports.run = function({ api, event, client, __GLOBAL }) {

}