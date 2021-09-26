module.exports.config = {
	name: "cony",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "⚡D-Jukie",
	description: "Tỉ lệ có Ny của bạn trong năm nay",
	commandCategory: "Giải trí", 
	usages: "", 
	cooldowns: 0,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {

    var tle = Math.floor(Math.random() * 101);
    var name = (await Users.getData(event.senderID)).name
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.pinimg.com/originals/1a/26/e5/1a26e51bfd0aa963e0a48618175a9836.gif",
"https://i.pinimg.com/originals/5f/8f/35/5f8f35f1bbd00e354a0a071d06fcb2ce.gif",
"https://i.pinimg.com/originals/e8/10/c0/e810c0bb9b2b38e611b75426b733f9b5.gif",
"https://i.pinimg.com/originals/ca/3c/c9/ca3cc93647057e7ccce951ce0bd777f5.gif"  ];
  var callback = () => api.sendMessage({body:`⚡Chúc mừng ${name}\n⚡Nếu bạn tỏ tình crush thì ${tle}% là bạn sẽ có người yêu :>`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
