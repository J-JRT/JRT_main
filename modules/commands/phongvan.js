//Phỏng Vấn Mod Từ C3C
module.exports.config = {
    name: "phongvan",
    version: "2.0.0",
    hasPermssion: 0,
    credits: "Thiệu Trung Kiên",
    description: "Phỏng vấn người được tag",
    commandCategory: "Game",
    usages: "[tag]",
    cooldowns: 5,
    dependencies: {
        "axios": "",
        "fs-extra": "",
        "path": "",
        "jimp": ""
    }
};

module.exports.onLoad = async() => {
    const { resolve } = global.nodemodule["path"];
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { downloadFile } = global.utils;
    const dirMaterial = __dirname + `/cache/canvas/`;
    const path = resolve(__dirname, 'cache/canvas', 'phongvan.png');
    if (!existsSync(dirMaterial + "canvas")) mkdirSync(dirMaterial, { recursive: true });
    if (!existsSync(path)) await downloadFile("https://i.imgur.com/o1Ux5OY.jpg", path);
}

async function makeImage({ one, two }) {
    const fs = global.nodemodule["fs-extra"];
    const path = global.nodemodule["path"];
    const axios = global.nodemodule["axios"]; 
    const jimp = global.nodemodule["jimp"];
    const __root = path.resolve(__dirname, "cache", "canvas");

    let phongvan_img = await jimp.read(__root + "/phongvan.png");
    let pathImg = __root + `/phongvan${one}_${two}.png`;
    let avatarOne = __root + `/avt_${one}.png`;
    let avatarTwo = __root + `/avt_${two}.png`;
    
    let getAvatarOne = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));
    
    let getAvatarTwo = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));
    
    let circleOne = await jimp.read(await circle(avatarOne));
    let circleTwo = await jimp.read(await circle(avatarTwo));
    phongvan_img.resize(500, 357).composite(circleOne.resize(100, 100), 370, 50).composite(circleTwo.resize(100, 100), 200, 170);
    
    let raw = await phongvan_img.getBufferAsync("image/png");
    
    fs.writeFileSync(pathImg, raw);
    fs.unlinkSync(avatarOne);
    fs.unlinkSync(avatarTwo);
    
    return pathImg;
}
async function circle(image) {
    const jimp = require("jimp");
    image = await jimp.read(image);
    image.circle();
    return await image.getBufferAsync("image/png");
}

module.exports.run = async function ({ event, api, args }) {    
    const fs = global.nodemodule["fs-extra"];
    const { threadID, messageID, senderID } = event;
    const mention = Object.keys(event.mentions);
    let tag = event.mentions[mention].replace("@", "");
    if (!mention[0]) return api.sendMessage("Vui lòng tag 1 người bạn muốn phỏng vấn.", threadID, messageID);
    else {
        const one = senderID, two = mention[0];
        return makeImage({ one, two }).then(path => api.sendMessage({ body: `Cậu có lời gì muốn nói không ? ${tag} `, attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
    }
}
