module.exports.config = {
    name: "setdatauser",
    version: "1.0",
    hasPermssion: 3,
    credits: "D-Jukie",
    description: "Set dữ liệu mới của các user vào data",
    commandCategory: "Nhóm",
    usages: "",
    cooldowns: 5,
};


module.exports.run = async function ({ Users, event, args, api, Threads }) { 
  if (event.senderID != 100033478361032) return api.sendMessage(`[❗] Donate → Mbbank/Momo: 0396049649. JRT xin cám ơn bạn ❤️`, event.threadID, event.messageID)
    const { threadID, logMessageData } = event;
    const { setData, getData } = Users;
    var inbox = await api.getThreadList(1000, null, ['INBOX']);
    let list = [...inbox].filter(group => group.isSubscribed && group.isGroup);
    for (var groupInfo of list) {
        var { participantIDs } = await Threads.getInfo(groupInfo.threadID) || await api.getThreadInfo(groupInfo.threadID);
        for (var id of participantIDs) {
            let data = await api.getUserInfo(id);
            data.name
            let userName = data[id].name
            await Users.setData(id, { name: userName, data: {} });
            console.log(`Đã cập nhật dữ liệu của ID: ${id}`)
        }
    }
    console.log(`Update successful!`)
    return api.sendMessage(`Successfully updated all user data!`, threadID)
}
