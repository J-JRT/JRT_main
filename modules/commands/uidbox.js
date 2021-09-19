const request = require('request');
const fs = require('fs')
module.exports.config = {
  name: "tid",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HungCho",
  description: "Kiểm tra thông tin nhs chat.",
  commandCategory: "Info",
  usages: "tir",
  cooldowns: 5,
  dependencies: ["request","fs"]
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
	let threadInfo = await api.getThreadInfo(event.threadID);
    
  return api.sendMessage(`${threadInfo.threadID}`, event.threadID);
}
