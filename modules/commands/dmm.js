const fs = require("fs");
module.exports.config = {
	name: "Đmmm",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Địt mẹ mày",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("đmm")==0 || (event.body.indexOf("Đmm")==0)) {
		var msg = {
				body: "Địt mẹ mày ",
				attachment: fs.createReadStream(__dirname + `/noprefix/ditmemay.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}