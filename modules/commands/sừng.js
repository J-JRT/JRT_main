module.exports.config = {
 name: "sừng",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "BuiChiThong",
 description: "Cắm Sừng Một Người Bất Kỳ Mà Bạn Muốn",
 commandCategory: "game",
 usages: "camsung",
 cooldowns: 5
};

module.exports.run = async function({ api, event, Users, Currencies }) {
 var alluser = global.data.allUserID
    let victim = alluser[Math.floor(Math.random() * alluser.length)];
    let nameVictim = (await Users.getData(victim)).name
    if (victim == api.getCurrentUserID() && event.senderID == victim) return api.sendMessage('Rất tiếc, bạn không thể cắm sừng người này. Vui lòng thử lại.', event.threadID, event.messageID);
    var route = Math.floor(Math.random() * 2);
    if (route > 1 || route == 0) {
    const moneydb = (await Currencies.getData(victim)).money;
       var money = Math.floor(Math.random() * 1000) + 1;
        if (moneydb <= 0 || moneydb == undefined) return api.sendMessage(`Bạn vừa định cắm sừng ${nameVictim} là một người chung thủy vì vậy bạn không thể gạ gẫm được họ`, event.threadID, event.messageID);
        else if (moneydb >= money) return api.sendMessage(`Bạn vừa cắm sừng ${nameVictim} thành công hãy cố gắng giấu kính không người yêu bạn sẽ chôn sống bạn`, event.threadID, async () => {
            await Currencies.increaseMoney(victim, parseInt("-"+money))
            await Currencies.increaseMoney(event.senderID, parseInt(money))
        }, event.messageID);
        else if (moneydb < money) return api.sendMessage(`Bạn vừa cắm sừng ${nameVictim} ngay trong nhóm này chúc mừng bạn trở thành một đứa phản bội trong tình yêu`, event.threadID, async () => {
            await Currencies.increaseMoney(victim, parseInt("-"+money))
            await Currencies.increaseMoney(event.senderID, parseInt(money))
        }, event.messageID);
    }
    else if (route == 1) {
        var name = (await Users.getData(event.senderID)).name
        var moneyuser = (await Currencies.getData(event.senderID)).money
            if (moneyuser <= 0) return api.sendMessage("Vì Bạn Xấu Nên Không Thể Gạ Gẫm Được Ai Hãy Đi Phẫu Thuật Thẩm Mỹ Để Gạ Và Cắm Sừng Nhé", event.threadID, event.messageID);
            else if (moneyuser > 0) return api.sendMessage(`Bạn Vừa Bị Xe Tông Vì Tội Cắm Sừng Bạn Mất ${moneyuser} VND Để Nằm Viện .`, event.threadID, () => api.sendMessage({ body: `Xin Chia Buồn Cùng {nameVictim} Vợ Bạn Vừa Đánh Ghen ${name} Khiến Cái Quần Người Ấy Dính Lên Cây Ổi`, mentions: [{ tag: nameVictim, id: victim }, { tag: name, id: event.senderID }] }, event.threadID, async () => {
                await Currencies.increaseMoney(event.senderID, parseInt("-"+ moneyuser))
                await Currencies.increaseMoney(victim, parseInt(Math.floor(moneyuser / 2))) 
            }), event.messageID);
        
    }
}
