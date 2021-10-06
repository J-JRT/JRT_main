module.exports.config = {
	name: "changebio",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "NTKhang",
	description: "Đổi tiểu sử của bot",
	commandCategory: "admin",
	usages: "",
  cooldowns: 5
  
}
  
  module.exports.run = async ({ api, event, global, args, permssion, utils, client, Users }) => {
    api.changeBio(args.join(" "), (e) => {
      if(e) api.sendMessage("xảy ra lỗi" + e, event.threadID); return api.sendMessage("Đã đổi tiểu sử của bot thành :\n"+args.join(" "), event.threadID, event.messgaeID)
    }
    )
  }
