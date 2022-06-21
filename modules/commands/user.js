module.exports.config = {
	name: "user"
	, version: "1.0.0"
	, hasPermssion: 3
	, credits: "ManhG"
	, description: "Cấm người dùng dành riêng cho QTV BOX chat"
	, commandCategory: "Nhóm"
	, usages: "[ID or text] hoặc tag@"
	, cooldowns: 5
}, module.exports.languages = {
	vi: {
		reason: "Lý do"
		, at: "vào lúc"
		, allCommand: "toàn bộ lệnh"
		, commandList: "những lệnh"
		, banSuccess: "[ Ban User ] Đã xử lý thành công yêu cầu cấm người dùng: %1"
		, banCommandSuccess: "[ banCommand User ] Đã xử lý thành công yêu cầu cấm lệnh đối với người dùng: %1"
		, errorReponse: "%1 Không thể hoàn tất công việc bạn yêu cầu"
		, IDNotFound: "%1 ID người dùng bạn nhập không tồn tại trong cơ sở dữ liệu"
		, existBan: "[ Ban User ] Người dùng %1 đã bị ban từ trước %2 %3"
		, missingCommandInput: "%1 Phần command cần cấm không được để trống!"
		, returnBan: "[ Ban User ] Hiện tại bạn đang yêu cầu cấm người dùng:\n- ID và tên người dùng cần cấm: %1%2\n\n❮ Reaction tin nhắn này để xác thực ❯"
		, returnBanCommand: "[ banCommand User ] Hiện tại bạn đang yêu cầu cấm sử dụng lệnh đối với người dùng:\n - ID và tên người dùng cần cấm: %1\n- Các lệnh cần cấm: %2\n\n❮ Reaction tin nhắn này để xác thực ❯"
		, returnResult: "Đây là kết quả phù hợp: \n"
		, returnNull: "Không tìm thấy kết quả dựa vào tìm kiếm của bạn!"
		, returnList: "[ User List ]\nHiện tại đang có %1 người dùng bị ban, dưới đây là %2 người dùng\n\n%3"
		, returnInfo: "[ Info User ] Đây là một sô thông tin về người dùng bạn cần tìm:\n- ID và tên của người dùng: %1n- Có bị ban?: %2 %3 %4\n- Bị ban lệnh?: %5"
	}
	, en: {
		reason: "Reason"
		, at: "At"
		, allCommand: "All commands"
		, commandList: "Commands"
		, banSuccess: "[ Ban User ] Banned user: %1"
		, banCommandSuccess: "[ banCommand User ] Banned command with user: %1"
		, errorReponse: "%1 Can't do what you request"
		, IDNotFound: "%1 ID you import doesn't exist in database"
		, existBan: "[ Ban User ] User %1 has been banned before %2 %3"
		, missingCommandInput: "%1 You have to import the command you want to ban!"
		, returnBan: "[ Ban User ] You are requesting to ban user:\n- User ID and name who you want to ban: %1%2\n\n❮ Reaction this message to complete ❯"
		, returnBanCommand: "[ banCommand User ] You are requesting to ban command with user:\n - User ID and name who you want to ban: %1\n- Commands: %2\n\n❮ Reaction this message to complete ❯"
		, returnResult: "This is your result: \n"
		, returnNull: "There is no result with your input!"
		, returnList: "[ User List ]There are %1 banned user, here are %2 user\n\n%3"
		, returnInfo: "[ Info User ] Here is some information about the user who you want to find:\n- User ID and name: %1n- Banned?: %2 %3 %4\n- Command banned?: %5"
	}
}, module.exports.handleReaction =
async ({
	event: n
	, api: e
	, Users: a
	, handleReaction: t
	, getText: s
}) => {
	if (parseInt(n.userID) !==
		parseInt(t.author))
		return;
	const r = require(
			"moment-timezone")
		, {
			threadID: o
		} = n
		, {
			messageID: i
			, type: d
			, targetID: m
			, reason: u
			, nameTarget: g
		} = t
		, c = r.tz(
			"Asia/Ho_Chi_minh")
		.format("HH:MM:ss L");
	if (global.client
		.handleReaction.splice(
			global.client
			.handleReaction
			.findIndex((n => n
				.messageID ==
				i)), 1),
		"ban" === d) try {
		let n = (await a
				.getData(m))
			.data || {};
		return n.banned = !
			0, n.reason =
			u || null, n
			.dateAdded = c,
			await a.setData(
				m, {
					data: n
				}), global
			.data.userBanned
			.set(m, {
				reason: n
					.reason
				, dateAdded: n
					.dateAdded
			}), e
			.sendMessage(s(
				"banSuccess",
				`${m} - ${g}`
				), o, (
				() => e
				.unsendMessage(
					i)))
	} catch {
		return e
			.sendMessage(s(
				"errorReponse",
				"[ Ban User ]"
				), o)
	}
}, module.exports.run = async ({
	event: n
	, api: e
	, args: a
	, Users: t
	, getText: s
}) => {
	const {
		threadID: r
		, messageID: o
	} = n;
	var i = String(a[0])
		, d = a.slice(2, a
			.length)
		.join(" ") || null;
	if (isNaN(i)) {
		const e = Object
			.keys(n
				.mentions);
		a = a.join(" "), i =
			String(e[0]),
			d = a.slice(a
				.indexOf(n
					.mentions[
						e[0]
						]) +
				(n.mentions[
						e[0]
						] ||
					"")
				.length + 1,
				a.length) ||
			null
	}
	if (!global.data
		.allUserID.includes(
			i)) return e
		.sendMessage(s(
			"IDNotFound",
			"[ Ban User ]"
			), r, o);
	if (global.data
		.userBanned.has(i)
		) {
		const {
			reason: n
			, dateAdded: a
		} = global.data
			.userBanned.get(
				i) || {};
		return e
			.sendMessage(s(
					"existBan",
					i, n ?
					`${s("reason")}: "${n}"` :
					"", a ?
					`${s("at")} ${a}` :
					""), r,
				o)
	}
	const m = global.data
		.userName.get(i) ||
		await t.getNameUser(
			i);
	return e.sendMessage(s(
		"returnBan",
		`${i} - ${m}`,
		d ?
		`\n- ${s("reason")}: ${d}` :
		""), r, ((e,
		a) => {
		global
			.client
			.handleReaction
			.push({
				type: "ban"
				, targetID: i
				, reason: d
				, nameTarget: m
				, name: this
					.config
					.name
				, messageID: a
					.messageID
				, author: n
					.senderID
			})
	}), o)
};
