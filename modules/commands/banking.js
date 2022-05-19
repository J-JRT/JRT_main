module.exports.config = {
	name: "banking",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "D-Jukie",
	description: "Gửi tiền vào ngân hàng Mirai Bank có lãi suất",
	commandCategory: "Tài chính",
	usages: "bank",
	cooldowns: 5
};

module.exports.onLoad = async () => {
	const { existsSync, writeFileSync, mkdirSync } = require("fs-extra")
	const { join } = require("path")
	const axios = require("axios");
	const dir = __dirname + `/banking`;
	if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
    const pathData = join(__dirname + '/banking/banking.json');
    if (!existsSync(pathData)) return writeFileSync(pathData, "[]", "utf-8"); 
	return;
}
module.exports. run = async function({ api, event, args, models, Users, Threads, Currencies, permssion }) {
  const { threadID, messageID, senderID } = event;
  const { readFileSync, writeFileSync } = require("fs-extra")
  const { join } = require("path")
  const pathData = join(__dirname + '/banking/banking.json');
  const user = require('./banking/banking.json');
  const timeIM = 60*20
  const laisuat = 0.05
  const moneyInput = parseInt(args[1])
  if(args[0] == '-r' || args[0] == 'register') {
    if (!user.find(i => i.senderID == senderID)) {
      var add = { senderID: senderID,  money: 0 }
      user.push(add);
      writeFileSync(pathData, JSON.stringify(user, null, 2));
      return api.sendMessage(`[ SUCCESS ] » Bạn đã đăng kí thành công, gửi ít nhất 1000000$ để có lãi💰`, threadID, messageID)
    }
  else return api.sendMessage(`[ WARNING ] » Bạn đã có tài khoản trên hệ thống Mirai Bank🏦`, threadID, messageID)
  }
  if(args[0] == 'check' || args[0] == 'coins') {
  if (!user.find(i => i.senderID == senderID)) return api.sendMessage('[ WARNING ] » Người dùng chưa đăng kí sử dụng banking, banking register để đăng kí🏦', threadID, messageID)
    else { 
      var userData = user.find(i => i.senderID == senderID);
      return api.sendMessage(`[ SUCCESS ] » Số tiền bạn đang gửi Mirai Bank là: ${userData.money}$\n💷 Lãi: +${laisuat}% trong ${timeIM/60} phút`, threadID, messageID)
    }
  } 
  if(args[0] == 'gửi' || args[0] == 'send') {
  if (!args[1] || isNaN(args[1]) || parseInt(args[1]) < 50) return api.sendMessage("[ WARNING ] » Số tiền cần gửi phải là 1 con số và lớn hơn 1000000$💰", threadID, messageID);
  if (!user.find(i => i.senderID == senderID)) {
    return api.sendMessage('[ WARNING ] » Người dùng chưa đăng kí sử dụng banking, banking register để đăng kí💰', threadID, messageID)
  }
  else { 
      let balance = (await Currencies.getData(senderID)).money;
      if(balance < moneyInput) return api.sendMessage(`[ WARNING ] » Số dư không đủ ${moneyInput} để gửi vào Mirai Bank💰`,  threadID, messageID)
      var userData = user.find(i => i.senderID == senderID);
      var money = userData.money;
      userData.money = parseInt(money) + parseInt(moneyInput)
      writeFileSync(pathData, JSON.stringify(user, null, 2));
      await Currencies.decreaseMoney(senderID, parseInt(moneyInput));
      return api.sendMessage(`[ SUCCESS ] » Bạn đã gửi ${moneyInput}$ vào Mirai Bank\n💷 Lãi: +${laisuat}% trong ${timeIM/60} phút`, threadID, messageID)
    }
  }
  if(args[0] == 'rút' || args[0] == 'lấy') { 
    if (!args[1] || isNaN(args[1]) || parseInt(args[1]) < 1000000) return api.sendMessage("[ WARNING ] » Số tiền cần rút phải là 1 con số và lớn hơn 1000000$", threadID, messageID);
    if (!user.find(i => i.senderID == senderID)) {
      return api.sendMessage('[ WARNING ] » Người dùng chưa đăng kí sử dụng banking, banking register để đăng kí', threadID, messageID)
    }
  else {  
    var userData = user.find(i => i.senderID == senderID); 
    var money = userData.money;
    if(parseInt(money) < parseInt(moneyInput)) return api.sendMessage('[ WARNING ] » Số dư của bạn không đủ để thực hiện giao dịch này!', threadID, messageID)
      else {
        await await Currencies.increaseMoney(senderID, parseInt(moneyInput));
        userData.money = parseInt(money) - parseInt(moneyInput)
        writeFileSync(pathData, JSON.stringify(user, null, 2));
        return api.sendMessage(`[ SUCCESS ] » Rút thành công ${parseInt(moneyInput)}$, số dư còn lại là ${userData.money}$`, threadID, messageID)
      }
    }
  }
  else return api.sendMessage (`=====🏦Mirai Bank🏦=====\n\n[-r/register] - Đăng kí gửi tiền tại Mirai Bank💹\n[check/coins] - Xem số tiền trong Mirai Bank💳\n[gửi/send] - Gửi tiền vào Mirai Bank💷\n[rút] - Rút tiền từ Mirai Bank💰\n\n💲 Lãi suất hiện tại: +${laisuat}% trong ${timeIM/60} phút`, threadID, messageID)
}
