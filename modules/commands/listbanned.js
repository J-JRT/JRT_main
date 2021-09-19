module.exports.config = {
	name: "listbanned",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "NTKhang",
	description: "xem danh sách nhóm hoặc người dùng bị cấm\nCredits: NTKhang",
	commandCategory: "admin",
	usages: "[thread], [user]",
	cooldowns: 5,
};
module.exports.run = async function({api, args, Users, event, Threads, client}) {

	if (args[0] == "user") {
		var list = client.allUser || [];
		var listuserbanned = [];
		for (var iduser of list) {
			const banned = (await Users.getData(iduser))
				.banned;
			if (banned == 1) {
				listuserbanned.push({
					id: iduser
				});
			}
		}
		var msg = "";
		for (let i = 0; i < listuserbanned.length; i++) {
			const name = (await Users.getData(listuserbanned[i].id))
				.name;
			msg += `${i+1}. Name: ${name}\nID: ${listuserbanned[i].id}\n`
		}
		msg == "" ? api.sendMessage("Hiện tại không có user nào bị ban", event.threadID, event.messageID) : api.sendMessage("❎Những user đã bị ban khỏi hệ thống bot gồm:\n\n" + msg, event.threadID, event.messageID);
	}
	else if (args[0] == "thread") {
		var list = client.allThread || [];
		var listthreadbanned = [];
		for (var idthread of list) {
			const banned = (await Threads.getData(idthread))
				.banned;
			if (banned == 1) {
				listthreadbanned.push({
					id: idthread
				});
			}
		}
		var msg = "";
		for (let i = 0; i < listthreadbanned.length; i++) {
			let namethread = (await api.getThreadInfo(listthreadbanned[i].id))
				.threadName;
			msg += `${i+1}. Name: ${namethread}\nID: ${listthreadbanned[i].id}`;
		}
		msg.length == 0 ? api.sendMessage("Hiện tại không có thread nào bị ban", event.threadID, event.messageID) : api.sendMessage("❎Những thread đã bị ban khỏi hệ thống bot gồm:\n\n" + msg, event.threadID, event.messageID);
	}
	else api.sendMessage("Sai cú pháp", event.threadID, event.messageID);
}
