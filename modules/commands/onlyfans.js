module.exports.config = {
	name: "onlyfans",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Lê Anh Trường",
	description: "onlyfans",
	commandCategory: "VIDEO",
	usages: "onlyfans",
	cooldowns: 1,
	
	};
			
module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://api.leanhtruong.com/img/onlyfans/index.php').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/leanhtruongggggg.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/leanhtruongggggg.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/leanhtruongggggg.${ext}`)).on("close", callback);
			})
}
