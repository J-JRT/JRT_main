module.exports.config = {
    name: "rankgif",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Siêu Đáng Yêu mod JRT",
    description: "Lấy rank hiện tại của bạn trên hệ thống bot kèm khung theo level của bạn, remake rank_card from canvacord",
    commandCategory: "Nhóm",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "path": "",
        "jimp": "",
        "node-superfetch": "",
        "canvas": "",
        "gif-frames": "",
        "gifencoder": "",
    }
};
//random color 
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

module.exports.makeRankCard = async(data) => {
    /*
     * 
     * Remake from Canvacord
     * 
     */

    const fs = global.nodemodule["fs-extra"];
    const path = global.nodemodule["path"];
    const Canvas = global.nodemodule["canvas"];
    const request = global.nodemodule["node-superfetch"];
    const GIFEncoder = global.nodemodule["gifencoder"];
    const gifFrames = global.nodemodule["gif-frames"];

    const __root = path.resolve(__dirname, "cache");
    const PI = Math.PI;

    const { id, name, rank, level, expCurrent, expNextLevel } = data;
    Canvas.registerFont(__root + "/bold-font.ttf", {
        family: "Manrope",
        weight: "regular",
        style: "normal"
    });
    Canvas.registerFont(__root + "/vnexotic.ttf", {
        family: "Manrope",
        weight: "bold",
        style: "normal"
    });
    //random rankcard by Siêu Đáng Yêu ,png by ngô đức hiển(xin vui lòng giữ credit),code by quang thái
    //sử dụng bao nhiêu cái chỉnh ở dòng 57 (số ảnh) và ảnh phải ở định dạng.png đặt tên rankcard(123)
    const pathCustom = path.resolve(__dirname, "cache", "customrank");
    var customDir = fs.readdirSync(pathCustom);
    let random = Math.floor(Math.random() * 23) + 1;
    var dirImage = __root + "/rankcard" + random + ".png";
    customDir = customDir.map(item => item.replace(/\.png/g, ""));

    for (singleLimit of customDir) {
        var limitRate = false;
        const split = singleLimit.split(/-/g);
        var min = parseInt(split[0]),
            max = parseInt((split[1]) ? split[1] : min);

        for (; min <= max; min++) {
            if (level == min) {
                limitRate = true;
                break;
            }
        }

        if (limitRate == true) {
            dirImage = pathCustom + `/${singleLimit}.png`;
            break;
        }
    }

    let rankCard = await Canvas.loadImage(dirImage);
    const pathImg = __root + `/rank_${id}.png`;

    var expWidth = (expCurrent * 615) / expNextLevel;
    if (expWidth > 615 - 18.5) expWidth = 615 - 18.5;

    let avatar = await request.get(`https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`);

    avatar = await this.circle(avatar.body);

    const canvas = Canvas.createCanvas(934, 282);
    const ctx = canvas.getContext("2d");

    ctx.drawImage(rankCard, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(await Canvas.loadImage(avatar), 45, 50, 180, 180);

    ctx.font = `bold 36px Manrope`;
    ctx.fillStyle = getRandomColor();
    ctx.textAlign = "start";
    ctx.fillText(name, 270, 164);
    ctx.font = `36px Manrope`;
    ctx.fillStyle = getRandomColor();
    ctx.textAlign = "center";

    ctx.font = `bold 32px Manrope`;
    ctx.fillStyle = getRandomColor();
    ctx.textAlign = "end";
    ctx.fillText(level, 934 - 55, 82);
    ctx.fillStyle = getRandomColor();
    ctx.fillText("Lv.", 934 - 55 - ctx.measureText(level).width - 10, 82);

    ctx.font = `bold 32px Manrope`;
    ctx.fillStyle = getRandomColor();
    ctx.textAlign = "end";
    ctx.fillText(rank, 934 - 55 - ctx.measureText(level).width - 16 - ctx.measureText(`Lv.`).width - 25, 82);
    ctx.fillStyle = getRandomColor();
    ctx.fillText("#", 934 - 55 - ctx.measureText(level).width - 16 - ctx.measureText(`Lv.`).width - 16 - ctx.measureText(rank).width - 16, 82);

    ctx.font = `bold 26px Manrope`;
    ctx.fillStyle = getRandomColor();
    ctx.textAlign = "start";
    ctx.fillText("/ " + expNextLevel, 710 + ctx.measureText(expCurrent).width + 10, 164);
    ctx.fillStyle = getRandomColor();
    ctx.fillText(expCurrent, 710, 164);

    ctx.beginPath();
    ctx.fillStyle = getRandomColor();
    ctx.arc(257 + 18.5, 147.5 + 18.5 + 36.25, 18.5, 1.5 * PI, 0.5 * PI, true);
    ctx.fill();
    ctx.fillRect(257 + 18.5, 147.5 + 36.25, expWidth, 37.5);
    ctx.arc(257 + 18.5 + expWidth, 147.5 + 18.5 + 36.25, 18.75, 1.5 * PI, 0.5 * PI, false);
    ctx.fill();

    const imageBuffer = canvas.toBuffer();
    fs.writeFileSync(pathImg, imageBuffer);
    return pathImg;
}

module.exports.makeRankCardGif = async(data) => {
    /*
     * 
     * Remake from Canvacord
     * 
     */

    const fs = global.nodemodule["fs-extra"];
    const path = global.nodemodule["path"];
    const Canvas = global.nodemodule["canvas"];
    const request = global.nodemodule["node-superfetch"];
    const GIFEncoder = global.nodemodule["gifencoder"];
    const gifFrames = global.nodemodule["gif-frames"];

    const __root = path.resolve(__dirname, "cache");
    const PI = Math.PI;

    const { id, name, rank, level, expCurrent, expNextLevel } = data;
    Canvas.registerFont(__root + "/regular-font.ttf", {
        family: "Manrope",
        weight: "regular",
        style: "normal"
    });
    Canvas.registerFont(__root + "/bold-font.ttf", {
        family: "Manrope",
        weight: "bold",
        style: "normal"
    });
    //random rankcard by Siêu Đáng Yêu ,png by ngô đức hiển(xin vui lòng giữ credit),code by quang thái
    //sử dụng bao nhiêu cái chỉnh ở dòng 57 (số ảnh) và ảnh phải ở định dạng.png đặt tên rankcard(123)
    const pathCustom = path.resolve(__dirname, "cache", "customrank");
    var customDir = fs.readdirSync(pathCustom);
    let random = Math.floor(Math.random() * 23) + 1;
    // var dirImage = __root + "/rankcard" + random + ".png";
    var dirImage = __root + "/banner.gif";
    customDir = customDir.map(item => item.replace(/\.png/g, ""));

    for (singleLimit of customDir) {
        var limitRate = false;
        const split = singleLimit.split(/-/g);
        var min = parseInt(split[0]),
            max = parseInt((split[1]) ? split[1] : min);

        for (; min <= max; min++) {
            if (level == min) {
                limitRate = true;
                break;
            }
        }

        if (limitRate == true) {
            dirImage = pathCustom + `/${singleLimit}.png`;
            break;
        }
    }

    let avatar = await request.get(`https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`);

    avatar = await this.circle(avatar.body);

    var expWidth = (expCurrent * 615) / expNextLevel;
    if (expWidth > 615 - 18.5) expWidth = 615 - 18.5;

    async function canvasGIF({ url, path, width, height }) {
        const gifWidth = width;
        const gifHeight = height;
        const encoder = new GIFEncoder(gifWidth, gifHeight);
        // stream the results as they are available into myanimated.gif
        encoder.start();
        encoder.setRepeat(0); // 0 for repeat, -1 for no-repeat
        encoder.setDelay(100); // frame delay in ms
        // // use node-canvas
        const canvas = Canvas.createCanvas(gifWidth, gifHeight);
        const ctx = canvas.getContext('2d');
        return new Promise((resolve, reject) => {
            gifFrames({ url: url, frames: 'all', outputType: 'png', cumulative: true },
                function(err, frameData) {
                    if (err) {
                        throw err;
                    }
                    let count = 0;
                    frameData.forEach(async function(frame, index) {
                        let stream = await frame.getImage().pipe(fs.createWriteStream(
                            __root + '/image-' + frame.frameIndex + '.png',
                        ));
                        stream.on('finish', async() => {
                            this.count = count++;
                            if (count == frameData.length) {
                                for (let index = 0; index < count; index++) {
                                    const gif = await Canvas.loadImage(__root + '/image-' + index + '.png');
                                    ctx.drawImage(gif, 0, 0, canvas.width, canvas.height);
                                    ctx.drawImage(await Canvas.loadImage(avatar), 45, 50, 180, 180);

                                    ctx.font = `bold 36px Manrope`;
                                    ctx.fillStyle = getRandomColor();
                                    ctx.textAlign = "start";
                                    ctx.fillText(name, 270, 164);
                                    ctx.font = `36px Manrope`;
                                    ctx.fillStyle = getRandomColor();
                                    ctx.textAlign = "center";

                                    ctx.font = `bold 32px Manrope`;
                                    ctx.fillStyle = getRandomColor();
                                    ctx.textAlign = "end";
                                    ctx.fillText(level, 934 - 55, 82);
                                    ctx.fillStyle = getRandomColor();
                                    ctx.fillText("Lv.", 934 - 55 - ctx.measureText(level).width - 10, 82);

                                    ctx.font = `bold 32px Manrope`;
                                    ctx.fillStyle = getRandomColor();
                                    ctx.textAlign = "end";
                                    ctx.fillText(rank, 934 - 55 - ctx.measureText(level).width - 16 - ctx.measureText(`Lv.`).width - 25, 82);
                                    ctx.fillStyle = getRandomColor();
                                    ctx.fillText("#", 934 - 55 - ctx.measureText(level).width - 16 - ctx.measureText(`Lv.`).width - 16 - ctx.measureText(rank).width - 16, 82);

                                    ctx.font = `bold 26px Manrope`;
                                    ctx.fillStyle = getRandomColor();
                                    ctx.textAlign = "start";
                                    ctx.fillText("/ " + expNextLevel, 710 + ctx.measureText(expCurrent).width + 10, 164);
                                    ctx.fillStyle = getRandomColor();
                                    ctx.fillText(expCurrent, 710, 164);

                                    ctx.beginPath();
                                    ctx.fillStyle = getRandomColor();
                                    ctx.arc(257 + 18.5, 147.5 + 18.5 + 36.25, 18.5, 1.5 * PI, 0.5 * PI, true);
                                    ctx.fill();
                                    ctx.fillRect(257 + 18.5, 147.5 + 36.25, expWidth, 37.5);
                                    ctx.arc(257 + 18.5 + expWidth, 147.5 + 18.5 + 36.25, 18.75, 1.5 * PI, 0.5 * PI, false);
                                    ctx.fill();

                                    encoder.addFrame(ctx);
                                    if (index === frameData.length - 1) {
                                        let gifStream = await encoder.createReadStream().pipe(fs.createWriteStream(path));
                                        encoder.finish();
                                        gifStream.on('finish', async() => {
                                            console.log('Gif Generated')
                                            resolve(path);
                                        })
                                    }
                                }
                            }

                        });
                    });
                }
            );
        })

    }


    return canvasGIF({
        url: dirImage,
        path: __root + `/rank_${id}.gif`,
        width: 934,
        height: 282
    })
}

module.exports.circle = async(image) => {
    const jimp = global.nodemodule["jimp"];
    image = await jimp.read(image);
    image.circle();
    return await image.getBufferAsync("image/png");
}

module.exports.expToLevel = (point) => {
    if (point < 0) return 0;
    return Math.floor((Math.sqrt(1 + (4 * point) / 3) + 1) / 2);
}

module.exports.levelToExp = (level) => {
    if (level <= 0) return 0;
    return 3 * level * (level - 1);
}

module.exports.getInfo = async(uid, Currencies) => {
    let point = (await Currencies.getData(uid)).exp;
    const level = this.expToLevel(point);
    const expCurrent = point - this.levelToExp(level);
    const expNextLevel = this.levelToExp(level + 1) - this.levelToExp(level);
    return { level, expCurrent, expNextLevel };
}

module.exports.onLoad = async function() {
    const { resolve } = global.nodemodule["path"];
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { downloadFile } = global.utils;
    const path = resolve(__dirname, "cache", "customrank");
    if (!existsSync(path)) mkdirSync(path, { recursive: true });
    //hàm dowload file có sẵn bao gồm font chữ hoặc pang rankcard (có thể thay)
    if (!existsSync(resolve(__dirname, 'cache', 'regular-font.ttf'))) await downloadFile("https://raw.githubusercontent.com/catalizcs/storage-data/master/rank/fonts/regular-font.ttf", resolve(__dirname, 'cache', 'regular-font.ttf'));
    if (!existsSync(resolve(__dirname, 'cache', 'bold-font.ttf'))) await downloadFile("https://raw.githubusercontent.com/catalizcs/storage-data/master/rank/fonts/bold-font.ttf", resolve(__dirname, 'cache', 'bold-font.ttf'));
    if (!existsSync(resolve(__dirname, 'cache', 'rankcard.png'))) await downloadFile("https://raw.githubusercontent.com/catalizcs/storage-data/master/rank/rank_card/rankcard.png", resolve(__dirname, 'cache', 'rankcard.png'));

}

module.exports.run = async({ event, api, args, Currencies, Users }) => {
    const fs = global.nodemodule["fs-extra"];

    let dataAll = (await Currencies.getAll(["userID", "exp"]));
    //const mention = Object.keys(event.mentions);

    dataAll.sort((a, b) => {
        if (a.exp > b.exp) return -1;
        if (a.exp < b.exp) return 1;
    });

    const name = global.data.userName.get(event.senderID) || await Users.getNameUser(event.senderID);
    const listUserID = event.participantIDs
    var id = listUserID
      exp = [];
      for(const idUser of listUserID) {
      const countMess = await Currencies.getData(event.senderID) || await Currencies.getData(id);
      exp.push({"name" : idUser.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp, "uid": idUser});
  }
      exp.sort(function (a, b) { return b.exp - a.exp });
      const rank = exp.findIndex(info => parseInt(info.uid) == parseInt(event.senderID)) + 1;   const infoUser = exp[rank - 1];

        if (rank == 0) return api.sendMessage("Bạn hiện không có trong cơ sở dữ liệu nên không thể thấy thứ hạng của mình, vui lòng thử lại sau 5 giây.", event.threadID, event.messageID);

        const point = await this.getInfo(event.senderID, Currencies);
      
        // let pathRankCard = await this.makeRankCard({ id: event.senderID, name, rank, ...point })
        let pathRankCard = null

        await this.makeRankCardGif({ id: event.senderID, name, rank, ...point }).then((path) => {

            api.sendMessage({ body: `🔰Tên: ${name}\n🌟Top ${rank} \n💌Tổng tin nhắn: ${infoUser.exp}`, attachment: fs.createReadStream(path, { 'highWaterMark': 128 * 1024 }) }, event.threadID, () => {
                fs.unlinkSync(path)
                console.log("finally");
            }, event.messageID);
        })
}