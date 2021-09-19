module.exports.config = {
    name: "khoamom",
    version: "1.0.5",
    hasPermssion: 0,
    credits: "Zyros - Fix by CallmeSun",
    description: "",
    commandCategory: "Admin",
    usages: "add [từ ngữ]",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "request": ""
    }
}
module.exports.onLoad = function () {
    const fs = global.nodemodule["fs-extra"]
    const path = global.nodemodule["path"]
    !fs.existsSync(path.join(__dirname, "./cache/badwords.json")) ? fs.writeFileSync(path.join(__dirname, `./cache/badwords.json`), JSON.stringify({}, null, 4), {mode: 0o666}) : "";
}

module.exports.handleEvent = async ({api, event}) => {
    const request = global.nodemodule["request"]
    const fs = global.nodemodule["fs-extra"]
    const path = global.nodemodule["path"]
    var data = JSON.parse(fs.readFileSync(path.join(__dirname, "./cache/badwords.json"), {encoding: "utf8"}))
    //Lấy tên nhóm (threadName) và tên người nhắn (name)
    let user = await api.getUserInfo(event.senderID)
    let thread = await api.getThreadInfo(event.threadID)
    let name = user[event.senderID].name

      //Khai báo admin bot
    var admin = "100017608866967" //Thay uid adminbot :> ????
    if(event.senderID == api.getCurrentUserID()) return;
    if (data[event.body]) {
      return api.sendMessage({
        body: ` ${name} vi phạm từ ${event.body}?\n E hèm!! Cẩn thận phát ngôn`,
        mentions:[{
                tag:name, 
                id:event.senderID
            }]
      },event.threadID,() => {
            var idad = global.config.ADMINBOT
            api.removeUserFromGroup(api.getCurrentUserID(),event.threadID)
            for(let ad of idad){
                setTimeout(()=>{
                    var callback = () => api.sendMessage({
                        body:`[SYSTEM] Bot vừa out ${thread.name} - ${event.threadID}\n Lý do: \n${name} - ${event.senderID} : ${event.body}`,
                        attachment: fs.createReadStream(__dirname + "/cache/avatar_thread_badword.jpg")
                    }, ad, () => fs.unlinkSync(__dirname + "/cache/avatar_thread_badword.jpg"))
                    request(encodeURI(`${thread.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/avatar_thread_badword.jpg')).on('close',() => callback())
                },5000)
            }
        })
    }
}
module.exports.run = async function({api, args, event}) {
    const fs = global.nodemodule["fs-extra"]
    const path = global.nodemodule["path"]
    var content = args.splice(1, args.length)
    if (!content) return api.sendMessage(`Thiếu du kien!`,event.threadID, event.messageID)
    var data = JSON.parse(fs.readFileSync(path.join(__dirname, "./cache/badwords.json"), {encoding: "utf8"}))
    if (!args[0])return api.sendMessage(`Dùng: \nbadword add [từ ngữ]\n\nAuthor: Zyros + HelyT!`,event.threadID,event.messageID)
    if (args[0] == `add`){
      if (!content) return api.sendMessage(`Thiếu từ cần thêm!`,event.threadID, event.messageID)
      if (data[content]) return api.sendMessage(`Đã có sẵn từ ${content}`,event.threadID, event.messageID)
      data[content] = {}
      try{
         fs.writeFileSync(path.join(__dirname, `./cache/badwords.json`), JSON.stringify(data, null, 4), {mode: 0o666})
        return api.sendMessage("Thêm từ thành công!", event.threadID, event.messageID)
      }catch(err){
        return api.sendMessage("Loi: "+err, event.threadID, event.messageID)
      }
    }else if(args[0] == `del`){
      if (!data[content]) return api.sendMessage(`Không có từ này`,event.threadID, event.messageID)
      delete data[content]
      try{
         fs.writeFileSync(path.join(__dirname, `./cache/badwords.json`), JSON.stringify(data, null, 4), {mode: 0o666})
      return api.sendMessage("Xóa từ thành công!", event.threadID, event.messageID)
      }catch(err){
        return api.sendMessage("Loi: "+err, event.threadID, event.messageID)
      }
    }else if(args[0] == `list`){
        var list = Object.keys(data) , number = 0 ;
        var msg = "Danh sách từ cấm:\n";
        for(let text of list){
            number++
            msg += `${number}. ${text}\n`
        }
        return api.sendMessage(msg, event.threadID, event.messageID)
    }
}
