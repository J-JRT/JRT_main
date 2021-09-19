module.exports.config = {

	name: "violation",

	version: "1.0.0",

	hasPermssion: 0,

	credits: "Sun",

	description: "Thông báo đã vi phạm luật bot",

	commandCategory: "Admin",

	cooldowns: 1
};



module.exports.run = ({ event, api }) => api.sendMessage(`「 Notification server 」\n\n⚠VIOLATION RULES⚠\nNhập /rules để xem chi tiết lỗi`, event.threadID, event.messageID);