/**
* @author ProCoderMew
* @warn Do not edit code or edit credits
*/

module.exports.config = {
    name: "findtext",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ProCoderMew",
    description: "Lấy text từ ảnh.",
    commandCategory: "Khác",
    usages: "[lang] (xem tại findtext list)",
    cooldowns: 0,
    dependencies: {
        'fs-extra': '',
        'path': '',
        'tesseract.js': ''
    }
};

module.exports.onLoad = async function() {
    const { join, resolve } = global.nodemodule.path;
    const log = require(process.cwd() + '/utils/log');
    const { default: axios } = global.nodemodule["axios"];
    const {  mkdirSync, writeFileSync, existsSync } = global.nodemodule["fs-extra"];
    const dir = join(__dirname, 'cache', 'lang-data');
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
    const path = resolve(__dirname, 'cache', 'meewmeew.json');

    try {
        var AllLang = (await axios.get("https://raw.githubusercontent.com/miraiPr0ject/Module-Mew/Mew/data/lang.json")).data;
    }
    catch {
        var AllLang = [];
    }

    if (!existsSync(path)) {
        const obj = {
            findtext: AllLang
        };
        writeFileSync(path, JSON.stringify(obj, null, 4));
    } else {
        const data = require(path);
        if (!data.hasOwnProperty('findtext')) data.findtext = AllLang;
        writeFileSync(path, JSON.stringify(data, null, 4));
    } 
        
    for (const e of AllLang) {
        let newLang = resolve(__dirname, 'cache', 'lang-data', `${e}.traineddata.gz`);
        if (existsSync(newLang)) continue;
        var { data } = await axios.get(`https://raw.githubusercontent.com/naptha/tessdata/gh-pages/4.0.0_fast/${e}.traineddata.gz`, { responseType: "arraybuffer"});
        writeFileSync(newLang, Buffer.from(data, 'utf-8'))
        log.loader("Loaded lang: " + `${e}.traineddata.gz`);
    }
}

module.exports.run = async function ({ api, event, args }) {
    const tesseract = global.nodemodule['tesseract.js'];
    const { threadID, messageID, type, messageReply } = event;
    const out = msg => api.sendMessage(msg, threadID, messageID);
    const { join, resolve } = global.nodemodule.path;
    const { createWorker } = tesseract;
    const path = join(__dirname, 'cache', 'lang-data');

    const worker = createWorker({
        langPath: path
    });    

    var lang, data = require(resolve(__dirname, 'cache', 'meewmeew.json')).findtext;
    switch (args[0]) {
        case "list":
            return out("Dang sách ngôn ngữ hỗ trợ:\n" + data.join(", "));
        default:
            if (data.includes(args[0])) {
                lang = args[0];
            } else {
                lang = "vie";
            }
            break;
    }

    if (type != "message_reply" || messageReply.attachments.length == 0 || messageReply.attachments[0].type != "photo") {
        return out("Vui lòng reply 1 ảnh.");
    }

    var { url } = messageReply.attachments[0];

    try {
        out("Đang xử lý hình ảnh..");
        await worker.load();
        await worker.loadLanguage(lang);
        await worker.initialize(lang);
        const { data: { text } } = await worker.recognize(url, lang);
        await out(text.toString());
        await worker.terminate();
    }
    catch (e) {
        return out("Đã có lỗi xảy ra. Vui lòng thử lại !");
    }
}