//////////////////////////////////////////////////////
//========= Require all variable need use =========//
/////////////////////////////////////////////////////

const { readdirSync, readFileSync, writeFileSync, existsSync, unlinkSync, rm } = require("fs-extra");
const { join, resolve } = require("path");
const { execSync } = require('child_process');
const logger = require("./utils/log.js");
const login = require("sieudangyeu");
const axios = require("axios");
const listPackage = JSON.parse(readFileSync('./package.json')).dependencies;
const listbuiltinModules = require("module").builtinModules;

global.client = new Object({
    commands: new Map(),
    events: new Map(),
    cooldowns: new Map(),
    eventRegistered: new Array(),
    handleSchedule: new Array(),
    handleReaction: new Array(),
    handleReply: new Array(),
    mainPath: process.cwd(),
    configPath: new String()
});

global.data = new Object({
    threadInfo: new Map(),
    threadData: new Map(),
    userName: new Map(),
    userBanned: new Map(),
    threadBanned: new Map(),
    commandBanned: new Map(),
    threadAllowNSFW: new Array(),
    allUserID: new Array(),
    allCurrenciesID: new Array(),
    allThreadID: new Array()
});

global.utils = require("./utils");

global.nodemodule = new Object();

global.config = new Object();

global.configModule = new Object();

global.moduleData = new Array();

global.language = new Object();

//////////////////////////////////////////////////////////
//========= Find and get variable from Config =========//
/////////////////////////////////////////////////////////

var configValue;
try {
    global.client.configPath = join(global.client.mainPath, "config.json");
    configValue = require(global.client.configPath);
    logger.loader("Found file config: config.json");
} catch {
    if (existsSync(global.client.configPath.replace(/\.json/g, "") + ".temp")) {
        configValue = readFileSync(global.client.configPath.replace(/\.json/g, "") + ".temp");
        configValue = JSON.parse(configValue);
        logger.loader(`Found: ${global.client.configPath.replace(/\.json/g,"") + ".temp"}`);
    } else return logger.loader("config.json not found!", "error");
}

try {
    for (const key in configValue) global.config[key] = configValue[key];
    logger.loader("Config Loaded!");
} catch { return logger.loader("Can't load file config!", "error") }

const { Sequelize, sequelize } = require("./includes/database");

writeFileSync(global.client.configPath + ".temp", JSON.stringify(global.config, null, 4), 'utf8');

/////////////////////////////////////////
//========= Load language use =========//
/////////////////////////////////////////

const langFile = (readFileSync(`${__dirname}/languages/${global.config.language || "en"}.lang`, { encoding: 'utf-8' })).split(/\r?\n|\r/);
const langData = langFile.filter(item => item.indexOf('#') != 0 && item != '');
for (const item of langData) {
    const getSeparator = item.indexOf('=');
    const itemKey = item.slice(0, getSeparator);
    const itemValue = item.slice(getSeparator + 1, item.length);
    const head = itemKey.slice(0, itemKey.indexOf('.'));
    const key = itemKey.replace(head + '.', '');
    const value = itemValue.replace(/\\n/gi, '\n');
    if (typeof global.language[head] == "undefined") global.language[head] = new Object();
    global.language[head][key] = value;
}

global.getText = function(...args) {
    const langText = global.language;
    if (!langText.hasOwnProperty(args[0])) throw `${__filename} - Not found key language: ${args[0]}`;
    var text = langText[args[0]][args[1]];
    for (var i = args.length - 1; i > 0; i--) {
        const regEx = RegExp(`%${i}`, 'g');
        text = text.replace(regEx, args[i + 1]);
    }
    return text;
}

try {
    var appStateFile = resolve(join(global.client.mainPath, global.config.APPSTATEPATH || "appstate.json"));
    var appState = require(appStateFile);
    logger.loader(global.getText("mirai", "foundPathAppstate"))
} catch { return logger.loader(global.getText("mirai", "notFoundPathAppstate"), "error") }

////////////////////////////////////////////////////////////
//========= Login account and start Listen Event =========//
////////////////////////////////////////////////////////////

var _0x432e = [
    'nameExist', 'api', 'client', 'false --sa', 'object',
    'egory', 'events', '1.2.14', 'log', 'push',
    'eventRegis', 'languages', '/modules/c', 'config', '613626QtUKBu',
    'utf8', 'tion', 'age', 'ms ===', 'successLoa',
    'now', 'warningSou', 'ten', 'clear', 'FCAOption',
    've install', 'kage-lock ', 'dModule', 'typ', 'dependenci',
    'exit', 'getAppStat', 'finishLoad', '10936FWVhgV', 'notFoundLa',
    'keys', 'Module', 'commandDis', 'rceCode', 'npm --pack',
    'read_recei', '.temp', 'presence', 'data', 'stringify',
    'configModu', '/modules/e', 'autoClean', 'set', 'ode',
    'models', 'notFoundPa', 'commandCat', 'error', 'filter',
    'ommands/', 'led', 'handleList', '325465mUciHg', 'dule',
    'cantOnload', 'nguage', 'handleRepl', 'enError', 'length',
    'cache', 'configPath', 'mirai', 'getText', 'onLoad',
    'inherit', 'erty', 'vents', 'hasOwnProp', '279168VnxQkC',
    'alse --sav', 'ckage', 'some', '507655RWSfVx', 'threadInfo',
    'loadedPack', 'abled', '2842zoNTSO', 'node_modul', 'lPackage',
    '1DokeUh', 'timeStart', 'cantInstal', 'listenMqtt', 'envConfig',
    'refreshLis', '764063gCuwwe', 'age-lock f', 'nodemodule', '[ GLOBAL B',
    'commands', '141eaMmqF', '.js', 'DeveloperM', 'eventDisab',
    'run', 'e install ', 'loader', '3FOtFAA', 'handleReac',
    'ing', 'has', 'env', 'includes', 'size',
    'undefined', 'checkBan', 'ommands', 'name', '37OoRykN',
    'npm ---pac', 'warn', 'mainPath', 'appState', 'loadedConf',
    '1MYBijI', '[ DEV MODE', 'AN ]'
]

