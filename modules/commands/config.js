module.exports.config = {
	name: "config",
	version: "1.0.3",
	hasPermssion: 3,
	credits: "Thiệu Trung Kiên",
	description: "Command Prompt",
	commandCategory: "Hệ thống admin-bot",
	cooldowns: 5,
	dependencies: {
		axios: ""
	}
}, module.exports.languages = {
	vi: {
		returnResult: "Đây là kết quả phù hợp: \n",
		returnNull: "Không tìm thấy kết quả dựa vào tìm kiếm của bạn!"
	},
	en: {
		returnResult: "This is your result: \n",
		returnNull: "There is no result with your input!"
	}
}, module.exports.handleEvent = async function({
	api: e,
	event: n,
	args: a,
	Users: s,
	Threads: t
}) {
	const r = require("moment-timezone");
	var o = r.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss"),
		h = global.config.ADMINBOT,
		i = r.tz("Asia/Ho_Chi_Minh").format("ss");
	if (o == `12:00:${i}` && i < 6)
		for (let n of h) setTimeout((() => e.sendMessage(`〉Bây giờ là: ${o}\n[❗] Bot sẽ tiến hành khởi động lại !`, n, (() => process.exit(1)))), 1e3)
}, module.exports.run = async function({
	api: e,
	event: n,
	getText: a,
	args: s
}) {
	if (!s[0]) return e.sendMessage("🛠 | Đây là toàn bộ cài đặt của bot | 🛠\n=== Quản Lý Cài Đặt ===\n[1] Prefix.\n[2] Tên bot.\n[3] Danh sách Admin.\n[4] Ngôn ngữ.\n[5] Tự khởi động lại.\n=== Quản Lý Hoạt Động ===\n[6] Kiểm tra cập nhật.\n[7] Lấy danh sách người dùng bị cấm.\n[8] Lấy danh sách nhóm bị cấm.\n[9] Gửi thông báo tới tất cả các nhóm.\n[10]. Tìm kiếm UID thông qua tên người dùng.\n[11]. Tìm kiếm TID box qua tên box\n[12]. Đổi emoji box\n[13]. Đổi tên box\n[14]. Xem info box\n-> Để chọn, hãy reply tin nhắn này với số <-", n.threadID, ((e, a) => {
		global.client.handleReply.push({
			name: this.config.name,
			messageID: a.messageID,
			author: n.senderID,
			type: "choose"
		})
	}), n.messageID)
}, module.exports.handleReply = async function({
	api: e,
	event: n,
	client: a,
	handleReply: s,
	Currencies: t,
	Users: r,
	Threads: o
}) {
	const {
		userName: h
	} = global.data, {
		writeFileSync: i,
		readFileSync: g
	} = global.nodemodule["fs-extra"], d = [];
	switch (l = 1, s.type) {
		case "choose":
			switch (n.body) {
				case "1":
					return e.sendMessage("Prefix của bot là : " + global.config.PREFIX, n.threadID, n.messageID);
				case "2":
					return e.sendMessage("Tên của bot là : " + global.config.BOTNAME, n.threadID, n.messageID);
				case "3": {
					const a = ADMINBOT || config.ADMINBOT || [];
					var m = [];
					for (const e of a)
						if (parseInt(e)) {
							const n = h.get(e) || await r.getNameUser(e);
							m.push(`${n} - ${e}`)
						} return e.sendMessage(`[⚜️] Admin [⚜️] Danh sách toàn bộ người điều hành bot: \n\n${m.join("\n")}`, n.threadID, n.messageID)
				}
				case "4":
					if ("vi" == global.config.language) return e.sendMessage("Ngôn ngữ: Tiếng Việt", n.threadID, n.messageID);
					"en" == global.config.language && e.sendMessage("Language : English", n.threadID, n.messageID);
					break;
				case "5":
					return e.sendMessage("[⚜️] Bot sẽ khởi động lại vào lúc 12h", n.threadID, n.messageID);
				case "6":
					return e.sendMessage("[⚜️] Hiện tại bot đang ở phiên bản : " + global.config.version, n.threadID, n.messageID);
				case "7": {
					const a = global.data.userBanned.keys();
					for (const e of a) {
						const n = global.data.userName.get(e) || await r.getNameUser(e);
						d.push(`${l++}. ${n} \n[⚜️] UID: ${e}`)
					}
					return e.sendMessage(`[⚜️] Hiện tại đang có ${d.length} người dùng bị ban\n\n${d.join("\n")}\n\n`, n.threadID)
				}
				case "8": {
					const a = global.data.threadBanned.keys();
					for (const s of a) return nameT = await global.data.threadInfo.get(s).threadName || "Tên không tồn tại", d.push(`${l++}. ${nameT}\n[⚜️] TID: ${s}`), e.sendMessage(`[⚜️] Hiện tại đang có ${d.length} nhóm bị ban\n\n${d.join("\n")}\n\n`, n.threadID)
				}
				break;
			case "9":
				return e.sendMessage("[⚜️] Reply tin nhắn này để nhập tin nhắn muốn gửi đến các nhóm", n.threadID, ((e, a) => {
					global.client.handleReply.push({
						name: this.config.name,
						messageID: a.messageID,
						author: n.senderID,
						type: "sendnoti"
					})
				}), n.messageID);
			case "10":
				return e.sendMessage("[⚜️] Reply tin nhắn này để nhập tên người dùng", n.threadID, ((e, a) => {
					global.client.handleReply.push({
						name: this.config.name,
						messageID: a.messageID,
						author: n.senderID,
						type: "getuid"
					})
				}), n.messageID);
			case "11":
				return e.sendMessage("[⚜️] Reply tin nhắn này để nhập tên box", n.threadID, ((e, a) => {
					global.client.handleReply.push({
						name: this.config.name,
						messageID: a.messageID,
						author: n.senderID,
						type: "namebox"
					})
				}), n.messageID);
			case "12":
				return e.sendMessage("[⚜️] Reply tin nhắn này để nhập emoji cần đổi", n.threadID, ((e, a) => {
					global.client.handleReply.push({
						name: this.config.name,
						messageID: a.messageID,
						author: n.senderID,
						type: "emojibox"
					})
				}), n.messageID);
			case "13":
				return e.sendMessage("[⚜️] Reply tin nhắn này để nhập tên box cần đổi", n.threadID, ((e, a) => {
					global.client.handleReply.push({
						name: this.config.name,
						messageID: a.messageID,
						author: n.senderID,
						type: "namebox"
					})
				}), n.messageID);
			case "14": {
				require("request");
				let a = await e.getThreadInfo(n.threadID);
				a.participantIDs.length;
				let s = a.participantIDs.length;
				var c = [],
					u = [],
					I = [];
				for (let e in a.userInfo) {
					var D = a.userInfo[e].gender,
						b = a.userInfo[e].name;
					"MALE" == D ? c.push(e + D) : "FEMALE" == D ? u.push(D) : I.push(b)
				}
				var p = c.length,
					y = u.length;
				let t = a.adminIDs.length,
					r = a.messageCount,
					o = (a.nicknames, a.emoji),
					h = a.threadName,
					i = a.threadID,
					g = a.approvalMode;
				var f = 0 == g ? "tắt" : 1 == g ? "bật" : "Kh";
				e.sendMessage(`✨Tên: ${h}\n🤖 ID Box: ${i}\n👀 Phê duyệt: ${f}\n🧠 Emoji: ${o}\n👉 Thông tin: gồm ${s} thành viên\n👦Nam : ${p} thành viên\n👩‍🦰Nữ: ${y} thành viên\nVới ${t} quản trị viên\n🕵️‍♀️ Tổng số tin nhắn: ${r} tin.\n`, n.threadID)
			}
			}
			break;
		case "sendnoti": {
			var $ = global.data.allThreadID || [];
			let a = await r.getNameUser(n.senderID);
			var M = 1,
				T = [];
			for (const s of $) isNaN(parseInt(s)) || s == n.threadID || (e.sendMessage(`[⚜️] Thông báo từ admin ${a} \n\n` + n.body, s, ((e, n) => {
				e && T.push(s)
			})), M++, await new Promise((e => setTimeout(e, 500))));
			return e.sendMessage(`[⚜️] Gửi thành công tới : ${M} nhóm\n\n[⚜️] Thất bại ${T.length} nhóm`, n.threadID, n.messageID)
		}
		case "getuid":
			e.getUserID(`${n.body}`, ((a, s) => {
				for (var t in s) m += `Tên : ${s[t].name}\nUID : ${s[t].userID}\n\n`;
				return e.sendMessage(m, n.threadID)
			}));
			break;
		case "gettidbox":
			try {
				const a = n.body || "",
					s = (await o.getAll(["threadID", "threadInfo"])).filter((e => !!e.threadInfo));
				var x = [],
					v = "",
					N = 0;
				s.forEach((e => {
					(e.threadInfo.threadName || "").toLowerCase().includes(a.toLowerCase()) && x.push({
						name: e.threadInfo.threadName,
						id: e.threadID
					})
				})), x.forEach((e => v += `\n${N+=1}. ${e.name} - ${e.id}`)), x.length > 0 ? e.sendMessage(`[⚜️] Kết quả của tìm kiếm : ${v}`, n.threadID) : e.sendMessage("[⚜️] Không tìm thấy", n.threadID, n.messageID)
			} catch (a) {
				return e.sendMessage(a, n.threadID)
			}
			break;
		case "namebox":
			try {
				return e.setTitle(`${n.body}`, n.threadID, n.messageID), e.sendMessage(`[⚜️] Đã đổi tên box thành ${n.body}`, n.threadID)
			} catch (a) {
				return e.sendMessage("Đã xảy ra lỗi", n.threadID)
			}
			break;
		case "emojibox":
			try {
				e.changeThreadEmoji(n.body, n.threadID, (() => e.sendMessage(`[⚜️] Bot đã đổi thành công Emoji thành: ${n.body}`, n.threadID, n.messageID)))
			} catch (a) {
				e.sendMessage("[⚜️] Đã xảy ra lỗi", n.threadID)
			}
	}
};
