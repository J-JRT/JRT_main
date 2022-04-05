module.exports.config = {
  name: "refresh",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JRT",
  description: "Làm mới dữ liệu thành viên nhóm",
  commandCategory: "Nhóm",
  cooldowns: 5,
};

module.exports.run = async function ({ api, event, Threads }) {
  const { threadID, messageID } = event;
  const threadInfo = await api.getThreadInfo(threadID);
  await Threads.setData(threadID, { name: threadInfo.name, threadInfo });
  global.data.threadInfo.set(threadID, threadInfo);
  return api.sendMessage(`[⚜️] Đã làm mới box và thành viên thành công!!!`, threadID, messageID);
}