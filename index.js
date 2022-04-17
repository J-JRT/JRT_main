const { spawn } = require("child_process");
const { readFileSync } = require("fs-extra");
const http = require("http");
const chalk = require("chalk");
const axios = require("axios");
const semver = require("semver");
const logger = require("./utils/log");
var randomColor = Math.floor(Math.random()*16777215).toString(16);

/////////////////////////////////////////////
//========= Check node.js version =========//
/////////////////////////////////////////////

// const nodeVersion = semver.parse(process.version);
// if (nodeVersion.major < 13) {
//     logger(`Your Node.js ${process.version} is not supported, it required Node.js 13 to run bot!`, "error");
//     return process.exit(0);
// };

///////////////////////////////////////////////////////////
//========= Create website for dashboard/uptime =========//
///////////////////////////////////////////////////////////

function _0x514a(_0x59e349,_0x3f6760){const _0x5ea4b5=_0x5ea4();return _0x514a=function(_0x514a54,_0x56c989){_0x514a54=_0x514a54-0x1a6;let _0x54b3b5=_0x5ea4b5[_0x514a54];return _0x54b3b5;},_0x514a(_0x59e349,_0x3f6760);}const _0x1ee1c1=_0x514a;(function(_0x3a89fa,_0x1492f8){const _0x3c8cb9=_0x514a,_0x423b84=_0x3a89fa();while(!![]){try{const _0x1bb4f3=parseInt(_0x3c8cb9(0x1b8))/0x1+parseInt(_0x3c8cb9(0x1ba))/0x2+-parseInt(_0x3c8cb9(0x1bb))/0x3*(-parseInt(_0x3c8cb9(0x1b6))/0x4)+-parseInt(_0x3c8cb9(0x1b7))/0x5*(-parseInt(_0x3c8cb9(0x1a8))/0x6)+parseInt(_0x3c8cb9(0x1a6))/0x7+parseInt(_0x3c8cb9(0x1b0))/0x8+-parseInt(_0x3c8cb9(0x1a9))/0x9;if(_0x1bb4f3===_0x1492f8)break;else _0x423b84['push'](_0x423b84['shift']());}catch(_0x1cc97e){_0x423b84['push'](_0x423b84['shift']());}}}(_0x5ea4,0xad5b1));const dashboard=http[_0x1ee1c1(0x1b2)](function(_0x271621,_0x2d7090){const _0x21123e=_0x1ee1c1;_0x2d7090[_0x21123e(0x1ac)](0xc8,'OK',{'Content-Type':_0x21123e(0x1b4)}),_0x2d7090[_0x21123e(0x1ab)](_0x21123e(0x1ae)),_0x2d7090[_0x21123e(0x1aa)]();});function _0x5ea4(){const _0x5beab3=['Chúc\x20bạn\x20sử\x20dụng\x20Bot\x20vui\x20vẻ\x20<3','Xin\x20chào\x20cậu\x20chủ\x20Nguyễn\x20Hải\x20Đăng.\x20Welcome\x20to\x20back','BOT\x20JRT\x20PROJECT','6576456dQdllu','Checking\x20the\x20version...','createServer','Your\x20version\x20is\x20the\x20latest!','text/plain','BOT\x20JRT','13204cJbrBo','30DomwjG','538627ynEIXg','Welcome\x20back\x20to\x20Bot\x20JRT','1786472LrgFSZ','657HOAHzb','UPDATE','8790761XDYCFz','BOT\x20JRT\x20SUCCESSFULLY\x20INITIALIZED','183102JhClrV','33351291sTKpDI','end','write','writeHead'];_0x5ea4=function(){return _0x5beab3;};return _0x5ea4();}dashboard['listen'](0x1f90),logger(_0x1ee1c1(0x1a7),_0x1ee1c1(0x1b5)),logger(_0x1ee1c1(0x1b9),_0x1ee1c1(0x1b5)),logger(_0x1ee1c1(0x1af),_0x1ee1c1(0x1b5)),logger(_0x1ee1c1(0x1b1),'UPDATE'),logger(_0x1ee1c1(0x1b3),_0x1ee1c1(0x1bc)),logger(_0x1ee1c1(0x1ad),_0x1ee1c1(0x1b5));

/////////////////////////////////////////////////////////
//========= Create start bot and make it loop =========//
/////////////////////////////////////////////////////////

