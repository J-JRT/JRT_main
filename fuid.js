module.exports.config = {
	name: "finduid",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "HungCho",
	description: "Lấy UID của link của Profile.",
	commandCategory: "System",
	usages: "",
	cooldowns: 1,
dependencies: {"fb-tools": ""}
}


module.exports.run = async({api, event, args}) => {
  var { threadID, messageID } = event;
  var tool = require("fb-tools");
  try {
  var id = await tool.findUid(args[0] || event.messageReply.body);
  api.sendMessage(id,event.threadID,event.messageID)  
  console.log(id)
}

catch(e){
    
    api.sendMessage("Người dùng không tồn tại !",event.threadID,event.messageID)
   }

}