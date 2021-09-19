module.exports.config = {
	name: "canhbaos",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "DuyVuong",
	description: "Cảnh báo người dùng!",
	commandCategory: "system",
	cooldowns: 5,
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, writeFileSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const path = resolve(__dirname, "cache", "listwarning.json");
	if (!existsSync(path)) writeFileSync(path, JSON.stringify({}), 'utf-8');
	return;
}

module.exports.run = async function ({ event, api, args, permssion, Users }) {
    const { readFileSync, writeFileSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const { threadID, messageID, mentions, senderID } = event;
    const mention = Object.keys(mentions);

    const path = resolve(__dirname, "cache", "listwarning.json");
    const dataFile = readFileSync(path, "utf-8");
    var warningData = JSON.parse(dataFile);
    if (!args[0]) {
            if (permssion != 2) {
                var IDUser = event.senderID;
                var warnban = warningData[IDUser].warningLeft;
                var warnc = warningData[IDUser];
                var msg = `Bạn còn ${warningData[IDUser].warningLeft} lần cảnh báo.`;
                return api.sendMessage(msg, threadID, messageID);
            }
            var listUser = "";
            var dem = 0;
            for (const IDUser in warningData) {
                const name = global.data.userName.get(IDUser) || await Users.getNameUser(IDUser);
                var warnban = warningData[IDUser].warningLeft;
                dem += 1;
                if (warnban == 0) var msg = `${dem}/ ${name}: đã bị ban khỏi người dùng bot.\n`;
                else var msg = `${dem}/ ${name}: còn ${warningData[IDUser].warningLeft} lần cảnh báo.\n`
                listUser += msg;
            }
            if (listUser.length == 0) listUser = "Hiện tại chưa có người dùng nào bị cảnh cáo.";
            return api.sendMessage(listUser, threadID, messageID);
        }
        else if (args[0] == "reset") {
            writeFileSync(path, JSON.stringify({}), 'utf-8');
            return api.sendMessage("Đã reset lại toàn bộ list ban.", threadID, messageID);
        }
        else {
            return api.sendMessage("không thể xử lý yêu cầu của bạn.",threadID,messageID);
        }
}
