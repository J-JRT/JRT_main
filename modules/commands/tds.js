module.exports.config = {
	name: "tds",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "HungCho",
	description: "",
	commandCategory: "Admin",
	usages: "Kiểm tra số xu traodoisub của bạn ?",
	cooldowns: 0,
};

module.exports.run = async function({ api, event, args, Currencies, utils,Users,Threads }) {
           let axios = require('axios')
           let { threadID, senderID, messageID } = event;
          
           if(args.length == 0) api.sendMessage("Thiếu token tds ?",threadID,messageID)
           else{
           let res = await axios.get(encodeURI(`https://traodoisub.com/api/?fields=profile&access_token=${args[0]}`));
           console.log(res.data)
           var i = res.data;
           var ii = i.data;
           var msg = `🎄Tên tài khoản: ${ii.user}\n🐧Xu: ${ii.xu}\r\n[!] Dữ liệu được lấy từ traodoisub !`
           api.sendMessage(msg,threadID,messageID)
          }
       }