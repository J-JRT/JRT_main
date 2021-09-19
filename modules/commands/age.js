module.exports.config = {
    name: "age",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "DuyVuong",
    description: "máy tính tuổi cho bạn",
    commandCategory: "game",
    cooldowns: 5
};

module.exports.run = async function({ event, api, Users, args }) {
let axios = require('axios')
let { threadID, senderID, messageID } = event;
var cc = args.join(" ");
if(args.length == 0)  api.sendMessage("Sai Format\nVí dụ: 19/01/2004 => 19/01/2300",threadID,messageID)
else {
    let res = await axios.get(encodeURI(`https://le31.glitch.me/age?q=${cc}`));
    console.log(res.data.data)
   return api.sendMessage(`==== Máy tính tuổi ====\n${res.data.data}`,threadID,messageID);
}
}