module.exports.config = {
	name: "sendmsg",
	version: "1.0.7",
	hasPermssion: 3,
	credits: "manhG mod by Tiadals", //Vui lòng giữ nguyên credit hoặc ăn đấm !
	description: "Gửi tin hắn đến người dùng(user)/nhóm(thread) bằng ID!",
	commandCategory: "Hệ thống admin-bot",
	usages: "ID [Text]",
	cooldowns: 5
};

	module.exports.run = async ({ api, event, args }) => {
		const request = global.nodemodule["request"];
    if (event.senderID != 100033478361032) return api.sendMessage(`[❗] Donate → Mbbank/Momo: 0396049649. JRT xin cám ơn bạn ❤️`, event.threadID, event.messageID)
	const fs = require('fs')
	const axios = require('axios')
	if (args.length == 0) return api.sendMessage("Syntax error, use: sendmsg ID_BOX [lời nhắn]", event.threadID, event.messageID);
	var idbox = args[0];
	var reason = args.slice(1);
    if(reason == "") return api.sendMessage("Syntax error, use: sendmsg ID_BOX [lời nhắn]", event.threadID, event.messageID);
	if (event.type == "message_reply") {
		if(event.messageReply.attachments.length == 0) return api.sendMessage("Yêu cầu reply hình ảnh", event.threadID, event.messageID);
		return request(encodeURI(event.messageReply.attachments[0].url))
			.pipe(fs.createWriteStream(process.cwd()+'/1.png'))
			.on('close',() => 
				api.sendMessage({
					body:`» Thông báo từ admin(${api.getCurrentUserID()}) tới nhóm bạn «\n` + reason.join(" "), 
					attachment: fs.createReadStream(process.cwd()+'/1.png')},
					idbox, 
					(err,info) => {
						fs.unlinkSync(process.cwd(), `/1.png`)
						if(err) api.sendMessage("Lỗi: " + err, event.threadID)
							api.sendMessage("Done !!", event.threadID)
					}
				)
			);
	}else {
		return api.sendMessage(`» Thông báo từ admin(${api.getCurrentUserID()}) tới nhóm bạn «\n` + reason.join(" "),
			idbox, 
			(err,info) => {
				if(err) api.sendMessage("Lỗi: " + err, event.threadID)
					api.sendMessage("Done !!", event.threadID)
			}
		)
	}
}
