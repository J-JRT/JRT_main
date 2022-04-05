module.exports.config = {
	name: 'count',
	version: '1.0.0',
	hasPermssion: 0,
	credits: 'D-Jukie mod by JRT',
	description: 'Đếm mọi thứ trong server bot',
	commandCategory: 'Nhóm',
	usages: '[alluser/allthread/admin/adminbot/members/mess/mymess/fast/ping/uptime/time/tarot/cadao]',
	cooldowns: 5
};
module.exports.languages = {
    "vi": {
        "listAdmin": '📝 Danh sách toàn bộ người điều hành bot: \n\n%1'
    },
    "en": {
        "listAdmin": '[Admin] Admin list: \n\n%1'
    }
}

module.exports.run = async ({ api, event, args, Currencies, Threads, Users, getText }) => {
	const { threadID, messageID, senderID} = event;
	if (args[0] == "alluser" || args[0] == "user" || args[0] == "users" || args[0] == "allusers") {

		return api.sendMessage(`[⚜️] Tổng users: ${global.data.allUserID.length}`, threadID);
	}
	if (args[0] == "allthread" || args[0] == "thread" || args[0] == "group" || args[0] == "threads" || args[0] == "allthreads") {
		return api.sendMessage(`[⚜️] Tổng Nhóm: ${global.data.allThreadID.length}`, threadID);
	}
	if (args[0] == "admin" || args[0] == "ad" || args[0] == "qtv") {
		const { participantIDs, adminIDs } = (await Threads.getData(event.threadID)).threadInfo;
		let qtv = adminIDs.length;
		return api.sendMessage(`[⚜️] Số quản trị viên của nhóm: ${qtv}`, threadID);
	}
	if (args[0] == "cadao") {
		const axios = global.nodemodule["axios"];
		const res = await axios.get(`https://jrt-api.j-jrt-official.repl.co/cadao`);
		var cadao = res.data.data;
		return api.sendMessage(`[⚜️] ℭɑ ɗɑ❍ ҩ¡ệζ ղɑლ [⚜️]\n${cadao}`, event.threadID, event.messageID)
	}
	if (args[0] == "member" || args[0] == "mem" || args[0] == "membox" || args[0] == "members") {
		const { participantIDs, adminIDs } = (await Threads.getData(event.threadID)).threadInfo;
		let members = (event.participantIDs).length;
		return api.sendMessage(`[⚜️] Số thành viên của nhóm: ${members}`, threadID);
	}
	if (args[0] == "mess" || args[0] == "inbox" || args[0] == "ib") {
		var threadInfo = await api.getThreadInfo(event.threadID);
		let sl = threadInfo.messageCount;
		return api.sendMessage(`[⚜️] Số tin nhắn của nhóm: ${sl}`, threadID);
	}
	if (args[0] == "mymess" || args[0] == "myinbox" || args[0] == "myib") {
		const countMess = await Currencies.getData(senderID);
		return api.sendMessage(`[⚜️] Số tin nhắn của bạn: ${countMess.exp}`, threadID);
	}
	if (args[0] == "fast") {
		const fast = global.nodemodule["fast-speedtest-api"];
		const speedTest = new fast({
			token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
			verbose: false,
			timeout: 10000,
			https: true,
			urlCount: 5,
			bufferSize: 8,
			unit: fast.UNITS.Mbps
		});
		const resault = await speedTest.getSpeed();
		return api.sendMessage(`[⚜️] Fast: ${resault}Mbs`, threadID);
	}
	if (args[0] == "time") {
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
  var gio2 = moment.tz("Europe/Lodon").format("HH:mm:ss || D/MM/YYYY");
  var gio1 = moment.tz("America/Brasília").format("HH:mm:ss || D/MM/YYYY");
  var gio3 = moment.tz("Asia/Seoul").format("HH:mm:ss || D/MM/YYYY");
  var gio4 = moment.tz("Asia/Tokyo").format("HH:mm:ss || D/MM/YYYY");
  var gio5 = moment.tz("America/New_York").format("HH:mm:ss || D/MM/YYYY");
  var gio6 = moment.tz("Asia/Kuala_Lumpur").format("HH:mm:ss || D/MM/YYYY");var gio1 = moment.tz("America/New_York").format("HH:mm:ss || D/MM/YYYY");
  var gio7 = moment.tz("Europe/Paris").format("HH:mm:ss || D/MM/YYYY");
	let today = new Date();
		return api.sendMessage(`[⚜️] Hôm này là: ${thu} || ${gio}\n[⚜️] Các múi giờ khác trên thế giới:\n-🇬🇧 London: ${gio2}\n-🇺🇸 New York: ${gio5}\n-🇰🇷 Seoul: ${gio3}\n-🇯🇵Tokyo: ${gio4}\n-🇧🇷 Brasília: ${gio1}\n-🇲🇾 Kuala Lumpur: ${gio6}\n-🇫🇷 Paris:${gio7}`, event.threadID, event.messageID)
	}

	if (args[0] == "ping") {
		const timeStart = Date.now();
		return api.sendMessage(`[⚜️] Ping: ${Date.now() - timeStart}ms`, threadID);
	}
	if (args[0] == "uptime" || args[0] == "upt") {
	const time = process.uptime(),
		  hours = Math.floor(time / (60 * 60)),
		  minutes = Math.floor((time % (60 * 60)) / 60),
		  seconds = Math.floor(time % 60);
		  return api.sendMessage(`[⚜️] Uptime: ${hours}:${minutes}:${seconds}`, threadID)
	}
	if (args[0] == "adminbot" || args[0] == "admbot" || args[0] == "adbot") {
			const { configPath } = global.client;
			const { ADMINBOT } = global.config;
			var config = require(configPath);
		    const listAdmin = ADMINBOT || config.ADMINBOT || [];
            var msg = [];

            for (const idAdmin of listAdmin) {
                if (parseInt(idAdmin)) {
                    const name = (await Users.getData(idAdmin)).name 
                    msg.push(` - ${name}\n- Link: https://facebook.com/${idAdmin}`);
                }
            }
            return api.sendMessage(getText("listAdmin", msg.join("\n\n")), threadID, messageID);
	}
    if (args[0] == "ndhbot" || args[0] == "ndh") {
			const { configPath } = global.client;
			const { NDH } = global.config;
			var config = require(configPath);
		    const listAdmin = NDH || config.NDH || [];
            var msg = [];

            for (const idAdmin of listAdmin) {
                if (parseInt(idAdmin)) {
                    const name = (await Users.getData(idAdmin)).name 
                    msg.push(`- ${name}\n- Link: https://facebook.com/${idAdmin}`);
                }
            }
            return api.sendMessage(getText("listAdmin", msg.join("\n\n")), threadID, messageID);
	}
      if (args[0] == "love" || args[0] =="ngontinh") {
		const axios = global.nodemodule["axios"];
		const res = await axios.get(`https://jrt-api.j-jrt-official.repl.co/love`);
		var love = res.data.data;
		return api.sendMessage(`[⚜️] 𝓝𝓰𝓸̂𝓷 𝓣𝓲̀𝓷𝓱 [⚜️]\n${love}`, event.threadID, event.messageID)
	}
        if (args[0] == "thayboi" || args[0] =="boi") {
		const axios = global.nodemodule["axios"];
		const res = await axios.get(`https://jrt-api.j-jrt-official.repl.co/thayboi`);
		var thayboi = res.data.data;
		return api.sendMessage(`[⚜️] 𝓣𝓱𝓪̂̀𝔂 𝓑𝓸́𝓲 [⚜️]\n${thayboi}`, event.threadID, event.messageID)
	}
          if (args[0] == "joker") {
		const axios = global.nodemodule["axios"];
		const res = await axios.get(`https://jrt-api.j-jrt-official.repl.co/joker`);
		var joker = res.data.data;
		return api.sendMessage(`[⚜️] 𝓒𝓪̂𝓾 𝓷𝓸́𝓲 𝓬𝓾̉𝓪 𝓙𝓸𝓴𝓮𝓻 [⚜️]\n${joker}`, event.threadID, event.messageID)
	}

	else 
		return api.sendMessage("[⚜️] Bạn vui lòng nhập các tag [⚜️]\n- alluser\n- allthread\n- admin\n- adminbot\n- members\n- mess\n- mymess\n- fast\n- ping\n- uptime\n- time\n- cadao\n- love\n- thayboi\n- joker", threadID, messageID)

}