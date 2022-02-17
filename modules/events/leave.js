module.exports.config = {
	name: "leave",
	eventType: ["log:unsubscribe"],
	version: "1.0.0",
	credits: "Mirai Team",
	description: "Thông báo bot hoặc người rời khỏi nhóm",
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};

module.exports.run = async function({ api, event, Users, Threads }) {
	if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
	const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
	const { join } =  global.nodemodule["path"];
	const { threadID } = event;
	const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
	const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
	const type = (event.author == event.logMessageData.leftParticipantFbId) ? "rời" : "và đã bị quản lí đuổi";
	const path = join(__dirname, "cache", "leaveGif");
	const gifPath = join(path, `bai.gif`);
	var msg, formPush

	if (existsSync(path)) mkdirSync(path, { recursive: true });

	(typeof data.customLeave == "undefined") ? msg = "💥💥𝐶𝑎̉𝑚 𝑜̛𝑛 𝑐𝑎̣̂𝑢 {name} đ𝑎̃ đ𝑜̂̀𝑛𝑔 ℎ𝑎̀𝑛ℎ 𝑐𝑢̀𝑛𝑔 𝑐ℎ𝑢́𝑛𝑔 𝑡𝑜̂𝑖 𝑡𝑟𝑜𝑛𝑔 𝑡ℎ𝑜̛̀𝑖 𝑔𝑖𝑎𝑛 𝑞𝑢𝑎 💟" : msg = data.customLeave;
	msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type);

	if (existsSync(gifPath)) formPush = { body: msg, attachment: createReadStream(gifPath) }
	else formPush = { body: msg }
	
	return api.sendMessage(formPush, threadID);
}