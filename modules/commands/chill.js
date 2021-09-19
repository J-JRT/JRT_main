const fs = require("fs");
module.exports.config = {
	name: "chill",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "chill",
	commandCategory: "Không cần dấu lệnh",
	usages: "Chill",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("chill")==0 || (event.body.indexOf("Chill")==0)) {
		var msg = {
				body: "Nhạc tâm trạng ngắn đoạn",
				attachment: fs.createReadStream(__dirname + `/noprefix/chill.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}