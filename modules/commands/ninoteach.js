module.exports.config = {
    name:"ninoteach",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "DungUwU",
    description: "Dạy nino cute :3",
    commandCategory: "General",
    usages: "câu muốn hỏi nino => câu muốn nino trả lời",
    cooldowns: 5
};

const axios = require('axios');

module.exports.run = async ({ api, event, args }) => {
    let { messageID, threadID } = event;
    let work = args.join(" ");
    let fw = work.indexOf(" => ");
    if (fw == -1) {
        api.sendMessage("sai format r nha ;-;",threadID,messageID);
    } else {
        let ask = work.slice(0, fw);
        let answer = work.slice(fw + 4, work.length);
        if (ask=="") {api.sendMessage("thiếu câu hỏi kìa ;-;",threadID,messageID)} else {
            if (!answer) {api.sendMessage("thiếu câu trả lời kìa ;-;",threadID,messageID)} else {
                    axios.get(encodeURI(`https://adreno-api.rootandroid.repl.co/nino/add/${ask}&&${answer}`)).then(res => {
                        if (res.data.reply == "Key với value có hết cmnr, thêm cái cc"){
                            api.sendMessage("câu hỏi, câu trả lời đã tồn tại r nha ;-;",threadID,messageID)} else {
                                if (res.data.reply == "Bị lỗi cc gì đó éo biết") {api.sendMessage('Lỗi không xác dịnh ;-;',threadID,messageID)} else {
                                    api.sendMessage("dạy thành công!",threadID,messageID);
                                }
                            }
                    })
            }
        }
    }
}