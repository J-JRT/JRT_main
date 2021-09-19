module.exports.config = {
	name: "bans",
	version: "2.0.0",
	hasPermssion: 1,
	credits: "NTKhang & Editor By DuyVuong",
	description: "kiểm tra những người bị cảnh báo(nhớ set qtv cho bot nha)\nAuthor: NTKhang",
	commandCategory: "group",
	cooldowns: 5,
};

module.exports.run = async function({ api, args, Users, event, Threads, utils, client, permssion }) {
let {messageID, threadID, senderID} = event;
	var info = await api.getThreadInfo(threadID);
	var fs = require("fs-extra");
	
	if (!fs.existsSync(__dirname + `/cache/bans.json`)) {
			const dataaa = {warns: {}, banned: {}};
			fs.writeFileSync(__dirname + `/cache/bans.json`, JSON.stringify(dataaa));
					}
  var bans = JSON.parse(fs.readFileSync(__dirname + `/cache/bans.json`)); //đọc nội dung file
  /*
  {warns: {}, banned: {tid: []}};
  */
  if(!bans.warns.hasOwnProperty(threadID)) {
			bans.warns[threadID] = {}; 
			fs.writeFileSync(__dirname + `/cache/bans.json`, JSON.stringify(bans, null, 2));
  	
  }
	var dtwbox = bans.warns[threadID];
  		var allwarn = "";
  		for(let idtvw in dtwbox) {
  			var name = (await api.getUserInfo(idtvw))[idtvw].name, msg = "", solan = 1;
  			for(let reasonwtv1 of dtwbox[idtvw]) {
  				if (reasonwtv1 == "Không có lý do nào được đưa ra") var reasonwtv = ".";
  				else var reasonwtv = reasonwtv1;
  				msg += `${reasonwtv}`
  			}
  			if (msg == ".") allwarn += `${name}.`;
  			else allwarn += `${name}:${msg}\n`;
  		}
  		allwarn == "" ? api.sendMessage("Nhóm bạn chưa có ai bị ban.", threadID, messageID) : api.sendMessage("Danh sách những thành viên đã bị cấm vào nhóm:\n\n"+allwarn, threadID, messageID);
}