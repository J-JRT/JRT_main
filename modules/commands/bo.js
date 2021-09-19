module.exports.config = {
	name: "bo",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Thanh dz",
	description: "Random ảnh đức bo gây buồn nôn nhất Việt Nam :))",
	commandCategory: "random-img",
	usages: "bo",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://api.berver.tech/duckbo').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/duckbo.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/duckbo.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/duckbo.${ext}`)).on("close", callback);
			})
}