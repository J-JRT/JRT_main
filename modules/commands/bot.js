const fs = require("fs");
module.exports.config = {
name: "bot",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "bot",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
        var tl = ["chào bạn tôi là bot Duy","bạn gọi tôi có việc gì?","tôi yêu bạn vai lon","[ Góc Donate ] có thể donate thôi chứ?"];
        var rand = tl[Math.floor(Math.random() * tl.length)];
	if (event.body.indexOf("bot")==0 || (event.body.indexOf("Bot")==0)) {
		var msg = {
				body: rand
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}