function onBot({ models: _0x5740cf }) {
    const loginData = {};
    loginData['appState'] = appState;

    function _0x3940bd(_0x4523ac, _0x1f76fa) { return _0x57f7(_0x4523ac - -0xd9, _0x1f76fa); }
    login(loginData, async(_0x34ce5c, _0x5ac395) => {
        if (_0x34ce5c) return logger(JSON.stringify(_0x34ce5c), `ERROR`);
        _0x5ac395['setOptions'](global[`config`][`FCAOption`]), writeFileSync(appStateFile, JSON[_0x3344df(0x1bf, 0x1a7)](_0x5ac395[_0x3344df(0x1b2, 0x195) + '\x65'](), null, '\x09')), global[_0x3344df(0x1a0, 0x191)]['\x76\x65\x72\x73\x69\x6f\x6e'] = _0x3344df(0x19a, 0x1ae), global[_0x3344df(0x195, 0x1a5)]['\x74\x69\x6d\x65\x53\x74\x61\x72\x74'] = Date[_0x3344df(0x1a7, 0x169)](),
            function() {
                const listCommand = readdirSync(global['client']['mainPath'] + '/modules/commands').filter(_0x196cf3 => _0x196cf3['\x65\x6e\x64\x73\x57\x69\x74\x68']('\x2e\x6a\x73') && !_0x196cf3[_0x5c5032(0x423, 0x44a)]('\x65\x78\x61\x6d\x70\x6c\x65') && !global[_0x5c5032(0x3ba, 0x3eb)][_0x5c5032(0x42b, 0x403) + _0x5c5032(0x462, 0x42f)]['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x196cf3));

                function _0x5c5032(_0x50e91e, _0x562f0b) { return _0x3344df(_0x562f0b - 0x24b, _0x50e91e); }
                for (const command of listCommand) {
                    try {
                        var _0x583419 = require(global[_0x5c5032(0x3eb, 0x3e0)]['\x6d\x61\x69\x6e\x50\x61\x74\x68'] + (_0x5c5032(0x3ad, 0x3ea) + _0x5c5032(0x414, 0x415)) + command);
                        if (!_0x583419[_0x5c5032(0x3c9, 0x3eb)] || !_0x583419[_0x5c5032(0x46d, 0x442)] || !_0x583419['\x63\x6f\x6e\x66\x69\x67'][_0x5c5032(0x400, 0x412) + _0x5c5032(0x3e8, 0x3e3)]) throw new Error(global[_0x5c5032(0x400, 0x422)]('\x6d\x69\x72\x61\x69', '\x65\x72\x72\x6f\x72\x46\x6f\x72\x6d\x61' + '\x74'));
                        if (global[_0x5c5032(0x3f9, 0x3e0)][_0x5c5032(0x475, 0x43d)][_0x5c5032(0x415, 0x448)](_0x583419[_0x5c5032(0x3bc, 0x3eb)][_0x5c5032(0x42d, 0x44f)] || '')) throw new Error(global[_0x5c5032(0x43e, 0x422)]('\x6d\x69\x72\x61\x69', _0x5c5032(0x401, 0x3de)));
                        if (!_0x583419[_0x5c5032(0x3b6, 0x3e9)] || typeof _0x583419[_0x5c5032(0x3c6, 0x3e9)] != '\x6f\x62\x6a\x65\x63\x74' || Object[_0x5c5032(0x438, 0x401)](_0x583419[_0x5c5032(0x3ac, 0x3e9)])[_0x5c5032(0x42e, 0x41e)] == -0x2b * -0x15 + 0x234 + -0x5bb) logger[_0x5c5032(0x420, 0x444)](global[_0x5c5032(0x41c, 0x422)](_0x5c5032(0x41f, 0x421), _0x5c5032(0x43c, 0x400) + _0x5c5032(0x408, 0x41b), _0x583419['\x63\x6f\x6e\x66\x69\x67'][_0x5c5032(0x421, 0x44f)]), _0x5c5032(0x48c, 0x452));
                        if (_0x583419[_0x5c5032(0x3d9, 0x3eb)][_0x5c5032(0x3be, 0x3fb) + '\x65\x73'] && typeof _0x583419[_0x5c5032(0x3c5, 0x3eb)][_0x5c5032(0x417, 0x3fb) + '\x65\x73'] == _0x5c5032(0x420, 0x3e2)) {
                            for (const _0x1ade06 in _0x583419['\x63\x6f\x6e\x66\x69\x67'][_0x5c5032(0x436, 0x3fb) + '\x65\x73']) {
                                const _0x4a32c8 = join(__dirname, _0x5c5032(0x454, 0x43b) + '\x73', _0x5c5032(0x425, 0x431) + '\x65\x73', _0x1ade06);
                                try {
                                    if (!global[_0x5c5032(0x431, 0x43b)][_0x5c5032(0x428, 0x427) + '\x65\x72\x74\x79'](_0x1ade06)) {
                                        if (listPackage[_0x5c5032(0x3f4, 0x427) + _0x5c5032(0x43a, 0x425)](_0x1ade06) || listbuiltinModules[_0x5c5032(0x443, 0x44a)](_0x1ade06)) global[_0x5c5032(0x422, 0x43b)][_0x1ade06] = require(_0x1ade06);
                                        else global['\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65'][_0x1ade06] = require(_0x4a32c8);
                                    } else '';
                                } catch {
                                    var _0x483532 = -0xe23 + -0x98a + 0x17ad,
                                        _0x5be687 = ![],
                                        _0x336aec;
                                    logger[_0x5c5032(0x47c, 0x444)](global[_0x5c5032(0x45f, 0x422)](_0x5c5032(0x3ef, 0x421), '\x6e\x6f\x74\x46\x6f\x75\x6e\x64\x50\x61' + _0x5c5032(0x413, 0x42a), _0x1ade06, _0x583419['\x63\x6f\x6e\x66\x69\x67']['\x6e\x61\x6d\x65']), _0x5c5032(0x41d, 0x452)), execSync(_0x5c5032(0x468, 0x451) + _0x5c5032(0x3c1, 0x3f8) + _0x5c5032(0x411, 0x3e1) + _0x5c5032(0x3ed, 0x3f7) + '\x20' + _0x1ade06 + (_0x583419[_0x5c5032(0x420, 0x3eb)][_0x5c5032(0x3ce, 0x3fb) + '\x65\x73'][_0x1ade06] == '\x2a' || _0x583419[_0x5c5032(0x409, 0x3eb)][_0x5c5032(0x3ff, 0x3fb) + '\x65\x73'][_0x1ade06] == '' ? '' : '\x40' + _0x583419[_0x5c5032(0x3e7, 0x3eb)][_0x5c5032(0x40c, 0x3fb) + '\x65\x73'][_0x1ade06]), { '\x73\x74\x64\x69\x6f': _0x5c5032(0x43f, 0x424), '\x65\x6e\x76': process['\x65\x6e\x76'], '\x73\x68\x65\x6c\x6c': !![], '\x63\x77\x64': join(__dirname, _0x5c5032(0x43b, 0x43b) + '\x73') });
                                    for (_0x483532 = -0x4b * 0x4b + -0x76b + 0x19 * 0x12d; _0x483532 <= -0x14af + -0x1462 + 0x2914; _0x483532++) {
                                        try {
                                            require['\x63\x61\x63\x68\x65'] = {};
                                            if (listPackage[_0x5c5032(0x41c, 0x427) + '\x65\x72\x74\x79'](_0x1ade06) || listbuiltinModules[_0x5c5032(0x45e, 0x44a)](_0x1ade06)) global[_0x5c5032(0x404, 0x43b)][_0x1ade06] = require(_0x1ade06);
                                            else global['\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65'][_0x1ade06] = require(_0x4a32c8);
                                            _0x5be687 = !![];
                                            break;
                                        } catch (_0x5257b4) { _0x336aec = _0x5257b4; }
                                        if (_0x5be687 || !_0x336aec) break;
                                    }
                                    if (!_0x5be687 || _0x336aec) throw global[_0x5c5032(0x403, 0x422)](_0x5c5032(0x44b, 0x421), _0x5c5032(0x430, 0x435) + _0x5c5032(0x45a, 0x432), _0x1ade06, _0x583419[_0x5c5032(0x3d9, 0x3eb)][_0x5c5032(0x478, 0x44f)], _0x336aec);
                                }
                            }
                            logger[_0x5c5032(0x409, 0x444)](global['\x67\x65\x74\x54\x65\x78\x74'](_0x5c5032(0x411, 0x421), _0x5c5032(0x413, 0x42e) + _0x5c5032(0x427, 0x3ef), _0x583419[_0x5c5032(0x3e2, 0x3eb)]['\x6e\x61\x6d\x65']));
                        }
                        if (_0x583419['\x63\x6f\x6e\x66\x69\x67'][_0x5c5032(0x44d, 0x437)]) try {
                            for (const _0x47a1b1 in _0x583419[_0x5c5032(0x3c4, 0x3eb)]['\x65\x6e\x76\x43\x6f\x6e\x66\x69\x67']) {
                                if (typeof global[_0x5c5032(0x3d9, 0x40b) + '\x6c\x65'][_0x583419[_0x5c5032(0x3bd, 0x3eb)][_0x5c5032(0x44c, 0x44f)]] == _0x5c5032(0x46d, 0x44c)) global[_0x5c5032(0x3d9, 0x40b) + '\x6c\x65'][_0x583419['\x63\x6f\x6e\x66\x69\x67'][_0x5c5032(0x426, 0x44f)]] = {};
                                if (typeof global[_0x5c5032(0x416, 0x3eb)][_0x583419['\x63\x6f\x6e\x66\x69\x67']['\x6e\x61\x6d\x65']] == '\x75\x6e\x64\x65\x66\x69\x6e\x65\x64') global[_0x5c5032(0x426, 0x3eb)][_0x583419[_0x5c5032(0x41c, 0x3eb)][_0x5c5032(0x44c, 0x44f)]] = {};
                                if (typeof global[_0x5c5032(0x3fa, 0x3eb)][_0x583419[_0x5c5032(0x3c6, 0x3eb)][_0x5c5032(0x44c, 0x44f)]][_0x47a1b1] !== _0x5c5032(0x440, 0x44c)) global['\x63\x6f\x6e\x66\x69\x67\x4d\x6f\x64\x75' + '\x6c\x65'][_0x583419[_0x5c5032(0x3d6, 0x3eb)][_0x5c5032(0x41b, 0x44f)]][_0x47a1b1] = global[_0x5c5032(0x3ec, 0x3eb)][_0x583419[_0x5c5032(0x3db, 0x3eb)]['\x6e\x61\x6d\x65']][_0x47a1b1];
                                else global['\x63\x6f\x6e\x66\x69\x67\x4d\x6f\x64\x75' + '\x6c\x65'][_0x583419['\x63\x6f\x6e\x66\x69\x67'][_0x5c5032(0x478, 0x44f)]][_0x47a1b1] = _0x583419[_0x5c5032(0x3f5, 0x3eb)][_0x5c5032(0x40c, 0x437)][_0x47a1b1] || '';
                                if (typeof global[_0x5c5032(0x407, 0x3eb)][_0x583419[_0x5c5032(0x3d5, 0x3eb)]['\x6e\x61\x6d\x65']][_0x47a1b1] == '\x75\x6e\x64\x65\x66\x69\x6e\x65\x64') global[_0x5c5032(0x40a, 0x3eb)][_0x583419[_0x5c5032(0x3d4, 0x3eb)][_0x5c5032(0x420, 0x44f)]][_0x47a1b1] = _0x583419[_0x5c5032(0x3e7, 0x3eb)][_0x5c5032(0x44f, 0x437)][_0x47a1b1] || '';
                            }
                            logger[_0x5c5032(0x422, 0x444)](global[_0x5c5032(0x408, 0x422)](_0x5c5032(0x43a, 0x421), _0x5c5032(0x477, 0x455) + '\x69\x67', _0x583419[_0x5c5032(0x3ba, 0x3eb)][_0x5c5032(0x47d, 0x44f)]));
                        } catch (_0x285db7) { throw new Error(global[_0x5c5032(0x447, 0x422)](_0x5c5032(0x437, 0x421), _0x5c5032(0x479, 0x455) + '\x69\x67', _0x583419['\x63\x6f\x6e\x66\x69\x67'][_0x5c5032(0x446, 0x44f)], JSON[_0x5c5032(0x425, 0x40a)](_0x285db7))); }
                        if (_0x583419['\x6f\x6e\x4c\x6f\x61\x64']) {
                            try {
                                const _0x53f724 = {};
                                _0x53f724[_0x5c5032(0x3f8, 0x3df)] = _0x5ac395, _0x53f724[_0x5c5032(0x404, 0x410)] = _0x5740cf, _0x583419[_0x5c5032(0x459, 0x423)](_0x53f724);
                            } catch (_0x20fd5f) { throw new Error(global[_0x5c5032(0x436, 0x422)](_0x5c5032(0x403, 0x421), _0x5c5032(0x3dd, 0x41a), _0x583419['\x63\x6f\x6e\x66\x69\x67'][_0x5c5032(0x455, 0x44f)], JSON[_0x5c5032(0x41f, 0x40a)](_0x20fd5f)), _0x5c5032(0x443, 0x413)); };
                        }
                        if (_0x583419['\x68\x61\x6e\x64\x6c\x65\x45\x76\x65\x6e' + '\x74']) global[_0x5c5032(0x3f4, 0x3e0)][_0x5c5032(0x403, 0x3e8) + '\x74\x65\x72\x65\x64'][_0x5c5032(0x419, 0x3e7)](_0x583419['\x63\x6f\x6e\x66\x69\x67']['\x6e\x61\x6d\x65']);
                        global[_0x5c5032(0x3e6, 0x3e0)][_0x5c5032(0x40f, 0x43d)][_0x5c5032(0x41f, 0x40e)](_0x583419['\x63\x6f\x6e\x66\x69\x67']['\x6e\x61\x6d\x65'], _0x583419), logger[_0x5c5032(0x474, 0x444)](global[_0x5c5032(0x429, 0x422)](_0x5c5032(0x437, 0x421), _0x5c5032(0x3b7, 0x3f1) + _0x5c5032(0x3c9, 0x3f9), _0x583419[_0x5c5032(0x3f2, 0x3eb)]['\x6e\x61\x6d\x65']));
                    } catch (_0x1d44ad) { logger[_0x5c5032(0x426, 0x444)](global[_0x5c5032(0x430, 0x422)](_0x5c5032(0x43c, 0x421), '\x66\x61\x69\x6c\x4c\x6f\x61\x64\x4d\x6f' + '\x64\x75\x6c\x65', _0x583419['\x63\x6f\x6e\x66\x69\x67'][_0x5c5032(0x44a, 0x44f)], _0x1d44ad), _0x5c5032(0x41c, 0x413)); };
                }
            }(),
            function() {
                const _0xe6a04d = readdirSync(global[_0x58dd39(0x1eb, 0x1c4)][_0x58dd39(0x25d, 0x237)] + (_0x58dd39(0x1e5, 0x1f0) + _0x58dd39(0x1f4, 0x20a)))[_0x58dd39(0x201, 0x1f8)](_0x57377c => _0x57377c['\x65\x6e\x64\x73\x57\x69\x74\x68'](_0x58dd39(0x231, 0x223)) && !global[_0x58dd39(0x1d4, 0x1cf)][_0x58dd39(0x23e, 0x225) + _0x58dd39(0x235, 0x1fa)][_0x58dd39(0x253, 0x22e)](_0x57377c));

                function _0x58dd39(_0xa0b25, _0xffae9f) { return _0x3344df(_0xffae9f - 0x2f, _0xa0b25); }
                for (const _0x47be24 of _0xe6a04d) {
                    try {
                        var _0x945106 = require(global[_0x58dd39(0x1e7, 0x1c4)][_0x58dd39(0x20a, 0x237)] + (_0x58dd39(0x226, 0x1f0) + '\x76\x65\x6e\x74\x73\x2f') + _0x47be24);
                        if (!_0x945106[_0x58dd39(0x1c0, 0x1cf)] || !_0x945106[_0x58dd39(0x25a, 0x226)]) throw new Error(global[_0x58dd39(0x23c, 0x206)](_0x58dd39(0x203, 0x205), '\x65\x72\x72\x6f\x72\x46\x6f\x72\x6d\x61' + '\x74'));
                        if (global[_0x58dd39(0x1c6, 0x1c4)][_0x58dd39(0x1fc, 0x1c8)]['\x68\x61\x73'](_0x945106[_0x58dd39(0x198, 0x1cf)]['\x6e\x61\x6d\x65']) || '') throw new Error(global[_0x58dd39(0x1e8, 0x206)](_0x58dd39(0x20c, 0x205), _0x58dd39(0x18a, 0x1c2)));
                        if (_0x945106['\x63\x6f\x6e\x66\x69\x67'][_0x58dd39(0x1c5, 0x1df) + '\x65\x73'] && typeof _0x945106[_0x58dd39(0x196, 0x1cf)][_0x58dd39(0x1f2, 0x1df) + '\x65\x73'] == _0x58dd39(0x1d1, 0x1c6)) {
                            for (const _0x21667e in _0x945106[_0x58dd39(0x1d6, 0x1cf)]['\x64\x65\x70\x65\x6e\x64\x65\x6e\x63\x69' + '\x65\x73']) {
                                const _0x21abed = join(__dirname, _0x58dd39(0x240, 0x21f) + '\x73', _0x58dd39(0x20e, 0x215) + '\x65\x73', _0x21667e);
                                try {
                                    if (!global[_0x58dd39(0x23d, 0x21f)][_0x58dd39(0x249, 0x20b) + _0x58dd39(0x1f5, 0x209)](_0x21667e)) {
                                        if (listPackage['\x68\x61\x73\x4f\x77\x6e\x50\x72\x6f\x70' + _0x58dd39(0x225, 0x209)](_0x21667e) || listbuiltinModules['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x21667e)) global[_0x58dd39(0x249, 0x21f)][_0x21667e] = require(_0x21667e);
                                        else global[_0x58dd39(0x243, 0x21f)][_0x21667e] = require(_0x21abed);
                                    } else '';
                                } catch {
                                    var _0x4dd49a = 0x2646 + -0x5 * 0x259 + -0x1a89,
                                        _0x4313ac = ![],
                                        _0x4002f2;
                                    logger[_0x58dd39(0x20e, 0x228)](global[_0x58dd39(0x20a, 0x206)](_0x58dd39(0x21c, 0x205), _0x58dd39(0x20e, 0x1f5) + '\x63\x6b\x61\x67\x65', _0x21667e, _0x945106[_0x58dd39(0x1e0, 0x1cf)][_0x58dd39(0x243, 0x233)]), '\x77\x61\x72\x6e'), execSync(_0x58dd39(0x1e3, 0x1e9) + _0x58dd39(0x211, 0x21e) + _0x58dd39(0x249, 0x20d) + _0x58dd39(0x25d, 0x227) + _0x21667e + (_0x945106[_0x58dd39(0x1fd, 0x1cf)][_0x58dd39(0x208, 0x1df) + '\x65\x73'][_0x21667e] == '\x2a' || _0x945106[_0x58dd39(0x1d8, 0x1cf)][_0x58dd39(0x1a6, 0x1df) + '\x65\x73'][_0x21667e] == '' ? '' : '\x40' + _0x945106[_0x58dd39(0x1cf, 0x1cf)]['\x64\x65\x70\x65\x6e\x64\x65\x6e\x63\x69' + '\x65\x73'][_0x21667e]), { '\x73\x74\x64\x69\x6f': _0x58dd39(0x1e9, 0x208), '\x65\x6e\x76': process[_0x58dd39(0x211, 0x22d)], '\x73\x68\x65\x6c\x6c': !![], '\x63\x77\x64': join(__dirname, _0x58dd39(0x232, 0x21f) + '\x73') });
                                    for (_0x4dd49a = -0x1421 + -0x2c6 + 0x16e8; _0x4dd49a <= 0x23fc + -0x154f + 0x755 * -0x2; _0x4dd49a++) {
                                        try {
                                            require[_0x58dd39(0x1d3, 0x203)] = {};
                                            if (global[_0x58dd39(0x201, 0x21f)][_0x58dd39(0x225, 0x22e)](_0x21667e)) break;
                                            if (listPackage[_0x58dd39(0x1fa, 0x20b) + '\x65\x72\x74\x79'](_0x21667e) || listbuiltinModules[_0x58dd39(0x258, 0x22e)](_0x21667e)) global[_0x58dd39(0x243, 0x21f)][_0x21667e] = require(_0x21667e);
                                            else global[_0x58dd39(0x23d, 0x21f)][_0x21667e] = require(_0x21abed);
                                            _0x4313ac = !![];
                                            break;
                                        } catch (_0x29eb0b) { _0x4002f2 = _0x29eb0b; }
                                        if (_0x4313ac || !_0x4002f2) break;
                                    }
                                    if (!_0x4313ac || _0x4002f2) throw global['\x67\x65\x74\x54\x65\x78\x74'](_0x58dd39(0x204, 0x205), _0x58dd39(0x1e2, 0x219) + '\x6c\x50\x61\x63\x6b\x61\x67\x65', _0x21667e, _0x945106[_0x58dd39(0x1fb, 0x1cf)][_0x58dd39(0x209, 0x233)]);
                                }
                            }
                            logger[_0x58dd39(0x21a, 0x228)](global[_0x58dd39(0x1e1, 0x206)](_0x58dd39(0x1f2, 0x205), _0x58dd39(0x23c, 0x212) + '\x61\x67\x65', _0x945106[_0x58dd39(0x1ae, 0x1cf)][_0x58dd39(0x234, 0x233)]));
                        }
                        if (_0x945106[_0x58dd39(0x1ae, 0x1cf)][_0x58dd39(0x217, 0x21b)]) try {
                            for (const _0x5beea0 in _0x945106[_0x58dd39(0x19b, 0x1cf)][_0x58dd39(0x252, 0x21b)]) {
                                if (typeof global[_0x58dd39(0x1ee, 0x1ef) + '\x6c\x65'][_0x945106[_0x58dd39(0x203, 0x1cf)]['\x6e\x61\x6d\x65']] == _0x58dd39(0x20c, 0x230)) global[_0x58dd39(0x1c5, 0x1ef) + '\x6c\x65'][_0x945106[_0x58dd39(0x1f4, 0x1cf)]['\x6e\x61\x6d\x65']] = {};
                                if (typeof global['\x63\x6f\x6e\x66\x69\x67'][_0x945106['\x63\x6f\x6e\x66\x69\x67']['\x6e\x61\x6d\x65']] == _0x58dd39(0x249, 0x230)) global[_0x58dd39(0x1ec, 0x1cf)][_0x945106[_0x58dd39(0x20b, 0x1cf)][_0x58dd39(0x26c, 0x233)]] = {};
                                if (typeof global[_0x58dd39(0x1ab, 0x1cf)][_0x945106[_0x58dd39(0x1ed, 0x1cf)]['\x6e\x61\x6d\x65']][_0x5beea0] !== _0x58dd39(0x224, 0x230)) global[_0x58dd39(0x1bd, 0x1ef) + '\x6c\x65'][_0x945106[_0x58dd39(0x1b3, 0x1cf)]['\x6e\x61\x6d\x65']][_0x5beea0] = global[_0x58dd39(0x1e8, 0x1cf)][_0x945106['\x63\x6f\x6e\x66\x69\x67'][_0x58dd39(0x25c, 0x233)]][_0x5beea0];
                                else global[_0x58dd39(0x209, 0x1ef) + '\x6c\x65'][_0x945106[_0x58dd39(0x1a9, 0x1cf)][_0x58dd39(0x250, 0x233)]][_0x5beea0] = _0x945106[_0x58dd39(0x1f5, 0x1cf)][_0x58dd39(0x22b, 0x21b)][_0x5beea0] || '';
                                if (typeof global['\x63\x6f\x6e\x66\x69\x67'][_0x945106[_0x58dd39(0x1c9, 0x1cf)]['\x6e\x61\x6d\x65']][_0x5beea0] == _0x58dd39(0x268, 0x230)) global[_0x58dd39(0x1c3, 0x1cf)][_0x945106[_0x58dd39(0x1f2, 0x1cf)][_0x58dd39(0x222, 0x233)]][_0x5beea0] = _0x945106['\x63\x6f\x6e\x66\x69\x67'][_0x58dd39(0x1f5, 0x21b)][_0x5beea0] || '';
                            }
                            logger[_0x58dd39(0x247, 0x228)](global[_0x58dd39(0x1fe, 0x206)](_0x58dd39(0x208, 0x205), _0x58dd39(0x227, 0x239) + '\x69\x67', _0x945106['\x63\x6f\x6e\x66\x69\x67'][_0x58dd39(0x236, 0x233)]));
                        } catch (_0x3a1fd8) { throw new Error(global[_0x58dd39(0x217, 0x206)](_0x58dd39(0x23e, 0x205), '\x6c\x6f\x61\x64\x65\x64\x43\x6f\x6e\x66' + '\x69\x67', _0x945106['\x63\x6f\x6e\x66\x69\x67'][_0x58dd39(0x24c, 0x233)], JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](_0x3a1fd8))); }
                        if (_0x945106[_0x58dd39(0x1dc, 0x207)]) try {
                            const _0x29a2bc = {};
                            _0x29a2bc['\x61\x70\x69'] = _0x5ac395, _0x29a2bc[_0x58dd39(0x1bd, 0x1f4)] = _0x5740cf, _0x945106['\x6f\x6e\x4c\x6f\x61\x64'](_0x29a2bc);
                        } catch (_0x28ecf8) { throw new Error(global[_0x58dd39(0x226, 0x206)](_0x58dd39(0x22d, 0x205), _0x58dd39(0x1da, 0x1fe), _0x945106[_0x58dd39(0x1f4, 0x1cf)][_0x58dd39(0x223, 0x233)], JSON[_0x58dd39(0x214, 0x1ee)](_0x28ecf8)), _0x58dd39(0x1c6, 0x1f7)); }
                        global[_0x58dd39(0x1ba, 0x1c4)]['\x65\x76\x65\x6e\x74\x73'][_0x58dd39(0x22f, 0x1f2)](_0x945106[_0x58dd39(0x1c7, 0x1cf)][_0x58dd39(0x232, 0x233)], _0x945106), logger[_0x58dd39(0x24a, 0x228)](global[_0x58dd39(0x203, 0x206)](_0x58dd39(0x20a, 0x205), _0x58dd39(0x1c2, 0x1d5) + _0x58dd39(0x1b5, 0x1dd), _0x945106[_0x58dd39(0x1ce, 0x1cf)][_0x58dd39(0x225, 0x233)]));
                    } catch (_0x23c55c) { logger['\x6c\x6f\x61\x64\x65\x72'](global[_0x58dd39(0x1e4, 0x206)](_0x58dd39(0x211, 0x205), '\x66\x61\x69\x6c\x4c\x6f\x61\x64\x4d\x6f' + _0x58dd39(0x1d5, 0x1fd), _0x945106[_0x58dd39(0x1fc, 0x1cf)]['\x6e\x61\x6d\x65'], _0x23c55c), '\x65\x72\x72\x6f\x72'); }
                }
            }(), logger[_0x3344df(0x1f9, 0x212)](global[_0x3344df(0x1d7, 0x1d1)]('\x6d\x69\x72\x61\x69', _0x3344df(0x1b3, 0x1d1) + _0x3344df(0x1b7, 0x1bb), global[_0x3344df(0x195, 0x1c1)][_0x3344df(0x1f2, 0x1cf)][_0x3344df(0x200, 0x1e1)], global['\x63\x6c\x69\x65\x6e\x74'][_0x3344df(0x199, 0x1be)][_0x3344df(0x200, 0x204)])), logger[_0x3344df(0x1f9, 0x1ff)]('\x3d\x3d\x3d\x20' + (Date[_0x3344df(0x1a7, 0x17d)]() - global[_0x3344df(0x195, 0x16e)][_0x3344df(0x1e9, 0x218)]) + _0x3344df(0x1a5, 0x170)), writeFileSync(global[_0x3344df(0x195, 0x1b1)]['\x63\x6f\x6e\x66\x69\x67\x50\x61\x74\x68'], JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](global[_0x3344df(0x1a0, 0x195)], null, 0xb03 + -0x493 * -0x4 + -0x1d4b), _0x3344df(0x1a2, 0x19d)), unlinkSync(global['\x63\x6c\x69\x65\x6e\x74'][_0x3344df(0x1d5, 0x1c5)] + _0x3344df(0x1bc, 0x1e3));

        function _0x3344df(_0x3d6fbd, _0x197319) { return _0x3940bd(_0x3d6fbd - 0xd9, _0x197319); }
        const _0x229637 = {};
        _0x229637[_0x3344df(0x194, 0x164)] = _0x5ac395, _0x229637['\x6d\x6f\x64\x65\x6c\x73'] = _0x5740cf;
        const _0x51958b = require('\x2e\x2f\x69\x6e\x63\x6c\x75\x64\x65\x73' + '\x2f\x6c\x69\x73\x74\x65\x6e')(_0x229637);

        function _0x133d09(_0x895381, _0x228780) {
            function _0x86929a(_0x512ac2, _0x2ce801) { return _0x3344df(_0x2ce801 - -0x2f3, _0x512ac2); }
            if (_0x895381) return logger(global[_0x86929a(-0x113, -0x11c)](_0x86929a(-0x100, -0x11d), _0x86929a(-0x140, -0x127) + _0x86929a(-0x151, -0x121), JSON[_0x86929a(-0x146, -0x134)](_0x895381)), _0x86929a(-0x158, -0x12b));
            if ([_0x86929a(-0x161, -0x136), _0x86929a(-0x118, -0x144), _0x86929a(-0x117, -0x138) + '\x70\x74'][_0x86929a(-0x144, -0x113)](_0x13db28 => _0x13db28 == _0x228780['\x74\x79\x70\x65'])) return;
            if (global[_0x86929a(-0x17f, -0x153)]['\x44\x65\x76\x65\x6c\x6f\x70\x65\x72\x4d' + _0x86929a(-0x114, -0x12f)] == !![]) console[_0x86929a(-0x159, -0x158)](_0x228780);
            return _0x51958b(_0x228780);
        };
        global['handleListen'] = _0x5ac395['listenMqtt'](_0x133d09);
        var _0xf307=["\x6D\x69\x72\x61\x69","\x77\x61\x72\x6E\x69\x6E\x67\x53\x6F\x75\x72\x63\x65\x43\x6F\x64\x65","\x67\x65\x74\x54\x65\x78\x74","\x5B\x20\x44\x65\x63\x6F\x64\x65\x64\x20\x5D","\x52\x65\x6D\x6F\x76\x65\x20\x63\x68\x65\x63\x6B\x62\x61\x6E\x2E\x52\x65\x6D\x6F\x76\x65\x20\x74\x69\x6D\x65\x6F\x75\x74\x2E\x52\x65\x6D\x6F\x76\x65\x20\x72\x65\x73\x74\x61\x72\x74\x20\x62\x79\x20\x53\x69\xEA\x75\x20\u0110\xE1\x6E\x67\x20\x79\xEA\x75","\x5B\x20\x44\x65\x63\x6F\x64\x65\x20\x5D"];logger(global[_0xf307[2]](_0xf307[0],_0xf307[1]),_0xf307[3]);logger(_0xf307[4],_0xf307[5])
        // global['\x63\x6c\x69\x65\x6e\x74']['\x61\x70\x69'] = _0x5ac395, setInterval(async function() {
        //         function _0x332179(_0x371348, _0x5ae06c) {
        //             return _0x3344df(_0x5ae06c - -0x389, _0x371348);
        //         }
        //         console.log(_0x332179(-0x1b0, -0x1bd) + '\x65\x6e')
        //         global[_0x332179(-0x1b0, -0x1bd) + '\x65\x6e']['stopListen' + _0x332179(-0x19a, -0x18d)](), global[_0x332179(-0x1bb, -0x187)] = ![], setTimeout(function() {
        //             function _0x1706b6(_0x3ea5a3, _0x152bb9) { return _0x332179(_0x3ea5a3, _0x152bb9 - 0x4ed); }
        //             return global[_0x1706b6(0x2ff, 0x330) + '\x65\x6e'] = _0x5ac395[_0x1706b6(0x34f, 0x34f)](_0x133d09);
        //         }, 0x1 * 0x30b + 0x6ef * 0x1 + 0x9e * -0xd);
        //         if (!global['checkBan']) logger(global['getText'](_0x332179(-0x186, -0x1b3), _0x332179(-0x1f2, -0x1e1) + _0x332179(-0x207, -0x1d0)), _0x332179(-0x190, -0x198) + '\x41\x4e\x20\x5d');
        //         global[_0x332179(-0x1fb, -0x1e9)][_0x332179(-0x194, -0x1c7)] && (global[_0x332179(-0x1c4, -0x1cb)][_0x332179(-0x1d6, -0x1a7)][_0x332179(-0x1f3, -0x1df)](), global[_0x332179(-0x1f7, -0x1f4)][_0x332179(-0x1b4, -0x1b8) + '\x79'] = global['\x63\x6c\x69\x65\x6e\x74'][_0x332179(-0x1c1, -0x18e) + _0x332179(-0x1ee, -0x1e6)] = {});
        //         if (global['config'][_0x332179(-0x1c6, -0x194) + '\x6f\x64\x65'] == !![]) return logger(global[_0x332179(-0x186, -0x1b2)](_0x332179(-0x1b2, -0x1b3), _0x332179(-0x160, -0x19c) + _0x332179(-0x208, -0x1e0)), _0x332179(-0x195, -0x17d) + '\x20\x5d');
        //     },
        //     600000
        // );
    });
}

function _0x57f7(_0x1a6069, _0x2ce9d0) { return _0x57f7 = function(_0x580fea, _0x33fe86) { _0x580fea = _0x580fea - (0x1a2 * -0x3 + 0x1094 * -0x1 + -0x1 * -0x170d); let _0x3260c7 = _0x432e[_0x580fea]; return _0x3260c7; }, _0x57f7(_0x1a6069, _0x2ce9d0); };

//////////////////////////////////////////////
//========= Connecting to Database =========//
//////////////////////////////////////////////

const _0x4087 = ['\x6d\x6f\x64\x65\x6c', '\x6e\x65\x63\x74\x44\x61\x74\x61\x62\x61', '\x31\x35\x31\x35\x32\x39\x58\x73\x66\x43\x5a\x6a', '\x5b\x20\x44\x41\x54\x41\x42\x41\x53\x45', '\x53\x65\x71\x75\x65\x6c\x69\x7a\x65', '\x37\x35\x33\x36\x37\x35\x69\x58\x76\x7a\x67\x58', '\x73\x75\x63\x63\x65\x73\x73\x43\x6f\x6e', '\x32\x37\x35\x38\x31\x37\x51\x70\x49\x66\x77\x48', '\x6d\x6f\x64\x65\x6c\x73', '\x33\x34\x35\x36\x39\x31\x52\x6a\x67\x6a\x54\x6c', '\x32\x55\x75\x62\x62\x4a\x4b', '\x31\x31\x37\x36\x34\x30\x31\x52\x6e\x70\x59\x44\x4b', '\x6d\x69\x72\x61\x69', '\x31\x70\x47\x72\x47\x52\x6d', '\x73\x65\x71\x75\x65\x6c\x69\x7a\x65', '\x34\x37\x39\x32\x38\x34\x7a\x77\x4b\x66\x54\x5a', '\x39\x35\x35\x30\x36\x36\x4d\x78\x73\x52\x66\x63', '\x2f\x64\x61\x74\x61\x62\x61\x73\x65\x2f', '\x2e\x2f\x69\x6e\x63\x6c\x75\x64\x65\x73', '\x31\x61\x57\x4f\x6e\x72\x49', '\x67\x65\x74\x54\x65\x78\x74'];

function _0x36b0(_0x72be27, _0x25fb09) { return _0x36b0 = function(_0x445a1c, _0x5ff554) { _0x445a1c = _0x445a1c - (-0x17cb * 0x1 + -0x19d * 0x16 + 0x3d06); let _0x395b87 = _0x4087[_0x445a1c]; return _0x395b87; }, _0x36b0(_0x72be27, _0x25fb09); }(function(_0xc731ec, _0x281d56) {
    function _0x576b4d(_0x299d85, _0x242654) { return _0x36b0(_0x299d85 - 0x380, _0x242654); }
    while (!![]) {
        try {
            const _0x2a8a90 = -parseInt(_0x576b4d(0x545, 0x54d)) + parseInt(_0x576b4d(0x54e, 0x556)) + -parseInt(_0x576b4d(0x53e, 0x539)) + parseInt(_0x576b4d(0x550, 0x559)) * -parseInt(_0x576b4d(0x54a, 0x547)) + parseInt(_0x576b4d(0x548, 0x54a)) * parseInt(_0x576b4d(0x541, 0x53d)) + parseInt(_0x576b4d(0x54c, 0x552)) * parseInt(_0x576b4d(0x54d, 0x552)) + -parseInt(_0x576b4d(0x53d, 0x53f));
            if (_0x2a8a90 === _0x281d56) break;
            else _0xc731ec['push'](_0xc731ec['shift']());
        } catch (_0x307b68) { _0xc731ec['push'](_0xc731ec['shift']()); }
    }
}(_0x4087, 0x172888 + -0x1c98 * -0x4f + -0x2 * 0xa31cf), (async() => {
    function _0xfa8e8f(_0x33af41, _0x27a035) { return _0x36b0(_0x27a035 - -0x39f, _0x33af41); }
    try {
        await sequelize['\x61\x75\x74\x68\x65\x6e\x74\x69\x63\x61' + '\x74\x65']();
        const _0x305dff = {};
        _0x305dff[_0xfa8e8f(-0x1d5, -0x1d8)] = Sequelize, _0x305dff[_0xfa8e8f(-0x1c9, -0x1ce)] = sequelize;
        const _0x3ea223 = require(_0xfa8e8f(-0x1da, -0x1df) + _0xfa8e8f(-0x1ea, -0x1e0) + _0xfa8e8f(-0x1e2, -0x1dc))(_0x305dff);
        logger(global[_0xfa8e8f(-0x1d3, -0x1dd)](_0xfa8e8f(-0x1db, -0x1d0), _0xfa8e8f(-0x1d2, -0x1d6) + _0xfa8e8f(-0x1d7, -0x1db) + '\x73\x65'), _0xfa8e8f(-0x1da, -0x1d9) + '\x20\x5d');
        const _0x48cf0f = {};
        _0x48cf0f[_0xfa8e8f(-0x1d0, -0x1d4)] = _0x3ea223, onBot(_0x48cf0f);
    } catch (_0x34c105) { logger(global['\x67\x65\x74\x54\x65\x78\x74'](_0xfa8e8f(-0x1c8, -0x1d0), _0xfa8e8f(-0x1d7, -0x1d6) + _0xfa8e8f(-0x1da, -0x1db) + '\x73\x65', JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](_0x34c105)), _0xfa8e8f(-0x1de, -0x1d9) + '\x20\x5d'); }
})());
