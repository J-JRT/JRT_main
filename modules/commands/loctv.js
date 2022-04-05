const fs = require('fs');
const moment = require('moment-timezone');
module.exports.config = {
	name: "locmem", // Tên lệnh, được sử dụng trong việc gọi lệnh
	version: "2.6.2", // phiên bản của module này
	hasPermssion: 1, // Quyền hạn sử dụng, với 0 là toàn bộ thành viên, 1 là quản trị viên trở lên, 2 là admin/owner
	credits: "TruongMini", // Công nhận module sở hữu là ai
	description: "Lọc tương tác dưới 1 tin nhắn trong 1 tuần", // Thông tin chi tiết về lệnh
	commandCategory: "Nhóm", // Thuộc vào nhóm nào: system, other, game-sp, game-mp, random-img, edit-img, media, economy, ...
	usages: "[toDay, yesterDay, weekday]", // Cách sử dụng lệnh
	cooldowns: 5, // Thời gian một người có thể lặp lại lệnh
};

const monthToMSObj = {
	1: 31 * 24 * 60 * 60 * 1000,
	2: 28 * 24 * 60 * 60 * 1000,
	3: 31 * 24 * 60 * 60 * 1000,
	4: 30 * 24 * 60 * 60 * 1000,
	5: 31 * 24 * 60 * 60 * 1000,
	6: 30 * 24 * 60 * 60 * 1000,
	7: 31 * 24 * 60 * 60 * 1000,
	8: 31 * 24 * 60 * 60 * 1000,
	9: 30 * 24 * 60 * 60 * 1000,
	10: 31 * 24 * 60 * 60 * 1000,
	11: 30 * 24 * 60 * 60 * 1000,
	12: 31 * 24 * 60 * 60 * 1000
}


//FUNCTION HOẠT ĐỘNG NHƯ CÁI TÊN CỦA NÓ
const checkTime = (time) => new Promise((resolve) => {
	time.forEach((e, i) => time[i] = parseInt(String(e).trim()));
	const getDayFromMonth = (month) => (month == 0) ? 0 : (month == 2) ? (time[2] % 4 == 0) ? 29 : 28 : ([1, 3, 5, 7, 8, 10, 12].includes(month)) ? 31 : 30;
	yr = time[2] - 1970;
	yearToMS = (yr) * 365 * 24 * 60 * 60 * 1000;
	yearToMS += ((yr - 2) / 4).toFixed(0) * 24 * 60 * 60 * 1000;
	monthToMS = 0;
	for (let i = 1; i < time[1]; i++) monthToMS += monthToMSObj[i];
	if (time[2] % 4 == 0) monthToMS += 24 * 60 * 60 * 1000;
	dayToMS = time[0] * 24 * 60 * 60 * 1000;
	hourToMS = time[3] * 60 * 60 * 1000;
	minuteToMS = time[4] * 60 * 1000;
	secondToMS = time[5] * 1000;
	oneDayToMS = 24 * 60 * 60 * 1000;
	timeMs = yearToMS + monthToMS + dayToMS + hourToMS + minuteToMS + secondToMS - oneDayToMS;
	resolve(timeMs);
});
module.exports.run = async ({ api, event, args, Threads }) => {
    const { threadID, messageID, senderID } = event;
	const path = __dirname + '/cache/checkttDay.json';
	if(!fs.existsSync(path)) fs.writeFileSync(path, JSON.stringify({}));
	let data = JSON.parse(fs.readFileSync(path));
    var timeVN = moment().tz('Asia/Ho_Chi_Minh').format('DD_MM_YYYY_HH_mm_ss');
	var time = timeVN.split("_");
	var time1 = await checkTime(time);
	var time2 = await new Date(time1)
	var time3 = time2.getDay();
	if(!args[0]) return api.sendMessage("[⚜] JRT Bot xin được phục vụ bạn", threadID);
    if(isNaN(parseInt(args[0]))) return api.sendMessage("[⚜]  Bạn phải nhập một số", threadID);
    let input = parseInt(args[0]);
	let count = 0, count1 = 0;
	const { adminIDs } = await api.getThreadInfo(threadID);
	if(!(adminIDs.map(e => e.id).some(e => e == api.getCurrentUserID()))) return api.sendMessage("[⚜]  Bot không phải qtv", threadID);
	let Array = [];
    for(let i in data[threadID][time3].user) {
		Array.push({ user: i, weekday: data[threadID][time3].user[i].weekday });
    }
	let msg = "";
	for(let i of Array) {
		try {
			if(i.weekday <= input && i.user != api.getCurrentUserID()) {
				await api.removeUserFromGroup(i.user, threadID);
				count++;
			}
		} catch(e) { count1++ }
	}
	if(count == 0) return api.sendMessage("[⚜]  Không có ai để xóa", threadID);
	if(count != 0) msg += `[⚜]  Đã xoá ${count} người dùng ít hơn ${input} tin nhắn khỏi nhóm.\n`;
	if(count1 != 0) msg += `[⚜]  Không thể xóa ${count1} người dùng`;
	return api.sendMessage(msg, threadID);
}