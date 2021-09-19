module.exports.config = {
	name: "giangsinh",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "CatalizCS",
	description: "Đếm ngược ngày Noel",
        commandCategory: "game",
	cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const t = Date.parse("December 25, 2021 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(`「 Cùng đếm ngược tới Noel nào🎅🎄 」\n» ${days} ngày ${hours} tiếng ${minutes} phút ${seconds} giây «`, event.threadID, event.messageID);
}