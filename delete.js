module.exports.config = {
    name: "delete",
    version: "0.0.1",
    hasPermssion: 2,
    credits: "loi",
    description: "thay đổi số tiền của bản thân hoặc người được tag",
    commandCategory: "Economy",
    usages: "setmoney [Tag]",
    cooldowns: 5,
    info: [
        {
            key: 'Tag',
            prompt: 'Để trống hoặc tag một người nào đó, có thể tag nhiều người',
            type: 'Văn Bản',
            example: '@Mirai-chan'
        }
    ]
};

module.exports.run = async function({ api, event, args, Currencies, utils }) {
    if(args[0]=="money"){
var mention = Object.keys(event.mentions)[0];
        const moneydel = (await Currencies.getData(mention)).money;
        api.sendMessage("cút", event.threadID, async () => await Currencies.decreaseMoney(mention, parseInt(moneydel)));
        }
}