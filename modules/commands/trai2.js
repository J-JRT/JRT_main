module.exports.config = {
	name: "trai2",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Thanh dz",
	description: "Random ảnh Trai  :))",
	commandCategory: "random-img",
	usages: "trai2",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://api-teamvanminh.cf/trai.php').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/trai2.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/trai2.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/trai2.${ext}`)).on("close", callback);
			})
}