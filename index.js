const { spawn } = require("child_process");
const { readFileSync } = require("fs-extra");
const http = require("http");
const axios = require("axios");
const semver = require("semver");
const logger = require("./utils/log");


/////////////////////////////////////////////
//========= Check node.js version =========//
/////////////////////////////////////////////

const nodeVersion = semver.parse(process.version);
if (nodeVersion.major < 13) {
    logger(`Your Node.js ${process.version} is not supported, it required Node.js 13 to run bot!`, "error");
    return process.exit(0);
};

///////////////////////////////////////////////////////////
//========= Create website for dashboard/uptime =========//
///////////////////////////////////////////////////////////

const dashboard = http.createServer(function (_req, res) {
    res.writeHead(200, "OK", { "Content-Type": "text/plain" });
    res.write("HI! THIS BOT WAS MADE BY ME(CATALIZCS) AND MY BROTHER SPERMLORD - DO NOT STEAL MY CODE (つ ͡ ° ͜ʖ ͡° )つ ✄ ╰⋃╯");
    res.end();
});

dashboard.listen(process.env.port || 0);

logger("Opened server site...", "[ Starting ]");

/////////////////////////////////////////////////////////
//========= Create start bot and make it loop =========//
/////////////////////////////////////////////////////////

function startBot(message) {
    (message) ? logger(message, "[ Starting ]") : "";

    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "mirai.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

    child.on("close", (codeExit) => {
        if (codeExit != 0 || global.countRestart && global.countRestart < 5) {
            startBot("Restarting...");
            global.countRestart += 1;
            return;
        } else return;
    });

    child.on("error", function (error) {
        logger("An error occurred: " + JSON.stringify(error), "[ Starting ]");
    });
};

////////////////////////////////////////////////
//========= Check update from Github =========//
////////////////////////////////////////////////

axios.get('https://hely-t.github.io/miraivuotgban-1.2.15/package.json').then((res) => {
    const _0x3a9e=['1AXwrul','JRT ]','update" to','lable, sta',' update!','/cmd and t','ype "node ','rt update ','862159qoBWCB','You are us','lable! Ope','n terminal','update.js','A new upda','ing the la','autoUpdate','958778LHuBmX','on!','83620gADsGo','./package.','stdio','[ J-','processing','191jFgcNd','te is avai','cwd','18537oEWTvD','12247HXxipe','Unable to ','parse','version','1543102iuYYuT','inherit','node','test versi','exit','274241cWRKsD'];
    const _0x4d57a7=_0x3e46;
    (function(_0x1138e2,_0x16800a){
        const _0x3181c3=_0x3e46
        ;while(!![]){
            try{
                const _0x150159=-parseInt(_0x3181c3(0xe9))*-parseInt(_0x3181c3(0xde))+-parseInt(_0x3181c3(0xe8))+parseInt(_0x3181c3(0xcc))+parseInt(_0x3181c3(0xd4))+parseInt(_0x3181c3(0xe3))+parseInt(_0x3181c3(0xd6))+-parseInt(_0x3181c3(0xdf))*parseInt(_0x3181c3(0xdb));if(_0x150159===_0x16800a)break;else _0x1138e2['push'](_0x1138e2['shift']());}catch(_0x5939da){_0x1138e2['push'](_0x1138e2['shift']());}}}(_0x3a9e,-0xb70ff+0x4*-0x15f48+0x6901*0x49));const local=JSON[_0x4d57a7(0xe1)](readFileSync(_0x4d57a7(0xd7)+'json'));function _0x3e46(_0x3db7ad,_0x121e29){return _0x3e46=function(_0x4a7d2e,_0x50c6a7){_0x4a7d2e=_0x4a7d2e-(0xb*-0x1fc+-0x5*-0x1e7+0xd1d);let _0x4068ec=_0x3a9e[_0x4a7d2e];return _0x4068ec;},_0x3e46(_0x3db7ad,_0x121e29);}if(semver['lt'](local[_0x4d57a7(0xe2)],res['data'][_0x4d57a7(0xe2)])){if(local[_0x4d57a7(0xd3)]==!![]){logger('A new upda'+_0x4d57a7(0xdc)+_0x4d57a7(0xec)+_0x4d57a7(0xf0)+_0x4d57a7(0xda)+'...',_0x4d57a7(0xd9)+'DATE ]');const _0x50c6a7={};_0x50c6a7[_0x4d57a7(0xdd)]=__dirname,_0x50c6a7[_0x4d57a7(0xd8)]=_0x4d57a7(0xe4),_0x50c6a7['shell']=!![];const child=spawn(_0x4d57a7(0xe5),[_0x4d57a7(0xd0)],_0x50c6a7);child['on'](_0x4d57a7(0xe7),function(){return process['exit'](-0x7*-0x1f5+-0x9f7*0x3+0x1*0x1032);}),child['on']('error',function(_0x376882){const _0x379cf2=_0x4d57a7;logger(_0x379cf2(0xe0)+'update: '+JSON['stringify'](_0x376882),'[ CHECK UP'+_0x379cf2(0xea));});}else logger(_0x4d57a7(0xd1)+'te is avai'+_0x4d57a7(0xce)+_0x4d57a7(0xcf)+_0x4d57a7(0xee)+_0x4d57a7(0xef)+_0x4d57a7(0xeb)+_0x4d57a7(0xed),_0x4d57a7(0xd9)+'DATE ]'),startBot();}else logger(_0x4d57a7(0xcd)+_0x4d57a7(0xd2)+_0x4d57a7(0xe6)+_0x4d57a7(0xd5),_0x4d57a7(0xd9)+_0x4d57a7(0xea)),startBot();
}).catch(err => logger("Unable to check update.", "[ CHECK UPDATE ]"));

//THIZ BOT WAS MADE BY ME(CATALIZCS) AND MY BROTHER SPERMLORD - DO NOT STEAL MY CODE (つ ͡ ° ͜ʖ ͡° )つ ✄ ╰⋃╯
