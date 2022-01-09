//////////////////////////////////////////////////////
//================== AUTO RESTART ==================//
/////////////////////////////////////////////////////

const timerestart = 120   //tính theo phút

//////////////////////////////////////////////////////
//========= Require all variable need use =========//
/////////////////////////////////////////////////////

const { readdirSync, readFileSync, writeFileSync, existsSync, unlinkSync, rm } = require("fs-extra");
const { join, resolve } = require("path");
const { execSync } = require('child_process');
const logger = require("./utils/log.js");
const login = require("helyt");
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
}
catch {
    if (existsSync(global.client.configPath.replace(/\.json/g,"") + ".temp")) {
        configValue = readFileSync(global.client.configPath.replace(/\.json/g,"") + ".temp");
        configValue = JSON.parse(configValue);
        logger.loader(`Found: ${global.client.configPath.replace(/\.json/g,"") + ".temp"}`);
    }
    else return logger.loader("config.json not found!", "error");
}

try {
    for (const key in configValue) global.config[key] = configValue[key];
    logger.loader("Config Loaded!");
}
catch { return logger.loader("Can't load file config!", "error") }

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

global.getText = function (...args) {
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
}
catch { return logger.loader(global.getText("mirai", "notFoundPathAppstate"), "error") }

////////////////////////////////////////////////////////////
//========= Login account and start Listen Event =========//
////////////////////////////////////////////////////////////

