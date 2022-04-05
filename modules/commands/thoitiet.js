module.exports.config = {
    name: "thoitiet",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Xem thông tin thời tiết tại khu vực",
    commandCategory: "Tin tức",
    usages: "[Location]",
    cooldowns: 5
};
module.exports.run = async function ({ api, event, args, utils  })  {
const axios = global.nodemodule['axios'];  
const request = global.nodemodule["request"];   
const location = args.join(" ");
if (!location) return api.sendMessage('Vui lòng nhập 1 địa điểm', event.threadID, event.messageID)
try {
const res = await axios.get(`https://api.popcat.xyz/weather?q=${location}`);
const data = res.data[0]
const stt = data

console.log(stt)
return api.sendMessage(`
🌅 Địa điểm: ${stt.location.name}
🌡 Nhiệt độ: ${stt.current.temperature}°C
☁️ Tình trạng: ${stt.current.skytext}
💦 Độ ẩm: ${stt.current.humidity}%
💨 Tốc độ gió: ${stt.current.windspeed}
⏱️ Update: ${stt.current.date}`, event.threadID, event.messageID)
} catch {
            return api.sendMessage('Không tìm thấy địa điểm này!', event.threadID, event.messageID);
        }
}