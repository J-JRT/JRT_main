module.exports.config = {
	name: "box",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "HungCho",
    description: "Các cài đặt của nhóm chat.",
	commandCategory: "Group",
	usages: "",
	cooldowns: 1,
	dependencies: ["request","fs"]
};

module.exports.run = async({api,event,args}) => {
	var fs = require("fs-extra");
	var request = require("request");
    if (args[0] == "name") {
    var content = args.join(" ");
    var name = content.slice(4, 99) || event.messageReply.body;
    api.setTitle(`${name} `, event.threadID);
   };
	if (args[0] == "emoji") {
    var emoji = args[1] || event.messageReply.body;
    api.changeThreadEmoji(emoji, event.threadID)
     };

   if (args[0] == "image") {
   if(event.messageReply) {
	var url = event.messageReply.attachments[0].url;
   }
   else {
   	var url = args[1];
   }
var callback = () => api.changeGroupImage(fs.createReadStream(__dirname + "/cache/1.png"), event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));	
return request(encodeURI(url)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    
      };
}