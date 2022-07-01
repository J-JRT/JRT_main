const fs = require("fs");
module.exports.config = {
	name: "Luật bot",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Bảo", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Yêu bot",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Luật bot")==0 || (event.body.indexOf("luật bot")==0 || (event.body.indexOf("Luật bot đâu")==0)) {
		var msg = {
				body: "🧸 𝐑𝐔𝐋𝐄 𝐎𝐍 𝐔𝐒𝐄 𝐎𝐅 𝐁𝐎𝐓 🧸\n\n🐥 Dùng .rankup 2 lần để tắt thông báo rankup. ✅\n🐥 Dùng .resend 2 lần để tắt lặp lại tin nhắn đã gỡ. ✅\n⚠️ Các thành viên lưu ý: Chửi + Spam + Thêm + Kick Bot đều sẽ bị ban. ⚠️\n\n✨ Thứ nhất ✨\n🐰 Do sự thiếu hiểu biết của thành viên trong nhóm hoặc do cả quản trị viên cũng đéo có ý thức nên chả ai quản được để thành ra bot bị ăn block tin nhắn hoặc có thể pay acc bot :))\n✨ Thứ hai ✨\n🐰 Do một số thành phần ngu si, thiếu hiểu biết, không biết cách dùng bot mà đi chửi bot ngu hay bot dỡm =)) Thì tự đi tạo bot hay kiếm bot khác sịn mà dùng :))\n✨ Thứ ba ✨\n🐰 Tự ý thêm bot vào các group rồi kick bot hay thậm chí là spam bot, phá bot thì hãm lồn vừa thôi nhé :)))\n✨ Thứ tư ✨\n🐰 Nhiều thành phần có 1,2 lệnh cách 5s spam một lần máy cũng không chịu nổi._. ( lúc đấy mà bị ban rồi đừng có réo lên mà chửi ).\n✨ Thứ năm ✨\n🐰 Có 1 số thành phần bảo dùng máy vippro no 1 ip12prx samsung abcxyz gì đó xong bảo bot vào nhắn tin lag hết cả máy thì tao nghĩ nên đi thay máy mới hoặc đập cmn đi .-.\n✨ Thứ sáu ✨\n🐰 Admin sẽ vào kiểm tra đột xuất nếu box nào dưới 10 người và không có ảnh hoặc tên thì auto out box.\n✨ Thứ bảy ✨\n🐰 Một box chỉ sài 1 bot thôi nhé nhiều bot dẫn đến loãng box và ảnh hưởng đến các bot phát hiện có 2 bot hoặc bla bla thì out + ban.\n✨ Thứ tám ✨\n🐥 Và lần cuối ai sài được bot thì sài không sài thì không ép đừng kiểu thêm vô box rồi chê đủ kiểu bảo bot dởm xong chửi đòi war với bot .-. ✅\n\n⚜️ Nếu phát hiện các hành vi vi phạm những điều trên vui lòng dùng .callad hoặc liên hệ trực tiếp với admin để báo cáo.✅\nThis bot make by diemthuy🐰 Thanks you for using❤️ Xin cảm ơn đã đọc UwU.",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}