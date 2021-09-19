const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "Jahy",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Long LTD",
  description: "Ảnh thằng JAHY chechou ",
  commandCategory: "Hình Ảnh",
  usages: "JAHY",
  cooldowns: 5,
    dependencies: {"request": "",
  "fs": "",
  "axios": ""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
	var link = [
"https://scontent-xsp1-3.xx.fbcdn.net/v/t1.15752-9/236929933_814702919203664_6029496248249635934_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_ohc=47w6_hxIC08AX_GZiiA&tn=FXK2dl149RBcYwqC&_nc_ht=scontent-xsp1-3.xx&oh=d64b6a0bf437ec0c0985f78092c8995e&oe=6151EB14",
"https://scontent-xsp1-2.xx.fbcdn.net/v/t1.15752-9/236681249_948580169055454_6545774020647505747_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=kP9VoPSmVvQAX_xHxrP&_nc_ht=scontent-xsp1-2.xx&oh=d48ed536474650c3ffbd5886b22109be&oe=61519D36",
"https://scontent-xsp1-3.xx.fbcdn.net/v/t1.15752-9/238226288_1374452396343243_6273476912632503813_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_ohc=S70tjGBOc_UAX8Q70Ec&_nc_ht=scontent-xsp1-3.xx&oh=d45415e53c722ac7231882c0bb737eb6&oe=6152DFAF",
"https://scontent.fhph1-2.fna.fbcdn.net/v/t1.15752-9/240590685_357943912546429_8244923982098141820_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=4mMVT_LrdyQAX9cK9_E&_nc_ht=scontent.fhph1-2.fna&oh=f16756151770ea985ecfaaa4b9a3384e&oe=6150ABB1",
"https://scontent-xsp1-2.xx.fbcdn.net/v/t1.15752-9/236772673_520238405936316_8587079852277537678_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_ohc=PUtO6BvAL5sAX97ViPP&_nc_ht=scontent-xsp1-2.xx&oh=30ef87ce5c640604963e0ba7a3d3cf16&oe=61509C14",
"https://scontent-xsp1-3.xx.fbcdn.net/v/t1.15752-9/240610686_1540099009658964_606267737151545575_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=w3PDKfIwiSIAX-u0LY-&_nc_ht=scontent-xsp1-3.xx&oh=5acb6a922bff1f8bc4cf4c4dbff6a3bc&oe=61517D22",
"https://scontent-xsp1-3.xx.fbcdn.net/v/t1.15752-9/240394753_180484390841530_341332458187373009_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_ohc=jI2PY4qVHdkAX_Ouh6R&_nc_ht=scontent-xsp1-3.xx&oh=89c4c38e062368fd4dc9ac894fa662ac&oe=614FB577",
"https://scontent.fhph1-2.fna.fbcdn.net/v/t1.15752-9/237192605_1191348621360537_856102382627187095_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=WHSEZ-S5bJEAX-a-Cpw&_nc_ht=scontent.fhph1-2.fna&oh=0aa253017e76f3af638c0973db3fb61a&oe=6152EA2D",
"https://scontent-xsp1-2.xx.fbcdn.net/v/t1.15752-9/237177707_689940638589251_478959841000213912_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_ohc=L6MmlM9AT7QAX9o-3ar&_nc_oc=AQkjv3L7j0tdVStTG8i4FIV7lbZLQblc58EZwKNu8SNmCqDSlTo2rOaOd1biMB3xqH4Gf2oUA8muJcyQHyEiqitW&_nc_ht=scontent-xsp1-2.xx&oh=6e14659ce752c75b3fa8c87916c41c0e&oe=614FD45F",
"https://scontent.fhph1-2.fna.fbcdn.net/v/t1.15752-9/236903709_1669884163210608_6861596447601465287_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=bCO101B-YngAX_5QDaq&_nc_ht=scontent.fhph1-2.fna&oh=1425477269ef508103b7d56f24d927e3&oe=61510B07",
"https://scontent-xsp1-1.xx.fbcdn.net/v/t1.15752-9/236634052_223538003064208_3993229430882208830_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=ae9488&_nc_ohc=eCEpc9k6p9UAX84LV6m&tn=FXK2dl149RBcYwqC&_nc_ht=scontent-xsp1-1.xx&oh=3834097817ec9858b9d071095c489725&oe=614FBDFE",
"https://scontent-xsp1-2.xx.fbcdn.net/v/t1.15752-9/240583776_4648127671885765_8306372329108457772_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=30gj1bPqUVUAX9xQbKC&_nc_ht=scontent-xsp1-2.xx&oh=bfef4b595b5b587e6bb7687ec7300833&oe=615273C6",
"https://scontent-xsp1-1.xx.fbcdn.net/v/t1.15752-9/240687700_302097848353884_5693757079147205191_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=y94nGLxMvKEAX_MQOCe&_nc_ht=scontent-xsp1-1.xx&oh=222a388738da18e548a760690331ad60&oe=61508A15",
"https://scontent-xsp1-2.xx.fbcdn.net/v/t1.15752-9/239342097_2967895076759751_2183378629331371251_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_ohc=xqXr1Zut5OgAX9NdVKj&tn=FXK2dl149RBcYwqC&_nc_ht=scontent-xsp1-2.xx&oh=714197ecf7ce08397e1c3a1d3e48cc2b&oe=614F8640",


     ];
   var callback = () => api.sendMessage({body:`Ảnh thằng chechou Jahy mặt mũm mĩm púng ra sữa nè 😉\nSố Ảnh: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/49.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/49.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/49.jpg")).on("close",() => callback());
   };