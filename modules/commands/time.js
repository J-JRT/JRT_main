module.exports.config = {
 name: "time",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "JRT",
 description: "xem giờ Việt Nam",
 commandCategory: "Time",
 usages: "",
 cooldowns: 5
};

module.exports.run = async ({ api, event,args, Users }) => {
const axios = global.nodemodule["axios"];
const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)

const res = await axios.get(`https://api.vangbanlanhat.tk/other?type=calendar`);
var hour = res.data.data.time.hour;
var minute = res.data.data.time.minute;
var second = res.data.data.time.second;
var day = res.data.data.solar.day;
var month = res.data.data.solar.month;
var year = res.data.data.solar.year;
var day1 = res.data.data.lunar.day;
var month1 = res.data.data.lunar.month;
var year1 = res.data.data.lunar.year;
const request = require('request');
 axios.get('https://www.yuuwaifurandom.gq').then(res => {
 let ext = res.data.success.substring(res.data.success.lastIndexOf(".") + 1);
 let callback = function () {
   api.sendMessage({body: `💟Chào bạn ${name}\n🎐Chúc bạn một ngày tốt lành:\n🌈Hôm nay là:\n📆Dương lịch: ${day}/${month}/${year}\n📅Âm lịch: ${day1}/${month1}/${year1}\n⏰Bây giờ là: ${hour}:${minute}:${second}`,
      attachment: fs.createReadStream(__dirname + `/cache/waifu.${ext}`)
     }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/waifu.${ext}`), event.messageID);
    };
    request(res.data.success).pipe(fs.createWriteStream(__dirname + `/cache/waifu.${ext}`)).on("close", callback);
   })
}


