const fs = require("fs");
module.exports.config = {
name: "haha",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "VanHung",
  description: "haha",
  commandCategory: "Không cần dấu lệnh",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.event = function({ api, event }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("Haha")==0 || (event.body.indexOf("haha")==0)) {
    var msg = {
        body: "Cười ẻ kkkk",
        attachment: fs.createReadStream(__dirname + `/noprefix/tka.gif`)
      }
      return api.sendMessage(msg, threadID, messageID);
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

}