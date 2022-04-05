module.exports.config = {
    name: "slink",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ManhG",
    description: "Lấy url rút gọn, download từ video, audio được gửi từ nhóm",
    commandCategory: "Công cụ",
    usages: "",
    cooldowns: 5,
    dependencies: {
        tinyurl: ""
    }
}, module.exports.run = async ({
    api: e,
    event: s
}) => {
    let {
        messageReply: n,
        threadID: t
    } = s;
    if ("message_reply" !== s.type) return e.sendMessage("❌ Bạn phải reply một audio, video, ảnh nào đó", s.threadID, s.messageID);
    if (!s.messageReply.attachments || 0 == s.messageReply.attachments.length) return e.sendMessage("❌ Bạn phải reply một audio, video, ảnh nào đó", s.threadID, s.messageID);
    n.attachments.length;
    var a = await global.nodemodule.tinyurl.shorten(n.attachments[0].url);
    e.sendMessage(`${a}\n`, t)
};