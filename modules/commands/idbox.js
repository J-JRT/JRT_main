module.exports.config = {
  name: "idbox",
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
  return api.sendMessage(`【 ミ★тêи вσχ★彡 】\n${threadName}\n« ¡ɗ β❍✘ »\n${threadInfo.threadID}`, event.threadID, event.messageID);
}