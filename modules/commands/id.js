module.exports.config = {
  name: "id",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JRT",
  description: "Kiểm tra thông tin nhs chat.",
  commandCategory: "Nhóm",
  usages: "idbox",
  cooldowns: 5,
  dependencies: []
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
	let threadInfo = await api.getThreadInfo(event.threadID);
  let threadName = threadInfo.threadName;
  const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
  return api.sendMessage(`🎭Hi ${name}\n📝Tên box: ${threadName}\n💎ID BOX: ${threadInfo.threadID}\n🏵️Uid của bạn: ${event.senderID}`, event.threadID, event.messageID);
}