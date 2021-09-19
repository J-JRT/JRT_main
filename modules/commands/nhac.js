module.exports.config = {
    name: "nhạc",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "huy hoàng",
    description: "Khiến bot trả về file âm thanh của chị google thông qua văn bản",
    commandCategory: "media",
    usages: "nhạc [Lang] [Text]",
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
    return request(`https://cdn.fbsbx.com/v/t59.3654-21/185786887_219335139705471_5184881945458788018_n.mp4/audioclip-1621342585000-322014.mp4?_nc_cat=101&ccb=1-3&_nc_sid=7272a8&_nc_ohc=-73u9zvbqI8AX9KBd-t&_nc_ht=cdn.fbsbx.com&oh=06c44106ba8c5ae0900b9ce5719d79fd&oe=60A5AB64&dl=1`) .pipe(fs.createWriteStream(__dirname+'/cache/say.mp3')).on('close',() => api.sendMessage({body: "", attachment: fs.createReadStream(__dirname + "/cache/say.mp3")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/say.mp3")));
}