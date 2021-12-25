const API = "https://api-ttk.herokuapp.com/banner/crossfire?text="

module.exports.config = {
    name: "bannercf",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "DVB", 
    description: "Tạo ảnh bìa",
    commandCategory: "Tạo ảnh",
    usages: "TEXT",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
};

module.exports.run = async function ({ api, event, args,}) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const qs = require("querystring");
    tukhoa = args.join(" ");
    (event.type == "message_reply") ? tukhoa = event.messageReply.attachments[0].url: tukhoa = args.join(" ");
    const pathsave = __dirname + `/cache/banner.png`;
    let imageBuffer;
    api.sendMessage("Đang khởi tạo hình ảnh, vui lòng chờ đợi...", event.threadID, event.messageID);
    axios.get(`${API}${encodeURI(tukhoa)}`, {responseType: "arraybuffer"}) .then(data => {const imageBuffer = data.data;
    fs.writeFileSync(pathsave, Buffer.from(imageBuffer));
    api.sendMessage({body: `Banner của bạn đây!`, attachment: fs.createReadStream(pathsave)}, event.threadID, () => fs.unlinkSync(pathsave), event.messageID);}).catch(error => {

          
            let err;
            if (error.response) err = JSON.parse(error.response.data.toString());
            else err = error;
            return api.sendMessage(`Đã xảy ra lỗi ${err.error} ${err.message}`, event.threadID, event.messageID);
        })
};
