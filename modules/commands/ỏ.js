const fs = require("fs");
module.exports.config = {
name: "ỏ",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "CHIP2502",
	description: "ỏ",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ỏ")==0 || (event.body.indexOf("Ỏ")==0)) {
		var msg = {
				body: "HÔM NAY TRỜI ĐẸP THẾ NHỜ... Ỏ Ỏ Ỏ Ỏ",
				attachment: fs.createReadStream(__dirname + `/noprefix/video-1625557692.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}