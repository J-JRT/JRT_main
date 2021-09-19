const fs = require("fs");
module.exports.config = {
name: "yamero",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon",
	description: "yamero",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("yamero")==0 || (event.body.indexOf("Yamero")==0)) {
		var msg = {
				body: "Đừng màaaaaaaaaaaaaaaaa",
				attachment: fs.createReadStream(__dirname + `/noprefix/yamero.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}