module.exports.config = {
	name: "birthday",
	version: "1.0.0",
	hasPermssion: 0,
  credits: "Mirai",
	description: "Đếm ngược đến sinh nhật",
	commandCategory: "Đếm ngày",
	cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const t = Date.parse("October 2, 2021 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(`🎂🎉 Thời gian còn lại đến sinh nhật của admin là: 🎂🍷\n»${days} ngày ${hours} tiếng ${minutes} phút ${seconds} giây«`, event.threadID, event.messageID);
}
