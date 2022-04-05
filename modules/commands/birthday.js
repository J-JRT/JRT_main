module.exports.config = {
    name: "birthday",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Cherry",
    description: "Xem hôm nay là sinh nhật của ai trong box?",
    commandCategory: "Thông tin",
    usages: "birthday",
    cooldowns: 10
};

const sinhnhatPath = __dirname + '/cache/sinhnhat.json';
const fs = require('fs');

module.exports.onLoad = () => {
  if (!fs.existsSync(sinhnhatPath)) fs.writeFileSync(sinhnhatPath, JSON.stringify({}));
}


module.exports.handleEvent = async function({ event, api }) {
    var { threadID, senderID } = event;
    let sinhnhatData = JSON.parse(fs.readFileSync(sinhnhatPath));
    if (!(senderID in sinhnhatData)) sinhnhatData[senderID] = { happyBirthday: false, time: Date.now() };
  if (sinhnhatData[senderID].happyBirthday && (Date.now() - sinhnhatData[senderID] > 31556952000)) sinhnhatData[senderID].happyBirthday = false;
    var userInfo = (await api.getUserInfo(senderID))[senderID] || "";
    if (!userInfo || userInfo.isBirthday == false || userInfo.isBirthday == true && sinhnhatData[senderID].happyBirthday == true) return;
    else {
        var msg = `🎂🎉🎊Chúc mừng sinh nhật ${userInfo.name} 🎊🎉🎂\n\nChúc em hạnh phúc đậm đà tình yêu 💏\nChúc em sức khỏe thật nhiều 💪\nChúc em may mắn vạn điều bình an 🍀\n\n`;
        userInfo.gender == "Nam" ? msg += `Chúc em ngày một giàu sang\nTrăm ngàn hạnh phúc, kho tàng tình yêu\nCuối thơ chúc nốt một điều\nChúc em may mắn, sớm chiều thành công🥰` : msg += `Chúc em ngày một giàu sang\nNiềm vui hạnh phúc càng ngày càng xinh\nChúc em êm ấm gia đình\nTuổi này kiếm được phúc tinh cuộc đời 😘`;
        sinhnhatData[senderID] = {
          happyBirthday: true,
          time: Date.now()
        };
    fs.writeFileSync(sinhnhatPath, JSON.stringify(sinhnhatData, null, 4));
        var tag = {
            tag: userInfo.name,
            id: senderID
        }
        api.sendMessage({ body: msg, mentions: tag}, threadID);
    }
    return;
}

module.exports.run = async function({ api, event, Users, Threads }) {
    var { threadID } = event;
    var threadData = await api.getThreadInfo(threadID) || "", tag = [], msg = "Hôm nay là ngày sinh nhật của:\n\n", birthday = "", num = 0;
    if (!threadData) return api.sendMessage("Thiếu dữ kiện để thực thi lệnh này.", threadID);
    var members = threadData.userInfo;
  // api.sendMessage(JSON.stringify(members, null, 4), threadID);
    for (var i of members) {
        if (i.isBirthday == false) continue;
        if (i.isBirthday == true) {
            num++;
            birthday += `${num}. ${i.name}\n`
            tag.push({
                tag: i.name,
                id: i.id
            });
        }
    }
    birthday ? msg += `${birthday}\nMọi người tới chúc mừng sinh nhật cho ${tag.length < 2 ? "bạn ấy" : "các bạn ấy"} nào.` : msg = "Hôm nay không là ngày sinh nhật của thành viên nào cả."
    return tag.length > 0 ? api.sendMessage({ body: msg, mentions: tag }, threadID) : api.sendMessage(msg, threadID);
}