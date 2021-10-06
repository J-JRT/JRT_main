module.exports.config = {
  name: "demngayyeu",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "⚡️D-Jukie",
  description: "Đếm ngày yêu nhau",
  commandCategory: "Tình yêu",
  cooldowns: 5
}

module.exports.handleEvent = async function ({ api, event, args, Users,Threads }) {

  if ((event.body.toLowerCase() == "demngayyeu") || (event.body.toLowerCase() == "đny") || (event.body.toLowerCase() == "đếm ngày yêu") || (event.body.toLowerCase() == "time love") || (event.body.toLowerCase() == "Time love") || (event.body.toLowerCase() == "Đếm ngày yêu")) {


        var countDownDate = new Date(2021, 07, 08, 0, 0, 0).getTime();
        var now = new Date().getTime();      
        var distance = countDownDate - now;      
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        return api.sendMessage(`🍁Đếm ngày yêu admin🍂\n\n${days} ngày ${hours} tiếng ${minutes} phút ${seconds} giây`, event.threadID, event.messageID);
      }
}

module.exports.run = async function ({ event, api, args, Users,Threads, __GLOBAL }) {

  if (!args[0]) {
        var countDownDate = new Date(2021, 07, 08, 21, 50, 0).getTime();
        var now = new Date().getTime();      
        var distance = countDownDate - now;      
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        return api.sendMessage(`🍁Đếm ngày yêu admin🍂\n\n💟${days} ngày ${hours} tiếng ${minutes} phút ${seconds} giây`, event.threadID, event.messageID);
  }
  else {

  const ngay = args[0]; 
  const thang = args[1];  
  if (!args[2]) {
    return api.sendMessage(`🔰Vui lòng nhập theo định dạng ngày tháng năm. VD: 26 02 2021`, event.threadID, event.messageID);
  }  
  const nam = args[2];
 if (args[2] == '2021') {
        var countDownDate = new Date(nam, thang, ngay, 0, 0, 0).getTime();
        var now = new Date().getTime();      
        var distance = countDownDate - now;      
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        return api.sendMessage(`💟Đếm ngày yêu bạn💟\n🍁Bắt đầu từ: ${ngay}/${thang}/${nam} \n🍂Tổng cộng: ${days} ngày ${hours} tiếng ${minutes} phút ${seconds} giây`, event.threadID, event.messageID);
 } 
 else {
  /*const namemd = "Trần Đức Bo"
  const name = args[3] || namemd*/
        var countDownDate = new Date(nam, thang, ngay, 0, 0, 0).getTime();
        var now = new Date().getTime();      
        var distance = now - countDownDate;      
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        return api.sendMessage(`💟Đếm ngày yêu của bạn💟\n🍁Bắt đầu từ: ${ngay}/${thang}/${nam} \n🍂Tổng cộng: ${days} ngày ${hours} tiếng ${minutes} phút ${seconds} giây`, event.threadID, event.messageID);
      }
    }
}

