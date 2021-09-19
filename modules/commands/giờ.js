module.exports.config = {
	name: "giờ",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "Đăng",
	description: "Xem bây giờ là mấy giờ",
	commandCategory: "Tiện ích", 
	usages: "time", 
	cooldowns: 0,
	dependencies: [] 
};

module. exports. run = async function({ api, event, args, Currencies, utils, Users }) {
	const moment = require("moment");
	var time = moment.tz("Asia/Ho_Chi_minh").toString('LTS');
  
  
	let data = await api.getUserInfo(event.senderID);
    let name = await data[event.senderID].name
    return api.sendMessage(👋 Hi ${name} Chúc bạn 1 ngày tốt lành\nBây giờ là: ${time}  event.threadID, event.messageID)
}