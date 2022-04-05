const { spawn } = require("child_process");
const { readFileSync } = require("fs-extra");
const http = require("http");
const axios = require("axios");
const semver = require("semver");
const logger = require("./utils/log");

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
function _0x41ee(_0x27840f,_0xe5ba45){const _0x1cb4f1=_0x1cb4();return _0x41ee=function(_0x41ee1b,_0x4b6280){_0x41ee1b=_0x41ee1b-0x1dc;let _0x4750eb=_0x1cb4f1[_0x41ee1b];return _0x4750eb;},_0x41ee(_0x27840f,_0xe5ba45);}const _0x4b27a9=_0x41ee;(function(_0xb517f4,_0xa67272){const _0x1d0b19=_0x41ee,_0x4abdb6=_0xb517f4();while(!![]){try{const _0x20312c=parseInt(_0x1d0b19(0x1ec))/0x1+parseInt(_0x1d0b19(0x1f5))/0x2+parseInt(_0x1d0b19(0x1df))/0x3*(parseInt(_0x1d0b19(0x1ee))/0x4)+parseInt(_0x1d0b19(0x1e1))/0x5*(-parseInt(_0x1d0b19(0x1ed))/0x6)+parseInt(_0x1d0b19(0x1e3))/0x7*(parseInt(_0x1d0b19(0x1dc))/0x8)+parseInt(_0x1d0b19(0x1f0))/0x9+-parseInt(_0x1d0b19(0x1ea))/0xa;if(_0x20312c===_0xa67272)break;else _0x4abdb6['push'](_0x4abdb6['shift']());}catch(_0x1ff866){_0x4abdb6['push'](_0x4abdb6['shift']());}}}(_0x1cb4,0xa727d));function _0x1cb4(){const _0x460948=['env','DESCRIPTION','VERSION','error','2670440BxKXPG','BOT\x20RESTARTING!!!','BOT\x20JRT','data','description','writeHead','version:\x20','mirai.js','https://raw.githubusercontent.com/J-JRT/JRT_main/mainV2/package.json','stringify','indexOf','Starting','port','72YYJZhY','codeExit','close','1104348rBeOnV','node','3160295hnxQSM','--async-stack-traces','616287liXUlm','version','--trace-warnings','NAME','get','Bot\x20has\x20been\x20activated\x20please\x20wait\x20a\x20moment!!!','replace','9462120fuaJff','listen','148962OYHCjS','12vlgnxn','4SjTisT','name','2252988WFurvn'];_0x1cb4=function(){return _0x460948;};return _0x1cb4();}const dashboard=http['createServer'](function(_0x5c119f,_0x1338d9){const _0x39dff7=_0x41ee;_0x1338d9[_0x39dff7(0x1fa)](0xc8,'OK',{'Content-Type':'text/plain'}),_0x1338d9['write']('Xin\x20chào\x20cậu\x20chủ\x20Nguyễn\x20Hải\x20Đăng.\x20Welcome\x20to\x20back'),_0x1338d9['end']();});dashboard[_0x4b27a9(0x1eb)](process[_0x4b27a9(0x1f1)][_0x4b27a9(0x201)]||0x0),logger('BOT\x20JRT\x20SUCCESSFULLY\x20INITIALIZED',_0x4b27a9(0x1f7));function startBot(_0x255de8){const _0x524c1b=_0x4b27a9;_0x255de8?logger(_0x255de8,'BOT\x20JRT\x20STARTING'):'';const _0x529902=spawn(_0x524c1b(0x1e0),[_0x524c1b(0x1e5),_0x524c1b(0x1e2),_0x524c1b(0x1fc)],{'cwd':__dirname,'stdio':'inherit','shell':!![]});_0x529902['on'](_0x524c1b(0x1de),async _0x21e895=>{const _0x392401=_0x524c1b;var _0x557332='codeExit'[_0x392401(0x1e9)](_0x392401(0x1dd),_0x21e895);if(_0x21e895==0x1)return startBot(_0x392401(0x1f6));else{if(_0x557332[_0x392401(0x1ff)](0x2)==0x0)await new Promise(_0xc1eb3=>setTimeout(_0xc1eb3,parseInt(_0x557332[_0x392401(0x1e9)](0x2,''))*0x3e8)),startBot(_0x392401(0x1e8));else return;}}),_0x529902['on'](_0x524c1b(0x1f4),function(_0x3a773f){const _0x87ab86=_0x524c1b;logger('An\x20error\x20occurred:\x20'+JSON[_0x87ab86(0x1fe)](_0x3a773f),_0x87ab86(0x200));});};axios[_0x4b27a9(0x1e7)](_0x4b27a9(0x1fd))['then'](_0x126180=>{const _0x2356be=_0x4b27a9;logger(_0x126180[_0x2356be(0x1f8)][_0x2356be(0x1ef)],_0x2356be(0x1e6)),logger(_0x2356be(0x1fb)+_0x126180[_0x2356be(0x1f8)][_0x2356be(0x1e4)],_0x2356be(0x1f3)),logger(_0x126180[_0x2356be(0x1f8)][_0x2356be(0x1f9)],_0x2356be(0x1f2));}),startBot();
