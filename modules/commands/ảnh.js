module.exports.config = {
    name: "ảnh",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "DuyVuong",
    description: "Kho Ảnh của vangbanlanhat",
    commandCategory: "nsfw",
    usages: "[girl/boy/meme/sexy/duckbo/jimmy/fox/cosplay/wibu]",
    cooldowns: 5
};

module.exports.run = async function({ api, event, args }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  const { threadID, messageID } = event;
  var type;
  switch(args[0]) {
    case "girl":
    case "gái":
    case "Girl": {
        type = "girl";
        break;
    }
    case "boy":
    case "trai":
    case "Boy": {
        type = "boy";
        break;
    }
    case "meme": {
        type = "meme";
        break;
    }
    case "sexy": {
        type = "sexy";
        break;
    }
    case "duckbo": {
        type = "duckbo";
        break;
    }
    case "jimmy": {
        type = "jimmy";
        break;
    }
    case "fox": {
        type = "fox";
        break;
    }
    case "cosplay": {
        type = "cosplay";
        break;
    }
    case "wibu": {
        type = "wibu";
        break;
    }
    default:
    return api.sendMessage(`Sai định dạng!\n${global.config.PREFIX}img [girl/boy/meme/sexy/duckbo/jimmy/fox/cosplay/wibu]`, threadID, messageID);
    break;
  }
axios.get(`https://api.vangbanlanhat.tk/image?type=${type}`).then(res => {
let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
    let callback = function () {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/${type}.${ext}`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/${type}.${ext}`), event.messageID);
                };
                request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/${type}.${ext}`)).on("close", callback);
            })
}