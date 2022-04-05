module.exports.config = {
  name: "help",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Mirai Team Mod By Kadeer", // fix DuyVuong
  description: "Hướng dẫn cho người mới",
  commandCategory: "Danh sách lệnh",
  usages: "[Tên module]",
  cooldowns: 5,
  envConfig: {
    autoUnsend: true,
    delayUnsend: 60
  }
};

module.exports.handleEvent = function ({ api, event, args }) {
    const axios = require('axios');
    const request = require('request');
    const fs = require("fs");
  const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY || HH:mm:ss");
    var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
     if (thu == 'Sunday') thu = 'Chủ Nhật'
  if (thu == 'Monday') thu = 'Thứ Hai'
  if (thu == 'Tuesday') thu = 'Thứ Ba'
  if (thu == 'Wednesday') thu = 'Thứ Tư'
  if (thu == "Thursday") thu = 'Thứ Năm'
  if (thu == 'Friday') thu = 'Thứ Sáu'
  if (thu == 'Saturday') thu = 'Thứ Bảy'
  const timeStart = Date.now();
	let today = new Date();
    const { commands } = global.client;
    const { threadID, messageID, body } = event;
    if (!body || typeof body == "undefined" || body.indexOf("help") != 0) return;
    const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);
    if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
    const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
    const command = commands.get(splitBody[1].toLowerCase());
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
        return axios.get('https://jrt-api.j-jrt-official.repl.co/vsbg').then(res => {
    let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
    let callback = function () {
    
          api.sendMessage({body:`
╭────────╮\n ${command.config.name}\n╰────────╯

●▬▬▬▬๑۩۩๑▬▬▬▬●

» 📜Mô tả: ${command.config.description}
» 🧞Credit: ${command.config.credits}
» 📄Hướng dẫn cách dùng: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : "Chưa có hướng dẫn cụ thể"}
» 🌟Thuộc nhóm: ${command.config.commandCategory}
» ⏱Thời gian chờ: ${command.config.cooldowns}
» 👥Quyền hạn: ${((command.config.hasPermssion == 0) ? `Người dùng` : (command.config.hasPermssion == 1) ? `Quản trị viên nhóm` : `Quản trị viên BOT`)}
💥💢💥 Điều Hành Bởi JRT 💥💢💥

●▬▬▬▬๑⇩⇩๑▬▬▬▬●

[⚜️] TIME [⚜️]
${thu} || ${gio}`, 
            attachment: fs.createReadStream(__dirname + `/cache/4723.${ext}`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/4723.${ext}`), event.messageID);
        }; request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/4723.${ext}`)).on("close", callback);
     });
}

module.exports.run = function({ api, event, args }) {
    const axios = require('axios');
    const request = require('request');
    const fs = require("fs-extra");
   const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY || HH:mm:ss");
    var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
     if (thu == 'Sunday') thu = 'Chủ Nhật'
  if (thu == 'Monday') thu = 'Thứ Hai'
  if (thu == 'Tuesday') thu = 'Thứ Ba'
  if (thu == 'Wednesday') thu = 'Thứ Tư'
  if (thu == "Thursday") thu = 'Thứ Năm'
  if (thu == 'Friday') thu = 'Thứ Sáu'
  if (thu == 'Saturday') thu = 'Thứ Bảy'
  const timeStart = Date.now();
	let today = new Date();
    const { commands } = global.client;
    const { threadID, messageID } = event;
    const command = commands.get((args[0] || "").toLowerCase());
    const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
    const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
  
  if (args[0] == "all") {
    const command = commands.values();
    var group = [], msg = "";
    for (const commandConfig of command) {
      if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
      else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
    }
    group.forEach(commandGroup => msg += `[⚜️] ${commandGroup.group.charAt(0).toUpperCase() + commandGroup.group.slice(1)} [⚜️]\n${commandGroup.cmds.join(' ⁜ ')}\n\n`);
    return axios.get('https://jrt-api.j-jrt-official.repl.co/vsbg').then(res => {
    let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
    let callback = function () {
        api.sendMessage({ body:`[⚜️] DANH SÁCH LỆNH [⚜️]\n●▬▬▬▬๑☣️๑▬▬▬▬●\n\n` + msg + `●▬▬▬▬๑☢️๑▬▬▬▬●\n\n🏰🏰🏰 𝐻𝑖𝑒̣̂𝑛 𝑡𝑎̣𝑖 đ𝑎𝑛𝑔 𝑐𝑜́: ${commands.size} 𝑙𝑒̣̂𝑛ℎ 𝑐𝑜́ 𝑡ℎ𝑒̂̉ 𝑠𝑢̛̉ 𝑑𝑢̣𝑛𝑔 𝑡𝑟𝑒̂𝑛 𝑏𝑜𝑡 𝑛𝑎̀𝑦\n🤖𝐵𝑜𝑡 đ𝑢̛𝑜̛̣𝑐 đ𝑖𝑒̂̀𝑢 ℎ𝑎̀𝑛ℎ 𝑏𝑜̛̉𝑖 𝑁𝑔𝑢𝑦𝑒̂̃𝑛 𝐻𝑎̉𝑖 Đ𝑎̆𝑛𝑔.\n[💟] Đ𝑎̂𝑦 𝐿𝑎̀ 𝑇𝑜𝑎̀𝑛 𝐵𝑜̣̂ 𝐿𝑒̣̂𝑛ℎ 𝐶𝑜́ 𝑇𝑟𝑜𝑛𝑔 𝐹𝑖𝑙𝑒 𝐵𝑜𝑡 UwU. [❗]\n🔰𝑉𝑢𝑖 𝐿𝑜̀𝑛𝑔 𝐾ℎ𝑜̂𝑛𝑔 𝑆𝑝𝑎𝑚 𝐻𝑜𝑎̣̆𝑐 𝐶ℎ𝑢̛̉𝑖 𝐵𝑜𝑡 𝐵𝑎̂́𝑡 𝐾𝑖̀ 𝐷𝑢̛𝑜̛́𝑖 𝐻𝑖̀𝑛ℎ 𝑇ℎ𝑢̛́𝑐 𝑁𝑎̀𝑜 𝑁ℎ𝑒́ [❗]\n📣ℍ𝕖𝕝𝕡 𝕤𝕖̃ 𝕥𝕦̛̣ đ𝕠̣̂𝕟𝕘 𝕘𝕠̛̃ 𝕤𝕒𝕦 𝟞𝟘𝕤 🏯🏯🏯\n\n●▬▬▬▬๑💛๑▬▬▬▬●\n\n[⚜️] TIME [⚜️]\n${thu} || ${gio}`, 
            attachment: fs.createReadStream(__dirname + `/cache/472.${ext}`)
        }, event.threadID, (err, info) => {
        fs.unlinkSync(__dirname + `/cache/472.${ext}`);
        if (autoUnsend == true) {
            setTimeout(() => { 
                return api.unsendMessage(info.messageID);
            }, delayUnsend * 30000);
        }
        else return;
    }, event.messageID);
        }
         request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/472.${ext}`)).on("close", callback);
     })
};
if (!command) {
    const commandsPush = [];
    const page = parseInt(args[0]) || 1;
    const pageView = 10;
    let i = 0;
    let msg = "[⚜️] DANH SÁCH LỆNH [⚜️]\n●▬▬▬▬๑☣️๑▬▬▬▬●\n\n";
    for (var [name, value] of (commands)) {
        name += `
» Mô tả: ${value.config.description}
» Thời gian chờ: ${value.config.cooldowns}s
» Coder: ${value.config.credits}
» Quyền hạn: ${((value.config.hasPermssion == 0) ? `Người dùng` : (value.config.hasPermssion == 1) ? `Quản trị viên nhóm` : `Quản lí BOT`)}\n\n●▬▬▬▬๑🔱๑▬▬▬▬●\n`;
        commandsPush.push(name);
    }

    commandsPush.sort((a, b) => a.data - b.data);

    const first = pageView * page - pageView;
    i = first;
    const helpView = commandsPush.slice(first, first + pageView);

    for (let cmds of helpView)
        msg += `[⚜️] ${++i} [⚜️] ${cmds}\n`;
    const cmdsView = `
📝 Trang ${page}/${Math.ceil(commandsPush.length/pageView)}
✅ Hiện tại có ${commandsPush.length} lệnh có thể sử dụng
🚀 Gõ ${prefix}help <tên lệnh> để biết thêm chi tiết về lệnh đó
🍁 Dùng ${prefix}help all để xem tất cả\n\n●▬▬▬▬๑💛๑▬▬▬▬●\n\n[⚜️] TIME [⚜️]\n${thu} || ${gio}`;
    return axios.get('https://jrt-api.j-jrt-official.repl.co/vsbg').then(res => {
    let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
    let callback = function () {
        api.sendMessage({body: msg + cmdsView, attachment: fs.createReadStream(__dirname + `/cache/478.${ext}`)
        }, event.threadID, (err, info) => {
        fs.unlinkSync(__dirname + `/cache/478.${ext}`);
        if (autoUnsend == true) {
            setTimeout(() => { 
                return api.unsendMessage(info.messageID);
            }, delayUnsend * 30000);
        }
        else return; 
        }, event.messageID);
    }
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/478.${ext}`)).on("close", callback);
     })
};
return axios.get('https://jrt-api.j-jrt-official.repl.co/vsbg').then(res => {
    let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
    let callback = function () {
        api.sendMessage({body:`
╭────────╮\n ${command.config.name}\n╰────────╯

●▬▬▬▬๑۩۩๑▬▬▬▬●

» 📜Mô tả: ${command.config.description}
» 🧞Credit: ${command.config.credits}
» 📄Hướng dẫn cách dùng: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : "Chưa có hướng dẫn cụ thể"}
» 🌟Thuộc nhóm: ${command.config.commandCategory}
» ⏱Thời gian chờ: ${command.config.cooldowns}
» 👥Quyền hạn: ${((command.config.hasPermssion == 0) ? `Người dùng` : (command.config.hasPermssion == 1) ? `Quản trị viên nhóm` : `Quản trị viên BOT`)}
💥💢💥 Điều Hành Bởi JRT 💥💢💥

●▬▬▬▬๑⇩⇩๑▬▬▬▬●

[⚜️] TIME [⚜️]
${thu} || ${gio}`,
        attachment: fs.createReadStream(__dirname + `/cache/475.${ext}`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/475.${ext}`), event.messageID);
        }; request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/475.${ext}`)).on("close", callback);
     })
};
