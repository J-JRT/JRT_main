module.exports.config = {
    name: "baucua",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Horizon Lucius Synthesis I",
    description: "Bầu cua đặt cược",
    commandCategory: "Game",
    usages: "baucua + tên + tìn :v",
    cooldowns: 5
};

module.exports.run = async function({ api, event, args, Currencies }) {
    const slotItems = ["🍐", "🦀", "🐟", "🦌", "🐓", "🦞"];
        const moneyUser = (await Currencies.getData(event.senderID)).money;
            var moneyBet = parseInt(args[1]);
                if (!args[0] || !isNaN(args[0])) return api.sendMessage("[𝑷𝑮🐧] => Hãy Bấm : /baucua [bầu/cua/cá/nai/gà/tôm] [số tiền]",event.threadID, event.messageID);
                if (isNaN(moneyBet) || moneyBet <= 0) return api.sendMessage("[𝑷𝑮🐧] => Số tiền đặt cược không được để trống hoặc là số tiền âm", event.threadID, event.messageID);
	        if (moneyBet > moneyUser) return api.sendMessage("[𝑷𝑮🐧] => Số tiền bạn đặt lớn hơn số dư của bạn!", event.threadID, event.messageID);
	    if (moneyBet < 1000) return api.sendMessage("[𝑷𝑮🐧] => Số tiền đặt không được dưới 1000 đô!", event.threadID, event.messageID);
    var number = [], win = false;
for (let i = 0; i < 3; i++) number[i] = slotItems[Math.floor(Math.random() * slotItems.length)];
    var itemm;
        switch (args[0]) {
            case "bầu":
                case "Bầu": itemm = "🍐";
                    break;
            case "cua": 
                case "Cua": itemm = "🦀";
                    break;
            case "cá":
                case "Cá": itemm = "🐟";
                    break;
            case "nai":
                case "Nai": itemm = "🦌";
                    break;
            case "gà": 
                case "Gà": itemm = "🐓";
                    break;
            case "tôm":
                case "Tôm": itemm = "🦞";
                    break;
                        default: return api.sendMessage("[𝑷𝑮🐧] => Hãy Bấm : /baucua [bầu/cua/cá/nai/gà/tôm] [số tiền]",event.threadID, event.messageID);
        }
    api.sendMessage("[𝑷𝑮🐧] => Đang Đập, À Không Đang Lắc!",event.threadID, event.messageID);
await new Promise(resolve => setTimeout(resolve, 3 * 1000));
var array = [number[0],number[1],number[2]];
    if (array.includes(itemm)) {
        var i = 0;
            if (array[0] == itemm) i+=1;
                if (array[1] == itemm) i+=1;
            if (array[2] == itemm) i+=1;
        if (i == 1) {
            var mon = parseInt(args[1]) + 300; 
                await Currencies.increaseMoney(event.senderID, mon);
                    return api.sendMessage(`[𝑷𝑮🐧] => Kết Quả : ${array.join("|")}\n[✤] => Được ${mon} Đô,Vì Có 1 ${itemm}!`,event.threadID, event.messageID);
        }
        else if (i == 2) {
            var mon = parseInt(args[1]) * 2; 
                await Currencies.increaseMoney(event.senderID, mon);
                    return api.sendMessage(`[𝑷𝑮🐧] => Kết Quả : ${array.join("|")}\n[✤] => Được ${mon} Đô,Vì Có 2 ${itemm}!`,event.threadID, event.messageID);
        }
        else if (i == 3) {
            var mon = parseInt(args[1]) * 3; 
                await Currencies.increaseMoney(event.senderID, mon);
                    return api.sendMessage(`[𝑷𝑮🐧] => Kết Quả : ${array.join("|")}\n[✤] => Được ${mon} Đô,Vì Có 3 ${itemm}!`,event.threadID, event.messageID);
        }
        else return api.sendMessage("[𝑷𝑮🐧] => Lỗi ! Code : XX1N",event.threadID,event.messageID);
    } else  {
        await Currencies.decreaseMoney(event.senderID, parseInt(args[1]));
           return api.sendMessage(`[𝑷𝑮🐧] => Kết Quả : ${array.join("|")}\n[✤] => Trừ ${args[1]} Đô,Vì Có 0 ${itemm}!`,event.threadID, event.messageID);
    }
};
