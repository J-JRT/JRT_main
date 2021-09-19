module.exports.config = {
  name: "tokyo",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HungCho",
  description: "Kiểm tra thông tin nhs chat.",
  commandCategory: "Hình Ảnh",
  usages: "tokyo revengers",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/ho235f3.jpg",
"https://i.imgur.com/79gtJRN.jpeg",
"https://i.imgur.com/rNGNE2z.jpeg",
"https://i.imgur.com/fRsfqi1.jpeg",
"https://i.imgur.com/zbpxrME.jpeg",
"https://i.imgur.com/Uuaslo8.jpeg",
"https://i.imgur.com/gCn31eH.jpeg",
"https://i.imgur.com/1Mf7gN8.jpeg",
"https://i.imgur.com/Eacbowm.jpeg",
"https://i.imgur.com/ElbhzDg.jpeg",
"https://i.imgur.com/ZbBMmzr.png",
"https://i.imgur.com/WC20Ko8.jpeg",
"https://i.imgur.com/PU6FLZR.jpeg",
"https://i.imgur.com/Kkgy2EW.jpeg",
"https://i.imgur.com/lZDwumq.png",
"https://i.imgur.com/DUvurgk.png",
"https://i.imgur.com/zdKILzU.jpeg",
"https://i.imgur.com/z2iVuwC.jpeg",
"https://i.imgur.com/aqS5AjN.jpeg",
"https://i.imgur.com/KBDGUMM.jpeg",
"https://i.imgur.com/XSsEGQl.jpeg",
"https://i.imgur.com/nujMCoy.jpeg",
"https://i.imgur.com/UQMD9SC.jpeg",
"https://i.imgur.com/JpBFjfQ.jpeg",
"https://i.imgur.com/WhTye56.jpeg",
"https://i.imgur.com/ESDmvUn.jpeg",
"https://i.imgur.com/eMBfwgo.jpeg",
"https://i.imgur.com/2xtvsur.jpeg",
"https://i.imgur.com/th8WNHT.jpeg",
"https://i.imgur.com/Nruo2nh.jpeg",
"https://i.imgur.com/ei7zFjf.jpeg",
"https://i.imgur.com/1TgOpJB.jpeg",
"https://i.imgur.com/LWZIALy.jpeg",
"https://i.imgur.com/yIeGgrW.jpeg",
"https://i.imgur.com/FEy8S16.jpeg",
"https://i.imgur.com/o5QnRbx.jpeg",
"https://i.imgur.com/9NqRfBe.jpeg",
"https://i.imgur.com/U3i741w.jpeg",
"https://i.imgur.com/teF7vuY.jpeg",
"https://i.imgur.com/0qCKrsx.jpeg",
"https://i.imgur.com/p3NOmIL.jpeg",
"https://i.imgur.com/B8Itg5d.jpeg",
"https://i.imgur.com/D9SebFJ.jpeg",
"https://i.imgur.com/y4BvtRS.png",
"https://i.imgur.com/Me0nrmK.jpeg",
"https://i.imgur.com/y5StmTj.jpeg",
"https://i.imgur.com/jExqqu0.jpeg",
"https://i.imgur.com/6J0tQGf.jpeg",
"https://i.imgur.com/TlHTeN7.jpg",
"https://i.imgur.com/eZRFmSz.jpeg",
"https://i.imgur.com/rcOTulF.jpeg",
"https://i.imgur.com/QOBWQGO.jpeg",
"https://i.imgur.com/HBk0U8M.jpeg",
"https://i.imgur.com/uH6JUVW.jpeg",
"https://i.imgur.com/PCd0ogv.jpeg",
"https://i.imgur.com/pIZNKAa.jpeg",
"https://i.imgur.com/79gtJRN.jpeg",
"https://i.imgur.com/0tgOmcm.jpg",
  ];
	 var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 0) api.sendMessage("Bạn cần 100 đô để xem ảnh ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 10})
   var callback = () => api.sendMessage({body:`Hình tokyo revengers  Dành Cho You Nè \nSố Ảnh: ${link.length}\n-100 đô !`,attachment: fs.createReadStream(__dirname + "/cache/28.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/28.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/28.jpg")).on("close",() => callback());
     }
   };