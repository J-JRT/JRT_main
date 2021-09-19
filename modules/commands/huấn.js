const fs = require("fs");
module.exports.config = {
name: "huấn",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD",
	description: "Huấn",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("huấn")==0 || (event.body.indexOf("Huấn")==0)) {
		var msg = {
				body: "Nghe lời thầy dạy nè",
				attachment: fs.createReadStream(__dirname + `/noprefix/3 Thứ Đang Hot Trên MXH .mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}