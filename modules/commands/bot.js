module.exports.config = {
	name: "bot",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Mirai - JRT",
	description: "Kiểm tra thời gian bot đã online",
	commandCategory: "Thông tin",
	cooldowns: 5,
	dependencies: {
		"pidusage": "",
		"fast-speedtest-api": ""
	}
};

function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}

module.exports.run = async ({ api, event,args, Users, getText }) => {
	const { threadID, messageID } = event;
const { ADMINBOT } = global.config;
  const { NDH } = global.config;
    const { userName } = global.data;
	const axios = global.nodemodule["axios"];
	const fast = global.nodemodule["fast-speedtest-api"];
const { commands } = global.client;
const { events } = global.client;
	const speedTest = new fast({
			token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
			verbose: false,
			timeout: 10000,
			https: true,
			urlCount: 5,
			bufferSize: 8,
			unit: fast.UNITS.Mbps
		});
	const ketqua = await speedTest.getSpeed();
  const request = require('request');
	const res = await axios.get(`https://jrt-api.jrt-official.repl.co/love`);
var love = res.data.data;
  const req = await axios.get(`https://jrt-api.jrt-official.repl.co/cadao`);
var cadao = req.data.data;
  const jrt = await axios.get(`https://jrt-api.jrt-official.repl.co/thayboi`);
var thayboi = jrt.data.data;
  const rep = await axios.get(`https://jrt-api.jrt-official.repl.co/joker`);
var joker = rep.data.data;
	const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
  const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
  
  const pidusage = await global.nodemodule["pidusage"](process.pid);
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
   var i = 1
        var msg = [];
	const listAdmin = ADMINBOT || config.ADMINBOT ||  [];
            var msg = [];
            for (const idAdmin of listAdmin) {
                if (parseInt(idAdmin)) {
                  const name = (await Users.getData(idAdmin)).name
                    msg.push(`${i++}. ${name}\n[⚜️] Link: fb.me/${idAdmin}`);
                }
            }
          var i = 1
        var msg1 = [];
         const listNDH = NDH || config.NDH ||  [];
            var msg1 = [];
            for (const idNDH of listNDH) {
                if (parseInt(idNDH)) {
                  const name1 = (await Users.getData(idNDH)).name
                    msg1.push(`${i++}. ${name1}\n[🔱] Link: fb.me/${idNDH}`);
                }
            }
   const namebot = config.BOTNAME
 axios.get('https://apimyjrt.jrt-official.repl.co/nobra.php').then(res => {
    let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
 let callback = function () {
     api.sendMessage({body: `[🔱] MiraiBot JRT&ROSIE [🔱]\n\n≻───── •⚜️• ─────≺\n\n🍁 Chào cậu: ${name}\n🔰 Tên Bot: ${namebot}\n\n≻───── •❤️• ─────≺\n\n[⚜️] ADMINBOT [⚜️]\n»============«\n\n${msg.join("\n")}\n\n————————🔱————————\n\n[⚜️] SUPPORTBOT [⚜️]\n»============«\n\n${msg1.join("\n\n")}\n\n≻───── •☣️• ─────≺\n\n🗓️ Hôm này là: ${thu} || ${gio}\n🐳 Bot của JRT đã hoạt động được: ${hours} giờ ${minutes} phút ${seconds} giây.\n💥 Prefix: ${global.config.PREFIX}\n🌹 Version: 1.2.15\n🏩 Số nhóm: ${global.data.allThreadID.length}\n📝 Số người dùng: ${global.data.allUserID.length}\n🌺 Số lệnh: ${commands.size}\n✅ Events: ${events.size}\n📈 Cpu đang sử dụng: ${pidusage.cpu.toFixed(1)}\n⚠️ Ram đang sử dụng: ${byte2mb(pidusage.memory)}\n⚜️ Ping: ${Date.now() - timeStart}ms\n💹 Tốc độ mạng : ${ketqua} Mbs\n\n≻───── •🔱• ─────≺\n\n[🔱] Thính:\n${love}\n[🔱] 𝐂𝒂 𝒅𝒂𝒐 𝒗𝒊ệ𝒕 𝒏𝒂𝒎:\n${cadao}\n[🔱] Bạn có biết:\n${joker}\n[🔱] Thầy bói said:\n${thayboi}`, attachment: fs.createReadStream(__dirname + `/cache/anime.${ext}`)
     }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anime.${ext}`), event.messageID);
    };
    request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/anime.${ext}`)).on("close", callback);
   })
}
