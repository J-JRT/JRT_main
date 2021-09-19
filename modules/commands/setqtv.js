module.exports.config = {
	name: "setqtv",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "loi",
	description: "chỉ định qtv-bot phải làm qtv",
	commandCategory: "Box-chat",
	usages: "set",
	cooldowns: 5,
	info: [
		{
			key: "tag",
			prompt: "Để trống hoặc tag người khác",
			type: 'Tag',
			example: 'setptv-by loi'
		}
	]
};

module.exports.run = function({ api, event, args }) {
	if (Object.keys(event.mentions) == 0) return api.changeAdminStatus(event.threadID, args.join(" "), true);
	else {
		for (var i = 0; i < Object.keys(event.mentions).length; i++) api.changeAdminStatus(event.threadID ,`${Object.keys(event.mentions)[i]}`, true)
	return; 
    }
}