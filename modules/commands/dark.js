const fs = require("fs");
module.exports.config = {
name: "dark",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "dark",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("dark")==0 || (event.body.indexOf("Dark")==0)) {
		var msg = {
				attachment: fs.createReadStream(__dirname + `/noprefix/bruh.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
