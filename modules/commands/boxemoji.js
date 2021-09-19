module.exports.config = {
        name: "boxemoji",
        version: "1.0.0",
        hasPermssion: 0,
        credits: "HungCatMoi",
        description: "Đổi Emoji nhóm của bạn",
        commandCategory: "Box",
        usages: "boxemoji [name]",
        cooldowns: 0,
        dependencies: []
};

module.exports.run = async function({ api, event, args }) {
        const emoji = args.join(" ")
        return api.changeThreadEmoji(`${emoji}`, event.threadID);
}