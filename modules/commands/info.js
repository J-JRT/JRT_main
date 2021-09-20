module.exports.config = {
    name: "info",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "HungCho Mod By NguyenHoangAnhProCoder",
    description: "",
    commandCategory: "Media",
    usages: "",
    cooldowns: 4,
    dependencies: {
        "request": "",
        "fs": ""
    }
    
};

module.exports.run = async({api,event,args}) => {
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const threadSetting = global.data.threadData.get(parseInt(event.threadID)) || {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
     if (args.length == 0) return api.sendMessage(`Bạn có thể dùng:\n\n${prefix}${this.config.name} user => nó sẽ lấy thông tin của chính bạn.\n\n${prefix}${this.config.name} user @[Tag] => nó sẽ lấy thông tin người bạn tag.\n\n${prefix}${this.config.name} box => nó sẽ lấy thông tin box của bạn (số thành viên, djt nhau,...)\n\n${prefix}${this.config.name} user box [uid || tid.:\n\n${prefix}${this.config.name} admin => Thông tin cá nhân của Admin Bot]`, event.threadID, event.messageID);
    if (args[0] == "box") {
           if(args[1]){ let threadInfo = await api.getThreadInfo(args[1]);
           let imgg = threadInfo.imageSrc;
           var gendernam = [];
            var gendernu = [];
                for (let z in threadInfo.userInfo) {
                var gioitinhone = threadInfo.userInfo[z].gender;
                if(gioitinhone == "MALE"){gendernam.push(gioitinhone)
                }else{gendernu.push(gioitinhone)
                }};
             var nam = gendernam.length;
             var nu = gendernu.length;
             let sex = threadInfo.approvalMode;
       var pd = sex == false ? "tắt" : sex == true ? "bật" : "Kh";
       if(!imgg) api.sendMessage(`👀 Tên nhóm: ${threadInfo.threadName}\n🐧 TID: ${args[1]}\n🦋 Phê duyệt: ${pd}\n🐤 Emoji: ${threadInfo.emoji}\n☺️ Thông tin: \n» ${threadInfo.participantIDs.length} thành viên và ${threadInfo.adminIDs.length} quản trị viên.\n» Gồm ${nam} nam và ${nu} nữ.\n» Tổng số tin nhắn: ${threadInfo.messageCount}.`,event.threadID,event.messageID);
        else var callback = () => api.sendMessage({body:`👀 Tên nhóm: ${threadInfo.threadName}\n🐧 TID: ${args[1]}\n🦋 Phê duyệt: ${pd}\n🐤 Emoji: ${threadInfo.emoji}\n☺️ Thông tin: \n» ${threadInfo.participantIDs.length} thành viên và ${threadInfo.adminIDs.length} quản trị viên.\n» Gồm ${nam} nam và ${nu} nữ.\n» Tổng số tin nhắn: ${threadInfo.messageCount}.`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), event.messageID); 
      return request(encodeURI(`${threadInfo.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
      
      }
          
            let threadInfo = await api.getThreadInfo(event.threadID);
            let img = threadInfo.imageSrc;
            var gendernam = [];
            var gendernu = [];
                for (let z in threadInfo.userInfo) {
                var gioitinhone = threadInfo.userInfo[z].gender;
                if(gioitinhone == "MALE"){gendernam.push(gioitinhone)
                }else{gendernu.push(gioitinhone)
                }};
             var nam = gendernam.length;
             var nu = gendernu.length;
             let sex = threadInfo.approvalMode;
       var pd = sex == false ? "tắt" : sex == true ? "bật" : "Kh";
          if(!img) api.sendMessage(`👀 Tên nhóm: ${threadInfo.threadName}\n🐧 TID: ${event.threadID}\n🦋 Phê duyệt: ${pd}\n🐤 Emoji: ${threadInfo.emoji}\n☺️ Thông tin: \n» ${threadInfo.participantIDs.length} thành viên và ${threadInfo.adminIDs.length} quản trị viên.\n» Gồm ${nam} nam và ${nu} nữ.\n» Tổng số tin nhắn: ${threadInfo.messageCount}.`,event.threadID,event.messageID)
          else  var callback = () => api.sendMessage({body:`👀 Tên nhóm: ${threadInfo.threadName}\n🐧 TID: ${event.threadID}\n🦋 Phê duyệt: ${pd}\n🐤 Emoji: ${threadInfo.emoji}\n☺️ Thông tin: \n» ${threadInfo.participantIDs.length} thành viên và ${threadInfo.adminIDs.length} quản trị viên.\n» Gồm ${nam} nam và ${nu} nữ.\n» Tổng số tin nhắn: ${threadInfo.messageCount}.`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), event.messageID);   
      return request(encodeURI(`${threadInfo.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    }
               if (args.length == 0) return api.sendMessage(`Bạn có thể dùng:\n\n${prefix}${this.config.name} user => nó sẽ lấy thông tin của chính bạn.\n\n${prefix}${this.config.name} user @[Tag] => nó sẽ lấy thông tin người bạn tag.\n\n${prefix}${this.config.name} box => nó sẽ lấy thông tin box của bạn (số thành viên, djt nhau,...)\n\n${prefix}${this.config.name} user box [uid || tid]`, event.threadID, event.messageID);
    if (args[0] == "admin") {
      var callback = () => api.sendMessage(
  {body:`꧁ 𝐂𝐇À𝐎 𝐍𝐇Ữ𝐍𝐆 𝐍𝐆ƯỜ𝐈 𝐒Ử 𝐃Ụ𝐍𝐆 𝐁𝐎𝐓 ꧂\nミ★Thông Tin Về Admin Bot ★彡\n😎𝗔𝗗𝗠𝗜𝗡 𝗡𝗔𝗠𝗘 : Nguyễn Hải Đăng \n😗𝑩𝒊𝒆̣̂𝒕 𝒅𝒂𝒏𝒉 : JRT ~~\n🔊𝑮𝒊𝒐̛́𝒊 𝒕𝒉𝒊𝒆̣̂𝒖 : Mình là JRT, rất thích bóng đá, đi phượt và luôn khát khao đạt được mục đích của mình\n⚡Thông Tin Cá Nhân⚡\n👤Sinh ngày: 26-02-2003\n👀𝗧𝗶́𝗻𝗵 𝗰𝗮́𝗰𝗵 : Cục súc với thiên hạ nhưng dịu dàng với em\n🤧𝗖𝗵𝗶𝗲̂̀𝘂 𝗰𝗮𝗼: 1m75 (lùn được chưa)\n📱𝑳𝒊𝒆̂𝒏 𝑯𝒆̣̂ : 0396049649\n✈Quê Quán: Hà Nội\n🗺Nơi Sống : Ho Chi Minh City\n💑Mối quan hệ : đang trong giai đoạn tìm hiểu  \n📌𝐋𝐢𝐧𝐤 𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐚𝐝𝐦𝐢𝐧 : https://fb.me/NHD.JRT262\n📢𝑽𝒂̀𝒊 𝒍𝒐̛̀𝒊 𝒕𝒐̛́𝒊 𝒃𝒂̣𝒏 𝒅𝒖̀𝒏𝒈 : Vui lòng không spam khi sử dụng và trân thành cảm ơn bạn đã sử dụng sản phẩm\n☠𝙇𝙪̛𝙪 𝙮́ : Đừng có dại dột mà add 2 bot kẻo bị phát hiện là bạn toang đó <3\n🦯𝑪𝒂̉𝒏𝒉 𝒃𝒂́𝒐 : Vui lòng không dùng bot với mục đích xấu hay cố ý report acc facebook\n🌸Chúc bạn sử dụng vui vẻ <3\n________(❤´艸｀❤)________`,
    attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(
        encodeURI(`https://graph.facebook.com/${100033478361032}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    
      };

if (args[0] == "user") { 
    if(!args[1]){
    if(event.type == "message_reply") id = event.messageReply.senderID
    else id = event.senderID;
    let data = await api.getUserInfo(id);
    let url = data[id].profileUrl;
    let b = data[id].isFriend == false ? "không !" : data[id].isFriend == true ? "có !" : "Đéo";
    let sn = data[id].vanity;
    let name = await data[id].name;
    var sex = await data[id].gender;
    var gender = sex == 2 ? "Nam" : sex == 1 ? "Nữ" : "Trần Đức Bo";
    var callback = () => api.sendMessage({body:`😚Tên: ${name}` + `\n🏝URL cá nhân: ${url}` + `\n💦Tên người dùng: ${sn}\n🐧UID: ${id}\n🦋Giới tính: ${gender}\n❄️Kết bạn bot: ${b}`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
       return request(encodeURI(`https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   }
    else {
    
    if (args.join().indexOf('@') !== -1){
    var mentions = Object.keys(event.mentions)
    let data = await api.getUserInfo(mentions);
    let url = data[mentions].profileUrl;
    let b = data[mentions].isFriend == false ? "không !" : data[mentions].isFriend == true ? "có !" : "Đéo";
    let sn = data[mentions].vanity;
    let name = await data[mentions].name;
    var sex = await data[mentions].gender;
    var gender = sex == 2 ? "Nam" : sex == 1 ? "Nữ" : "Trần Đức Bo";
    var callback = () => api.sendMessage({body:`😚Tên: ${name}` + `\n🏝URL cá nhân: ${url}` + `\n💦Tên người dùng: ${sn}\n🐧UID: ${mentions}\n🦋Giới tính: ${gender}\n❄️Kết bạn bot: ${b}`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
       return request(encodeURI(`https://graph.facebook.com/${mentions}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    }
    else {
    let data = await api.getUserInfo(args[1]);
    let url = data[args[1]].profileUrl;
    let b = data[args[1]].isFriend == false ? "không !" : data[args[1]].isFriend == true ? "có !" : "Đéo";
    let sn = data[args[1]].vanity;
    let name = await data[args[1]].name;
    var sex = await data[args[1]].gender;
    var gender = sex == 2 ? "Nam" : sex == 1 ? "Nữ" : "Trần Đức Bo";
    var callback = () => api.sendMessage({body:`😚Tên: ${name}` + `\n🏝URL cá nhân: ${url}` + `\n💦Tên người dùng: ${sn}\n🐧UID: ${args[1]}\n🦋Giới tính: ${gender}\n❄️Kết bạn bot: ${b}`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
       return request(encodeURI(`https://graph.facebook.com/${args[1]}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    }
     }
   
    
     }


      }





  
