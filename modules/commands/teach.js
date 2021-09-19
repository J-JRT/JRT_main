/**
* @author ProCoderMew
* @warn Do not edit code or edit credits
*/

module.exports.config = {
	name: "teach",
	version: "2.0.6",
	hasPermssion: 0,
	credits: "ProCoderMew",
	description: "Dạy bot (dùng cho lệnh sim)",
	commandCategory: "general",
	usages: "hello => goodbye",
	cooldowns: 5,
	dependencies: {
		"axios": ""
	},
    envConfig: {
        APIKEY: "MEWc3VuOTQzO3RoaWVubGUwOTA0QGdtYWlsLmN"
    }
};

module.exports.run = async function({ api, event, args }) {
	const { APIKEY } = global.configModule.teach;
	const axios = global.nodemodule["axios"];
	const { data } = await axios("https://meewmeew.info/simsimi/teach?apikey=" + APIKEY, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		data: { teach: args.join(" ") }
	});
	if (data.success == false) return api.sendMessage(`${data.error}`, event.threadID, event.messageID);
	return api.sendMessage(`${data.data}`, event.threadID, event.messageID);
}