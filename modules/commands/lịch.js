module.exports.config = {
 name: "lịch",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "Jukie~",
 description: "xem lịch",
 commandCategory: "Tiện ích",
 usages: "",
 cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];

const res = await axios.get(`https://api.vangbanlanhat.tk/other?type=calendar`);
var day = res.data.data.solar.day;
var month = res.data.data.solar.month;
var year = res.data.data.solar.year;
var day1 = res.data.data.lunar.day;
var month1 = res.data.data.lunar.month;
var year1 = res.data.data.lunar.year;

return api.sendMessage(`⚡️Dương lịch\n${day}/${month}/${year}\n⚡️Âm lịch\n${day1}/${month1}/${year1}`, event.threadID, event.messageID)
}