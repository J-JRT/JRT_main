const fs = require("fs");
module.exports.config = {
	name: "abala trap",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Yo Yo",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("abala trap")==0 || (event.body.indexOf("Abala trap")==0)) {
		var msg = {
				body: "Yo !! Abala Trapppp !!",
				attachment: fs.createReadStream(__dirname + `/noprefix/abalatrap.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}