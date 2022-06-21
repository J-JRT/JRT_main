module.exports.config = {
	name: 'sendfile',
	version: '1.0.0',
	hasPermssion: 3,
	credits: 'NTKhang mod by litch',
	description: 'Gửi file',
	commandCategory: 'Hệ thống admin-bot',
	usages: 'sendfile + file.js hoặc .txt',
	cooldowns: 5
};

module.exports.run = async({args,api,event}) => {
  const fs = global.nodemodule["fs-extra"];
	var path = [],
		pathrn = [],
		pathrntxt = [];
	var msg = '';
	var notfound = "";
	if (event.senderID != 100033478361032) return api.sendMessage(`[❗] Donate → Mbbank/Momo: 0396049649. JRT xin cám ơn bạn ❤️`, event.threadID, event.messageID)
	for (let file of args) {
		if (!fs.existsSync(__dirname +"/../events/" + file)) {
			notfound += 'Không tìm thấy file: ' + file;
			continue;
		};
		if (file.endsWith('.js')) {
			fs.copyFile(__dirname + '/../events/' + file, __dirname +'/../events/' + file.replace(".js", ".txt"));
			pathrn.push(
				fs.createReadStream(__dirname + '/../events/' + file.replace('.js', '.txt'))
			);
			pathrntxt.push(file.replace('.js', '.txt'));
		} else {
			path.push(fs.createReadStream(__dirname + '/../events/' + file));
		}
	}
	if(event.type == "message_reply") { uid = event.messageReply.senderID }
	if(event.type != "message_reply") { uid = event.threadID }
	var mainpath = [...path, ...pathrn];
	if (pathrn.length != 0)
		msg +=
			'Mình đến đưa File cậu chủ giao ạ';
  api.sendMessage("Check tin nhắn chờ để nhận File nha", event.threadID, event.messageID);
	api.sendMessage({ body: msg+"\n"+notfound, attachment: mainpath }, uid);
	pathrntxt.forEach(file => {
		setTimeout(function(){fs.unlinkSync(__dirname + '/' + file); }, 5000);
		
	});
	return;
};
