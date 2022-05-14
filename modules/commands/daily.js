const coinsup = 500000
const fs = require("fs");
module.exports.config = {
	name: "daily",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Nhận tiền mỗi 12h",
	commandCategory: "Kiếm tiền",
    cooldowns: 3,
    envConfig: {
    cooldownTime: 300000 
}
  };
module.exports.run = async ({ event, api, Currencies, args }) => {
    const { threadID, messageID, senderID } = event;
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    if (typeof data !== "undefined" && cooldown - (Date.now() - data.workTime) > 0) {
        const time = cooldown - (Date.now() - data.workTime),
            hours = Math.floor( (time/(1000*60*60)) / 24 ),
            minutes = Math.floor(time / 60),
            seconds = ((time % 60) / 1000).toFixed(0);
                 const res = await axios.get("https://apimyjrt.jrt-official.repl.co/naughty.php");
//lấy data trên web api
const data = res.data.data;
//tải ảnh xuống
let download = (await axios.get(data, {
			responseType: "stream"
		})).data;
						return api.sendMessage({ body: `[⚜️] 𝑩𝒂̣𝒏 𝒗𝒖̛̀𝒂 𝒏𝒉𝒂̣̂𝒏 𝒕𝒊𝒆̂̀𝒏, 𝒗𝒖𝒊 𝒍𝒐̀𝒏𝒈 𝒏𝒉𝒖̛𝒐̛̀𝒏𝒈 𝒏𝒈𝒖̛𝒐̛̀𝒊 𝒌𝒉𝒂́𝒄\n[⚜️] 𝑻𝒉𝒖̛̉ 𝒍𝒂̣𝒊 𝒔𝒂𝒖: ${hours} giờ ${minutes} phút ${(seconds < 10 ? "0" : "")}${seconds} giây!`,
						 attachment: download }, event.threadID, event.messageID);
}
    else {
        const job = [
            "daily"
        ];
        await Currencies.increaseMoney(event.senderID, parseInt(coinsup));
                 const res = await axios.get("https://apimyjrt.jrt-official.repl.co/naughty.php");
//lấy data trên web api
const data = res.data.data;
//tải ảnh xuống
let download = (await axios.get(data, {
			responseType: "stream"
		})).data;
						return api.sendMessage({ body: `[⚜️] 𝑩𝒂̣𝒏 𝒗𝒖̛̀𝒂 𝒏𝒉𝒂̣̂𝒏 + ${coinsup}$💸.\n[⚜️] 𝐶ℎ𝑢́𝑐 𝑏𝑎̣𝑛 𝑚𝑜̣̂𝑡 𝑛𝑔𝑎̀𝑦 𝑡ℎ𝑎̣̂𝑡 ℎ𝑎̣𝑛ℎ 𝑝ℎ𝑢́𝑐 𝑣𝑎̀ 𝑣𝑢𝑖 𝑣𝑒̉`,
                  attachment: download }, event.threadID, event.messageID);
	}
  return api.sendMessage(reply, threadID, messageID);
}
