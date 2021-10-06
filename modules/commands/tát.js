module.exports.config = {
    name: "tát",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Hungcatmoi (fix lại by CHIP)",
    description: "Tát người bạn tag",
    commandCategory: "Game",
    usages: "tát [tag người bạn cần Tát]",
    cooldowns: 5,
    dependencies: {
        "request": "",
        "fs-extra": ""
    }
};

module.exports.run = function({ api, event, args }) {
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
    var out = (msg) => api.sendMessage(msg, event.threadID, event.messageID);
    if (!args.join(" ")) return out("Bạn chưa nhập tin nhắn");
    else
        return request('https://nekos.life/api/v2/img/slap', (err, response, body) => {
            let picData = JSON.parse(body);
            var mention = Object.keys(event.mentions)[0];
            let getURL = picData.url;
            let ext = getURL.substring(getURL.lastIndexOf(".") + 1);
            let tag = event.mentions[mention].replace("@", "");
            let callback = function() {
                api.sendMessage({
                    body: tag + ", Tao tát vỡ ALO mày nè :) nhờn?",
                    mentions: [{
                        tag: tag,
                        id: Object.keys(event.mentions)[0]
                    }],
                    attachment: fs.createReadStream(__dirname + `/cache/1.${ext}`)
                }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/1.${ext}`), event.messageID);
            };
            request(getURL).pipe(fs.createWriteStream(__dirname + `/cache/1.${ext}`)).on("close", callback);
        });
}
