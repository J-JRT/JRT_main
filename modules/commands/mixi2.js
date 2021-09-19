const fs = require("fs");
module.exports.config = {
	name: "mixi2",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Long LTD", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Độ tộc 2",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("mixi")==0 || (event.body.indexOf("Mixi")==0)) {
		var msg = {
				body: "Độ Tộc 2 của anh Độ chất không anh em :33",
				attachment: fs.createReadStream(__dirname + `/noprefix/mixi.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}