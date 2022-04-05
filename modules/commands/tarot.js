module.exports.config = {
	name: "tarot",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "D-Jukie",
	description: "xem các điều thú vị về bạn",
	commandCategory: "Thông tin",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule['axios'];  
const request = global.nodemodule["request"];	
try {
const res = await axios.get(`https://le31.glitch.me/tarot`);
var data = res.data.data;
return request(encodeURI(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=vi&dt=t&q=${data.interpretation}`), (err, response, body) => {
        if (err) return api.sendMessage("Đã có lỗi xảy ra!", event.threadID, event.messageID);
        var retrieve = JSON.parse(body);
        var text1 = '';
        retrieve[0].forEach(item => (item[0]) ? text1 += item[0] : '');
        var fromLang = (retrieve[2] === retrieve[8][0][0]) ? retrieve[2] : retrieve[8][0][0]
return request(encodeURI(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=vi&dt=t&q=${data.description}`), (err, response, body) => {
        if (err) return api.sendMessage("Đã có lỗi xảy ra!", event.threadID, event.messageID);
        var retrieve = JSON.parse(body);
        var text = '';
        retrieve[0].forEach(item => (item[0]) ? text += item[0] : '');
        var fromLang = (retrieve[2] === retrieve[8][0][0]) ? retrieve[2] : retrieve[8][0][0]
return api.sendMessage(`
❯ Name: ${data.name}
❯ Bộ: ${data.suite}
❯ Mô tả: ${text}
❯ Nội dung: ${text1}`, event.threadID, event.messageID)
})
})
} catch {
            return api.sendMessage('Đã xảy ra lỗi khi thực hiện yêu cầu của bạn!', event.threadID, event.messageID);
        }
}

