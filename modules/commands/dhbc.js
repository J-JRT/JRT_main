  const coinsup = 10000 //thay số coins được nhận khi đoán trúng
const coinsdown = 2000 //thay số coins bị mất khi yêu cầu gợi ý
const timeUnsend = 1 //thời gian thu hồi tin nhắn sau khi trả lời đúng trong thời gian timeUnsend
const axios = global.nodemodule["axios"];
module.exports.config = {
    name: "dhbc",
    version: "1.2.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Đuổi hình bắt chữ trên chính messenger của bạn!!!",
    commandCategory: "Game",
    usages: "[1/2]",
    cooldowns: 10
};


module.exports.handleReply = async function ({
    args,
    event,
    Users,
    api,
    handleReply,
    Currencies
}) {
    var {
        tukhoa,
        suggestions
    } = handleReply;
    switch (handleReply.type) {
    case "choosee": {
        switch (event.body) {
        case "2": {
            api.unsendMessage(handleReply.messageID);
            const res = await axios.get(`https://raw.githubusercontent.com/J-JRT/api1/mainV2/data.json`);
            const length1 = res.data.doanhinh.length
            const dataGame = res.data.doanhinh[Math.floor(Math.random() * length1)]
            const tukhoadung = dataGame.tukhoa;
            const suggestions = dataGame.suggestions
            const fs = global.nodemodule["fs-extra"];
            const sokitu = dataGame.sokitu;
            const anh1 = dataGame.link1
            const anh2 = dataGame.link2


            let Avatar = (await axios.get(anh1, {
                responseType: "arraybuffer"
            })).data;
            fs.writeFileSync(__dirname + "/cache/anh1.png", Buffer.from(Avatar, "utf-8"));
            let Avatar2 = (await axios.get(anh2, {
                responseType: "arraybuffer"
            })).data;
            fs.writeFileSync(__dirname + "/cache/anh2.png", Buffer.from(Avatar2, "utf-8"));
            var imglove = [];
            imglove.push(fs.createReadStream(__dirname + "/cache/anh1.png"));
            imglove.push(fs.createReadStream(__dirname + "/cache/anh2.png"));

            var msg = {
                body: `⚡️Vui lòng reply tin nhắn này để trả lời:\nGợi ý: ${sokitu}\n\nReply: Gợi ý - để xem gợi ý 2 (-${coinsdown}$)`,
                attachment: imglove
            }
            return api.sendMessage(msg, event.threadID, (error, info) => {
                global.client.handleReply.push({
                    type: "reply",
                    name: this.config.name,
                    author: event.senderID,
                    messageID: info.messageID,
                    tukhoa: tukhoadung,
                    suggestions: suggestions
                })
            })
        }
        case "1": {
            api.unsendMessage(handleReply.messageID);
            const res = await axios.get(`https://raw.githubusercontent.com/J-JRT/api1/mainV2/data2.json`);
            const length2 = res.data.doanhinh.length
            const dataGame = res.data.doanhinh[Math.floor(Math.random() * length2)]
            const tukhoadung = dataGame.tukhoa;
            const suggestions = dataGame.suggestions
            const fs = global.nodemodule["fs-extra"];
            const sokitu = dataGame.sokitu;
            const anh1 = dataGame.link


            let Avatar = (await axios.get(anh1, {
                responseType: "arraybuffer"
            })).data;
            fs.writeFileSync(__dirname + "/cache/anh1.png", Buffer.from(Avatar, "utf-8"));
            var imglove = [];
            imglove.push(fs.createReadStream(__dirname + "/cache/anh1.png"));

            var msg = {
                body: `⚡️Vui lòng reply tin nhắn này để trả lời:\nGợi ý: ${sokitu}\n\nReply: Gợi ý - để xem gợi ý 2 (-${coinsdown}$)`,
                attachment: imglove
            }
            return api.sendMessage(msg, event.threadID, (error, info) => {
                global.client.handleReply.push({
                    type: "reply2",
                    name: this.config.name,
                    author: event.senderID,
                    messageID: info.messageID,
                    tukhoa: tukhoadung,
                    suggestions: suggestions
                })
            })
        }
        }
        const choose = parseInt(event.body);
        if (isNaN(event.body)) return api.sendMessage("⚡️Vui lòng nhập 1 con số", event.threadID, event.messageID);
        if (choose > 2 || choose < 1) return api.sendMessage("⚡️Lựa chọn không nằm trong danh sách.", event.threadID, event.messageID)
    }


    case "reply": {
        const dapan = event.body
        if (dapan.toLowerCase() == "gợi ý" ) { 
            let balance = (await Currencies.getData(event.senderID)).money;
            if (coinsdown > balance) return api.sendMessage(`Số dư không đủ ${coinsdown}$ để xem gợi ý!!`,event.threadID,event.messageID);
            await Currencies.decreaseMoney(event.senderID, parseInt(coinsdown))
            api.sendMessage(`⚡️Gợi ý cho bạn là: \n${suggestions} (-${coinsdown}$)`, event.threadID, event.messageID) 
        }
        else { 
        if (dapan.toLowerCase() == tukhoa) {
            //console.log(suggestions)
            await Currencies.increaseMoney(event.senderID, parseInt(coinsup))
            var name1 = await Users.getData(event.senderID)
            setTimeout(function () {
                api.unsendMessage(handleReply.messageID);
            }, timeUnsend*1000);
            return api.sendMessage(`⚡️${name1.name} đã trả lời chính xác!\n⚡️Đáp án: ${tukhoa} (+${coinsup}$)`, event.threadID, event.messageID)
        } else
            return api.sendMessage(`⚡️Sai rồi nha :v`, event.threadID, event.messageID)
    }
} ; break;
    case "reply2": {
        const dapan1 = event.body
        if (dapan1.toLowerCase() == "gợi ý") { 
            let balance = (await Currencies.getData(event.senderID)).money;
            if (coinsdown > balance) return api.sendMessage(`Số dư không đủ ${coinsdown}$ để xem gợi ý!!`,event.threadID,event.messageID);
            await Currencies.decreaseMoney(event.senderID, parseInt(coinsdown))
            api.sendMessage(`⚡️Gợi ý cho bạn là: \n${suggestions} (-${coinsdown}$)`, event.threadID, event.messageID) 
        }
            else {
            
        if (dapan1.toLowerCase() == tukhoa) {
            await Currencies.increaseMoney(event.senderID, parseInt(coinsup))
            var name1 = await Users.getData(event.senderID)
            setTimeout(function () {
                api.unsendMessage(handleReply.messageID);
            }, timeUnsend*1000);
            return api.sendMessage(`⚡️${name1.name} đã trả lời chính xác!\n⚡️Đáp án: ${tukhoa} (+${coinsup}$)`, event.threadID, event.messageID)
        } else
            return api.sendMessage(`⚡️Sai rồi nha :v`, event.threadID, event.messageID)
}
}
default: break;
    
}
}

