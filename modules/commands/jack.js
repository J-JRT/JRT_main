const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "jack",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HungCho",
  description: ".",
  commandCategory: "Hình Ảnh",
  usages: "boy",
  cooldowns: 5,
  dependencies: {"request": "",
  "fs": "",
  "axios": ""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
	var link = [

"https://i.pinimg.com/236x/0a/fc/14/0afc14a83ac615c14df96fbb120e4023.jpg",
"https://i.pinimg.com/236x/36/26/dc/3626dce9c4e7124783e03c1e49d07a68.jpg",
"https://i.pinimg.com/236x/43/44/ab/4344ab78bb4d71bc9b8c1d067e1016a7.jpg",
"https://i.pinimg.com/236x/7e/15/75/7e1575629035d940797ad97cedecb915.jpg",
"https://i.pinimg.com/236x/ad/d6/8f/add68f2eeb612988d5a692d041d0d5c9.jpg",
"https://i.pinimg.com/236x/e0/e6/9e/e0e69ed84dc5bd21bdef7d3b40d5e12c.jpg",
"https://i.pinimg.com/236x/61/83/94/618394956793dff58dd1a6eee1a90643.jpg",
"https://i.pinimg.com/236x/08/60/a1/0860a188b69914201e94a3c120e4e292.jpg",
"https://i.pinimg.com/236x/ac/23/cb/ac23cb124d5d0c8db30b9c9f1f3e2a96.jpg",
"https://i.pinimg.com/236x/0c/26/d0/0c26d08a9187cdc3a2198ea08172c475.jpg",
"https://i.pinimg.com/236x/54/99/0f/54990f8a68a198eaf77e0d3ecbd1d1df.jpg",
"https://i.pinimg.com/236x/47/d1/ef/47d1efa8fded2d244103271e728e7167.jpg",
"https://i.pinimg.com/236x/a1/36/f3/a136f3fc090f4eaf2bdda3cacd93320c.jpg",
"https://i.pinimg.com/236x/a1/02/52/a10252a12a944ef50f9a1ee542a42644.jpg",
"https://i.pinimg.com/236x/38/0a/e4/380ae422b026ccdf97db5b5c6eabc272.jpg",
"https://i.pinimg.com/236x/f0/39/7b/f0397b16c939f81042e2a8a109a36bd5.jpg",
"https://i.pinimg.com/236x/74/d8/b6/74d8b64b3717bcc7b4b7b05d44d05152.jpg",
"https://i.pinimg.com/236x/c6/57/ab/c657ab169227b6b32401acf703bfec98.jpg",
"https://i.pinimg.com/236x/de/15/3e/de153e52550fd9258098dca4281b5e56.jpg",
"https://i.pinimg.com/236x/51/ca/fe/51cafeff6e5355f69cda2268b7e80bf8.jpg",
"https://i.pinimg.com/236x/8b/0b/fc/8b0bfc768c260f8983ccd9803f480007.jpg",
"https://i.pinimg.com/236x/b5/27/95/b527959ea7ad5777a2c8ad869e04f56d.jpg",
"https://i.pinimg.com/236x/d2/82/a5/d282a57ee616d6ef53fceb26eb460d32.jpg",
"https://i.pinimg.com/236x/b5/27/95/b527959ea7ad5777a2c8ad869e04f56d.jpg",
"https://i.pinimg.com/236x/e4/05/91/e40591ed588cf172b527d10ea2b0313b.jpg",
"https://i.pinimg.com/236x/3c/78/c1/3c78c1930973f665f016d9af73fc7da3.jpg",
"https://i.pinimg.com/236x/27/d8/09/27d8090c289552da29a00ee1334e6ed0.jpg",
"https://i.pinimg.com/236x/50/36/a9/5036a9074ff67834519d30d6a1cbcce6.jpg",
"https://i.pinimg.com/236x/04/d8/f8/04d8f875969f1b5eebeaf46c4197dbc0.jpg",
"https://i.pinimg.com/236x/51/4e/49/514e4941db299e5cdd98c01427fea9a3.jpg",
"https://i.pinimg.com/236x/a7/62/7d/a7627d34d11ca1e94451b99ae252ff81.jpg",
"https://i.pinimg.com/236x/bc/cc/b4/bcccb4d6e1df8574403baaf24b88b98e.jpg",
"https://i.pinimg.com/236x/7f/00/cd/7f00cdc8a7102385e3bf66a6bef4eb8c.jpg",
"https://i.pinimg.com/236x/21/64/10/2164106a1383ba0b7ff03821cbd6ed37.jpg",
"https://i.pinimg.com/236x/a3/87/43/a38743953171b2c17806da1a109c9fea.jpg",
"https://i.pinimg.com/236x/69/f5/9c/69f59cc6521074cbff9cec6547bb5139.jpg",
"https://i.pinimg.com/236x/8f/d9/08/8fd9083dc75adf8c91a63cad6abdd807.jpg",
"https://i.pinimg.com/236x/18/42/80/184280bcb7a6ab240c14a9b8c4ffa732.jpg",
"https://i.pinimg.com/236x/1d/bf/8f/1dbf8f3e1483599449238f1366ac05bf.jpg",
"https://i.pinimg.com/236x/cf/2d/42/cf2d4217c8242355e4d01a8004c2d602.jpg",
"https://i.pinimg.com/236x/73/47/0b/73470b35e6738b81db584d74aebf92dd.jpg",
"https://i.pinimg.com/236x/48/31/82/4831827e3b04c33d559792c5ed217c3d.jpg",
"https://i.pinimg.com/236x/dd/fb/f5/ddfbf5b1837414b27249257a2edaad74.jpg",
"https://i.pinimg.com/236x/ac/7a/9a/ac7a9a2a579f44094b2754c76d3f0093.jpg",
"https://i.pinimg.com/236x/9a/99/d7/9a99d732e76f71f75585ff2b5dfbb564.jpg",
"https://i.pinimg.com/236x/ca/06/ba/ca06ba280ccd070595d7cdc2a09baab9.jpg",
"https://i.pinimg.com/236x/55/d2/1e/55d21e723aea77dd9c27542b942099e0.jpg",
"https://i.pinimg.com/236x/5d/83/f8/5d83f8e31e90c1957599cdce665c7a01.jpg",
"https://i.pinimg.com/236x/d2/84/a6/d284a68cdcefd5089e0b30e08179958e.jpg",
"https://i.pinimg.com/236x/d0/f2/61/d0f26164c8d6c5d1122e3e77a0ce1829.jpg",
"https://i.pinimg.com/236x/2c/dd/3a/2cdd3a2352c3f51845529dc4e84bd5ce.jpg",
"https://i.pinimg.com/236x/74/1e/67/741e67122ccc43a52d6b152c105add75.jpg",
"https://i.pinimg.com/236x/8a/9d/89/8a9d89cfd689637c9b3398ed408a2761.jpg",
"https://i.pinimg.com/236x/e2/04/02/e204021fe9fbf4f0c4f9b8f2fed3ff24.jpg",
"https://i.pinimg.com/236x/d3/09/4f/d3094f33f6214f40e0ece64138c7faec.jpg",
"https://i.pinimg.com/236x/08/60/a1/0860a188b69914201e94a3c120e4e292.jpg",
"https://i.pinimg.com/236x/e9/16/2f/e9162f3ab8314700b2bc89dd3a656616.jpg",
"https://i.pinimg.com/236x/1c/07/4d/1c074d0319af86aef1812ab88ae4ede1.jpg",
"https://i.pinimg.com/236x/8a/2f/75/8a2f752d6061959471971bc843cecf6f.jpg",
"https://i.pinimg.com/236x/a3/b2/46/a3b246d8e3c48ba50283cda5a357c2aa.jpg",

];
 var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 1000) api.sendMessage("Bạn cần 1000 đô để xem ảnh ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 10})
   var callback = () => api.sendMessage({body:`Ảnh jack\nSố Ảnh: ${link.length}\n-1000 đô !`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
     }
   };