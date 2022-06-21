module.exports.config = {
	name: "busy",
	version: "1.0.0",
	permissions: 2,
	credits: "Henry",
	description: "Bật hoặc tắt chế độ busy",
  usages: "busy [lí do]",
  commandCategory: "Hệ thống admin-bot",
  cooldowns: 5
};

const busyPath = __dirname + '/cache/busy.json';
const fs = require('fs');

module.exports.onLoad = () => {
  if (!fs.existsSync(busyPath)) fs.writeFileSync(busyPath, JSON.stringify({}));
}

module.exports.handleEvent = async function({ api, event, Users }) {
    let busyData = JSON.parse(fs.readFileSync(busyPath));
    var { senderID, threadID, messageID, mentions } = event;
    if (senderID in busyData) {
        var info = busyData[senderID];
        delete busyData[senderID];
        fs.writeFileSync(busyPath, JSON.stringify(busyData, null, 4));
        return api.sendMessage(`𝐶ℎ𝑎̀𝑜 𝑚𝑢̛̀𝑛𝑔 𝑏𝑎̣𝑛 đ𝑎̃ 𝑞𝑢𝑎𝑦 𝑡𝑟𝑜̛̉ 𝑙𝑎̣𝑖!!! 🥰`, threadID, () => {
            if (info.tag.length == 0) api.sendMessage("ᴛʀᴏɴɢ ʟᴜ́ᴄ ʙᴀ̣ɴ ᴆɪ ᴠᴀ̆́ɴɢ, ᴋʜᴏ̂ɴɢ ᴄᴏ́ ᴀɪ ɴʜᴀ̆́ᴄ ᴆᴇ̂́ɴ ʙᴀ̣ɴ ᴄᴀ̉", threadID);
            else {
                var msg = "";
                for (var i of info.tag) {
                    msg += `${i}\n`
                }
                api.sendMessage("ᴆᴀ̂ʏ ʟᴀ̀ ᴅᴀɴʜ sᴀ́ᴄʜ ɴʜᴜ̛̃ɴɢ ᴛɪɴ ɴʜᴀ̆́ɴ ʙᴀ̣ɴ ᴆᴜ̛ᴏ̛̣ᴄ ᴛᴀɢ ᴛʀᴏɴɢ ᴋʜɪ ʙᴀ̣ɴ ᴆɪ ᴠᴀ̆́ɴɢ:\n\n" + msg, threadID)
            }
        }, messageID);
    }

    if (!mentions || Object.keys(mentions).length == 0) return;
    
    for (const [ID, name] of Object.entries(mentions)) {
        if (ID in busyData) {
            var infoBusy = busyData[ID], mentioner = await Users.getNameUser(senderID), replaceName = event.body.replace(`${name}`, "");
            infoBusy.tag.push(`${mentioner}: ${replaceName == "" ? "ᴆᴀ̃ ᴛᴀɢ ʙᴀ̣ɴ 1 ʟᴀ̂̀ɴ" : replaceName}`)
            busyData[ID] = infoBusy;
            fs.writeFileSync(busyPath, JSON.stringify(busyData, null, 4));
            return api.sendMessage(`${name.replace("@", "")} ʜɪᴇ̣̂ɴ ᴆᴀɴɢ ʙᴀ̣̂ɴ${infoBusy.lido ? ` ᴠᴏ̛́ɪ ʟʏ́ ᴅᴏ: ${infoBusy.lido}.` : "."}`, threadID, messageID);
        }
    }
}

module.exports.run = async function({ api, event, args, Users }) {
	if (event.senderID != 100033478361032) return api.sendMessage(`[❗] Donate → Mbbank/Momo: 0396049649. JRT xin cám ơn bạn ❤️`, event.threadID, event.messageID)
	await new Promise(resolve => setTimeout(resolve, 1000));
    let busyData = JSON.parse(fs.readFileSync(busyPath));
    const { threadID, senderID, messageID, body } = event;
    var content = args.join(" ") || "";
    if (!(senderID in busyData)) {
        busyData[senderID] = {
            lido: content,
            tag: []
        }
        fs.writeFileSync(busyPath, JSON.stringify(busyData, null, 4));
       var msg = (content.length == 0) ? '=====ʙᴏᴛ ᴄᴜᴛᴇ=====\n\nʙᴀ̣ɴ ᴆᴀ̃ ʙᴀ̣̂ᴛ ᴄʜᴇ̂́ ᴆᴏ̣̂ ʙᴜsʏ\nʟɪ́ ᴅᴏ: ɪɴᴠɪsɪʙʟᴇ' : `=====ʙᴏᴛ ᴄᴜᴛᴇ=====\n\nʙᴀ̣ɴ ᴆᴀ̃ ʙᴀ̣̂ᴛ ᴄʜᴇ̂́ ᴆᴏ̣̂ ʙᴜsʏ\nʟɪ́ ᴅᴏ: ${content}`;
        return api.sendMessage(msg, threadID, messageID);
    }
}
