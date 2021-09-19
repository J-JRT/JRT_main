module.exports.config = {
	name: "boxname",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "HungCatMoi",
	description: "Đổi tên nhóm của bạn",
	commandCategory: "Box", 
	usages: "boxname [name]", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function({ api, event, args }) {
	const boxname = args.join(" ")
	return api.setTitle(`${boxname}`, event.threadID);
}