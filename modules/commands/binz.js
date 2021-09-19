const fs = require("fs");
module.exports.config = {
name: "Binz",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon",
	description: "binz",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("binz")==0 || (event.body.indexOf("Binz")==0)) {
		var msg = {
				body: "BIGCITYBOI",
				attachment: fs.createReadStream(__dirname + `/noprefix/binz.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}