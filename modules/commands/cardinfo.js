module.exports.config = {
  name: "cardinfo",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "D-Jukie",
  description: "Tạo card thông tin người dùng facebook",
  commandCategory: "Nhóm",
  usages: "",
  cooldowns: 10,
  dependencies: {
    canvas: "",
    axios: "",
    "fs-extra": "",
  },
};

module.exports.circle = async (image) => {
  const jimp = global.nodemodule["jimp"];
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
}
module.exports.run = async function ({ api, event, args, Users }) {
 let { senderID, threadID, messageID } = event;
const { loadImage, createCanvas } = require("canvas");
const request = require('request');
const fs = require("fs-extra")
const axios = require("axios")
const Canvas = require("canvas")
let pathImg = __dirname + `/cache/${senderID}.png`;
let pathAvata = __dirname + `/cache/avtuserrd.png`;
let pathKhung = __dirname + `/cache/khung.png`;
if(event.type == "message_reply") { var uid = event.messageReply.senderID }
else var uid = senderID;
const res = await axios.get(`http://api.leanhtruong.net/api/info?api_key=leanhtruong_xIyn9Ur8rmFMIF813wSC&id=${uid}`); 
let getAvatarOne = (await axios.get(`https://graph.facebook.com/${uid}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
let bg = (
    await axios.get(encodeURI(`https://i.imgur.com/r7JzqdW.png`), {
      responseType: "arraybuffer",
    })
  ).data;
let khung = (await axios.get(encodeURI(`https://i.imgur.com/FXYZFUd.png`), { responseType: "arraybuffer" }) ).data;
  fs.writeFileSync(pathAvata, Buffer.from(getAvatarOne, 'utf-8'));
  var avataruser = await this.circle(pathAvata);
  fs.writeFileSync(pathImg, Buffer.from(bg, "utf-8"));
  fs.writeFileSync(pathKhung, Buffer.from(khung, "utf-8"));
/*-----------------download----------------------*/
if(!fs.existsSync(__dirname+`/cache/Play-Bold.ttf`)) { 
      let getfont = (await axios.get("https://drive.google.com/u/0/uc?id=1uni8AiYk7prdrC7hgAmezaGTMH5R8gW8&export=download", { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+`/cache/Play-Bold.ttf`, Buffer.from(getfont, "utf-8"));
    };
if(!fs.existsSync(__dirname+`/cache/SVN-Apple.ttf`)) { 
      let getfont = (await axios.get("https://drive.google.com/u/0/uc?id=136jIOEOlCfg4Uk0LclzyC4nLC3ao1SCK&export=download", { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+`/cache/SVN-Apple.ttf`, Buffer.from(getfont, "utf-8"));
    };
/*---------------------------------------------*/
let baseImage = await loadImage(pathImg);
let baseAvata = await loadImage(avataruser);
let baseKhung = await loadImage(pathKhung);
let canvas = createCanvas(baseImage.width, baseImage.height);
let ctx = canvas.getContext("2d");
ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
ctx.globalAlpha = 0.6
ctx.globalAlpha = 1
ctx.drawImage(baseAvata, 60, 138, 279, 279);
ctx.drawImage(baseKhung, 0, 0, canvas.width, canvas.height);
var birthday = res.data.birthday ? `${res.data.birthday}` : "...";
var love = res.data.LeAnhTruong_User_Love ? `${res.data.LeAnhTruong_User_Love}` : "Độc thân"
var location = res.data.location ? `${res.data.location}` : "..."
var hometown = res.data.hometown ? `${res.data.hometown}` : "..."
Canvas.registerFont(__dirname+`/cache/SVN-Apple.ttf`, { family: "SVN-Apple" });
ctx.font = `80px SVN-Apple`;
ctx.fillStyle = args[1] || '#000000'
ctx.textAlign = "center";
ctx.fillText(`${res.data.fullname}`, 670, 150);
var X = 410
Canvas.registerFont(__dirname+`/cache/Play-Bold.ttf`, { family: "Play-Bold" });
ctx.font = `35px Play-Bold`;
ctx.textAlign = "start";
const iconLived = await Canvas.loadImage("https://static.xx.fbcdn.net/rsrc.php/v3/ym/r/N_tq7yNW9DG.png");
ctx.drawImage(iconLived, X, 170+20, 30, 30);
ctx.fillText(`Đến từ ${hometown}`, X+50, 170+20+30);

const iconLive = await Canvas.loadImage("https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/1sW88456A0B.png");
ctx.drawImage(iconLive, X, 220+20, 30, 30);
ctx.fillText(`Sống tại ${location}`, X+50, 240+30);

const iconFl = await Canvas.loadImage("https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/JanwljMyOww.png");
ctx.drawImage(iconFl, X, 270+20, 30, 30);
ctx.fillText(`Có ${res.data.follow_user} người theo dõi`, X+50, 290+30);

const iconLove = await Canvas.loadImage("https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/S0aTxIHuoYO.png");
ctx.drawImage(iconLove, X, 320+20, 30, 30);
ctx.fillText(`${love}`, X+50, 340+30);

const iconBirt = await Canvas.loadImage("https://static.xx.fbcdn.net/rsrc.php/v3/yB/r/ODICuZSjkMe.png");
ctx.drawImage(iconBirt, X, 370+20, 30, 30);
ctx.fillText(`Ngày sinh ${birthday}`, X+50, 390+30);
ctx.font = `20px Play-Bold`;
const iconLink = await Canvas.loadImage("https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/lDkqhYEMOUY.png");
ctx.drawImage(iconLink, 22, 470, 30, 30);
ctx.fillText(`Liên kết ${res.data.url_profile}`, 50+20, 470+20);

ctx.beginPath();
const imageBuffer = canvas.toBuffer();
fs.writeFileSync(pathImg, imageBuffer);
fs.removeSync(pathAvata);
return api.sendMessage({ attachment: fs.createReadStream(pathImg) },threadID,
  () => fs.unlinkSync(pathImg),messageID)
};