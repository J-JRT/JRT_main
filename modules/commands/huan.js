module.exports.config = {
    name: "huan",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Hoàng 🥀",
    description: "Khiến bot trả về file âm thanh của chị google thông qua văn bản",
    commandCategory: "media",
    usages: "huấn [Lang] [Text]",
    cooldowns: 30,
    info: [
        {
            key: "Lang",
            prompt: "Ngôn ngữ bạn muốn bot trả kết quả về, mặc định để trống là Tiếng Việt, có 4 ngôn ngữ 'ru, en, ja, vi'",
            type: 'Text',
            example: 'vi'
        },
        {
            key: "Text",
            prompt: "Văn bản bạn cần bot trả kết quả về thanh giọng nói, lưu ý độ dài dưới 100 từ!",
            type: 'Text',
            example: 'Mirai-Chan xin chào cả nhà'
        }
    ]
};

module.exports.run = function({ api, event, args }) {
    const request = require("request");
    const fs = require("fs-extra");
    var content = (event.type == "message_reply") ? event.messageReply.body : args.join(" ");
    var languageToSay = (["ru","en","ko","ja"].some(item => content.indexOf(item) == 0)) ? content.slice(0, content.indexOf(" ")) : 'vi';
    var msg = (languageToSay != 'vi') ? content.slice(3, content.length) : content;
    return request(`https://vietup.net/files/d8b1166952c3d54f0bba354d6784a6f9/c3d5968d455c61b8928b0a99c0d2ca18/3%20Th%E1%BB%A9%20%C4%90ang%20Hot%20Tr%C3%AAn%20MXH%20.mp3`) .pipe(fs.createWriteStream(__dirname+'/cache/say.mp3')).on('close',() => api.sendMessage({body: "", attachment: fs.createReadStream(__dirname + "/cache/say.mp3")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/say.mp3")));
}