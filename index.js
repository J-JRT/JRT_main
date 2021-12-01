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

const dashboard = http.createServer(function (_req, res) {
    res.writeHead(200, "OK", { "Content-Type": "text/plain" });
    res.write("HI! XIN CHÀO CẬU CHỦ NGUYỄN HẢI ĐĂNG ( JRT )");
    res.end();
});

dashboard.listen(process.env.port || 0);

logger("Opened server site...", "Bắt đầu khởi tạo BOT JRT");

/////////////////////////////////////////////////////////
//========= Create start bot and make it loop =========//
/////////////////////////////////////////////////////////

function startBot(message) {
    (message) ? logger(message, "Bắt đầu khởi tạo BOT JRT") : "";

    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "mirai.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

    child.on("close", (codeExit) => {
        if (codeExit != 0 || global.countRestart && global.countRestart < 5) {
            startBot("Khởi động lại BOT JRT");
            global.countRestart += 1;
            return;
        } else return;
    });

    child.on("error", function (error) {
        logger("An error occurred: " + JSON.stringify(error), "Bắt đầu khởi tạo BOT JRT");
    });
};
////////////////////////////////////////////////
//========= Check update from Github =========//
////////////////////////////////////////////////

const _0x5894db=_0x3273;function _0x3273(_0x2ff092,_0x6f595a){const _0x3399bf=_0x3399();return _0x3273=function(_0x3273e6,_0x105057){_0x3273e6=_0x3273e6-0x15f;let _0x122902=_0x3399bf[_0x3273e6];return _0x122902;},_0x3273(_0x2ff092,_0x6f595a);}function _0x3399(){const _0x58e4f4=['get','https://raw.githubusercontent.com/d-jukie/miraiv2_fix/main/package.json','2PFcQOT','2555ptCgKO','A\x20new\x20update\x20is\x20available!\x20Open\x20terminal/cmd\x20and\x20type\x20\x22node\x20update\x22\x20to\x20update!','parse','error','cwd','72NtMCSQ','565338ZnhTSU','node','55mLrvAA','3247541UzWkAC','stdio','10NdmXwj','44076rwmcwy','autoUpdate','version','12136wqGKpo','Unable\x20to\x20update:','./package.json','inherit','then','exit','A\x20new\x20update\x20is\x20available,\x20start\x20update\x20processing...','Unable\x20to\x20check\x20update.','update.js','5559012hmCNjZ','119452ualRRF','stringify','data','3803208jsHvoa','\x20CHECK\x20UPDATE\x20','\x20UPDATE\x20'];_0x3399=function(){return _0x58e4f4;};return _0x3399();}(function(_0x40d062,_0xa37a){const _0x29c58=_0x3273,_0xe375ee=_0x40d062();while(!![]){try{const _0x417154=-parseInt(_0x29c58(0x174))/0x1*(parseInt(_0x29c58(0x15f))/0x2)+parseInt(_0x29c58(0x17b))/0x3+-parseInt(_0x29c58(0x16c))/0x4*(-parseInt(_0x29c58(0x17d))/0x5)+parseInt(_0x29c58(0x16f))/0x6+parseInt(_0x29c58(0x175))/0x7*(parseInt(_0x29c58(0x162))/0x8)+parseInt(_0x29c58(0x16b))/0x9*(parseInt(_0x29c58(0x180))/0xa)+-parseInt(_0x29c58(0x17e))/0xb*(parseInt(_0x29c58(0x17a))/0xc);if(_0x417154===_0xa37a)break;else _0xe375ee['push'](_0xe375ee['shift']());}catch(_0x416938){_0xe375ee['push'](_0xe375ee['shift']());}}}(_0x3399,0x7bb5e),axios[_0x5894db(0x172)](_0x5894db(0x173))[_0x5894db(0x166)](_0x4512d8=>{const _0x1a35fe=_0x5894db,_0x2dcd38=JSON[_0x1a35fe(0x177)](readFileSync(_0x1a35fe(0x164)));if(semver['lt'](_0x2dcd38[_0x1a35fe(0x161)],_0x4512d8[_0x1a35fe(0x16e)]['version'])){if(_0x2dcd38[_0x1a35fe(0x160)]==!![]){logger(_0x1a35fe(0x168),_0x1a35fe(0x171));const _0x40e4af={};_0x40e4af[_0x1a35fe(0x179)]=__dirname,_0x40e4af[_0x1a35fe(0x17f)]=_0x1a35fe(0x165),_0x40e4af['shell']=!![];const _0x49a11d=spawn(_0x1a35fe(0x17c),[_0x1a35fe(0x16a)],_0x40e4af);_0x49a11d['on']('exit',function(){const _0x4f1bb9=_0x1a35fe;return process[_0x4f1bb9(0x167)](0x0);}),_0x49a11d['on'](_0x1a35fe(0x178),function(_0x69397e){const _0x49f22c=_0x1a35fe;logger(_0x49f22c(0x163)+JSON[_0x49f22c(0x16d)](_0x69397e),_0x49f22c(0x170));});}else logger(_0x1a35fe(0x176),_0x1a35fe(0x171)),startBot();}else logger('Bạn\x20đang\x20sử\x20dụng\x20phiên\x20bản\x20mới\x20nhất\x20của\x20JRT!!!','\x20CHECK\x20UPDATE\x20'),startBot();})['catch'](_0x59f39f=>logger(_0x5894db(0x169),_0x5894db(0x170))));

// THIZ BOT WAS MADE BY ME(CATALIZCS) AND MY BROTHER SPERMLORD - DO NOT STEAL MY CODE (つ ͡ ° ͜ʖ ͡° )つ ✄ ╰⋃╯
