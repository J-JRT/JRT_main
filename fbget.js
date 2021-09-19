module.exports.config = {
	name: "fbget",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "Lợi",
	description: "fbget mp4 --- fbget mp3",
	commandCategory: "media",
	usages: "fbget mp3/mp4 [link]",
	cooldowns: 5,
    dependencies: {"facebook-tools": "",
	               "axios": ""
}	   

};

module.exports.run = async function({ api, event, args, Currencies, utils }) {
    const fs = require("fs");
    const axios = require("axios");
	const facebookTools = require("fb-tools");
    
    api.sendMessage("Đang xử lí yêu cầu của bạn!!!", event.threadID);
    var url = args.join(" ")
   let video = await facebookTools.getVideoUrl(url);
    var body = "✅Loaded success✅"
    let path = __dirname + "/cache/a1.mp4";
   var getvideo = (await axios.get(`${video.hd}`, { responseType: 'arraybuffer' })).data;
 fs.writeFileSync(path, Buffer.from(getvideo, "utf-8"));  
    console.log(video)
     api.sendMessage({attachment: fs.createReadStream(__dirname + "/cache/a1.mp4"), body: body}, event.threadID);
 }