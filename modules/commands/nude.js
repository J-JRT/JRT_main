module.exports.config = {
 name: "nude",
 version: "1.0.1",
 hasPermssion: 0,
 credits: "JRT",
 description: "Random ảnh nude", 
 commandCategory: "NSFW", 
 usages: "nude", 
 cooldowns: 1, 
 
 };
   
module.exports.run = async ({ api, event, args }) => {
 const axios = require('axios');
 const request = require('request');
 const fs = require("fs");
 axios.get('https://4boxvn.com/api/nude').then(res => { 
 let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
 
 let callback = function () {
     api.sendMessage({
      body: `Ảnh nude của cậu đây ❤️`,
      attachment: fs.createReadStream(__dirname + `/cache/jrt.${ext}`)
     }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/jrt.${ext}`), event.messageID);
    };
    request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/jrt.${ext}`)).on("close", callback);
   })
}
