module.exports.config = {
 name: "coco",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "JRT",
 description: "Random ảnh pekora",
 commandCategory: "random-img",
 usages: "coco",
 cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
 const axios = require('axios');
 const request = require('request');
 const fs = require("fs");
 axios.get('https://img-hololive-api.up.railway.app/coco').then(res => {
 let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
 let callback = function () {
					api.sendMessage({
						body: `Ảnh anime ngực tooooooooo >,<`,
      attachment: fs.createReadStream(__dirname + `/cache/coco.${ext}`)
     }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/coco.${ext}`), event.messageID);
    };
    request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/coco.${ext}`)).on("close", callback);
   })
}