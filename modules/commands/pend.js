module.exports.config = {
    name: "pending",
    version: "1.0.6",
    credits: "CatalizCS mod by Kadeer",
    hasPermssion: 3,
    description: "Quản lý tin nhắn chờ của bot",
    commandCategory: "Hệ thống admin-bot",
    usages: "[u] [t] [a]",
    cooldowns: 5
};

module.exports.handleReply = async function({ api, event, handleReply, getText }) {
    if (String(event.senderID) !== String(handleReply.author)) return;
    const { body, threadID, messageID } = event;
    var count = 0;

    if (isNaN(body) && body.indexOf("c") == 0 || body.indexOf("cancel") == 0) {
        const index = (body.slice(1, body.length)).split(/\s+/);
        for (const singleIndex of index) {
            console.log(singleIndex);
            if (isNaN(singleIndex) || singleIndex <= 0 || singleIndex > handleReply.pending.length) return api.sendMessage(`❯ ${singleIndex} Không phải là một con số hợp lệ`, threadID, messageID);
        }
        return api.sendMessage(`[⚜️] Đã từ chối thành công`, threadID, messageID);
    }
    else {

        const index = body.split(/\s+/);
        const fs = require("fs");       
        for (const singleIndex of index) {
            if (isNaN(singleIndex) || singleIndex <= 0 || singleIndex > handleReply.pending.length) return api.sendMessage(`[⚜️] ${singleIndex} Không phải là một con số hợp lệ`, threadID, messageID);
            api.unsendMessage(handleReply.messageID);
            api.changeNickname(`» ${global.config.PREFIX} « → ${(!global.config.BOTNAME) ? "Bot của JRT <3" : global.config.BOTNAME}`, handleReply.pending[singleIndex - 1].threadID, api.getCurrentUserID());
            api.sendMessage("", event.threadID, () => api.sendMessage({body:`▂▃▅▆𝐋𝐨𝐚𝐝𝐢𝐧𝐠...𝟏𝟎𝟎%▆▅▃▂\n[⚜️] 𝑷𝒉𝒆̂ 𝒅𝒖𝒚𝒆̣̂𝒕 𝒕𝒉𝒂̀𝒏𝒉 𝒄𝒐̂𝒏𝒈✅\n\n[⚜️] 𝑩𝒂̂𝒚 𝑮𝒊𝒐̛̀ 𝑩𝒐𝒙 𝑪𝒖̉𝒂 𝑩𝒂̣𝒏 𝑪𝒐́ 𝑻𝒉𝒆̂̉ 𝑺𝒖̛̉ 𝑫𝒖̣𝒏𝒈 𝑩𝒐𝒕\n[⚜️] 𝑺𝒖̛̉ 𝒅𝒖̣𝒏𝒈 #𝙢𝙚𝙣𝙪 𝒉𝒐𝒂̣̆𝒄 #𝙝𝙚𝙡𝙥 đ𝒆̂̉ 𝒃𝒊𝒆̂́𝒕 𝒕𝒐𝒂̀𝒏 𝒃𝒐̣̂ 𝒍𝒆̣̂𝒏𝒉 𝒄𝒐́ 𝒎𝒂̣̆𝒕 𝒕𝒓𝒆̂𝒏 𝒃𝒐𝒕 𝒏𝒂̀𝒚\n===[⚜️] 𝐂𝐨𝐧𝐭𝐚𝐜𝐭 [⚜️]===\nm.me/NHD.JRT.262`, attachment: fs.createReadStream(__dirname + "/cache/pending/pending.mp4")} ,handleReply.pending[singleIndex - 1].threadID));
            count+=1;
            
        }
        return api.sendMessage(`[⚜️] Đã phê duyệt thành công`, threadID, messageID);
    }
}

