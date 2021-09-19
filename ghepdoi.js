
module.exports.config = {
	name: "ghepdoi",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "CatalizCS",
	description: "Ghép đôi với những người trong nhóm",
	commandCategory: "Hình ảnh",
	cooldowns: 90,
	dependencies: {
        "axios": "",
        "fs-extra": ""
    }
}

module.exports.handleReaction = async ({ event, api, handleReaction, Currencies}) => {
  if (event.userID != handleReaction.author) return;
	if (event.reaction != "❤") return; 
	  let {tien, author} = handleReaction;
	  const money = (await Currencies.getData(event.userID)).money;
		
    const axios = global.nodemodule["axios"];
    const { writeFileSync, createReadStream } = global.nodemodule["fs-extra"];
    const { threadID, messageID, userID } = event;
    if(money < tien) return api.sendMessage(`Bạn không đủ tiền để tiến hành ghép đôi, số tiền bạn đang có là: ${money}, còn thiếu ${tien-money} nữa thôi`, threadID, messageID)
    Array.prototype.random = function () { return this[Math.floor((Math.random()*this.length))]; };

    async function getDataThread(threadID) {
        try {
            var threadInfo = await api.getThreadInfo(threadID);
            return threadInfo.participantIDs.filter(item => item != api.getCurrentUserID() || item != userID);
        }
        catch (e) {
            console.log(e);
            return api.sendMessage("Không thể lấy thông tin của nhóm!", threadID, messageID);
        }
    }

    async function getUserInfo(userID) {
        try {
            const userInfo = await api.getUserInfo(userID);
            return { name: userInfo[userID].name, gender: userInfo[userID].gender };
        }
        catch (e) {
            console.log(e);
            return api.sendMessage("Không thể lấy thông tin của người dùng!", threadID, messageID);
        }
    }

    async function getAvatarUser(userID) {
        try {
            const avatar = (await axios.get( `https://graph.facebook.com/${userID}/picture?width=512&height=512&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`, { responseType: "arraybuffer" } )).data;
            writeFileSync( __dirname + `/cache/${userID}.png`, Buffer.from(avatar, "utf-8") );
            return createReadStream(__dirname + `/cache/${userID}.png`);
        }
         catch (e) {
            console.log(e);
            return api.sendMessage("Không thể lấy ảnh đại diện của người dùng!", threadID, messageID);
        }
    }

    const emoji = ["♥️","❤️","💛","💚","💙","💜","🖤","💖","💝","💓","💘","💍"].random();

    try {   
        const threadInfo = await getDataThread(threadID);
        const userIDRandom = threadInfo[Math.floor(Math.random() * threadInfo.length)];

        const userData = await getUserInfo(userID);
        const userDataRandom = await getUserInfo(userIDRandom);

        
        const avatarPath = await getAvatarUser(userID);
        const avatarPathRandom = await getAvatarUser(userIDRandom);

        api.changeNickname(`${(userData.gender == 2) ? "Vợ của" : (userData.gender == 1) ? "Chồng của" : "Bêđê"} ${userData.name} ${emoji}`, threadID, userIDRandom);
        api.changeNickname(`${(userData.gender == 2) ? "Chồng của" : (userData.gender == 1) ? "Vợ của" : "Bêđê"} ${userDataRandom.name} ${emoji}`, threadID, userID);
    
        return api.sendMessage({
            body: `Hai bạn đã ghép đôi thành công và bạn đã bay 1000 đô 💜\n\n  ${emoji} ${userData.name} - ${userDataRandom.name} ${emoji}`,
            mentions: [{ tag: userData.name, id: userID }, {tag: userDataRandom.name, id: userIDRandom}],
            attachment: [avatarPath, avatarPathRandom],
        }, threadID, async () => {
          await Currencies.decreaseMoney(userID, parseInt(tien));
        }, messageID);
    }
    catch (e) {
        console.log(e);
        return api.sendMessage("Không thể ghép đôi do module đã xảy ra lỗi!", threadID, messageID);
    }
}

module.exports.run = async ({ event, api }) => {
  var trutien = 1000;//số tiền trừ đi
  api.sendMessage(`Phí ghép đôi là ${trutien}, bạn có muốn ghép không, reaction tin nhắn này để xác nhận:\n♥ : đồng ý`, event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
      tien: trutien
    })
    },event.messageID);
}