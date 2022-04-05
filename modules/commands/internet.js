module.exports.config = {
    name: "internet",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Hung cho",
    description: "Check thông tin địa chỉ ip mạng",
    commandCategory: "Thông tin",
    usages: "Check thông tin địa chỉ ip mạng",
    cooldowns: 5,
    dependencies: {
        "ip-info3": ""
    }
};

module.exports.run = async({ api, event, args }) => {
    const IPInfo = global.nodemodule["ip-info3"];
    const getinfo = new IPInfo.getIPInfo();

    if (args.length == 0) api.sendMessage("Vui lòng nhập địa chỉ ip.", event.threadID, event.messageID)
    getinfo.GetAll(args[0]).then(data => {
        var a = data
        api.sendMessage({
            body: `=====DATA======\n❄️Vùng: ${a.countryCode}\n💦Nước: ${a.country}\n👀ST: ${a.region}\n🐋Tỉnh: ${a.regionName}\n🦋Thành phố: ${a.city}\n🐧Múi giờ: ${a.timezone}\n🏝Nhà mạng: ${a.org}`,
            location: {
                latitude: a.lat,
                longitude: a.lon,
                current: true
            }
        }, event.threadID, event.messageID)
        if (a.message == 'private range') api.sendMessage("private range !!!", event.threadID, event.messageID)
        if (a.message == 'invalid query') api.sendMessage("Địa chỉ ip không hợp lệ.", event.threadID, event.messageID)
    })
}