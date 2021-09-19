const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "đá",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "huy hoàng và hoàng",
  description: "Đá người Bạn Muốn",
  commandCategory: "Hình ảnh",
  usages: "đá",
  cooldowns: 5,
  dependencies: {"request": "","fs": "","axios": ""}
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
        const request = require('request')
                const fs = require('fs')
                  var mention = Object.keys(event.mentions)[0];
let tag = event.mentions[mention].replace("@", "");
        var link = [
          "https://i.imgur.com/jXOwoHx.gif",
             ];
   var callback = () => api.sendMessage({body: `${tag} , Địt Mẹ Mày Ngu Nè` , mentions: [{
          tag: tag,
          id: Object.keys(event.mentions)[0]
        }],
  attachment: fs.createReadStream(__dirname + "/cache/da.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/da.jpg"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/da.jpg")).on("close",() => callback());
   };