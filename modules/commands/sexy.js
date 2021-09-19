module.exports.config = {
  name: "sexy",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "VĐT&NTH với sự Sp của DũngUwU",
  description: "Random ảnh sexy có phí",
  commandCategory: "Hình ảnh",
  usages: "sexy",
  cooldowns: 3
};

module.exports.run = async ({ api, event, Currencies }) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
    axios.get('http://api.vangbanlanhat.tk/image?type=sexy').then(res => {
    var callback = function () {
          api.sendMessage({
            attachment: fs.createReadStream(__dirname + '/cache/trai.jpg')
          }, event.threadID, () => fs.unlinkSync(__dirname + '/cache/trai.jpg'), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + '/cache/trai.jpg')).on("close", callback).then(Currencies.setData(event.senderID, options = {money: money - 1000}));
      })
  } else return api.sendMessage("Bạn cần 1000 đô để xem ảnh ?",event.threadID,event.messageID);
}
