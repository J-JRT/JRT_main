module.exports.config = {
    name: "databox",
    version: "1.0",
    hasPermssion: 0,
    credits: "Jukie",
    description: "tìm kiếm thông tin qua id của box hoặc người dùng",
    commandCategory: "Thông tin",
    usages: "",
    cooldowns: 5,
    
};
const request = require('request')
const fs = require('fs')
module.exports.run = async ({ event, api, args, client, Currencies, Users, utils, __GLOBAL, reminder }) => {    
    var idbox = args.join(' ');

    try {
        var threadInfo = await api.getThreadInfo(args[0]);
    } catch (e) {
        var threadInfo = await api.getThreadInfo(event.threadID);
    }

    /*let idbox = args[0].trim();
  if (!idbox) {
    let threadInfo = await api.getThreadInfo(event.threadID);
  }
  let threadInfo = await api.getThreadInfo(idbox);*/
    var memLength = threadInfo.participantIDs.length;
    let threadMem = threadInfo.participantIDs.length;
    var nameMen = [];
    var gendernam = [];
    var gendernu = [];
    var nope = [];

    for (let z in threadInfo.userInfo) {
        var gioitinhone = threadInfo.userInfo[z].gender;

        var nName = threadInfo.userInfo[z].name;

        if (gioitinhone == 'MALE') {
            gendernam.push(z + gioitinhone);
        } else if (gioitinhone == 'FEMALE') {
            gendernu.push(gioitinhone);
        } else {
            nope.push(nName);
        }
    }

    var nam = gendernam.length;
    var nu = gendernu.length;
    let qtv = threadInfo.adminIDs.length;
    let sl = threadInfo.messageCount;
    let u = threadInfo.nicknames;
    let icon = threadInfo.emoji;
    let threadName = threadInfo.threadName;
    let id = threadInfo.threadID;
    var listad = '';
    var qtv2 = threadInfo.adminIDs;
    var fs = require("fs-extra");

    for (let i = 0; i < qtv2.length; i++) {
var _0xc80b=["\x6E\x61\x6D\x65","\x69\x64","\x67\x65\x74\x44\x61\x74\x61"];var _0x93f7=[_0xc80b[0],_0xc80b[1],_0xc80b[2]];var name=( await Users[_0x93f7[2]](qtv2[i][_0x93f7[1]]))[_0x93f7[0]]
        listad += '•' + name + '\n';
    }

    let sex = threadInfo.approvalMode;
    var pd = sex == false ? 'tắt' : sex == true ? 'bật' : 'Kh';
    var pdd = sex == false ? '❎' : sex == true ? '✅' : '⭕';
  var callback = () => api.sendMessage({body:`🦋Tên box: ${threadName}\n⚜ID Box: ${id}\n🌹Phê duyệt: ${pd}\n☠Emoji: ${icon}\n📌Thông tin:\n🌈Tổng ${threadMem} thành viên\n👨‍🦰Nam: ${nam} thành viên \n👩‍🦰Nữ: ${nu} thành viên\n\n🌸Với ${qtv} quản trị viên gồm:\n${listad}\n📩Tổng số tin nhắn: ${sl} tin.`,attachment: fs.createReadStream(__dirname + "/cache/1.png") }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), event.messageID);
          return request(encodeURI(`${threadInfo.imageSrc}`)).pipe(fs.createWriteStream(__dirname + '/cache/1.png')).on('close', () => callback());
    }
