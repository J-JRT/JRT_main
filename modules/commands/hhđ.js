const fs = require("fs");
module.exports.config = {
name: "hhđ",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "hhđ",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Hhđ")==0 || (event.body.indexOf("hhđ")==0)) {
		var msg = {
				body: "Hoa Hải Đường-Jack",
				attachment: fs.createReadStream(__dirname + `/noprefix/y2mate.com - Jack  Hoa Hải Đường  Official Music Video.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}