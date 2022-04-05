module.exports.config = {
	name: "meow",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "DVB x Sen thiểu năng convert 1",
	description: "",
	commandCategory: "Game",
	usages: "",
	cooldowns: 5
};

const request = require("request"),
           fs = require("fs");
module.exports.run = function({ api, event, args, getText }) {
  console.log(args[0])
        if (!args[0]) return api.sendMessage('======meow======\n\n>>get\n>>gettext\n>>gif\n>>giftext',event.threadID,event.messageID);
        let url = "";
        let ext = "";
        let arg = args;
        if(arg[0] =="get") { url = "https://cataas.com/cat", ext = "jpg" } else if(arg[0] =="gettext") {
          if(!arg[1]) {
            return api.sendMessage('Missing text',event.threadID,event.messageID);
          } else { url = `https://cataas.com/cat/says/${arg[1]}`, ext = "jpg" }
        } else if(arg[0] =='gif') { url = "https://cataas.com/cat/gif", ext = "gif" } else if(arg[0] =="giftext") {
          if(!arg[1]) {
            return api.sendMessage('Missing text',threadID,messageID);
          } else { url = `https://cataas.com/cat/gif/says/${arg[1]}`, ext = "gif" }
        } else return api.sendMessage("Sai cú pháp", event.threadID, event.messageID);
        let callback = function () {
					api.sendMessage({
						body: `meow`,
						attachment: fs.createReadStream(__dirname + `/cache/meow.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/meow.${ext}`), event.messageID);
				};
        return request(encodeURI(url)).pipe(fs.createWriteStream(__dirname + `/cache/meow.${ext}`)).on("close", callback);
};
