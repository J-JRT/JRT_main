module.exports.config = {
	name: "test2",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Horizon",
	description: "Lấy thông tin người dùng",
	commandCategory: "Thông tin",
	usages: "getInfo",
	cooldowns: 5
};

module.exports.run =async function({ api, event,args,client }) {
var data = await api.getUserInfoV5(event.senderID);
api.sendMessage(JSON.stringify(data,null,"\t"),event.threadID)
}
