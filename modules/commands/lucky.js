module.exports.config = {
	name: "lucky",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "HungCho",
	description: "Đoán con số may mắn từ 0 đến 5",
	commandCategory: "Giải trí",
	usages: "lucky 5",
    cooldowns: 5,
    dependencies: [],
};

module.exports.run = async ({ event, api, Currencies,args }) => {
 const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
  var data = await Currencies.getData(event.senderID);
  var money = data.money
  var i = 100;
  var number = getRandomInt(0, 5)
  if(money < 5) api.sendMessage("Bạn không đủ tiền !",event.threadID,event.messageID)
    else {
      if(!args[0]) api.sendMessage("Không có số dự đoán.",event.threadID,event.messageID)
        else{
         if(args[0] > 5) api.sendMessage("Dự đoán không được lớn hơn 5.",event.threadID,event.messageID)
           else {
             if(args[0] == number){
                 api.sendMessage(number + " chính là con số may mắn, bạn đã nhận được 100 đô.", event.threadID, () => Currencies.setData(event.senderID, options = {money: money + parseInt(i)}),event.messageID);
                }
         else api.sendMessage("Con số may mắn là " + number + "\n" + "Chúc bạn may mắn lần sau nhaaa !\n====Lưu ý====\nSau mỗi lần đoán sai, bạn sẽ bị trừ 10 đô, nếu bạn đúng bạn sẽ nhận lại 100 đô.",event.threadID, () => Currencies.setData(event.senderID, options = {money: money - 10}),event.messageID);
      }
    }
  }
};