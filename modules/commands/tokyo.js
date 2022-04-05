module.exports.config = {

 name: "tokyo",

 version: "1.0.0",

 hasPermssion: 0,

 credits: "binee",

 description: "Làm 1 ảnh tokyo thoai",

 commandCategory: "Tạo ảnh",

 usages: "[0 -> 3] | [ 1 -> 3 ] | [Text] | [Text 2]",

 cooldowns: 5

};

module.exports.run = async ({ event, api, args }) => {

    if (this.config.credits != 'binee') return;

    let { senderID, threadID, messageID } = event;

    const { loadImage, createCanvas } = require("canvas");

    const request = require("request");

    const fs = require("fs-extra");

    const axios = require("axios");

    let pathImg = __dirname + `/cache/${senderID+20}.png`;

    let pathAva = __dirname + `/cache/${senderID+30}.png`;

    let pathLine = __dirname + `/cache/${senderID+40}.png`;

    let pathTick = __dirname + `/cache/${senderID+50}.png`;

    const path = require("path");

    const Canvas = require("canvas");

    const __root = path.resolve(__dirname, "cache");

    if(!args[0]) return api.sendMessage('Sai cú pháp\n[0 -> 3] | [ 1 -> 3 ] | [Text] | [Text 2]', threadID, messageID);

    /*------------------------Background-----------------------*/

    var dsCover = [{

        tpCover: "https://i.imgur.com/5tSl7mc.png",



        tpColor: "#ee3333"

    },

    {

        tpCover: "https://i.imgur.com/5tSl7mc.png",



        tpColor: "#000000"

    },

    {

        tpCover: "https://i.imgur.com/5tSl7mc.png",



        tpColor: "#000000"

    },

    {

        tpCover: "https://i.imgur.com/5tSl7mc.png",



        tpColor: "#000000"

    },

    ];

    const content = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|");

    let background = (

    await axios.get(encodeURI(dsCover[content[0]].tpCover), {

      responseType: "arraybuffer",

     })

    ).data;

    fs.writeFileSync(pathImg, Buffer.from(background, "utf-8"));

    if(!fs.existsSync(__dirname+`/cache/UTM Fancy Full.ttf`)) { 

      let getfont2 = (await axios.get(`https://drive.google.com/u/0/uc?id=1cSGQ9fqvwRSxxYqmrf5EMBTKMXFjk690&export=download`, { responseType: "arraybuffer" })).data;

       fs.writeFileSync(__dirname+`/cache/UTM Fancy Full.ttf`, Buffer.from(getfont2, "utf-8"));

    };

    let baseImage = await loadImage(pathImg);

    let canvas = createCanvas(baseImage.width, baseImage.height);

    let ctx = canvas.getContext("2d");

    var name = content[0]

    ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);

    Canvas.registerFont(__dirname+`/cache/UTM Fancy Full.ttf`, {

            family: "UTM Fancy Full"

    });

    ctx.textAlign = "left";

    ctx.fillStyle = dsCover[content[0]].tpColor;

    var q = content[2]

    var p = content[3]

    var n = content[4]

    if (content[1] == '1') {

      var m = 150 - ctx.measureText(q).width;

      if (m > 30) {m = 30}

      if (m < 90) {m = 90}

      ctx.font = m + "px UTM Fancy Full";

      ctx.fillText(q, canvas.width / 2 - 380, canvas.height / 2 +15);

   }

   if (content[1] == '2') {

      var m = 140 - ctx.measureText(q).width;

      if (m > 30) {m = 30}

      if (m < 90) {m = 90}

      ctx.font = m + "px UTM Fancy FullL";

      ctx.fillText(q, canvas.width / 2 - 380, canvas.height / 2 - 95);

      ctx.fillText(p, canvas.width / 2 - 380, canvas.height / 2 + 110);

   }

   if (content[1] == '3') {

    var m = 130 - ctx.measureText(q).width;

    if (m > 30) {m = 30}

    if (m < 90) {m = 90}

    ctx.font = m + "px UTM Fancy Full";

    ctx.fillText(q, canvas.width / 2 - 380, canvas.height / 2 - 145);

    ctx.fillText(p, canvas.width / 2 - 380, canvas.height / 2);

    ctx.fillText(n, canvas.width / 2 - 380, canvas.height / 2 + 155);

   }

   const imageBuffer = canvas.toBuffer();

   fs.writeFileSync(pathImg, imageBuffer);

   return api.sendMessage(

     { attachment: fs.createReadStream(pathImg) },

     threadID,messageID

   );
}