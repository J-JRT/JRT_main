module.exports.config = {
    name: "covid",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Lấy thông tin về covid 19 tại 1 quốc gia",
    commandCategory: "Tin tức",
    usages: "[country]",
    cooldowns: 5
};
module.exports.run = async function ({ api, event, args, utils  })  {
const axios = global.nodemodule['axios'];  
const fs = global.nodemodule["fs-extra"];
const request = global.nodemodule["request"];
const countryvietnam = "vietnam"
const link = args.join(" ") || countryvietnam
return request(encodeURI(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=${link}`), (err, response, body) => {
        if (err) return api.sendMessage("Đã có lỗi xảy ra!", event.threadID, event.messageID);
        var retrieve = JSON.parse(body);
        var text = '';
        retrieve[0].forEach(item => (item[0]) ? text += item[0] : '');
        var fromLang = (retrieve[2] === retrieve[8][0][0]) ? retrieve[2] : retrieve[8][0][0]
var options = {
  method: 'GET',
  url: 'https://covid-193.p.rapidapi.com/statistics',
  params: {country: text.toUpperCase()},
  headers: {
    'x-rapidapi-host': 'covid-193.p.rapidapi.com',
    'x-rapidapi-key': 'a012e05802msh4ce48bff26d5c0ap151d85jsn4edde7f89de0'
  }
};

axios.request(options).then(function (response) {
    console.log(response.data);
    const dataa = response.data
    const info = dataa.response
    const i = info[0]
    const country = i.country
    const continent = i.continent
    const population = i.population
    const a = i.cases
    const b = i.deaths
    api.sendMessage(`🌏Quốc gia: ${country}\n👨‍👨‍👧‍👦 Dân số: ${population}\n🥲 Tổng số ca mắc: ${a.total}\n💟 Đang điều trị: ${a.active}\n💥 Ca nhiễm mới trong ngày: ${a.new}\n🔮 Đã hồi phục: ${a.recovered}\n💢 Số ca tử vong trong ngày: ${b.new}\n🦯 Tổng số ca tử vong: ${b.total}\n\n⏱️Cập nhật: ${i.day}`, event.threadID);

}).catch(function (error) {
    api.sendMessage("❎Không tìm thấy thông tin quốc gia", event.threadID);
});

    });


}