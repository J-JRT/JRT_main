module.exports.config = {
  name: "history",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "NTKhang",
  description: "Xem lịch sử sử dụng bot",
  commandCategory: "group",
  usages: "history",
  cooldowns: 5,
}

module.exports.handleReaction = async function({ handleReaction, api, event, global }) {

 api.unsendMessage(handleReaction.messageID);
}

module.exports.run = async function({ api, event, client, Threads, args }) {
  
  
  let allbox = (await api.getThreadList( 100, null, ["INBOX"])).filter(group => group.isSubscribed && group.isGroup);
  
  var msg = "";
  var dontuse = "";
  var hist = [];
  
for(let box of allbox) {
    try{
  let settings = (await Threads.getData(box.threadID)).settings || {};
  
  if(!settings.lastUse) {dontuse += box.name+"\nChưa sử dụng bot\n\n"}
     else{
    var datenow = settings.lastUse.datenow;
    var time = settings.lastUse.time;
    
    hist.push({
      threadID: box.threadID,
      time: time,
      datenow: datenow
    })
          }
  } catch(e) {}
  };
  
var history2 = hist.sort((a, b) => b.datenow - a.datenow);

  for(let lichsu of history2) {
    var name = (await Threads.getData(lichsu.threadID)).name;
    
    msg += name+'\n'+lichsu.threadID+"\n"+lichsu.time+"\n\n";
  }
  api.sendMessage("Lịch sử lần cuối sử dụng bot của các nhóm\n\n" +msg+"\n"+dontuse, event.threadID, (err, info) => client.handleReaction.push({
    name: this.config.name,
    messageID: info.messageID,
    author: event.senderID
  }), event.messageID);
  
}



module.exports.event = async function({ api, event, client, Threads, args, Users, global }) {
  if(!event.body) return;
  var prefix = global.config.PREFIX;
  if(event.body.indexOf(prefix) == 0 ) {
  const moment = require("moment-timezone");
  var time = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss D/MM/YYYY");
  let settings = (await Threads.getData(event.threadID)).settings;

    settings["lastUse"] = {datenow: Date.now(), time: time};
    
    await Threads.setData(event.threadID , {settings: settings})
  }
  
}