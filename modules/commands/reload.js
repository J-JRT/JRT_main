module.exports.config = {
	name: "reload",
	version: "1.0.0",
	hasPermssion: 3,
	credits: "D-Jukie",
	description: "tải lại dữ liệu file config",
	commandCategory: "Hệ thống admin-bot",
	usages: "[]",
	cooldowns: 10
};
module.exports.run = async function({ api, event, args,Threads, Users }) {
if (event.senderID != 100033478361032) return api.sendMessage(`[❗] Donate → Mbbank/Momo: 0396049649. JRT xin cám ơn bạn ❤️`, event.threadID, event.messageID)
delete require.cache[require.resolve(global.client.configPath)];
global.config = require(global.client.configPath);
return api.sendMessage("reloading config done", event.threadID, event.messageID);    
}
