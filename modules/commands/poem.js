module.exports.config = {
    name: "poem",
    version: "1.0.5",
    hasPermssion: 0,
    credits: "ManhG",
    description: "bài thơ",
    commandCategory: "Horoscope",
    usages: "",
    cooldowns: 5
}, module.exports.run = async ({
    api: e,
    event: o
}) => {
    const s = require("axios");
    var a = (await s.get("https://le31.glitch.me/poem")).data.data;
    return console.log(a), e.sendMessage(` ★ == Bài thơ == ★ \n\n${a}  `, o.threadID, o.messageID)
};
