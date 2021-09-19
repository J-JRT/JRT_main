module.exports.config = {
	name: "add",
	version: "1.0.2",
	credits: "Lợi",
	hasPermssion: 1,
	description: "thêm thành viên",
	commandCategory: "System",
	usages: "add",
	cooldowns: 0,
    dependencies: ["fb-tools"]
};
module .exports .run = async function ({ api, event, clientL, args }) {
    var loz = require("fb-tools");
    var url = args.join(" ");
var uid = await loz.findUid(url);
       api.addUserToGroup(uid, event.threadID)
}