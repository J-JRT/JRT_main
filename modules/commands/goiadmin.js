module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JRT",
  description: "Bot sẽ rep ng tag admin hoặc rep ng tagbot ",
  commandCategory: "Không cần dấu lệnh",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "") {
    var aid = ["100038526232215"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Tag lần nữa bố ban khỏi dùng 😼","Kêu réo thí chi lắm vậy :))","Đừng spam nữa :< cô chủ em đang học :((","Hãy dùng .callad để báo cáo cho chủ tôi biết!","Tag admin chi vậy?","Hiện tại cô chủ không có mặt ở đây! Vui lòng nhắn tin qua mess hoặc liên hệ trực trực tiếp để gặp được chủ tôi! ✅","Vui lòng dùng .ad hoặc .adm để biết thêm thông tin liên hệ admin!!!","Hiện tại người dùng không liên lạc được. Vui lòng đợi trong giây lát!","Sao? Có chuyện gì quan trọng mà kêu cả chủ tôi vậy?","Đừng mách lẽo với chủ em :<<","Em sai rồi! Đừng mách cô chủ :< em sẽ bị mắng đó 🥺","Ơ con tró này :)) đã bảo đừng tag nữa mà sao mày lì vậy 😾","Cô chủ đang học. Vui lòng không spam!!!","Tag gì lắm vậy? Tính không cho cô chủ phút giây bình yên à :))","Vui lòng ship 100 ly trà sữa để gọi hồn chủ tôi lên!!!","Tag một lần nữa mày xác định 🙂","Tag admin lần nữa tau sút :))","Sao tag có việc gì ngồi xuống uống tách trà tâm sự","Cô ấy đang bận ? Có chi không?"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
