const fs = require("fs");
module.exports.config = {
name: "theNights",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD",
	description: "TheNights",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("thenights")==0 || (event.body.indexOf("TheNights")==0)) {
		var msg = {
				body: "Avicii ",
				attachment: fs.createReadStream(__dirname + `/noprefix/thenight.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}