const fs = require("fs");
module.exports.config = {
	name: "ctcht",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Ctcht",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ctcht")==0 || (event.body.indexOf("Ctcht")==0)) {
		var msg = {
				body: "Chúng ta djtnhau",
				attachment: fs.createReadStream(__dirname + `/noprefix/ctcht.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}