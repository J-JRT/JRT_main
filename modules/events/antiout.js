module.exports.config = {
    name: "antiout",
    eventType: ["log:unsubscribe"],
    version: "1.0.0",
    credits: "ProCoderMew",
    description: "Listen events",
    dependencies: {
        "path": ""
    }
};

module.exports.run = async function({ api, event, Users }) {
    const { resolve } = global.nodemodule["path"];
    const path = resolve(__dirname, '../commands', 'cache', 'meewmeew.json');
    const { antiout } = require(path);
    const { logMessageData, author, threadID } = event;
    const id = logMessageData.leftParticipantFbId;
    if (id == api.getCurrentUserID()) return;
    if (author == id) {
        const name = await Users.getNameUser(id) || "Người dùng Facebook";
        if (antiout.hasOwnProperty(threadID) && antiout[threadID] == true) {
            try {
                await this.addUser({ id, name, api, event });
            }
            catch {
                return api.sendMessage(`💢💢Rất tiếc không thể thêm ${name} vừa out vào lại nhóm.`, threadID);
            }
        }
    }
}

module.exports.addUser = async function({ id, name, api, event }) {
    const join = require("./join").run;
    const form = {
        type: 'event',
        threadID: event.threadID,
        logMessageType: 'log:subscribe',
        author: api.getCurrentUserID(),
        logMessageData: { addedParticipants: [{ userFbId: id, fullName: name }] }
    };

    await api.addUserToGroup(id, event.threadID);
    await join({ api, event: form });
}