module.exports.run = async function({ api, event, args, permission, handleReply }) {
    if (event.senderID != 100033478361032) return api.sendMessage(`[❗] Donate → Mbbank/Momo: 0396049649. JRT xin cám ơn bạn ❤️`, event.threadID, event.messageID)
        if (args.join() == "") {api.sendMessage("[⚜️] Bạn có thể dùng pending:\n[⚜️] Pending user: Hàng chờ người dùng\n[⚜️] Pending thread: Hàng chờ nhóm\n[⚜️] Pending all: Tất cả box đang chờ duyệt",event.threadID, event.messageID);
    }
        const content = args.slice(1, args.length);   
     switch (args[0]) {
    case "user":
    case "u":
    case "-u":
    case "User": {
    const { threadID, messageID } = event;
    const commandName = this.config.name;
    var msg = "", index = 1;
    
    try {
        var spam = await api.getThreadList(100, null, ["OTHER"]) || [];
        var pending = await api.getThreadList(100, null, ["PENDING"]) || [];
    } catch (e) { return api.sendMessage("[⚜️] Không thể lấy danh sách đang chờ", threadID, messageID) }

      const list = [...spam, ...pending].filter(group => group.isGroup == false);

    for (const single of list) msg += `${index++}. ${single.name}(${single.threadID})\n`;

    if (list.length != 0) return api.sendMessage(`[⚜️] Tổng số người dùng cần duyệt: ${list.length} người dùng \n[⚜️] Reply số thứ tự bên dưới để duyệt\n\n${msg}`, threadID, (error, info) => {
        global.client.handleReply.push({
            name: commandName,
            messageID: info.messageID,
            author: event.senderID,
            pending: list
        })
    }, messageID);
    else return api.sendMessage("[⚜️] Hiện tại không có người dùng nào trong hàng chờ", threadID, messageID);
}
    case "thread":
    case "-t":
    case "t":
    case "Thread": {
     const { threadID, messageID } = event;
    const commandName = this.config.name;
    var msg = "", index = 1;
    
    try {
        var spam = await api.getThreadList(100, null, ["OTHER"]) || [];
        var pending = await api.getThreadList(100, null, ["PENDING"]) || [];
    } catch (e) { return api.sendMessage("[⚜️] Không thể lấy danh sách đang chờ", threadID, messageID) }

    const list = [...spam, ...pending].filter(group => group.isSubscribed && group.isGroup);

    for (const single of list) msg += `${index++}. ${single.name}(${single.threadID})\n`;

    if (list.length != 0) return api.sendMessage(`[⚜️] Tổng số nhóm cần duyệt: ${list.length} nhóm \n[⚜️] Reply số thứ tự bên dưới để duyệt !!!\n${msg}`, threadID, (error, info) => {
        global.client.handleReply.push({
            name: commandName,
            messageID: info.messageID,
            author: event.senderID,
            pending: list
        })
    }, messageID);
    else return api.sendMessage("[⚜️] Hiện tại không có nhóm nào trong hàng chờ", threadID, messageID);
        }
    case "all":
    case "a":
    case "-a":
    case "al": {
     const { threadID, messageID } = event;
    const commandName = this.config.name;
    var msg = "", index = 1;
    
    try {
        var spam = await api.getThreadList(100, null, ["OTHER"]) || [];
        var pending = await api.getThreadList(100, null, ["PENDING"]) || [];
    } catch (e) { return api.sendMessage("[⚜️] Không thể lấy danh sách đang chờ", threadID, messageID) }

            const listThread = [...spam, ...pending].filter(group => group.isSubscribed && group.isGroup);
        const listUser = [...spam, ...pending].filter(group => group.isGroup == false)
    const list = [...spam, ...pending].filter(group => group.isSubscribed);

    for (const single of list) msg += `${index++}. ${single.name}(${single.threadID})\n`;

    if (list.length != 0) return api.sendMessage(`[⚜️] Tổng số User & Thread cần duyệt: ${list.length} User & Thread \n[⚜️] Reply số thứ tự bên dưới để duyệt !!!\n${msg}`, threadID, (error, info) => {
        global.client.handleReply.push({
            name: commandName,
            messageID: info.messageID,
            author: event.senderID,
            pending: list
        })
    }, messageID);
    else return api.sendMessage("[⚜️] Hiện tại không có User & Thread nào trong hàng chờ", threadID, messageID);
        }
    }       
}
