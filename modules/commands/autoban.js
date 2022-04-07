 const so_lan_spam = 5; // số lần spam, vượt quá sẽ bị ban
  const thoi_gian_spam = 60000; // 60000 millisecond (1 phút)
  const unbanAfter = 86400000; // 600000 millisecond (10 phút) 
module.exports.config = {
	name: "autoban",
	version: "1.0.0",
	hasPermssion: 3, 
	credits: "NTKhang",
	description: "tự động cấm người dùng nếu spam bot (random image)",
	commandCategory: "Hệ thống admin-bot",
	usages: "x",
	cooldowns: 5
};

module.exports. run = ({api, event}) => {
  return api.sendMessage(`[⚜️] Spam bot thử xem =))\n[⚜️] Spam bot ${so_lan_spam} lần/${thoi_gian_spam/1000}(s)\n[⚜️] Auto bị ban 😃`, event.threadID, event.messageID);
};

module.exports.handleEvent = async ({ Users, api, event}) => {
	const fs = require("fs-extra");
	const moment = require("moment-timezone");
	
  let { senderID, messageID, threadID } = event;
  const so_lan_spam = 5; // số lần spam, vượt quá sẽ bị ban
  const thoi_gian_spam = 60000; // 60000 millisecond (1 phút)
  const unbanAfter = 86400000; // 600000 millisecond (10 phút) 
  const folderRandomImage = __dirname + "/Noprefix/gái";
  const allImage = fs.readdirSync(folderRandomImage);
  if (!global.client.autoban) global.client.autoban = {};
  if (!global.client.autoban[senderID]) {
    global.client.autoban[senderID] = {
      timeStart: Date.now(),
      number: 0
    }
  };

  //var dataThread = (await api.getThreadInfo(event.threadID));
 // var datat = dataThread.data; 
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const prefix = threadSetting.PREFIX || global.config.PREFIX;
	if (!event.body || event.body.indexOf(prefix) != 0) return;
	
	let dataUser = await Users.getData(senderID) || {};
	let data = dataUser.data || {};
	
	if ((global.client.autoban[senderID].timeStart + thoi_gian_spam) <= Date.now()) {
	  global.client.autoban[senderID] = {
	    timeStart: Date.now(),
	    number: 0
	  }
	}
	else {
	  global.client.autoban[senderID].number++;
	  if (global.client.autoban[senderID].number >= so_lan_spam) {
     // var idad = global.config.ADMINBOT
     // var idad = global.config.SUPERADMIN
	    const time = moment.tz("Asia/Ho_Chi_minh").format("DD/MM/YYYY HH:mm:ss");
			if (data && data.banned == true) return;
			data.banned = true;
			data.reason = `[⚜️] Spam bot ${so_lan_spam} lần/${thoi_gian_spam/1000}(s)`;
			data.autoban = {
			  timeStart: Date.now(),
			  unbanAfter
			};
			data.dateAdded = time;
			await Users.setData(senderID, { data });
			global.data.userBanned.set(senderID, { reason: data.reason, dateAdded: data.dateAdded });
			global.client.autoban[senderID] = {
	      timeStart: Date.now(),
	      number: 0
	    };
  		api.sendMessage({
  		  body: "[⚜️] Name: " + dataUser.name + "\n[⚜️] UID:" + senderID + `\n[⚜️] Bạn đã bị cấm sử dụng bot =)) ${unbanAfter/60000}phút với lý do: spam bot \n[⚜️] Auto unban sau ${Math.floor(unbanAfter/60000)} phút`,
  		  attachment: fs.createReadStream(`${folderRandomImage}/${allImage[Math.floor(Math.random()*allImage.length)]}`)}, threadID, () => {
  		    setTimeout(async function() {
  		      delete data.autoban;
      	    data.banned = false;
      			data.reason = null;
      			data.dateAdded = null;
      			await Users.setData(senderID, { data });
      			global.data.userBanned.delete(senderID);
      			console.log("Unban rồi nha")
  		    }, unbanAfter);
  		  });
      var idad = global.config.ADMINBOT 
      var idad = global.config.SUPERADMIN
        for (let idAdmin of idad) {
         
  		  api.sendMessage("[⚜️] UID:" + senderID + "\n[⚜️] Name:  " + dataUser.name + `\n[⚜️] Lí do: tại nó spam bot ${so_lan_spam} lần/phút \n[⚜️] Sẽ gỡ ban cho tù nhân ${Math.floor(unbanAfter/60000)}phút\n[⚜️] Thời gian: ` + time, idAdmin); 
		  };
	  }
	}
};

//gửi all admin
// FIX ERROR
