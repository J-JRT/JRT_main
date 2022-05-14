module.exports.config = {
 name: "cadao",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "VanHung",
 description: "Ca Dao Việt Nam",
 commandCategory: "Kiến thức",
 usages: "cadao",
 cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
const axios = require('axios');
const request = require('request');
const fs = require("fs-extra");

const rep = await axios.get(`https://jrt-api.jrt-official.repl.co/cadao`);
var cadao = rep.data.data;
  //console.log(rdCadao);


const anh = await axios.get(`https://girl.demngayyeu.repl.co`);
var gai = anh.data.data.substring(anh.data.data.lastIndexOf(".") + 1);

let callback = function () {
    api.sendMessage({
    body: `❤️ Ca Dao Việt Nam ❤️\n\n${cadao} `,
    attachment: fs.createReadStream(__dirname + `/cache/gaicadao.${gai}`)
   }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/gaicadao.${gai}`), event.messageID);
   };
   request(anh.data.data).pipe(fs.createWriteStream(__dirname + `/cache/gaicadao.${gai}`)).on("close", callback);
}
