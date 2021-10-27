module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "JRT",
  description: "Tag admin",
  commandCategory: "Hệ thống admin-bot",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = async function ( { api, event } ) {
    var idad = ["100033478361032","100022113516016"];
    for (const id of idad) {
    if (!id) return
    if (!idad) return
    if(!event.body) return
    if (Object.keys(event.mentions) == id) {
      var msg = ["Tag Admin có gì ko?","Sao?? Làm ơn nhắn qua mess hoặc zalo để liên hệ ông chủ!!","Sao gọi chủ tôi có việc gì?","Hiện ông chủ tôi đang bận hãy sử dụng callad để liên hệ","Hãy dùng lệnh #ad để biết thông tin liên hệ chủ tôi","Tag nữa ăn đấm","Tag làm gì?","Sao? Tag có việc gì?","Thích tag ko :)","Tag gì lắm vậy? Bộ ko cho chủ tao xin phút gây bình yên à?","Sao tag có việc gì ngồi xuống uống tách trà tâm sự","Hãy dùng callad để liên hệ với admin >,<","Đây là trang web thông tin của admin, có gì liên hệ qua web này: https://j-jrt.github.io/Info/"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    else return
    }
}
module.exports.run = async function ( { api, event } ) {
api.sendMessage(`Tự động trả lời khi tag admin`,event.threadID,event.messageID)
}
