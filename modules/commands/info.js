const request = require('request');
const fs = require('fs')
module.exports.config = {
  name: "info",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "BerVer",
  description: "Kiểm tra thông tin ngơời dùng",
  commandCategory: "general",
  usages: "info",
  cooldowns: 5
};

module.exports.run = async({ api, event, args, client, Users, __GLOBAL,Currencies}) => {
	if (!args.join("")) {
	var mentions = event.senderID
    console.log(mentions)
	let data = await api.getUserInfo(mentions);
    let url = data[mentions].profileUrl;
    let b = data[mentions].isFriend == false ? "Chưa kết bạn với FB Bot😶." : data[mentions].isFriend == true ? "Đã kết bạn với FB Bot😚." : "Đéo";
    let sn = data[mentions].vanity;
    let q = data[mentions].searchTokens;
    let k = (await Currencies.getData(mentions)).money;
    let i = data[mentions].isVerified;
    let name = await data[mentions].name;
    var sex = await data[mentions].gender;
    var gender = sex == 2 ? "Nam" : sex == 1 ? "Nữ" : "Trần Đức Bo";
    var content = args.join(" ");
    var callback = () => api.sendMessage({
      body: `👀 Tên: ${name}\n🐒 UID: ${mentions}\n👤 Link FB: ${url}\n😘 Giới tính: ${gender}\n🐶 Username: ${sn}\n🥺 Tình trạng: ${b}\n🤑 Số tiền: ${k} đô. `,
      attachment: fs.createReadStream(__dirname + "/cache/19.png")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/19.png"), event.messageID);
    return request(encodeURI(`https://graph.facebook.com/${mentions}/picture?width=512&height=512&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`)).pipe(fs.createWriteStream(__dirname+'/cache/19.png')).on('close',() => callback());
	}
	else if (args.join().indexOf('@') !== -1) {
	var mentions = Object.keys(event.mentions)
	let data = await api.getUserInfo(mentions);
    let url = data[mentions].profileUrl;
    let b = data[mentions].isFriend == false ? "Chưa kết bạn với FB Bot😶." : data[mentions].isFriend == true ? "Đã kết bạn với FB Bot😚." : "Đéo";
    let sn = data[mentions].vanity;
    let q = data[mentions].searchTokens;
    let k = (await Currencies.getData(mentions)).money;
    let i = data[mentions].isVerified;
    let name = await data[mentions].name;
    var sex = await data[mentions].gender;
    var gender = sex == 2 ? "Nam" : sex == 1 ? "Nữ" : "Trần Đức Bo";
    var content = args.join(" ");
    var callback = () => api.sendMessage({
      body: `👀 Tên: ${name}\n🐒 UID: ${mentions}\n👤 Link FB: ${url}\n😘 Giới tính: ${gender}\n🐶 Username: ${sn}\n🥺 Tình trạng: ${b}\n🤑 Số tiền: ${k} đô. `,
      attachment: fs.createReadStream(__dirname + "/cache/19.png")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/19.png"), event.messageID);
    return request(encodeURI(`https://graph.facebook.com/${mentions}/picture?width=512&height=512&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`)).pipe(fs.createWriteStream(__dirname+'/cache/19.png')).on('close',() => callback());
}
}