function _0x37bd(){const _0x2a5a3c=['An\x20error\x20occurred:\x20','codeExit','1kIgESj','Starting','mirai.js','34518KCazHb','933EpfMnd','3343040BAOYAx','node','indexOf','10468Ygivqi','replace','5221951fMVJmf','1698370QFgEli','2015332lWFtTo','close','error','635nJVyIB','14696uyNdWo','495CgrQVm','inherit','--async-stack-traces'];_0x37bd=function(){return _0x2a5a3c;};return _0x37bd();}function _0x29c0(_0x13d45f,_0x14f89e){const _0x37bd41=_0x37bd();return _0x29c0=function(_0x29c0b9,_0x34c4b3){_0x29c0b9=_0x29c0b9-0x12b;let _0x17150c=_0x37bd41[_0x29c0b9];return _0x17150c;},_0x29c0(_0x13d45f,_0x14f89e);}(function(_0x57b725,_0x2f291e){const _0xb165fc=_0x29c0,_0x4f8f7a=_0x57b725();while(!![]){try{const _0x30c556=parseInt(_0xb165fc(0x140))/0x1*(parseInt(_0xb165fc(0x135))/0x2)+parseInt(_0xb165fc(0x12e))/0x3*(-parseInt(_0xb165fc(0x132))/0x4)+parseInt(_0xb165fc(0x139))/0x5*(-parseInt(_0xb165fc(0x12d))/0x6)+parseInt(_0xb165fc(0x134))/0x7+-parseInt(_0xb165fc(0x13a))/0x8*(parseInt(_0xb165fc(0x13b))/0x9)+parseInt(_0xb165fc(0x12f))/0xa+parseInt(_0xb165fc(0x136))/0xb;if(_0x30c556===_0x2f291e)break;else _0x4f8f7a['push'](_0x4f8f7a['shift']());}catch(_0x2a04a2){_0x4f8f7a['push'](_0x4f8f7a['shift']());}}}(_0x37bd,0x720c5));function startBot(_0x3af3cb){const _0x4d020d=_0x29c0;_0x3af3cb?logger(_0x3af3cb,'BOT\x20JRT\x20STARTING'):'';const _0x12eabc=spawn(_0x4d020d(0x130),['--trace-warnings',_0x4d020d(0x13d),_0x4d020d(0x12c)],{'cwd':__dirname,'stdio':_0x4d020d(0x13c),'shell':!![]});_0x12eabc['on'](_0x4d020d(0x137),async _0x116dd7=>{const _0x22dfaf=_0x4d020d;var _0x4bf39f=_0x22dfaf(0x13f)[_0x22dfaf(0x133)](_0x22dfaf(0x13f),_0x116dd7);if(_0x116dd7==0x1)return startBot('BOT\x20RESTARTING!!!');else{if(_0x4bf39f[_0x22dfaf(0x131)](0x2)==0x0)await new Promise(_0x2f638d=>setTimeout(_0x2f638d,parseInt(_0x4bf39f[_0x22dfaf(0x133)](0x2,''))*0x3e8)),startBot('Bot\x20has\x20been\x20activated\x20please\x20wait\x20a\x20moment!!!');else return;}}),_0x12eabc['on'](_0x4d020d(0x138),function(_0x30744f){const _0x10cdaa=_0x4d020d;logger(_0x10cdaa(0x13e)+JSON['stringify'](_0x30744f),_0x10cdaa(0x12b));});};
////////////////////////////////////////////////
//========= Check update from Github =========//
////////////////////////////////////////////////


