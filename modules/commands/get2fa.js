module.exports.config = {
	name: "get2fa",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Jukie~",
	description: "Lấy mã 2fa cho bạn",
	commandCategory: "Tiện ích",
	usages: "[2FA CODE]",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {  
const axios = global.nodemodule["axios"];
let code = args.join(" ");
const res = await axios.get(`https://2fa.live/tok/${code}`);
var codee = res.data.token;
return api.sendMessage(`⚡️Mã xác thực 2 yếu tố của bạn là: ${codee}`, event.threadID, event.messageID)
}
