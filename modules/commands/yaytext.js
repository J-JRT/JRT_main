module.exports.config = {
    name: "yaytext",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "DuyVuongUwU",
    description: "tạo ra 1 text hay nèk",
    commandCategory: "Công cụ",
    cooldowns: 0
};
module.exports.run = async function({ api, event, args }) {
    const { threadID, messageID, senderID, body } = event;
    var content = args.join(" ").toLowerCase();;
    let msgtext = content.replace(/a/g, "𝒂").replace(/ạ/g, "𝒂̣").replace(/à/g, "𝒂̀").replace(/ả/g, "𝒂̉").replace(/á/g,"𝒂́").replace(/ắ/g, "𝒂̆́").replace(/ằ/g, "𝒂̆̀").replace(/ă/g, "𝒂̆").replace(/q/g, "𝒒").replace(/w/g, "𝒘").replace(/e/g, "𝒆").replace(/ể/g, "𝒆̂̉").replace(/ế/g, "𝒆̂́").replace(/ẹ/g, "𝒆̣").replace(/ê/g, "𝒆̂").replace(/ề/g, "𝒆̂̀").replace(/r/g, "𝒓").replace(/t/g, "𝒕").replace(/ỵ/g, "𝒚̣").replace(/y/g, "𝒚").replace(/ỷ/g, "𝒚̉").replace(/ỳ/g, "𝒚̀").replace(/u/g, "𝒖").replace(/ủ/g, "𝒖̉").replace(/ù/g, "𝒖̀").replace(/ú/g, "𝒖́").replace(/ụ/g, "𝒖̣").replace(/i/g, "𝒊").replace(/í/g, "𝒊́").replace(/ì/g, "𝒊̀").replace(/ị/g, "𝒊̣").replace(/o/g, "𝒐").replace(/ỏ/g, "𝒐̉").replace(/ò/g, "𝒐̀").replace(/ó/g, "𝒐́").replace(/ô/g, "𝒐̂").replace(/ồ/g, "𝒐̂̀").replace(/ố/g, "𝒐̂́").replace(/ổ/g, "𝒐̂̉").replace(/ố/g, "𝒐̂́").replace(/p/g, "𝒑").replace(/s/g, "𝒔").replace(/d/g, "𝒅").replace(/đ/g, "đ").replace(/f/g, "𝒇").replace(/g/g, "𝒈").replace(/h/g, "𝒉").replace(/j/g, "𝒋").replace(/k/g, "𝒌").replace(/l/g, "𝒍").replace(/z/g, "𝒛").replace(/x/g, "𝒙").replace(/c/g, "𝒄").replace(/v/g, "𝒗").replace(/b/g, "𝒃").replace(/n/g, "𝒏").replace(/m/g, "𝒎");
    return api.sendMessage(msgtext, threadID,messageID);
}