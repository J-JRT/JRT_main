module.exports.config = {
	name: "timing",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "DuyVuong",
	description: "1 phiên bản mới hơn của age cũ của DuyVuong",
	commandCategory: "Time",
	usages: "[ngày/tháng/năm]",
	cooldowns: 0
};

module.exports.run = function ({ event, args, api, getText }) {
var tip = args[0];
if (!tip) return api.sendMessage(`Sai format.`,event.threadID,event.messageID);
else {
	const axios = require('axios');
	const moment = require("moment-timezone");
	var hientai = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY");
	var time = `${tip} => ${hientai}`;
	axios.get(`https://le31.glitch.me/age?q=${time}`).then(res => {
     let mess = res.data.data;
     return api.sendMessage(`Năm sinh là : ${tip}\nĐến hiện tại là : \n${mess}`,event.threadID,event.messageID);
	});
}
}