var _0x16a42d=_0x59f4;(function(_0x3814c8,_0x2d306e){var _0x52c681=_0x59f4,_0xe956b5=_0x3814c8();while(!![]){try{var _0x740bb5=parseInt(_0x52c681(0x176))/0x1*(-parseInt(_0x52c681(0x187))/0x2)+-parseInt(_0x52c681(0x17d))/0x3+parseInt(_0x52c681(0x180))/0x4+parseInt(_0x52c681(0x17c))/0x5+-parseInt(_0x52c681(0x184))/0x6+-parseInt(_0x52c681(0x179))/0x7+parseInt(_0x52c681(0x17a))/0x8;if(_0x740bb5===_0x2d306e)break;else _0xe956b5['push'](_0xe956b5['shift']());}catch(_0x4667e5){_0xe956b5['push'](_0xe956b5['shift']());}}}(_0x4a67,0x7f96d),axios[_0x16a42d(0x182)](_0x16a42d(0x186))['then'](_0x44f3c8=>{var _0x37bce8=_0x16a42d;logger(_0x44f3c8[_0x37bce8(0x17e)][_0x37bce8(0x17b)],_0x37bce8(0x183)),logger(_0x37bce8(0x185)+_0x44f3c8[_0x37bce8(0x17e)]['version'],_0x37bce8(0x177)),logger(_0x44f3c8['data'][_0x37bce8(0x178)],'DESCRIPTION'),console['log'](chalk[_0x37bce8(0x17f)][_0x37bce8(0x175)]('#'+randomColor)['bold'](_0x37bce8(0x181)));}),startBot());function _0x59f4(_0x14ccd5,_0x304c94){var _0x4a67c2=_0x4a67();return _0x59f4=function(_0x59f4a5,_0x44df98){_0x59f4a5=_0x59f4a5-0x175;var _0x1f905a=_0x4a67c2[_0x59f4a5];return _0x1f905a;},_0x59f4(_0x14ccd5,_0x304c94);}function _0x4a67(){var _0x2b60f1=['\x0a\x20\x20\x20\x20\x20\x20\x20\x20**********************************************************\x0a\x20\x20\x20\x20\x20\x20\x20\x20*\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x0a\x20\x20\x20\x20\x20\x20\x20\x20*\x20\x20\x20\x20\x20\x20\x20\x20░░░░░██╗░░░░░░░░░░░██╗██████╗░████████╗\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x0a\x20\x20\x20\x20\x20\x20\x20\x20*\x20\x20\x20\x20\x20\x20\x20\x20░░░░░██║░░░░░░░░░░░██║██╔══██╗╚══██╔══╝\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x0a\x20\x20\x20\x20\x20\x20\x20\x20*\x20\x20\x20\x20\x20\x20\x20\x20░░░░░██║█████╗░░░░░██║██████╔╝░░░██║░░░\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x0a\x20\x20\x20\x20\x20\x20\x20\x20*\x20\x20\x20\x20\x20\x20\x20\x20██╗░░██║╚════╝██╗░░██║██╔══██╗░░░██║░░░\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x0a\x20\x20\x20\x20\x20\x20\x20\x20*\x20\x20\x20\x20\x20\x20\x20\x20╚█████╔╝░░░░░░╚█████╔╝██║░░██║░░░██║░░░\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x0a\x20\x20\x20\x20\x20\x20\x20\x20*\x20\x20\x20\x20\x20\x20\x20\x20░╚════╝░░░░░░░░╚════╝░╚═╝░░╚═╝░░░╚═╝░░░\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x0a\x20\x20\x20\x20\x20\x20\x20\x20*\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x0a\x20\x20\x20\x20\x20\x20\x20\x20*\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x0a\x20\x20\x20\x20\x20\x20\x20\x20*\x20→\x20Mirai\x20->\x20version\x202.0\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x0a\x20\x20\x20\x20\x20\x20\x20\x20*\x20»\x20Liên\x20hệ\x20trực\x20tiếp\x20«\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x0a\x20\x20\x20\x20\x20\x20\x20\x20*\x20→\x20Facebook:\x20https:www.facebook.com/NHD.JRT.262\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x0a\x20\x20\x20\x20\x20\x20\x20\x20*\x20→\x20Zalo:\x200396049649\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x0a\x20\x20\x20\x20\x20\x20\x20\x20*\x20→\x20Donate\x20Momo:\x200396049649\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x0a\x20\x20\x20\x20\x20\x20\x20\x20*\x20→\x20Dịch\x20vụ\x20Facebook,\x20Tiktok\x20và\x20Instagram\x20đầy\x20đủ\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x0a\x20\x20\x20\x20\x20\x20\x20\x20**********************************************************\x0a','get','NAME','3120324cFtMNu','version:\x20','https://raw.githubusercontent.com/J-JRT/JRT_main/mainV2/package.json','4WfmOIT','hex','90238EfUgHg','VERSION','description','5069190byTNIV','13125528ZEgGCq','name','1566145jYzGwk','1900863FKtsmm','data','bold','2508024ViKOze'];_0x4a67=function(){return _0x2b60f1;};return _0x4a67();}
/*axios.get("https://raw.githubusercontent.com/d-jukie/miraiv2_fix/main/package.json").then((res) => {
    const local = JSON.parse(readFileSync('./package.json'));
    if (semver['lt'](local.version, res['data']['version'])) {
        if (local.autoUpdate == !![]) {
            logger('A new update is available, start update processing...', '[ UPDATE ]');
            const updateBot = {};
            updateBot.cwd = __dirname
            updateBot.stdio = 'inherit' 
            updateBot.shell = !![];
            const child = spawn('node', ['update.js'], updateBot);
            child.on('exit', function () {
                return process.exit(0);
            })
            child.on('error', function (error) {
                logger('Unable to update:' + JSON.stringify(error), '[ CHECK UPDATE ]');
            });
        } else logger('A new update is available! Open terminal/cmd and type "node update" to update!', '[ UPDATE ]'), 
        startBot();
    } else logger('You are using the latest version!', '[ CHECK UPDATE ]'), startBot();
}).catch(err => logger("Unable to check update.", "[ CHECK UPDATE ]"));*/