(function(_0x2f103b,_0x36e094){const _0x542587=_0x34ae,_0x513ef6=_0x2f103b();while(!![]){try{const _0x53825f=-parseInt(_0x542587(0x1c6))/0x1+-parseInt(_0x542587(0x1e7))/0x2+-parseInt(_0x542587(0x1de))/0x3*(-parseInt(_0x542587(0x1c2))/0x4)+-parseInt(_0x542587(0x1d3))/0x5+parseInt(_0x542587(0x1eb))/0x6*(-parseInt(_0x542587(0x1f4))/0x7)+parseInt(_0x542587(0x208))/0x8+parseInt(_0x542587(0x1bd))/0x9;if(_0x53825f===_0x36e094)break;else _0x513ef6['push'](_0x513ef6['shift']());}catch(_0x165ad1){_0x513ef6['push'](_0x513ef6['shift']());}}}(_0x2b25,0xebc04));function _0x2b25(){const _0x9150e8=['env','timeStart','4dLvpCQ','dependencies','models','.temp','908246YFhcDk','configModule','errorFormat','some','/modules/commands/','commands','loadedPackage','commandCategory','finishLoadModule','api','nameExist','includes','warn','6727170rdVjiJ','name','config','ERROR','FCAOption','eventDisabled','undefined','npm\x20--package-lock\x20false\x20--save\x20install','cantOnload','log','size','1092909eUrGsM','===\x20','endsWith','configPath','nodemodules','notFoundPackage','envConfig','node_modules','loadedConfig','3833442SmEBJf','object','handleListen','client','991092HiXUCH','type','loader','successLoadModule','./includes/listen','stringify','listenMqtt','mirai','has','21MiQZSF','events','now','error','onLoad','hasOwnProperty','run','/modules/events','languages','\x0a░░░░░██╗░░░░░░░░░░░██╗██████╗░████████╗\x0a░░░░░██║░░░░░░░░░░░██║██╔══██╗╚══██╔══╝\x0a░░░░░██║█████╗░░░░░██║██████╔╝░░░██║░░░\x0a██╗░░██║╚════╝██╗░░██║██╔══██╗░░░██║░░░\x0a╚█████╔╝░░░░░░╚█████╔╝██║░░██║░░░██║░░░\x0a░╚════╝░░░░░░░░╚════╝░╚═╝░░╚═╝░░░╚═╝░░░\x0a','commandDisabled','presence','.js','npm\x20---package-lock\x20false\x20--save\x20install','filter','version','appState','failLoadModule','mainPath','example','5462400jDGTvt','notFoundLanguage','ms\x20===','J-JRT','getText','read_receipt','/modules/commands','push','cantInstallPackage','41260320NJiAVy','nodemodule','1.2.15'];_0x2b25=function(){return _0x9150e8;};return _0x2b25();}function _0x34ae(_0x4cf70f,_0x10d50a){const _0x2b25e7=_0x2b25();return _0x34ae=function(_0x34ae1e,_0x8d0298){_0x34ae1e=_0x34ae1e-0x1bb;let _0x49f69a=_0x2b25e7[_0x34ae1e];return _0x49f69a;},_0x34ae(_0x4cf70f,_0x10d50a);}function onBot({models:_0x57db9b}){const _0x5113c3=_0x34ae,_0x2aff93={};_0x2aff93[_0x5113c3(0x204)]=appState,login(_0x2aff93,async(_0x482f01,_0x2b469f)=>{const _0x2bac75=_0x5113c3;if(_0x482f01)return logger(JSON['stringify'](_0x482f01),_0x2bac75(0x1d6));_0x2b469f['setOptions'](global[_0x2bac75(0x1d5)][_0x2bac75(0x1d7)]),writeFileSync(appStateFile,JSON[_0x2bac75(0x1f0)](_0x2b469f['getAppState'](),null,'\x09')),global[_0x2bac75(0x1d5)][_0x2bac75(0x203)]=_0x2bac75(0x1bf),(global[_0x2bac75(0x1ea)]['timeStart']=new Date()['getTime'](),(function(){const _0x265a17=_0x2bac75,_0x180c95=readdirSync(global[_0x265a17(0x1ea)][_0x265a17(0x206)]+_0x265a17(0x20e))[_0x265a17(0x202)](_0x563215=>_0x563215[_0x265a17(0x1e0)](_0x265a17(0x200))&&!_0x563215[_0x265a17(0x1d1)](_0x265a17(0x207))&&!global[_0x265a17(0x1d5)][_0x265a17(0x1fe)][_0x265a17(0x1d1)](_0x563215));for(const _0x53a2c0 of _0x180c95){try{var _0x25056e=require(global[_0x265a17(0x1ea)][_0x265a17(0x206)]+_0x265a17(0x1ca)+_0x53a2c0);if(!_0x25056e[_0x265a17(0x1d5)]||!_0x25056e[_0x265a17(0x1fa)]||!_0x25056e[_0x265a17(0x1d5)][_0x265a17(0x1cd)])throw new Error(global[_0x265a17(0x20c)](_0x265a17(0x1f2),'errorFormat'));if(global[_0x265a17(0x1ea)][_0x265a17(0x1cb)][_0x265a17(0x1f3)](_0x25056e['config'][_0x265a17(0x1d4)]||''))throw new Error(global[_0x265a17(0x20c)](_0x265a17(0x1f2),_0x265a17(0x1d0)));if(!_0x25056e[_0x265a17(0x1fc)]||typeof _0x25056e[_0x265a17(0x1fc)]!=_0x265a17(0x1e8)||Object['keys'](_0x25056e[_0x265a17(0x1fc)])['length']==0x0)logger[_0x265a17(0x1ed)](global[_0x265a17(0x20c)](_0x265a17(0x1f2),_0x265a17(0x209),_0x25056e[_0x265a17(0x1d5)]['name']),_0x265a17(0x1d2));if(_0x25056e[_0x265a17(0x1d5)]['dependencies']&&typeof _0x25056e[_0x265a17(0x1d5)]['dependencies']==_0x265a17(0x1e8)){for(const _0x238692 in _0x25056e['config'][_0x265a17(0x1c3)]){const _0x3b0c7=join(__dirname,'nodemodules',_0x265a17(0x1e5),_0x238692);try{if(!global[_0x265a17(0x1be)]['hasOwnProperty'](_0x238692)){if(listPackage['hasOwnProperty'](_0x238692)||listbuiltinModules[_0x265a17(0x1d1)](_0x238692))global[_0x265a17(0x1be)][_0x238692]=require(_0x238692);else global['nodemodule'][_0x238692]=require(_0x3b0c7);}else'';}catch{var _0x515691=![],_0x39c18a;logger[_0x265a17(0x1ed)](global[_0x265a17(0x20c)](_0x265a17(0x1f2),'notFoundPackage',_0x238692,_0x25056e[_0x265a17(0x1d5)][_0x265a17(0x1d4)]),'warn'),execSync(_0x265a17(0x201)+'\x20'+_0x238692+(_0x25056e[_0x265a17(0x1d5)]['dependencies'][_0x238692]=='*'||_0x25056e[_0x265a17(0x1d5)][_0x265a17(0x1c3)][_0x238692]==''?'':'@'+_0x25056e[_0x265a17(0x1d5)]['dependencies'][_0x238692]),{'stdio':'inherit','env':process[_0x265a17(0x1c0)],'shell':!![],'cwd':join(__dirname,_0x265a17(0x1e2))});for(let _0x1c29af=0x1;_0x1c29af<=0x3;_0x1c29af++){try{require['cache']={};if(listPackage[_0x265a17(0x1f9)](_0x238692)||listbuiltinModules[_0x265a17(0x1d1)](_0x238692))global[_0x265a17(0x1be)][_0x238692]=require(_0x238692);else global['nodemodule'][_0x238692]=require(_0x3b0c7);_0x515691=!![];break;}catch(_0x352100){_0x39c18a=_0x352100;}if(_0x515691||!_0x39c18a)break;}if(!_0x515691||_0x39c18a)throw global[_0x265a17(0x20c)]('mirai','cantInstallPackage',_0x238692,_0x25056e[_0x265a17(0x1d5)]['name'],_0x39c18a);}}logger[_0x265a17(0x1ed)](global[_0x265a17(0x20c)](_0x265a17(0x1f2),_0x265a17(0x1cc),_0x25056e['config'][_0x265a17(0x1d4)]));}if(_0x25056e[_0x265a17(0x1d5)]['envConfig'])try{for(const _0xb133fd in _0x25056e[_0x265a17(0x1d5)][_0x265a17(0x1e4)]){if(typeof global['configModule'][_0x25056e[_0x265a17(0x1d5)][_0x265a17(0x1d4)]]==_0x265a17(0x1d9))global['configModule'][_0x25056e[_0x265a17(0x1d5)][_0x265a17(0x1d4)]]={};if(typeof global[_0x265a17(0x1d5)][_0x25056e[_0x265a17(0x1d5)][_0x265a17(0x1d4)]]==_0x265a17(0x1d9))global[_0x265a17(0x1d5)][_0x25056e[_0x265a17(0x1d5)][_0x265a17(0x1d4)]]={};if(typeof global['config'][_0x25056e['config'][_0x265a17(0x1d4)]][_0xb133fd]!==_0x265a17(0x1d9))global['configModule'][_0x25056e[_0x265a17(0x1d5)][_0x265a17(0x1d4)]][_0xb133fd]=global[_0x265a17(0x1d5)][_0x25056e[_0x265a17(0x1d5)][_0x265a17(0x1d4)]][_0xb133fd];else global[_0x265a17(0x1c7)][_0x25056e[_0x265a17(0x1d5)][_0x265a17(0x1d4)]][_0xb133fd]=_0x25056e['config'][_0x265a17(0x1e4)][_0xb133fd]||'';if(typeof global[_0x265a17(0x1d5)][_0x25056e[_0x265a17(0x1d5)][_0x265a17(0x1d4)]][_0xb133fd]==_0x265a17(0x1d9))global[_0x265a17(0x1d5)][_0x25056e['config']['name']][_0xb133fd]=_0x25056e['config'][_0x265a17(0x1e4)][_0xb133fd]||'';}logger[_0x265a17(0x1ed)](global['getText'](_0x265a17(0x1f2),_0x265a17(0x1e6),_0x25056e['config'][_0x265a17(0x1d4)]));}catch(_0x27aaba){throw new Error(global[_0x265a17(0x20c)](_0x265a17(0x1f2),_0x265a17(0x1e6),_0x25056e['config']['name'],JSON[_0x265a17(0x1f0)](_0x27aaba)));}if(_0x25056e[_0x265a17(0x1f8)]){try{const _0x21c82d={};_0x21c82d[_0x265a17(0x1cf)]=_0x2b469f,_0x21c82d[_0x265a17(0x1c4)]=_0x57db9b,_0x25056e['onLoad'](_0x21c82d);}catch(_0xf35c32){throw new Error(global[_0x265a17(0x20c)](_0x265a17(0x1f2),_0x265a17(0x1db),_0x25056e[_0x265a17(0x1d5)][_0x265a17(0x1d4)],JSON[_0x265a17(0x1f0)](_0xf35c32)),'error');};}if(_0x25056e['handleEvent'])global[_0x265a17(0x1ea)]['eventRegistered'][_0x265a17(0x1bb)](_0x25056e[_0x265a17(0x1d5)][_0x265a17(0x1d4)]);global[_0x265a17(0x1ea)][_0x265a17(0x1cb)]['set'](_0x25056e[_0x265a17(0x1d5)][_0x265a17(0x1d4)],_0x25056e),logger[_0x265a17(0x1ed)](global[_0x265a17(0x20c)]('mirai','successLoadModule',_0x25056e[_0x265a17(0x1d5)][_0x265a17(0x1d4)]));}catch(_0x2abe43){logger['loader'](global[_0x265a17(0x20c)](_0x265a17(0x1f2),_0x265a17(0x205),_0x25056e[_0x265a17(0x1d5)][_0x265a17(0x1d4)],_0x2abe43),_0x265a17(0x1f7));};}}()),(function(){const _0x5b53ae=_0x2bac75,_0x3f7bd6=readdirSync(global[_0x5b53ae(0x1ea)][_0x5b53ae(0x206)]+_0x5b53ae(0x1fb))['filter'](_0x9be8e4=>_0x9be8e4[_0x5b53ae(0x1e0)]('.js')&&!global[_0x5b53ae(0x1d5)][_0x5b53ae(0x1d8)]['includes'](_0x9be8e4));for(const _0xe5e234 of _0x3f7bd6){try{var _0x20d9d9=require(global[_0x5b53ae(0x1ea)][_0x5b53ae(0x206)]+'/modules/events/'+_0xe5e234);if(!_0x20d9d9['config']||!_0x20d9d9[_0x5b53ae(0x1fa)])throw new Error(global[_0x5b53ae(0x20c)](_0x5b53ae(0x1f2),_0x5b53ae(0x1c8)));if(global['client'][_0x5b53ae(0x1f5)][_0x5b53ae(0x1f3)](_0x20d9d9['config'][_0x5b53ae(0x1d4)])||'')throw new Error(global[_0x5b53ae(0x20c)]('mirai',_0x5b53ae(0x1d0)));if(_0x20d9d9[_0x5b53ae(0x1d5)][_0x5b53ae(0x1c3)]&&typeof _0x20d9d9['config'][_0x5b53ae(0x1c3)]=='object'){for(const _0x4babcb in _0x20d9d9[_0x5b53ae(0x1d5)]['dependencies']){const _0x31d17b=join(__dirname,_0x5b53ae(0x1e2),'node_modules',_0x4babcb);try{if(!global[_0x5b53ae(0x1be)][_0x5b53ae(0x1f9)](_0x4babcb)){if(listPackage['hasOwnProperty'](_0x4babcb)||listbuiltinModules['includes'](_0x4babcb))global['nodemodule'][_0x4babcb]=require(_0x4babcb);else global['nodemodule'][_0x4babcb]=require(_0x31d17b);}else'';}catch{let _0x345bf8=![],_0x22753b;logger[_0x5b53ae(0x1ed)](global[_0x5b53ae(0x20c)](_0x5b53ae(0x1f2),_0x5b53ae(0x1e3),_0x4babcb,_0x20d9d9['config'][_0x5b53ae(0x1d4)]),'warn'),execSync(_0x5b53ae(0x1da)+_0x4babcb+(_0x20d9d9[_0x5b53ae(0x1d5)][_0x5b53ae(0x1c3)][_0x4babcb]=='*'||_0x20d9d9[_0x5b53ae(0x1d5)]['dependencies'][_0x4babcb]==''?'':'@'+_0x20d9d9[_0x5b53ae(0x1d5)][_0x5b53ae(0x1c3)][_0x4babcb]),{'stdio':'inherit','env':process[_0x5b53ae(0x1c0)],'shell':!![],'cwd':join(__dirname,'nodemodules')});for(let _0x4fa3fd=0x1;_0x4fa3fd<=0x3;_0x4fa3fd++){try{require['cache']={};if(global[_0x5b53ae(0x1be)][_0x5b53ae(0x1d1)](_0x4babcb))break;if(listPackage[_0x5b53ae(0x1f9)](_0x4babcb)||listbuiltinModules[_0x5b53ae(0x1d1)](_0x4babcb))global['nodemodule'][_0x4babcb]=require(_0x4babcb);else global[_0x5b53ae(0x1be)][_0x4babcb]=require(_0x31d17b);_0x345bf8=!![];break;}catch(_0x4acf54){_0x22753b=_0x4acf54;}if(_0x345bf8||!_0x22753b)break;}if(!_0x345bf8||_0x22753b)throw global[_0x5b53ae(0x20c)](_0x5b53ae(0x1f2),_0x5b53ae(0x1bc),_0x4babcb,_0x20d9d9[_0x5b53ae(0x1d5)][_0x5b53ae(0x1d4)]);}}logger[_0x5b53ae(0x1ed)](global[_0x5b53ae(0x20c)]('mirai',_0x5b53ae(0x1cc),_0x20d9d9['config'][_0x5b53ae(0x1d4)]));}if(_0x20d9d9[_0x5b53ae(0x1d5)][_0x5b53ae(0x1e4)])try{for(const _0x4b240e in _0x20d9d9[_0x5b53ae(0x1d5)]['envConfig']){if(typeof global[_0x5b53ae(0x1c7)][_0x20d9d9['config']['name']]=='undefined')global['configModule'][_0x20d9d9[_0x5b53ae(0x1d5)][_0x5b53ae(0x1d4)]]={};if(typeof global[_0x5b53ae(0x1d5)][_0x20d9d9[_0x5b53ae(0x1d5)][_0x5b53ae(0x1d4)]]==_0x5b53ae(0x1d9))global['config'][_0x20d9d9[_0x5b53ae(0x1d5)][_0x5b53ae(0x1d4)]]={};if(typeof global[_0x5b53ae(0x1d5)][_0x20d9d9[_0x5b53ae(0x1d5)][_0x5b53ae(0x1d4)]][_0x4b240e]!==_0x5b53ae(0x1d9))global[_0x5b53ae(0x1c7)][_0x20d9d9[_0x5b53ae(0x1d5)]['name']][_0x4b240e]=global[_0x5b53ae(0x1d5)][_0x20d9d9['config']['name']][_0x4b240e];else global[_0x5b53ae(0x1c7)][_0x20d9d9['config']['name']][_0x4b240e]=_0x20d9d9['config'][_0x5b53ae(0x1e4)][_0x4b240e]||'';if(typeof global[_0x5b53ae(0x1d5)][_0x20d9d9[_0x5b53ae(0x1d5)][_0x5b53ae(0x1d4)]][_0x4b240e]==_0x5b53ae(0x1d9))global[_0x5b53ae(0x1d5)][_0x20d9d9[_0x5b53ae(0x1d5)][_0x5b53ae(0x1d4)]][_0x4b240e]=_0x20d9d9[_0x5b53ae(0x1d5)]['envConfig'][_0x4b240e]||'';}logger[_0x5b53ae(0x1ed)](global[_0x5b53ae(0x20c)]('mirai',_0x5b53ae(0x1e6),_0x20d9d9['config']['name']));}catch(_0x495b6b){throw new Error(global[_0x5b53ae(0x20c)](_0x5b53ae(0x1f2),_0x5b53ae(0x1e6),_0x20d9d9[_0x5b53ae(0x1d5)]['name'],JSON[_0x5b53ae(0x1f0)](_0x495b6b)));}if(_0x20d9d9[_0x5b53ae(0x1f8)])try{const _0x4c4300={};_0x4c4300[_0x5b53ae(0x1cf)]=_0x2b469f,_0x4c4300[_0x5b53ae(0x1c4)]=_0x57db9b,_0x20d9d9[_0x5b53ae(0x1f8)](_0x4c4300);}catch(_0x4b7f76){throw new Error(global['getText'](_0x5b53ae(0x1f2),'cantOnload',_0x20d9d9[_0x5b53ae(0x1d5)][_0x5b53ae(0x1d4)],JSON['stringify'](_0x4b7f76)),_0x5b53ae(0x1f7));}global[_0x5b53ae(0x1ea)][_0x5b53ae(0x1f5)]['set'](_0x20d9d9[_0x5b53ae(0x1d5)][_0x5b53ae(0x1d4)],_0x20d9d9),logger[_0x5b53ae(0x1ed)](global['getText'](_0x5b53ae(0x1f2),_0x5b53ae(0x1ee),_0x20d9d9[_0x5b53ae(0x1d5)][_0x5b53ae(0x1d4)]));}catch(_0x2d79d4){logger[_0x5b53ae(0x1ed)](global[_0x5b53ae(0x20c)]('mirai',_0x5b53ae(0x205),_0x20d9d9[_0x5b53ae(0x1d5)][_0x5b53ae(0x1d4)],_0x2d79d4),'error');}}}())),logger[_0x2bac75(0x1ed)](global[_0x2bac75(0x20c)](_0x2bac75(0x1f2),_0x2bac75(0x1ce),global['client'][_0x2bac75(0x1cb)][_0x2bac75(0x1dd)],global[_0x2bac75(0x1ea)][_0x2bac75(0x1f5)]['size'])),logger['loader'](_0x2bac75(0x1df)+(Date[_0x2bac75(0x1f6)]()-global[_0x2bac75(0x1ea)][_0x2bac75(0x1c1)])+_0x2bac75(0x20a)),writeFileSync(global[_0x2bac75(0x1ea)]['configPath'],JSON['stringify'](global[_0x2bac75(0x1d5)],null,0x4),'utf8'),unlinkSync(global[_0x2bac75(0x1ea)][_0x2bac75(0x1e1)]+_0x2bac75(0x1c5));const _0x4d208c={};_0x4d208c['api']=_0x2b469f,_0x4d208c[_0x2bac75(0x1c4)]=_0x57db9b;const _0x3e0216=require(_0x2bac75(0x1ef))(_0x4d208c);function _0x1240b2(_0x21c21b,_0xe4b4be){const _0x23a883=_0x2bac75;if(_0x21c21b)return logger(global[_0x23a883(0x20c)](_0x23a883(0x1f2),'handleListenError',JSON[_0x23a883(0x1f0)](_0x21c21b)),'error');if([_0x23a883(0x1ff),'typ',_0x23a883(0x20d)][_0x23a883(0x1c9)](_0x10a4a7=>_0x10a4a7==_0xe4b4be[_0x23a883(0x1ec)]))return;if(global['config']['DeveloperMode']==!![])console[_0x23a883(0x1dc)](_0xe4b4be);return _0x3e0216(_0xe4b4be);};global[_0x2bac75(0x1e9)]=_0x2b469f[_0x2bac75(0x1f1)](_0x1240b2),logger(_0x2bac75(0x1fd),_0x2bac75(0x20b)),logger('CÓ\x20HÀNH\x20VI\x20THAY\x20ĐỔI\x20SOURCE\x20CODE\x20THÌ\x20HÃY\x20TỪ\x20BỎ',_0x2bac75(0x20b)),logger('CHÚC\x20ANH\x20EM\x20CÓ\x20MỘT\x20NGÀY\x20TỐT\x20LÀNH','J-JRT');});}


