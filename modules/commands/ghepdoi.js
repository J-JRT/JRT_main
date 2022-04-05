module.exports.config = {
    name: "ghepdoi",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Ghép đôi",
    commandCategory: "Tình yêu",
    usages: "ghepdoi",
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
module.exports.run = async function ({
    api,
    event,
    args,
    Users,
    Threads
}) {
    const fs = global.nodemodule["fs-extra"];
    const axios = global.nodemodule["axios"];
    let {
        senderID,
        threadID,
        messageID
    } = event;
    const {
        loadImage,
        createCanvas
    } = require("canvas");
    let path = __dirname + "/cache/ghep.png";
    let pathAvata = __dirname + `/cache/avt${senderID}.png`;
    let pathAvataa = __dirname + `/cache/avtghep.png`;
    var { participantIDs } =(await Threads.getData(event.threadID)).threadInfo;
  var tle = Math.floor(Math.random() * 101);
    const botID = api.getCurrentUserID();
    const listUserID = event.participantIDs.filter(ID => ID != botID && ID != event.senderID);
    var id = listUserID[Math.floor(Math.random() * listUserID.length)];
    var name = (await Users.getData(id)).name
    var namee = (await Users.getData(event.senderID)).name
    let getAvatarOne = (await axios.get(`https://graph.facebook.com/${event.senderID}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    let getAvatarTwo = (await axios.get(`https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    let bg = (
        await axios.get(`https://i.imgur.com/RBOJ6ot.png`, {
            responseType: "arraybuffer",
        })
    ).data;
    fs.writeFileSync(pathAvata, Buffer.from(getAvatarOne, 'utf-8'));
    fs.writeFileSync(pathAvataa, Buffer.from(getAvatarTwo, 'utf-8'));
    fs.writeFileSync(path, Buffer.from(bg, "utf-8"));
    avataruser = await this.circle(pathAvata);
    avataruser2 = await this.circle(pathAvataa);
    let imgB = await loadImage(path);
    let baseAvata = await loadImage(avataruser);
    let baseAvataa = await loadImage(avataruser2);
    let canvas = createCanvas(imgB.width, imgB.height);
    let ctx = canvas.getContext("2d");
    ctx.drawImage(imgB, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(baseAvata, 92, 135, 100, 100);
    ctx.drawImage(baseAvataa, 652, 134, 100, 100);
    ctx.beginPath();
    const imageBuffer = canvas.toBuffer();
    fs.writeFileSync(path, imageBuffer);
    return api.sendMessage({body: `${namee} 💓 ${name}`,
            attachment: fs.createReadStream(path)
        },
        threadID,
        () => fs.unlinkSync(path),
        messageID
    );
};