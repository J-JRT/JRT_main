module.exports.config = {
    name: "taglientuc",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "VanHung & Dựa trên demo của NTKhang",
    description: "Tag liên tục người bạn tag trong 5 lần\nCó thể gọi là gọi hồn người đó",
    commandCategory: "group",
    usages: "taglientuc @mention",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Cần phải tag 1 người bạn muốn gọi hồn", event.threadID);
    let data = await api.getUserInfo(mention);
    let name = data[parseInt(mention)].name;
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Bắt đầu gọi hồn!");
setTimeout(() => {a({body: "Alo con lợn" + " " + name, mentions: arraytag})} , 3000);
setTimeout(() => {a({body: "Có người cần gặp mày kìa đĩ ơi" + " " + name, mentions: arraytag})} , 7000);
setTimeout(() => {a({body: "Dậy đi con lợn này" + " " + name, mentions: arraytag})} , 11000);
setTimeout(() => {a({body: "Bạn ơi dậy thôi" + " " + name, mentions: arraytag})} , 15000);
setTimeout(() => {a({body: "Sáng rồi kìa dậy nào" + " " + name, mentions: arraytag})} , 20000);
setTimeout(() => {a({body: "Em yêu dậy nào" + " " + name, mentions: arraytag})} , 24000);
setTimeout(() => {a({body: "Dậy thôi nào" + " " + name, mentions: arraytag})} , 28000);
setTimeout(() => {a({body: "Địt mẹ mày bố nói tử tế mà đéo dậy à" + " " + name, mentions: arraytag})} , 32000);
setTimeout(() => {a({body: "Đĩ ơi có người gặp kìa" + " " + name, mentions: arraytag})} , 36000);
setTimeout(() => {a({body: "Con mẹ mày tỉnh đi thằng lồn" + " " + name, mentions: arraytag})} , 40000);
setTimeout(() => {a({body: "Hiện hồn đi thằng mặt lồn" + " " + name, mentions: arraytag})} , 44000);
setTimeout(() => {a({body: "Đĩ mẹ mày ra đây bô xem nào" + " " + name, mentions: arraytag})} , 48000);
setTimeout(() => {a({body: "Ngủ cái lồn sáng rồi dậy đi" + " " + name, mentions: arraytag})} , 52000);
setTimeout(() => {a({body: "Địt mẹ bố gọi đéo nghe à" + " " + name, mentions: arraytag})} , 56000);
setTimeout(() => {a({body: "Hiện ra bố mày xem nào" + " " + name, mentions: arraytag})} , 60000);
setTimeout(() => {a({body: "Cút bố đéo gọi nữa" + " " + name, mentions: arraytag})} , 64000);
    }
