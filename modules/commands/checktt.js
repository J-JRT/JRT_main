module.exports.config = {
	name: "checktt",
	version: "1.6.0",
	hasPermssion: 0,
	credits: "Mirai Team fix get by D-Jukie",
	description: "Kiểm tra lượt tương tác trong nhóm",
	commandCategory: "Nhóm",
	usages: "[all/tag]",
	cooldowns: 5,
    envConfig: {
        "maxColumn": 10
    }
};

module.exports.languages = {
    "vi": {
        "all": "%1/ %2 với %3 tin nhắn\n",
    },
    "en": {
        "all": "%1/ %2 with %3 messages\n",
    }
}
module.exports.run = async function ({ args,Users,Threads, api, event, Currencies, getText }) {
var _0x3312=["\x6D\x65\x6E\x74\x69\x6F\x6E\x73","\x6B\x65\x79\x73","\x61\x6C\x6C","\x74\x68\x72\x65\x61\x64\x49\x6E\x66\x6F","\x74\x68\x72\x65\x61\x64\x49\x44","\x67\x65\x74\x44\x61\x74\x61","\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6E\x74\x49\x44\x73","","\x6E\x61\x6D\x65","\x65\x78\x70","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x70\x75\x73\x68","\x73\x6F\x72\x74","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x75\x69\x64","\x66\x69\x6E\x64\x49\x6E\x64\x65\x78","\x20\u0111\x61\x6E\x67\x20\u0111\u1EE9\x6E\x67\x20\x68\u1EA1\x6E\x67\x20","\x20\x76\u1EDB\x69\x20","\x20\x74\x69\x6E\x20\x6E\x68\u1EAF\x6E","\x73\x65\x6E\x64\x65\x72\x49\x44","\x42\u1EA1\x6E\x20\u0111\x61\x6E\x67\x20\u0111\u1EE9\x6E\x67\x20\x68\u1EA1\x6E\x67\x20"];var mention=Object[_0x3312[1]](event[_0x3312[0]]);if(args[0]== _0x3312[2]){var {participantIDs}=( await Threads[_0x3312[5]](event[_0x3312[4]]))[_0x3312[3]];const listUserID=event[_0x3312[6]];var id=listUserID;var number=1,msg=_0x3312[7],storage=[],exp=[];for(const idUser of listUserID){const countMess= await Currencies[_0x3312[5]](idUser);exp[_0x3312[11]]({"\x6E\x61\x6D\x65":( await Users[_0x3312[5]](idUser))[_0x3312[8]],"\x65\x78\x70":( typeof countMess[_0x3312[9]]== _0x3312[10])?0:countMess[_0x3312[9]],"\x75\x69\x64":idUser})};exp[_0x3312[12]](function(_0xdf4fxa,_0xdf4fxb){return _0xdf4fxb[_0x3312[9]]- _0xdf4fxa[_0x3312[9]]});for(const lastData of exp){msg+= getText(_0x3312[2],number++,lastData[_0x3312[8]],lastData[_0x3312[9]])};return api[_0x3312[13]](msg,event[_0x3312[4]])}else {if(mention[0]){var {participantIDs}=( await Threads[_0x3312[5]](event[_0x3312[4]]))[_0x3312[3]];const listUserID=event[_0x3312[6]];var id=listUserID;exp= [];for(const idUser of listUserID){const countMess= await Currencies[_0x3312[5]](idUser);exp[_0x3312[11]]({"\x6E\x61\x6D\x65":idUser[_0x3312[8]],"\x65\x78\x70":( typeof countMess[_0x3312[9]]== _0x3312[10])?0:countMess[_0x3312[9]],"\x75\x69\x64":idUser})};exp[_0x3312[12]](function(_0xdf4fxa,_0xdf4fxb){return _0xdf4fxb[_0x3312[9]]- _0xdf4fxa[_0x3312[9]]});const rank=exp[_0x3312[15]]((_0xdf4fxe)=>{return parseInt(_0xdf4fxe[_0x3312[14]])== parseInt(mention[0])})+ 1;const infoUser=exp[rank- 1];return api[_0x3312[13]](`${_0x3312[7]}${( await Users[_0x3312[5]](mention[0]))[_0x3312[8]]}${_0x3312[16]}${rank}${_0x3312[17]}${infoUser[_0x3312[9]]}${_0x3312[18]}`,event[_0x3312[4]])}else {var {participantIDs}=( await Threads[_0x3312[5]](event[_0x3312[4]]))[_0x3312[3]];const listUserID=event[_0x3312[6]];var id=listUserID;exp= [];var name= await Users[_0x3312[5]](id);for(const idUser of listUserID){const countMess= await Currencies[_0x3312[5]](idUser);exp[_0x3312[11]]({"\x6E\x61\x6D\x65":idUser[_0x3312[8]],"\x65\x78\x70":( typeof countMess[_0x3312[9]]== _0x3312[10])?0:countMess[_0x3312[9]],"\x75\x69\x64":idUser})};exp[_0x3312[12]](function(_0xdf4fxa,_0xdf4fxb){return _0xdf4fxb[_0x3312[9]]- _0xdf4fxa[_0x3312[9]]});const rank=exp[_0x3312[15]]((_0xdf4fxe)=>{return parseInt(_0xdf4fxe[_0x3312[14]])== parseInt(event[_0x3312[19]])})+ 1;const infoUser=exp[rank- 1];return api[_0x3312[13]](`${_0x3312[20]}${rank}${_0x3312[17]}${infoUser[_0x3312[9]]}${_0x3312[18]}`,event[_0x3312[4]])}}
}
