const fs = require("fs");
module.exports.config = {
	name: "khoc",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Chẳng ai có thể hiểu nổi trái tim",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("khoc")==0 || (event.body.indexOf("Khoc")==0)) {
		var msg = {
				body: "Tôi Ổn Mà 😔",
				attachment: fs.createReadStream(__dirname + `/noprefix/khoc.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}