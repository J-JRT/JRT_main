module.exports.config = {
 name: "rushia",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "JRT",
 description: "Random ảnh Rushia",
 commandCategory: "random-img",
 usages: "rushia",
 cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
 const axios = require('axios');
 const request = require('request');
 const fs = require("fs");
 axios.get('https://img-hololive-api.up.railway.app/rushia').then(res => {
 let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
 let callback = function () {
     api.sendMessage({
      attachment: fs.createReadStream(__dirname + `/cache/rushia.${ext}`)
     }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/rushia.${ext}`), event.messageID);
    };
    request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/rushia.${ext}`)).on("close", callback);
   })
}