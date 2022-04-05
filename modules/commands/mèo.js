module.exports.config = {
	name: "mèo",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Thanh Dz",
	description: "Xem Neko",
	commandCategory: "random-img",
	usages: "",
	cooldowns: 1,
	
	};
			
module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('http://aws.random.cat/meow').then(res => {
	let ext = res.data.file.substring(res.data.file.lastIndexOf(".") + 1);
	
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/meow.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/meow.${ext}`), event.messageID);
				};
				request(res.data.file).pipe(fs.createWriteStream(__dirname + `/cache/meow.${ext}`)).on("close", callback);
			})
}