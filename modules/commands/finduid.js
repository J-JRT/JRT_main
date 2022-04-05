module.exports.config = {
  name: "finduid",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HungCho",
  description: "Lấy UID của link của Profile.",
  commandCategory: "Công cụ",
  usages: "finduid + link fb",
  cooldowns: 1,
  dependencies: {
    "fb-downloads":""
  }
}

module.exports.run = async ({ api, event, args }) => {
  var { threadID, messageID } = event;
  var tool = global.nodemodule["fb-downloads"];
  
  try {
    var id = await tool.findUid(args[0] || event.messageReply.body);
    return api.sendMessage(id, event.threadID, event.messageID)
    console.log(id)
  }
  catch (e) {
    return api.sendMessage("Người dùng không tồn tại!", event.threadID, event.messageID)
  }
}