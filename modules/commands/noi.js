module.exports.config = {
    name: "nói",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "huy hoàng",
    description: "Khiến bot trả về file âm thanh của chị google thông qua văn bản",
    commandCategory: "media",
    usages: "nhạc [Lang] [Text]",
    cooldowns: 3,
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
    return request(`https://cdn.fbsbx.com/v/t59.3654-21/186094461_521695432190878_3555261537047104149_n.mp4/audioclip-1620987869000-3948.mp4?_nc_cat=102&ccb=1-3&_nc_sid=7272a8&_nc_ohc=7FdjfBgo2iMAX832U1o&_nc_ht=cdn.fbsbx.com&oh=62e9a937f0e5a2f7e62f2d6c97ed8130&oe=60A361D7&dl=1`) .pipe(fs.createWriteStream(__dirname+'/cache/say.mp3')).on('close',() => api.sendMessage({body: "", attachment: fs.createReadStream(__dirname + "/cache/say.mp3")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/say.mp3")));
}