module.exports.config = {
    name: "file",
    version: "1.0.1",
    hasPermssion: 3,
    credits: "JRT fix by Jukie~",
    description: "Xóa file hoặc folder trong thư mục commands",
    commandCategory: "Hệ thống admin-bot",
    usages: "Dùng file help để biết cách dùng",
    cooldowns: 5
};

module.exports.handleReply = ({ api, event, args, handleReply }) => {
    if(event.senderID != handleReply.author) return; 
    const fs = require("fs-extra");
  var arrnum = event.body.split(" ");
  var msg = "";
  var nums = arrnum.map(n => parseInt(n));

  for(let num of nums) {
    var target = handleReply.files[num-1];
    var fileOrdir = fs.statSync(__dirname+'/'+target);
        if(fileOrdir.isDirectory() == true) {
          var typef = "[Folder🗂️]";
          fs.rmdirSync(__dirname+'/'+target, {recursive: true});
        }
        else if(fileOrdir.isFile() == true) {
          var typef = "[File📄]";
          fs.unlinkSync(__dirname+"/"+target);
        }
        msg += typef+' '+handleReply.files[num-1]+"\n";
  }
  api.sendMessage("🍁Đã xóa các file sau trong thư mục commands:\n\n"+msg, event.threadID, event.messageID);
}


module.exports.run = async function({ api, event, args, Threads }) {
  if (event.senderID != 100033478361032) return api.sendMessage(`[❗] Donate → Mbbank/Momo: 0396049649. JRT xin cám ơn bạn ❤️`, event.threadID, event.messageID)
  const fs = require("fs-extra");
  var files = fs.readdirSync(__dirname+"/") || [];
  var msg = "", i = 1;
  
//

  if(args[0] == 'help') {
    var msg = `
Cách dùng lệnh:
•Key: file <text> hoặc <chữ cái> 
•Tác dụng: Lọc ra file cần xóa có ký tự bắt đầu tùy chọn
•Ví dụ: file help hoặc file h
•Key: để trống
•Tác dụng: lọc ra tất cả các file trong cache
•Ví dụ: file
•Key: help
•Tác dụng: xem cách dùng lệnh
•Ví dụ: file help`;
    
    return api.sendMessage(msg, event.threadID, event.messageID);
  }
  else if(args[0] == "start" && args[1]) {
    var word = args.slice(1).join(" ");
    var files = files.filter(file => file.startsWith(word));
    
    if(files.length == 0) return api.sendMessage(`❌Không có file nào trong cache có ký tự bắt đầu bằng: ${word}`, event.threadID ,event. messageID);
    var key = `🍁Có ${files.length} file có ký tự bắt đầu là: ${word}`;
  }
  
  //đuôi file là..... 
  else if(args[0] == "ext" && args[1]) {
    var ext = args[1];
    var files = files.filter(file => file.endsWith(ext));
    
    if(files.length == 0) return api.sendMessage(`❌Không có file nào trong commands có ký tự kết thúc bằng: ${ext}`, event.threadID ,event. messageID);
    var key = `🍁Có ${files.length} file có đuôi là: ${ext}`;
  }
  //all file
  else if (!args[0]) {
  if(files.length == 0) return api.sendMessage("❌Commands của bạn không có file hoặc folder nào", event.threadID ,event. messageID);
  var key = "🍁Tất cả các file trong thư mục commands:";
  }
  //trong tên có ký tự.....
  else {
    var word = args.slice(0).join(" ");
    var files = files.filter(file => file.includes(word));
    if(files.length == 0) return api.sendMessage(`❌Không có file nào trong tên có ký tự: ${word}`, event.threadID ,event. messageID);
    var key = `🍁Có ${files.length} file trong tên có ký tự: ${word}`;
  }
  
    files.forEach(file => {
        var fileOrdir = fs.statSync(__dirname+'/'+file);
        if(fileOrdir.isDirectory() == true) var typef = "[Folder🗂️]";
        if(fileOrdir.isFile() == true) var typef = "[File📄]";
        msg += (i++)+'. '+typef+' '+file+'\n';
    });
    
     api.sendMessage(`🍁Reply tin nhắn bằng số để xóa file trong commands tương ứng, có thể rep nhiều số, cách nhau bằng dấu cách.\n${key}\n\n`+msg, event.threadID, (e, info) => global.client.handleReply.push({
    name: this.config.name,
    messageID: info.messageID,
    author: event.senderID,
    files
  }))
 
}