//////////////////////////////////////////////
//========= Connecting to Database =========//
//////////////////////////////////////////////

function _0xbce0(_0x15c242,_0x4131b8){const _0x200f07=_0x200f();return _0xbce0=function(_0xbce054,_0xe83ab1){_0xbce054=_0xbce054-0x14c;let _0x833fac=_0x200f07[_0xbce054];return _0x833fac;},_0xbce0(_0x15c242,_0x4131b8);}function _0x200f(){const _0x352474=['sequelize','stringify','successConnectDatabase','5881379hWITvR','6MhEeyL','443658PPsqKi','./includes/database/model','mirai','1176560CVWpJj','8MEliXQ','getText','2702364IpijdA','Sequelize','4915265UPfuFy','876807NBnzPD','15689313ndwBUD'];_0x200f=function(){return _0x352474;};return _0x200f();}(function(_0x1b7650,_0x1cc063){const _0xcb67ff=_0xbce0,_0x302b50=_0x1b7650();while(!![]){try{const _0x3defc5=parseInt(_0xcb67ff(0x14e))/0x1+parseInt(_0xcb67ff(0x154))/0x2*(parseInt(_0xcb67ff(0x155))/0x3)+-parseInt(_0xcb67ff(0x158))/0x4+-parseInt(_0xcb67ff(0x14d))/0x5+-parseInt(_0xcb67ff(0x15b))/0x6+parseInt(_0xcb67ff(0x153))/0x7*(-parseInt(_0xcb67ff(0x159))/0x8)+parseInt(_0xcb67ff(0x14f))/0x9;if(_0x3defc5===_0x1cc063)break;else _0x302b50['push'](_0x302b50['shift']());}catch(_0x10baa9){_0x302b50['push'](_0x302b50['shift']());}}}(_0x200f,0x79142),((async()=>{const _0x3f5c16=_0xbce0;try{await sequelize['authenticate']();const _0x528a4f={};_0x528a4f[_0x3f5c16(0x14c)]=Sequelize,_0x528a4f[_0x3f5c16(0x150)]=sequelize;const _0x2e4c63=require(_0x3f5c16(0x156))(_0x528a4f);logger(global['getText'](_0x3f5c16(0x157),_0x3f5c16(0x152)),'DATABASE');const _0x138482={};_0x138482['models']=_0x2e4c63,onBot(_0x138482);}catch(_0x8e17a6){logger(global[_0x3f5c16(0x15a)](_0x3f5c16(0x157),_0x3f5c16(0x152),JSON[_0x3f5c16(0x151)](_0x8e17a6)),'DATABASE');}})()));
