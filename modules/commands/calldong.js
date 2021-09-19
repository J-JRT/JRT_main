module.exports.config = {
        name: "calldong",
        version: "0.0.1",
        hasPermssion: 0,
        credits: "HungCho",
        description: "Kiểm tra số tiền của bản thân hoặc người được tag",
        commandCategory: "Báo Lỗi Về Bot",
        usages: "baka",
        cooldowns: 5,
        info: [
                {
                        key: 'Tag',
                        prompt: 'Để trống hoặc tag một người nào đó, có thể tag nhiều n$                        type: 'Văn Bản',
                        example: '@Mirai-chan'
                }
        ]
};

module.exports.run = async function({ api, event, args, Currencies, utils, Users,__GLOB$
  var content = args.join(" ")
  let name = (await api.getUserInfo(event.senderID))[event.senderID].name;
  let url = (await api.getUserInfo(event.senderID))[event.senderID].profileUrl;
 const moment = require("moment");
var time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
 if (!content) api.sendMessage("Bạn chưa nhập tin nhắn !", event.threadID, event.messag$
  else api.sendMessage(`💦Bạn: ${name} đã gửi lời !\n❄️URL: ${url}\n🐧Thời Gian: ${time}$
}