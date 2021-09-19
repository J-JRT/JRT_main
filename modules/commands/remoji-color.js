module.exports.config = {
	name: "random",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "HungCho",
    description: "",
	commandCategory: "Media",
	usages: "",
	cooldowns: 1,
	dependencies: ["request","fs"],
	envConfig: {
		"TENOR": "73YIAOY3ACT1"
	}
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
	var fs = require("fs-extra");
	var request = require("request");
	var { threadID, messageID } = event
	 if (args.length == 0) return api.sendMessage(`Bạn có thể dùng:\n/random emoji\n/random color
`, event.threadID, event.messageID);
  

	if (args[0] == "emoji") {
			var emoji = ['😐', '❤️', '🤣', '🐶', '😊', '😉', '🤢', '😅', '👌', '👿', '👀', '🦋',];
			return api.changeThreadEmoji(emoji[Math.floor(Math.random() * emoji.length)], event.threadID, (err) => (err) ? api.sendMessage(getText('error'), event.threadID, event.messageID) : '');
		 }
	if (args[0] == "color") {
 var color = ['196241301102133', '169463077092846', '2442142322678320', '234137870477637', '980963458735625', '175615189761153', '2136751179887052', '2058653964378557', '2129984390566328', '174636906462322', '1928399724138152', '417639218648241', '930060997172551', '164535220883264', '370940413392601', '205488546921017', '809305022860427'];
      return api.changeThreadColor(color[Math.floor(Math.random() * color.length)], event.threadID, (err) => (err) ? api.sendMessage(getText('error'), event.threadID, event.messageID) : '');
 
 }
}