module.exports.config = {
    name: "thongbao",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "D-Jukie mod by JRT",
    description: "Thời gian",
    commandCategory: "Hệ thống admin-bot",
    cooldowns: 5
}
module.exports.handleEvent = async function({ api, event, args, Users,Threads }) {
  const chalk = require('chalk');
  const moment = require("moment-timezone");
  var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
 var allThread = global.data.allThreadID || []; 
 console.log(chalk.bold.hex("#00CDCD")(`Bây giờ là: ${timeNow}`))
  var seconds = moment.tz("Asia/Ho_Chi_Minh").format("ss");
  var timeRestart_1 = `15:00:${seconds}`
  var timeRestart_2 = `18:00:${seconds}`
  var timeRestart_3 = `21:00:${seconds}`
  var timeRestart_4 = `00:00:${seconds}`
  var timeRestart_5 = `03:00:${seconds}`
  var timeRestart_6 = `06:00:${seconds}`
  var timeRestart_7 = `09:00:${seconds}`
  //console.log(timeNowRestart)
  if ((timeNow == timeRestart_1 || timeNow == timeRestart_2 || timeNow == timeRestart_3|| timeNow == timeRestart_4|| timeNow == timeRestart_5|| timeNow == timeRestart_6 || timeNow == timeRestart_7) && seconds < 6 ) {
    for (const idThread of allThread) {
      api.sendMessage(`→ DỊCH VỤ MẠNG XÃ HỘI ←

[❗] FACEBOOK [❗]
- 1k like post = 10k vnd
- 1k follow = 5k vnd
- 1k follow page = 30k vnd
- 1k view video (bất kì) = 20k vnd
- 1k share profile (phải có nút like) = 700k vnd
- 1k member group facebook = 40k vnd
[❗] INSTAGRAM [❗]
- 1k like post = 30k vnd
- 1k follow = 40k vnd
[❗] TIKTOK [❗]
- 1k like (❤️) =  40k vnd
- 1k share = 30k vnd
- 1k follow = 60k vnd
- 1k view video = 10k vnd
[❗] YOUTUBE [❗]
- 1k like video = 80k vnd
- 1k sub youtube = 750k vnd
[❗] TWITTER [❗]
- 1k like post = 60k vnd
- 1k follow = 80k vnd

→ LƯU Ý ←
- Chỉ mua gói đã đề cập như trên (mệnh giá thay đổi sẽ báo trên tin tiếp theo)
- Chỉ giao dịch qua khi inbox Facebook or Zalo
- Có thể giao dịch qua các hình thức: ATM, Momo, Card (có chiết khấu sẽ báo khi mua)
- Số tài khoản và Link để giao dịch
+ Link Facebook: https://www.facebook.com/NHD.JRT.262
+ Zalo: 0396049649
+ MBBANK (ngân hàng quân đội): 0396049649 (Nguyễn Hải Đăng)
+ Momo: 0396049649 (Nguyễn Hải Đăng)
+ Link donate: http://donategiveme .tk/
=> Cám ơn các bạn đã sử dụng dịch vụ giá rẻ bên mình !!!! Xin cám ơn các bạn ❤️`,idThread, (error, info) => {
				if (error) cantSend.push(idThread);
			});
    }
    }
}
module. exports. run = async  ({ api, event, args }) => {
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
	let today = new Date();
  const res = await axios.get("https://api.jrt-official.repl.co/nude.php");
//lấy data trên web api
const data = res.data.data;
//tải ảnh xuống
let download = (await axios.get(data, {
			responseType: "stream"
		})).data;
						return api.sendMessage({ body: `[⚜️] Hôm này là: ${thu} || ${gio}`, attachment: download }, event.threadID, event.messageID);

	}
