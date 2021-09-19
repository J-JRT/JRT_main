module.exports.config = {
	name: "trigger",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "NTKhang",
	description: "trigger",
	commandCategory: "hình ảnh",
	usages: "trigger || trigger @tag",
	cooldowns: 5,
	dependencies: {"fs-extra": "","discord.js": "","discord-image-generation" :"","node-superfetch": ""}
};

module.exports.run = async ({ event, api, args, Users }) => {
  const DIG = global.nodemodule["discord-image-generation"];
  const Discord = global.nodemodule['discord.js'];
  const request = global.nodemodule["node-superfetch"];
  const fs = global.nodemodule["fs-extra"];
  var id = Object.keys(event.mentions)[0] || event.senderID;
  var avatar = (await request.get(`https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).body;
  let img = await new DIG.Triggered().getImage(avatar);
  let attach = new Discord.MessageAttachment(img);
  var path_trigger = __dirname + "/cache/trigger.gif";
  fs.writeFileSync(path_trigger, attach.attachment);
  api.sendMessage({attachment: fs.createReadStream(path_trigger)}, event.threadID, () => fs.unlinkSync(path_trigger), event.messageID);
}