module.exports.config = {
	name: "rdcolor",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "̣NTKhang",
	description: "Đổi chủ đề box chat ngẫu nhiên",
	commandCategory: "Group",
	usages: "",
	cooldowns: 5
};

module.exports.run = async function({ api, event, args }) {

var color = ['196241301102133', '169463077092846', '2442142322678320', '234137870477637', '980963458735625', '175615189761153', '2136751179887052', '2058653964378557', '2129984390566328', '174636906462322', '1928399724138152', '417639218648241', '930060997172551', '164535220883264', '370940413392601', '205488546921017', '809305022860427'];
  return api.changeThreadColor(color[Math.floor(Math.random() * color.length)], event.threadID)
};

