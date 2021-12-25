module.exports.config = {
    name: "banner",
    version: "1.0.1",
    hasPermssion: 2,
    credits: "NTKhang, Bế Qua Mirai by DVB =))", 
    description: "Tạo ảnh bìa",
    commandCategory: "Tạo ảnh",
    usages: "<name> | <description> | <facebook> | <instagram> | <phone> | <location> | [<link ảnh> | hoặc reply hình ảnh]",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
};

module.exports.run = async function ({
    api,
    event,
    args,
}) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const qs = require("querystring");
    const content = args.join(" ").split("|").map(item => item = item.trim());
    const apikey = "ntkhang";
    const name = content[0],
        description = content[1],
        facebook = content[2],
        instagram = content[3],
        phone = content[4],
        location = content[5],
        avatarurl = event.messageReply ? ((event.messageReply.attachments.length > 0) ? event.messageReply.attachments[0].url : content[6]) : content[6];
    if (!avatarurl || !avatarurl.includes("http"))
        return api.sendMessage(`Vui lòng nhập link hình ảnh hợp lệ, sử dụng help banner2 để xem chi tiết cách sử dụng lệnh`, event.threadID, event.messageID);
    let params = {apikey, name, description, facebook, instagram, phone, location, avatarurl};
    for (let i in params)
        if (!params[i]) return message.SyntaxError();
    params = qs.stringify(params);
    api.sendMessage("Đang khởi tạo hình ảnh, vui lòng chờ đợi...", event.threadID, event.messageID);
    const pathsave = __dirname + `/cache/banner.png`;
    let imageBuffer;
    axios.get("https://goatbot.tk/taoanhdep/banner1?" + params, {
            responseType: "arraybuffer"
        })
        .then(data => {
            const imageBuffer = data.data;
            fs.writeFileSync(pathsave, Buffer.from(imageBuffer));
            api.sendMessage({body: `Banner của bạn đây!`, attachment: fs.createReadStream(pathsave)}, event.threadID, () => fs.unlinkSync(pathsave), event.messageID);})
        .catch(error => {
            let err;
            if (error.response) err = JSON.parse(error.response.data.toString());
            else err = error;
            return api.sendMessage(`Đã xảy ra lỗi ${err.error} ${err.message}`, event.threadID, event.messageID);
        })
};