module.exports.run = async function ({
    args,
    api,
    event,
    Users
}) {
    if ((this.config.credits) != "D-Jukie") { return api.sendMessage(`⚡️Phát hiện credits đã bị thay đổi`, event.threadID, event.messageID)}
    if (!args[0]) {
    return api.sendMessage(`⚡️Vui lòng thêm chế độ chơi:\n\n1: Một ảnh\n2: Hai ảnh\n\n⚡️Vui lòng reply tin nhắn này để chọn chế độ`, event.threadID, (error, info) => {
        
            global.client.handleReply.push({
                type: "choosee",
                name: this.config.name,
                author: event.senderID,
                messageID: info.messageID
            })
        })
    }
    if (args[0] == '1') {
    //api.unsendMessage(handleReply.messageID);
            const res = await axios.get(`https://raw.githubusercontent.com/J-JRT/api1/mainV2/data2.json`);
            const length2 = res.data.doanhinh.length
            const dataGame = res.data.doanhinh[Math.floor(Math.random() * length2)]
            const tukhoadung = dataGame.tukhoa;
            const suggestions = dataGame.suggestions
            const fs = global.nodemodule["fs-extra"];
            const sokitu = dataGame.sokitu;
            const anh1 = dataGame.link


            let Avatar = (await axios.get(anh1, {
                responseType: "arraybuffer"
            })).data;
            fs.writeFileSync(__dirname + "/cache/anh1.png", Buffer.from(Avatar, "utf-8"));
            var imglove = [];
            imglove.push(fs.createReadStream(__dirname + "/cache/anh1.png"));

            var msg = {
                body: `⚡️Vui lòng reply tin nhắn này để trả lời:\nGợi ý: ${sokitu}\n\nReply: Gợi ý - để xem gợi ý 2 (-${coinsdown}$)`,
                attachment: imglove
            }
            return api.sendMessage(msg, event.threadID, (error, info) => {
                global.client.handleReply.push({
                    type: "reply2",
                    name: this.config.name,
                    author: event.senderID,
                    messageID: info.messageID,
                    tukhoa: tukhoadung,
                    suggestions: suggestions
                })
            })    
    }
    if (args[0] == '2') {
    //api.unsendMessage(handleReply.messageID);
            const res = await axios.get(`https://raw.githubusercontent.com/J-JRT/api1/mainV2/data2.json`);
            const length1 = res.data.doanhinh.length
            const dataGame = res.data.doanhinh[Math.floor(Math.random() * length1)]
            const tukhoadung = dataGame.tukhoa;
            const suggestions = dataGame.suggestions
            const fs = global.nodemodule["fs-extra"];
            const sokitu = dataGame.sokitu;
            const anh1 = dataGame.link1
            const anh2 = dataGame.link2


            let Avatar = (await axios.get(anh1, {
                responseType: "arraybuffer"
            })).data;
            fs.writeFileSync(__dirname + "/cache/anh1.png", Buffer.from(Avatar, "utf-8"));
            let Avatar2 = (await axios.get(anh2, {
                responseType: "arraybuffer"
            })).data;
            fs.writeFileSync(__dirname + "/cache/anh2.png", Buffer.from(Avatar2, "utf-8"));
            var imglove = [];
            imglove.push(fs.createReadStream(__dirname + "/cache/anh1.png"));
            imglove.push(fs.createReadStream(__dirname + "/cache/anh2.png"));

            var msg = {
                body: `⚡️Vui lòng reply tin nhắn này để trả lời:\nGợi ý: ${sokiu}\n\nReply: Gợi ý - để xem gợi ý 2 (-${coinsdown}$)`,
                attachment: imglove
            }
            return api.sendMessage(msg, event.threadID, (error, info) => {
                global.client.handleReply.push({
                    type: "reply",
                    name: this.config.name,
                    author: event.senderID,
                    messageID: info.messageID,
                    tukhoa: tukhoadung,
                    suggestions: suggestions
                })
            })    
    }
}
