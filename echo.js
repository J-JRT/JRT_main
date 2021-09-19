module.exports.config = {
  name: "echo",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "BerVer",
  description: "Điều khiển bot nói lại văn bản bạn viết",
  commandCategory: "general",
  usages: "echo [văn bản hoặc nội dung]",
  cooldowns: 5,
  dependencies: []
};

module.exports.run = function({
  api,
  event,
  args,
  client,
  __GLOBAL
}) {}