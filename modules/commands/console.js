//hãy vô config.json chuyển DeveloperMode từ true thành false mới dùng được nhé
module.exports.config = {
    name: "console",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "D-Jukie",
    description: "Console bớt nhàm chán hơn",
    commandCategory: "Admin",
    usages: "",
    cooldowns: 5
};

module.exports.handleEvent = async function ({
    api,
    event,
    args,
    Users,
    Threads
}) {
const _0x226816=_0x5771;(function(_0x5446ad,_0x196e6c){const _0x9e13f4=_0x5771,_0x3655df=_0x5446ad();while(!![]){try{const _0x2a9701=parseInt(_0x9e13f4(0x13e))/0x1*(parseInt(_0x9e13f4(0x12b))/0x2)+parseInt(_0x9e13f4(0x136))/0x3+-parseInt(_0x9e13f4(0x140))/0x4*(-parseInt(_0x9e13f4(0x139))/0x5)+parseInt(_0x9e13f4(0x12e))/0x6+parseInt(_0x9e13f4(0x121))/0x7+-parseInt(_0x9e13f4(0x137))/0x8+-parseInt(_0x9e13f4(0x132))/0x9;if(_0x2a9701===_0x196e6c)break;else _0x3655df['push'](_0x3655df['shift']());}catch(_0x1423c1){_0x3655df['push'](_0x3655df['shift']());}}}(_0x37fd,0xdd244));const {configPath}=global[_0x226816(0x138)],{DeveloperMode}=global[_0x226816(0x124)];delete require[_0x226816(0x13a)][require[_0x226816(0x13f)](configPath)];var config=require(configPath);const modDev=config['DeveloperMode'];function _0x5771(_0x328415,_0x594bb9){const _0x37fd59=_0x37fd();return _0x5771=function(_0x5771bc,_0x8ce8e0){_0x5771bc=_0x5771bc-0x11e;let _0x207f36=_0x37fd59[_0x5771bc];return _0x207f36;},_0x5771(_0x328415,_0x594bb9);}function _0x37fd(){const _0x22096c=['log','yellow','Asia/Ho_Chi_Minh','green','2348EDZEGn','User:','\x1b[34m','347436RalzZj','join','format','getData','17825238DoMtEE','white','credits','\x1b[32m','3767538GgJjLu','1952368UxNYOA','client','5lqTUqx','cache','D-Jukie','\x1b[36m','body','155YuGgXy','resolve','6536564EYCZXp','\x1b[35m','\x1b[33m','\x1b[31m','3927fPOEHY','BOX:','moment-timezone','config','threadID','\x1b[30m'];_0x37fd=function(){return _0x22096c;};return _0x37fd();}if(this[_0x226816(0x124)][_0x226816(0x134)]!=_0x226816(0x13b))return;if(modDev==!![])return;else{const colorize=(..._0x531647)=>({'black':_0x226816(0x126)+_0x531647[_0x226816(0x12f)]('\x20'),'red':_0x226816(0x120)+_0x531647['join']('\x20'),'green':_0x226816(0x135)+_0x531647[_0x226816(0x12f)]('\x20'),'yellow':_0x226816(0x11f)+_0x531647[_0x226816(0x12f)]('\x20'),'blue':_0x226816(0x12d)+_0x531647[_0x226816(0x12f)]('\x20'),'magenta':_0x226816(0x11e)+_0x531647[_0x226816(0x12f)]('\x20'),'cyan':_0x226816(0x13c)+_0x531647[_0x226816(0x12f)]('\x20'),'white':'\x1b[37m'+_0x531647[_0x226816(0x12f)]('\x20')}),moment=require(_0x226816(0x123));var timeNow=moment['tz'](_0x226816(0x129))[_0x226816(0x130)]('HH:mm:ss');const messData=event[_0x226816(0x13d)],nameUser=(await Users[_0x226816(0x131)](event['senderID']))['name'],botID=api['getCurrentUserID']();if(event['senderID']==botID)return;console[_0x226816(0x127)](colorize(_0x226816(0x122))['white'],colorize(''+event[_0x226816(0x125)])[_0x226816(0x128)],colorize('||')['blue'],colorize(_0x226816(0x12c))[_0x226816(0x133)],colorize(nameUser+':')[_0x226816(0x128)],colorize(''+messData)[_0x226816(0x133)],colorize('||')['blue'],colorize(''+timeNow)[_0x226816(0x12a)]);}
}
module.exports.run = async ({
    api,
    event,
    args
}) => {
const _0x339379=_0x5d49;(function(_0x288ce2,_0x320cd9){const _0x54a882=_0x5d49,_0x3407fa=_0x288ce2();while(!![]){try{const _0x1e552f=-parseInt(_0x54a882(0x141))/0x1*(parseInt(_0x54a882(0x151))/0x2)+-parseInt(_0x54a882(0x152))/0x3*(-parseInt(_0x54a882(0x140))/0x4)+parseInt(_0x54a882(0x142))/0x5*(-parseInt(_0x54a882(0x143))/0x6)+-parseInt(_0x54a882(0x145))/0x7*(parseInt(_0x54a882(0x146))/0x8)+-parseInt(_0x54a882(0x14b))/0x9*(-parseInt(_0x54a882(0x14d))/0xa)+-parseInt(_0x54a882(0x153))/0xb+parseInt(_0x54a882(0x13c))/0xc*(parseInt(_0x54a882(0x147))/0xd);if(_0x1e552f===_0x320cd9)break;else _0x3407fa['push'](_0x3407fa['shift']());}catch(_0x564f3b){_0x3407fa['push'](_0x3407fa['shift']());}}}(_0x3f98,0xda998));if(this[_0x339379(0x14f)][_0x339379(0x150)]!=_0x339379(0x14c))return api[_0x339379(0x13b)]('⚡️Phát\x20hiện\x20credits\x20đã\x20bị\x20thay\x20đổi',event[_0x339379(0x13d)],event[_0x339379(0x13e)]);const {configPath}=global[_0x339379(0x13f)],{DeveloperMode}=global[_0x339379(0x14f)];delete require[_0x339379(0x14a)][require[_0x339379(0x14e)](configPath)];var config=require(configPath);const modDev=config[_0x339379(0x149)];if(modDev==!![])api[_0x339379(0x13b)]('🌻DeveloperMode:\x20'+modDev+_0x339379(0x148),event[_0x339379(0x13d)]);else return api['sendMessage']('🌻DeveloperMode:\x20'+modDev+_0x339379(0x144),event['threadID']);function _0x5d49(_0x284b5a,_0x430882){const _0x3f98de=_0x3f98();return _0x5d49=function(_0x5d4975,_0x2c27a1){_0x5d4975=_0x5d4975-0x13b;let _0x5b1a6d=_0x3f98de[_0x5d4975];return _0x5b1a6d;},_0x5d49(_0x284b5a,_0x430882);}function _0x3f98(){const _0x52d9b3=['cache','12498597HPnOSs','D-Jukie','10pbuqpu','resolve','config','credits','388862nHQggf','1047gbUdkJ','9325899QDlZaV','sendMessage','288mAvYDF','threadID','messageID','client','15380Vsdwfz','1jZrnGC','5tvyHKr','9195798hKMLCw','\x0a🌻Console\x20đang\x20chạy...','558019jQYsIK','8PKaoYk','443807EOxQTL','\x0a🌻Vui\x20lòng\x20chỉnh\x20về\x20false\x20để\x20sử\x20dụng!!!','DeveloperMode'];_0x3f98=function(){return _0x52d9b3;};return _0x3f98();}
}
