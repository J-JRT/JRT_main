module.exports.config = { 	
	name: "outall", 	
	version: "1.0.0",
 	hasPermssion: 2, 	
	credits: "VInhdz", 	
	description: "out all box", 	
	commandCategory: "Admin", 	
	usages: "sendnoti [Text]", 	
	cooldowns: 5, 	
};
	module.exports.run = async ({ api, event, args }) => { 	
	return api.getThreadList(100, null, ["INBOX"], (err, list) => { 		if (err) throw err; 		
	list.forEach(item => (item.isGroup == true && item.threadID != event.threadID) ? 
	api.removeUserFromGroup(api.getCurrentUserID(), item.threadID) : ''); 		
	api.sendMessage(' Đã out all box thành công', event.threadID); 	
}); 
}