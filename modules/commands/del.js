module.exports.config = {
	name: "del",
	version: "1.0.0", 
	hasPermssion: 3,
	credits: "banledangyeuu",
	description: "Lọc box và người dùng",
	commandCategory: "Hệ thống admin-bot", 
	usages: "del [tag]", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function({ api, event, args, Users, Currencies, Threads }) {
  if (event.senderID != 100033478361032) return api.sendMessage(`[❗] Donate → Mbbank/Momo: 0396049649. JRT xin cám ơn bạn ❤️`, event.threadID, event.messageID)
    var {threadID, messageID, senderID} = event;
    if (args[0] == "user"){
            let number = [];
            let uidAll = await Currencies.getAll(['userID','exp']);
            uidAll.forEach(user => {
            if(user.exp > 1) return;
                Users.delData(user.userID);
                Currencies.delData(user.userID);
                number.push(user.userID);
            })
            return api.sendMessage(`Đã lọc ${number.length} cá cảnh.`,threadID);
    }
    if(args[0] == "thread"){
            //let number = [];
            api.getThreadList(50, null, ["INBOX"], (err, list) => getInfo({ list }))
            api.getThreadList(50, null, ["OTHER"], (err, list) => getInfo({ list }))
            api.getThreadList(50, null, ["PENDING"], (err, list) => getInfo({ list }))
            api.getThreadList(50, null, ["unread"], (err, list) => getInfo({ list }))
            var getInfo = ({ list }) => {
              list.forEach(info => {
                if (info.name == "" || info.participants < 20 || info.imageSrc == null) { 
                  //number.push(info);
                  api.removeUserFromGroup(api.getCurrentUserID(),info.threadID);
                  api.deleteThread(info.threadID, (err) => {
                    Threads.delData(info.threadID)
                    if(err) return console.error(err);
                    });
                }
              })
            }
           return api.sendMessage(`Đã lọc những nhóm không tên hoặc dưới 30 thành viên.`,threadID)
}
}
