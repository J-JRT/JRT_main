module.exports.config = {
	name: "\n",
	version: "1.0.5",
	hasPermssion: 0,
	credits: "JRT",
	description: "Chỉ là prefix thôi~~",
	commandCategory: "Công cụ",
	usages: "prefix",
	cooldowns: 0
};

module.exports.run = async ({ api, event }) => {
const axios = require('axios');
    const request = require('request');
    const fs = require("fs");
    const res = await axios.get("https://jrt-api.j-jrt-official.repl.co/love");
    var love = res.data.data;
  const req = await axios.get("https://jrt-api.j-jrt-official.repl.co/bancobiet");
    var bancobiet = req.data.data;
  
    axios.get('https://api-jrt.j-jrt-official.repl.co/naughty.php').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function() {
					api.sendMessage({body: `[⚜️] Bạn có biết [⚜️]\n${bancobiet}\n[⚜️] Thính [⚜️]\n${love}`,
						attachment: fs.createReadStream(__dirname + `/cache/anh.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/anh.${ext}`)).on("close", callback);
			})
}