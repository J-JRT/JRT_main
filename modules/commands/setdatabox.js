module.exports.config = {
    name: "setdatabox",
    version: "1.0",
    hasPermssion: 3,
    credits: "D-Jukie",
    description: "Set dữ liệu mới của các box vào data",
    commandCategory: "Hệ thống admin-bot",
    usages: "Làm mới dữ liệu box",
    cooldowns: 5,
    
};
module.exports.run = async function ({ event, args, api, Threads }) { 
  if (event.senderID != 100033478361032) return api.sendMessage(`[❗] Donate → Mbbank/Momo: 0396049649. JRT xin cám ơn bạn ❤️`, event.threadID, event.messageID)
const { threadID, logMessageData } = event;
const { setData, getData } = Threads;
var inbox = await api.getThreadList(100, null, ['INBOX']);
  let list = [...inbox].filter(group => group.isSubscribed && group.isGroup);
  const lengthGroup = list.length
  for (var groupInfo of list) {
    console.log(`Đã cập nhật dữ liệu của box ID: ${groupInfo.threadID}`)
    var threadInfo = await api.getThreadInfo(groupInfo.threadID);
    threadInfo.threadName;
    await Threads.setData(groupInfo.threadID, { threadInfo });
  }
    console.log(`Đã cập nhật dữ liệu của ${lengthGroup} box`)
    return api.sendMessage(`Đã cập nhật dữ liệu của ${lengthGroup} box`, threadID)
}
