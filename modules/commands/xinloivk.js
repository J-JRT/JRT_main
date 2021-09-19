module.exports.config = {
    name: "xinloivo",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "NTKhang",
    description: "Xin lỗi vợ yêu 😢🥺",
    commandCategory: "group",
    usages: "warns [key]",
    cooldowns: 5,
dependencies: {
  "fs-extra": "",
  "axios": ""
}
}
    module.exports.run = function ({}){};
    
    module.exports.handleEvent = async function({ api, args, Users, event, Currencies, Threads, client
}) {
  
  var fs = global.nodemodule["fs-extra"];
  var axios = global.nodemodule["axios"];
  let {body} = event;
   body = body.toLowerCase();
  var indexOf = function(value) {return body.indexOf(value) != -1};
   
  if(indexOf("xin lỗi vk iu") || indexOf("xin lỗi vk yêu") || indexOf("xin lỗi vợ yêu") || indexOf("xin lỗi vợ iu")) {
  var mention = Object.keys(event.mentions)[0];
  if(!mention) return api.sendMessage("Tag người bạn muốn xin lỗi", event.threadID);
  var emoji = ["♥️","❤️","💛","💚","💙","💜","🖤","💖","💝","💓","💘","💍","🎁","💋","💎","💠","🌈","🌍","🌕","☀️","💑","💞","💗"];

  var random_emoji = emoji[Math.floor(Math.random() * emoji.length)];

  var love = ((await axios.get("http://ntkhang.xtgem.com/bikini.json")).data).love;
  var linklove = love[Math.floor(Math.random() * love.length)];
  
  var getlove = (await axios.get(linklove, {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + "/cache/love.gif", Buffer.from(getlove, "utf-8"));
  let Avatar = (await axios.get( `https://graph.facebook.com/${mention}/picture?width=720&height=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data;
    fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8") );
  let Avatar2 = (await axios.get( `https://graph.facebook.com/${event.senderID}/picture?width=720&height=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data;
    fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar2, "utf-8") );
    
  var imglove = [];
      imglove.push(fs.createReadStream(__dirname + "/cache/love.gif"));
      imglove.push(fs.createReadStream(__dirname + "/cache/avt.png"));
      imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
  
  let dt = await api.getUserInfo(event.senderID);
  let data = await api.getUserInfo(mention);
  let name_1 = dt[event.senderID].name;
  let name_2 = data[parseInt(mention)].name;
  
  api.changeNickname( `Chồng yêu của ${name_2} ${random_emoji}`, event.threadID, parseInt(event.senderID) );
  api.changeNickname( `Vợ yêu của ${name_1} ${random_emoji}`, event.threadID, parseInt(mention) );
      
  var arraytag = [];
      arraytag.push({id: event.senderID, tag: name_1});
      arraytag.push({id: mention, tag: name_2});
  var a = function (a) { api.sendMessage(a, event.threadID); }
a("Anh Yêu Vợ ❤️");
setTimeout(() => {a("Anh Xin Lỗi Vợ 🥺")} , 2500);
setTimeout(() => {a("Vợ Đừng Giận Anh Nữa Mà 🥺🥺")} , 2500);
setTimeout(() => {a("Anh xin lỗi vợ lần sau anh không như thế nữa :(")} , 2500);
setTimeout(() => {a("Tha Lỗi Cho Anh Nha Vợ Ơi 🥺😭")} , 2500);
setTimeout(() => {a({body: name_1+" "+"💓"+" "+name_2, mentions: arraytag, attachment: imglove}, )} , 2500);
  
  }
}