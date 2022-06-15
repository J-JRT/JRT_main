module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "CatalizCS",
	description: "Thông báo bot hoặc người vào nhóm có random gif/ảnh/video",
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "joinGif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event, Users, Threads }) {
    const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`» ${global.config.PREFIX} « → ${(!global.config.BOTNAME) ? "Bot của JRT <3" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		return api.sendMessage(`▂▃▅▆𝐋𝐨𝐚𝐝𝐢𝐧𝐠...𝟏𝟎𝟎%▆▅▃▂\n⫸ 𝑲𝒆̂́𝒕 𝒏𝒐̂́𝒊 𝒕𝒉𝒂̀𝒏𝒉 𝒄𝒐̂𝒏𝒈 ⫷\n●▬▬▬▬▬๑⇩⇩๑▬▬▬▬▬●\n[⚜️] 𝓛𝓾𝓪̣̂𝓽 𝓑𝓸𝓽 𝓙𝓡𝓣 [⚜️]\n[⚜️] 𝐻𝑎̣𝑛 𝑐ℎ𝑒̂́ 𝑠𝑝𝑎𝑚\[⚜️] 𝐃𝐚𝐧𝐡 𝐬á𝐜𝐡 𝐥ệ𝐧𝐡 #help và #menu\n●▬▬▬▬▬๑⇧⇧๑▬▬▬▬▬●
\n❛━━･❪ 𝑷𝒓𝒆𝒇𝒊𝒙 [ # ]❫･━━❜\n[⚜️] 𝑴𝒐̣𝒊 𝒕𝒉𝒂̆́𝒄 𝒎𝒂̆́𝒄 𝒍𝒊𝒆̂𝒏 𝒉𝒆̣̂ 𝒂𝒅𝒎𝒊𝒏: https://www.facebook.com/NHD.JRT.262\n[⚜️] 𝑋𝑒𝑚 𝑡ℎ𝑜̂𝑛𝑔 𝑡𝑖𝑛 𝐵𝑜𝑡: #bot\n[⚜️] 𝑄𝑇𝑉 𝑐𝑜́ 𝑡ℎ𝑒̂̉ 𝑑𝑢̀𝑛𝑔 '#ℎ𝑒𝑙𝑝 𝑟𝑢𝑙𝑒' đ𝑒̂̉ 𝑥𝑒𝑚 ℎ𝑢̛𝑜̛́𝑛𝑔 𝑑𝑎̂̃𝑛 𝑣𝑎̀ 𝑠𝑒𝑡 𝑏𝑎̉𝑛𝑔 𝑙𝑢𝑎̣̂𝑡 𝑏𝑜𝑥\n[⚜️] 𝑇ℎ𝑎̀𝑛ℎ 𝑣𝑖𝑒̂𝑛 𝑑𝑢̀𝑛𝑔 '#𝑟𝑢𝑙𝑒' đ𝑒̂̉ 𝑥𝑒𝑚 𝑙𝑢𝑎̣̂𝑡 𝑏𝑜𝑥 𝑐𝑢̉𝑎 𝑚𝑖̀𝑛ℎ\n◆━━━━━━━━━━━━━◆\n[⚜️] 𝐓𝐡𝐢𝐬 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐛𝐲 𝐉𝐑𝐓. 𝐓𝐡𝐚𝐧𝐤 𝐲𝐨𝐮 𝐟𝐨𝐫 𝐮𝐬𝐢𝐧𝐠\n[⚜️] 𝙰𝚍𝚖𝚒𝚗: 𝙽𝚐𝚞𝚢𝚎̂̃𝚗 𝙷𝚊̉𝚒 Đ𝚊̆𝚗𝚐`, threadID);
	}
  else {
		try {
			const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
        const moment = require("moment-timezone");
  const time = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:s");
  const hours = moment.tz("Asia/Ho_Chi_Minh").format("HH");
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);
			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `${threadID}.mp4`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "[⚜️] Hi {type} {name}.\n𝐶ℎ𝑎̀𝑜 𝑚𝑢̛̀𝑛𝑔 {type} đ𝑎̃ đ𝑒̂́𝑛 𝑣𝑜̛́𝑖 {threadName}.\n[❗] 𝑇𝑢̛̀ 𝑛𝑎𝑦 {name} 𝑠𝑒̃ 𝑙𝑎̀ 𝑡ℎ𝑎̀𝑛ℎ 𝑣𝑖𝑒̂𝑛 𝑡ℎ𝑢̛́ {soThanhVien} 𝑐𝑢̉𝑎 𝑛ℎ𝑜́𝑚 {threadName}\n[🌐] 𝐾ℎ𝑖 𝑣𝑜̂ {type} ℎ𝑎̃𝑦 𝑑𝑢̀𝑛𝑔 𝑙𝑒̣̂𝑛ℎ đ𝑒̂̉ 𝑥𝑒𝑚 𝑙𝑢𝑎̣̂𝑡 𝑏𝑜𝑥 𝑛ℎ𝑒́:\n◆━━━━━━━━━━━━━◆\n[📝] #rule (𝕥𝕣𝕦̛̀ 𝕜𝕙𝕚 𝕢𝕥𝕧 𝕤𝕖𝕥 𝕝𝕦𝕒̣̂𝕥 𝕥𝕙𝕚̀ 𝕞𝕠̛́𝕚 𝕔𝕠́ 𝕟𝕙𝕖́)\n[💥] 𝐂𝐚̂́𝐦 𝐬𝐩𝐚𝐦 𝐛𝐨𝐭 𝐡𝐚𝐲 𝐜𝐡𝐮̛̉𝐢 𝐛𝐨𝐭 𝐭𝐡𝐢̀ 𝐬𝐞̃ 𝐚̆𝐧 𝐛𝐚𝐧 𝐡𝐨𝐚̣̆𝐜 𝐪𝐭𝐯 𝐛𝐨𝐬𝐬 𝐬𝐞̃ 𝐤𝐢𝐜𝐤 𝐤𝐡𝐨̉𝐢 𝐛𝐨𝐱\n[❤️] 𝐶ℎ𝑢́𝑐 {type} 𝑐𝑜́ 𝑚𝑜̣̂𝑡 𝑏𝑢𝑜̂̉𝑖 {session} || {time} 𝑣𝑢𝑖 𝑣𝑒̉": msg = threadData.customJoin;
			msg = msg
                .replace(/\{name}/g, nameArray.join(', '))
                .replace(/\{type}/g, (memLength.length > 1) ? '𝒄𝒂́𝒄 𝒄ậ𝒖' : '𝒄ậ𝒖')
                .replace(/\{soThanhVien}/g, memLength.join(', '))
                .replace(/\{threadName}/g, threadName)
                .replace(/\{session}/g, hours <= 10 ? "𝑠𝑎́𝑛𝑔" : 
    hours > 10 && hours <= 12 ? "𝑡𝑟𝑢̛𝑎" :
    hours > 12 && hours <= 18 ? "𝑐ℎ𝑖𝑒̂̀𝑢" : "𝑡𝑜̂́𝑖")
                .replace(/\{time}/g, time);  



			if (existsSync(path)) mkdirSync(path, { recursive: true });

			const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else if (randomPath.length != 0) {
				const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
				formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
			}
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
      
		} catch (e) { return console.log(e) };
	}
                       }
