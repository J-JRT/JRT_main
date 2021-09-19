module.exports.config = {
	name: "admins",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "HungCatMoi",
	description: "Lien he vs Admin bot",
	commandCategory: "Info", 
	usages: "Admin Bot[key]", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async ({ api, event, args, client, utils }) => {
	if (args.join() == "") {api.sendMessage("Bot hiện đang có  2 admins\n👉Sử dụng /admins 1 để xem thông tin admins 1\n👉Sử dụng /admins 2 để xem thông tin admins 2",event.threadID, event.messageID);
	}
	if (args[0] == "1") {
		return api.sendMessage("「 Admin 1 」\nTên: Hoang Hai Long\nLiên hệ:\nhttps://www.facebook.com/100022547652883", event.threadID, event.messageID);
	}
	else if (args[0] == "2") {
		return api.sendMessage("「 Admin 2 」\nTên: Hoang Hai Long\nLiên hệ:\nhttps://www.facebook.com/longk.hoanghai", event.threadID, event.messageID);
	}
}