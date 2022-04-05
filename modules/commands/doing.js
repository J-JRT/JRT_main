module.exports.config = {
    name: "doing",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "DuyVuongUwU",
    description: "work 3 khu ? ( 5k )",
    commandCategory: "Kiếm tiền",
    cooldowns: 3
};

module.exports.handleReply = async function ({ event, api, Currencies, handleReply }) {
if (String(event.senderID) !== String(handleReply.author)) return;
const { body, threadID, messageID, senderID } = event;
const { type } = handleReply;
switch (type) {
    case "work":
    switch (body) {
        case "1": {
        // khu công nghiệp
                    const job = [
            "đi bán vé số",
            "đi sửa xe",
            "làm nhân viên lập trình",
            "đi hack facebook",
            "làm thợ sửa ống nước ( ͡° ͜ʖ ͡°)",
            "làm đầu bếp",
            "làm thợ hồ",
            "fake taxi",
            "đi gangbang người khác",
            "làm re sờ chym mờ",
            "đi bán hàng online",
            "làm nội trợ",
            "đi vả mấy thằng sao đỏ, giun vàng",
            "đi bán hoa",
            "tìm jav/hentai code cho Nghĩa",
            "đi chơi Yasuo trong rank và gánh team",
            "nuôi tôi trong suốt 5 tháng"
        ];
        const amount = Math.floor(Math.random() * 600000);
        return api.sendMessage(`Bạn ${job[Math.floor(Math.random() * job.length)]} và đã nhận được số tiền là: ${amount} coins`, threadID, async () => {
            await Currencies.increaseMoney(senderID, parseInt(amount));
            data.workTime = Date.now();
            await Currencies.setData(event.senderID, { data });
            return;
        }, messageID);}
        case "2": {
        const job = [
     "nhặt được 1 cục vàng",
     "đào được 1 cục vàng",
     "đào được 3 cục than",
     "đào được 90 cục sắt",
     "đào được 1 cục sắt",
     "đào được 3 cục sắt",
     "đào được 90 cục than",
     "đào được 23 cục vàng",
     "đào được 90 cục than"
    ];
    const amount = Math.floor(Math.random() * 600000);
        return api.sendMessage(`Bạn ${job[Math.floor(Math.random() * job.length)]} và đã nhận được số tiền là: ${amount} coins`, threadID, async () => {
            await Currencies.increaseMoney(senderID, parseInt(amount));
            data.workTime = Date.now();
            await Currencies.setData(event.senderID, { data });
            return;
        }, messageID)};
        case "3": {
            const job = [
   "đào được dầu mỏ và thu được 5 thùng dầu",
   "đào được dầu mỏ vả thu được 90 thùng dầu",
   "đào được dầu mỏ và thu được 30 thùng dầu",
   "đào được dầu mỏ và thu được 900 thùng dầu",
   "đào được dầu mỏ và thu được 1 thùng dầu",
   "đào được dầu mỏ và thu được 92 thùng dầu",
   "đào được dầu mỏ và thu được 89 thùng dầu"
   ];
   const amount = Math.floor(Math.random() * 600000);
        return api.sendMessage(`Bạn ${job[Math.floor(Math.random() * job.length)]} và đã nhận được số tiền là: ${amount} coins`, threadID, async () => {
            await Currencies.increaseMoney(senderID, parseInt(amount));
            data.workTime = Date.now();
            await Currencies.setData(event.senderID, { data });
            return;
        }, messageID);
    }
        default : 
        return api.sendMessage(`Sai cú pháp.`,event.threadID,event.messageID);
    }
        return api.unsendMessage(handleReply.messageID);
  }
}
module.exports.run = async function ({ api, event, args, Users, permssion, getText }) {
const { body, threadID, messageID, senderID } = event;
return api.sendMessage(`💋🍑🍒 DOING 💋🍑🍒\n\n» Mời bạn nhập lựa chọn «\n1/ Khu công nghiệp\n2/ Khu mỏ quặng\n3/ khu mỏ dầu\n🛠. đang cập nhập thêm...\n\n» Hãy reply tin nhắn và chọn theo số «`, threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "work"
                });
            }, messageID);

}