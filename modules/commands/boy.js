module.exports.config = {
	name: "boy",
	version: "1.1.1",
	hasPermssion: 0,
	credits: "JRT",
	description: "Random ảnh trai",
	commandCategory: "random-img",
	usages: "boy",
	cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
		axios.get('https://apimyjrt.jrt-official.repl.co/trai.php').then(res => {
		let callback = function () {
					api.sendMessage({
						body : ``,
						attachment: fs.createReadStream(__dirname + '/cache/boy1.jpg')
					}, event.threadID, () => fs.unlinkSync(__dirname + '/cache/boy1.jpg'), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + '/cache/boy1.jpg')).on("close", callback);
			})
}
