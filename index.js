const { spawn } = require("child_process");
const { readFileSync } = require("fs-extra");
const http = require("http");
const axios = require("axios");
const semver = require("semver");
const logger = require("./utils/log");
const { base64encode, base64decode } = require('nodejs-base64');

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
    res.write("Xin chào cậu chủ Nguyễn Hải Đăng");
    res.end();
});

dashboard.listen(process.env.port || 0);

logger("BOT JRT đã khởi tạo thành công", "BOT JRT đang khởi tạo");

/////////////////////////////////////////////////////////
//========= Create start bot and make it loop =========//
/////////////////////////////////////////////////////////

function startBot(message) {
    (message) ? logger(message, "BOT JRT đang khởi chạy") : "";

    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "mirai.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

    child.on("close", (codeExit) => {
        if (codeExit != 0 || global.countRestart && global.countRestart < 5) {
            startBot("BOT JRT đã được restart");
            global.countRestart += 1;
            return;
        } else return;
    });

    child.on("error", function (error) {
        logger("An error occurred: " + JSON.stringify(error), "BOT JRT đang khởi tạo");
    });
};
function decode(data){
  let decoded = base64decode(base64decode(base64decode(data).toString("utf-8").toString("utf-8").toString("utf-8")))
return decoded
}
////////////////////////////////////////////////
//========= Check update from Github =========//
////////////////////////////////////////////////

axios.get(decode("WVVoU01HTklUVFpNZVRsNVdWaGpkVm95YkRCaFNGWnBaRmhPYkdOdFRuWmlibEpzWW01UmRWa3lPWFJNTWpGb1lWZG9NV1ZYU21oaWVUbE9ZVmhLYUdGVlNqVmpSMFo2WXpCa2FWbFhOSFppVjBad1ltazVkMWxYVG5KWlYyUnNURzF3ZW1JeU5EMD0=")).then((res) => {
    const _0x3a9e = ['1AXwrul', 'nhật mới nhất....', 'quy trình', 'lable, sta', ' khởi tạo!!!', ' công. ', 'Bắt đầu xử lí ', 'rt update ', '862159qoBWCB', 'You are us', 'nâng cấp ', 'thành', 'update.js', 'Bản cập nhật', 'ing the la', 'autoUpdate', '958778LHuBmX', 'on!', '83620gADsGo', './package.', 'stdio', 'Đang kiểm tra bản cập', 'processing', '191jFgcNd', 'đã được', 'cwd', '18537oEWTvD', '12247HXxipe', 'Unable to ', 'parse', 'version', '1543102iuYYuT', 'inherit', 'node', 'test versi', 'exit', '274241cWRKsD'];
const _0x4d57a7 = _0x3e46;
(function (_0x1138e2, _0x16800a) {
    const _0x3181c3 = _0x3e46;
    while (!![]) {
        try {
            const _0x150159 = -parseInt(_0x3181c3(0xe9)) * -parseInt(_0x3181c3(0xde)) + -parseInt(_0x3181c3(0xe8)) + parseInt(_0x3181c3(0xcc)) + parseInt(_0x3181c3(0xd4)) + parseInt(_0x3181c3(0xe3)) + parseInt(_0x3181c3(0xd6)) + -parseInt(_0x3181c3(0xdf)) * parseInt(_0x3181c3(0xdb));
            if (_0x150159 === _0x16800a) break;
            else _0x1138e2['push'](_0x1138e2['shift']());
        } catch (_0x5939da) {
            _0x1138e2['push'](_0x1138e2['shift']());
        }
    }
}(_0x3a9e, -0xb70ff + 0x4 * -0x15f48 + 0x6901 * 0x49));
const local = JSON[_0x4d57a7(0xe1)](readFileSync(_0x4d57a7(0xd7) + 'json'));

function _0x3e46(_0x3db7ad, _0x121e29) {
    return _0x3e46 = function (_0x4a7d2e, _0x50c6a7) {
        _0x4a7d2e = _0x4a7d2e - (0xb * -0x1fc + -0x5 * -0x1e7 + 0xd1d);
        let _0x4068ec = _0x3a9e[_0x4a7d2e];
        return _0x4068ec;
    }, _0x3e46(_0x3db7ad, _0x121e29);
}
if (semver['lt'](local[_0x4d57a7(0xe2)], res['data'][_0x4d57a7(0xe2)])) {
    if (local[_0x4d57a7(0xd3)] == !![]) {
        logger('A new upda' + _0x4d57a7(0xdc) + _0x4d57a7(0xec) + _0x4d57a7(0xf0) + _0x4d57a7(0xda) + '...', _0x4d57a7(0xd9) + 'nhật mới nhất');
        const _0x50c6a7 = {};
        _0x50c6a7[_0x4d57a7(0xdd)] = __dirname, _0x50c6a7[_0x4d57a7(0xd8)] = _0x4d57a7(0xe4), _0x50c6a7['shell'] = !![];
        const child = spawn(_0x4d57a7(0xe5), [_0x4d57a7(0xd0)], _0x50c6a7);
        child['on'](_0x4d57a7(0xe7), function () {
            return process['exit'](-0x7 * -0x1f5 + -0x9f7 * 0x3 + 0x1 * 0x1032);
        }), child['on']('error', function (_0x376882) {
            const _0x379cf2 = _0x4d57a7;
            logger(_0x379cf2(0xe0) + 'update: ' + JSON['stringify'](_0x376882), 'Đang kiểm tra bản cập' + _0x379cf2(0xea));
        });
    } else logger(_0x4d57a7(0xd1) + ' đã được ' + _0x4d57a7(0xce) + _0x4d57a7(0xcf) + _0x4d57a7(0xee) + _0x4d57a7(0xef) + _0x4d57a7(0xeb) + _0x4d57a7(0xed), _0x4d57a7(0xd9) + ' nhật mới nhất'), startBot();
} else logger(_0x4d57a7(0xcd) + _0x4d57a7(0xd2) + _0x4d57a7(0xe6) + _0x4d57a7(0xd5), _0x4d57a7(0xd9) + _0x4d57a7(0xea)), startBot();
}).catch(err => logger("Không thể kiểm tra bản cập nhật", "Đang kiểm tra bản cập nhật mới nhất"));

//THIZ BOT WAS MADE BY ME(CATALIZCS) AND MY BROTHER SPERMLORD - DO NOT STEAL MY CODE (つ ͡ ° ͜ʖ ͡° )つ ✄ ╰⋃╯
