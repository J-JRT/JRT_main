module.exports.config = {
    name: "bolac",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "DungUwU edit by Tiadals",
    description: "Không có gì cả",
    commandCategory: "Edit-img",
    usages: "[tag]",
    cooldowns: 5
};

module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/cache/canvas/`;
    if (!fs.existsSync(dirMaterial + "canvas")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "bolac.png")) request("https://i.postimg.cc/Y2m7fR4T/245688363-430791361729646-588286686926383690-n.jpg").pipe(fs.createWriteStream(dirMaterial + "bolac.png"));
}

async function makeImage({ one, two }) {    
    const axios = require("axios");
    const fs = require("fs-extra");
    const path = require("path");
    const jimp = require("jimp");
    const __root = path.resolve(__dirname, "cache", "canvas");

    let point_image = await jimp.read(__root + "/bolac.png");
    let pathImg = __root + `/bolac_${one}.png`;
    let avatarOne = __root + `/avt_${one}.png`;
    
    let getAvatarOne = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));
    
    let circleOne = await jimp.read(await circle(avatarOne));
    point_image.composite(circleOne.resize(70, 70), 465, 200)
    
    let raw = await point_image.getBufferAsync("image/png");
    
    fs.writeFileSync(pathImg, raw);
    fs.unlinkSync(avatarOne);
    
    return pathImg;
}
async function circle(image) {
    const jimp = require("jimp");
    image = await jimp.read(image);
    image.circle();
    return await image.getBufferAsync("image/png");
}


module.exports.run = async function ({ event, api, args, client }) {
    const fs = require("fs-extra");
    let { threadID, messageID, senderID } = event;
    var mention = Object.keys(event.mentions)[0];
    if (!mention) return api.sendMessage("Vui lòng tag 1 người", threadID, messageID);
    else {
        var one  = mention;
        return makeImage({ one }).then(path => api.sendMessage({ body: event.mentions[mention].replace("@", "") + " đi đâu vậy em", attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
    }
}
