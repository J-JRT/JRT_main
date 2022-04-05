module.exports.config = {
    name: "setbox",
    version: "1.0.5",
    hasPermssion: 1,
    credits: "Mirai Team",
    description: "Chỉnh sửa văn bản/ảnh động modules",
    commandCategory: "Hệ thống admin-bot",
    usages: "[mp4/text] [Text hoặc url tải ảnh mp4]",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "path": ""
    }
}

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

    const path = join(__dirname, "cache", "test");
    if (!existsSync(path)) mkdirSync(path, { recursive: true });

    return;
}

module.exports.languages = {
    "vi": {
        "savedConfig": "Đã lưu tùy chỉnh của bạn thành công! dưới đây sẽ là phần preview:",
        "tagMember": "[Tên thành viên]",
        "tagLevel": "[Level của thành viên]",
        "mp4PathNotExist": "Nhóm của bạn chưa từng cài đặt mp4 test",
        "removemp4Success": "Đã gỡ bỏ thành công file mp4 của nhóm bạn!",
        "invaildURL": "Url bạn nhập không phù hợp!",
        "internetError": "Không thể tải file vì url không tồn tại hoặc bot đã xảy ra vấn đề về mạng!",
        "savemp4Success": "Đã lưu file mp4 của nhóm bạn thành công, bên dưới đây là preview:"
    },
    "en": {
        "savedConfig": "Saved your config, here is preview:",
        "tagMember": "[Member's name]",
        "tagLevel": "[Member level]",
        "mp4PathNotExist":"Your thread didn't set mp4 join",
        "removemp4Success": "Removed thread's mp4!",
        "invaildURL": "Invalid url!",
        "internetError": "Can't load file because url doesn't exist or internet have some problem!",
        "savemp4Success": "Saved file mp4, here is preview:"
    }
}

module.exports.run = async function ({ args, event, api, Threads, getText }) {
    try {
        const { existsSync, createReadStream } = global.nodemodule["fs-extra"];
        const { join } = global.nodemodule["path"];
        const { threadID, messageID } = event;
        const msg = args.slice(1, args.length).join(" ");
        var data = (await Threads.getData(threadID)).data;

        switch (args[0]) {
            case "text": {
                data["customtest"] = msg;
                global.data.threadData.set(parseInt(threadID), data);
                await Threads.setData(threadID, { data });
                return api.sendMessage(getText("savedConfig"), threadID, function () {
                    const body = msg
                    .replace(/\{name}/g, getText("tagMember"))
                    .replace(/\{level}/g, getText("tagLevel"));
                    return api.sendMessage(body, threadID);
                });
            }

      case "gif": {
                const path = join(__dirname, "cache", "test");
                const pathGif = join(path, `${threadID}.gif`);
                if (msg == "remove") {
                    if (!existsSync(pathGif)) return api.sendMessage(getText("gifPathNotExist"), threadID, messageID);
                    unlinkSync(pathGif);
                    return api.sendMessage(getText("removeGifSuccess"), threadID, messageID);
                }
                else {
                    if (!msg.match(/(http(s?):)([/|.|\w|\s|-])*\.(?:gif|GIF)/g)) return api.sendMessage(getText("invaildURL"), threadID, messageID);
                    try {
                        await global.utils.downloadFile(msg, pathGif);
                    } catch (e) { return api.sendMessage(getText("internetError"), threadID, messageID) }
                    return api.sendMessage({ body: getText("saveGifSuccess"), attachment: createReadStream(pathGif) }, threadID, messageID);
                }
            }

			case "mp3": {
                const path = join(__dirname, "cache", "test");
                const pathmp3 = join(path, `${threadID}.mp3`);
                if (msg == "remove") {
                    if (!existsSync(pathmp3)) return api.sendMessage(getText("mp3PathNotExist"), threadID, messageID);
                    unlinkSync(pathmp3);
                    return api.sendMessage(getText("removemp3Success"), threadID, messageID);
                }
                else {
                    if (!msg.match(/(http(s?):)([/|.|\w|\s|-])*\.(?:mp3|MP3)/g)) return api.sendMessage(getText("invaildURL"), threadID, messageID);
                    try {
                        await global.utils.downloadFile(msg, pathmp3);
                    } catch (e) { return api.sendMessage(getText("internetError"), threadID, messageID) }
                    return api.sendMessage({ body: getText("savemp3Success"), attachment: createReadStream(pathmp3) }, threadID, messageID);
                }
            }

            case "mp4": {
                const path = join(__dirname, "cache", "test");
                const pathmp4 = join(path, `${threadID}.mp4`);
                if (msg == "remove") {
                    if (!existsSync(pathmp4)) return api.sendMessage(getText("mp4PathNotExist"), threadID, messageID);
                    unlinkSync(pathmp4);
                    return api.sendMessage(getText("removemp4Success"), threadID, messageID);
                }
                else {
                    if (!msg.match(/(http(s?):)([/|.|\w|\s|-])*\.(?:mp4|MP4)/g)) return api.sendMessage(getText("invaildURL"), threadID, messageID);
                    try {
                        await global.utils.downloadFile(msg, pathmp4);
                    } catch (e) { return api.sendMessage(getText("internetError"), threadID, messageID) }
                    return api.sendMessage({ body: getText("savemp4Success"), attachment: createReadStream(pathmp4) }, threadID, messageID);
                }
            }
            default: {
                return global.utils.throwError(this.config.name, threadID, messageID);
            }
        }
    } catch (e) { return console.log(e) };
}