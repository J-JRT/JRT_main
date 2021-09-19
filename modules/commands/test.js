module.exports.config = {
	name: "test",
	version: "0.0.1-beta",
	hasPermssion: 2,
	credits: "bla bal",
    description: "Yêu cầu công việc/đóng góp ý kiến",
	commandCategory: "other",
	usages: "suggest option input",
};

module.exports.schedule = ({ event, api }) => {
    return api.sendMessage("Time is over, noob!", event.threadID, event.messageID);
}

module.exports.run = async ({ event, args, api, client }) => {
    const moment = require("moment");
    var time = new Date(moment.tz("Asia/Ho_Chi_minh").toISOString()).getTime();
    time = time + (30 *1000);
    client.schedule.push({
        commandName: this.config.name,
        timestamp: time,
        event
    })
    return api.sendMessage("done!", event.threadID, event.messageID);
}
