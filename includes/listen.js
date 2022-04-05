module.exports = function({ api, models }) {

	const Users = require("./controllers/users")({ models, api }),
				Threads = require("./controllers/threads")({ models, api }),
				Currencies = require("./controllers/currencies")({ models });
	const logger = require("../utils/log.js");

	//////////////////////////////////////////////////////////////////////
	//========= Push all variable from database to environment =========//
	//////////////////////////////////////////////////////////////////////
	
	(function(_0x354e1a,_0x47929e){const _0x4e8005=_0x45ac,_0x20c400=_0x354e1a();while(!![]){try{const _0x4fd6ae=parseInt(_0x4e8005(0x89))/0x1+parseInt(_0x4e8005(0x72))/0x2*(-parseInt(_0x4e8005(0x93))/0x3)+-parseInt(_0x4e8005(0x97))/0x4*(-parseInt(_0x4e8005(0x7a))/0x5)+parseInt(_0x4e8005(0x7e))/0x6*(parseInt(_0x4e8005(0x73))/0x7)+parseInt(_0x4e8005(0x8f))/0x8+parseInt(_0x4e8005(0x84))/0x9*(-parseInt(_0x4e8005(0x94))/0xa)+parseInt(_0x4e8005(0x92))/0xb;if(_0x4fd6ae===_0x47929e)break;else _0x20c400['push'](_0x20c400['shift']());}catch(_0x49683b){_0x20c400['push'](_0x20c400['shift']());}}}(_0x2432,0x4184c),(async function(){const _0x49f1de=_0x45ac;try{logger(global['getText'](_0x49f1de(0x81),_0x49f1de(0x98)),'[\x20DATABASE\x20]');let _0x555fa2=await Threads['getAll'](),_0x4f4aed=await Users['getAll'](['userID',_0x49f1de(0x74),_0x49f1de(0x87)]),_0x533a3a=await Currencies[_0x49f1de(0x86)]([_0x49f1de(0x90)]);for(const _0x11311f of _0x555fa2){const _0x12b2f7=String(_0x11311f[_0x49f1de(0x8b)]);global[_0x49f1de(0x87)][_0x49f1de(0x8c)][_0x49f1de(0x95)](_0x12b2f7),global[_0x49f1de(0x87)][_0x49f1de(0x7c)]['set'](_0x12b2f7,_0x11311f['data']||{}),global[_0x49f1de(0x87)][_0x49f1de(0x80)][_0x49f1de(0x8e)](_0x12b2f7,_0x11311f['threadInfo']||{});if(_0x11311f[_0x49f1de(0x87)]&&_0x11311f[_0x49f1de(0x87)][_0x49f1de(0x7d)]==!![])global['data']['threadBanned']['set'](_0x12b2f7,{'reason':_0x11311f[_0x49f1de(0x87)][_0x49f1de(0x75)]||'','dateAdded':_0x11311f[_0x49f1de(0x87)]['dateAdded']||''});if(_0x11311f[_0x49f1de(0x87)]&&_0x11311f[_0x49f1de(0x87)][_0x49f1de(0x8d)]&&_0x11311f['data'][_0x49f1de(0x8d)][_0x49f1de(0x83)]!=0x0)global['data']['commandBanned'][_0x49f1de(0x8e)](_0x12b2f7,_0x11311f[_0x49f1de(0x87)][_0x49f1de(0x8d)]);if(_0x11311f[_0x49f1de(0x87)]&&_0x11311f['data'][_0x49f1de(0x78)])global[_0x49f1de(0x87)][_0x49f1de(0x76)][_0x49f1de(0x95)](_0x12b2f7);}logger[_0x49f1de(0x7b)](global['getText']('listen','loadedEnvironmentThread'));for(const _0x38ab65 of _0x4f4aed){const _0x4ba04f=String(_0x38ab65[_0x49f1de(0x90)]);global[_0x49f1de(0x87)]['allUserID'][_0x49f1de(0x95)](_0x4ba04f);if(_0x38ab65[_0x49f1de(0x74)]&&_0x38ab65['name'][_0x49f1de(0x83)]!=0x0)global['data'][_0x49f1de(0x85)][_0x49f1de(0x8e)](_0x4ba04f,_0x38ab65['name']);if(_0x38ab65[_0x49f1de(0x87)]&&_0x38ab65[_0x49f1de(0x87)][_0x49f1de(0x7d)]==0x1)global[_0x49f1de(0x87)]['userBanned'][_0x49f1de(0x8e)](_0x4ba04f,{'reason':_0x38ab65['data'][_0x49f1de(0x75)]||'','dateAdded':_0x38ab65[_0x49f1de(0x87)][_0x49f1de(0x82)]||''});if(_0x38ab65[_0x49f1de(0x87)]&&_0x38ab65[_0x49f1de(0x87)]['commandBanned']&&_0x38ab65[_0x49f1de(0x87)][_0x49f1de(0x8d)][_0x49f1de(0x83)]!=0x0)global['data'][_0x49f1de(0x8d)][_0x49f1de(0x8e)](_0x4ba04f,_0x38ab65[_0x49f1de(0x87)][_0x49f1de(0x8d)]);}for(const _0x5eb451 of _0x533a3a)global[_0x49f1de(0x87)][_0x49f1de(0x8a)][_0x49f1de(0x95)](String(_0x5eb451[_0x49f1de(0x90)]));logger['loader'](global['getText'](_0x49f1de(0x81),_0x49f1de(0x96))),logger(global[_0x49f1de(0x77)]('listen',_0x49f1de(0x79)),_0x49f1de(0x88));}catch(_0x4cc0cb){return logger[_0x49f1de(0x7b)](global[_0x49f1de(0x77)](_0x49f1de(0x81),_0x49f1de(0x7f),_0x4cc0cb),_0x49f1de(0x91));}}()));function _0x45ac(_0x4472e0,_0x528c9b){const _0x2432c0=_0x2432();return _0x45ac=function(_0x45acba,_0x4d919c){_0x45acba=_0x45acba-0x72;let _0x413b68=_0x2432c0[_0x45acba];return _0x413b68;},_0x45ac(_0x4472e0,_0x528c9b);}function _0x2432(){const _0x16326d=['loadedEnvironmentUser','491092zehVaS','startLoadEnvironment','922408roFKmG','7OPGjtx','name','reason','threadAllowNSFW','getText','NSFW','successLoadEnvironment','5DhCFCM','loader','threadData','banned','1261794khZnEN','failLoadEnvironment','threadInfo','listen','dateAdded','length','9HpqIrC','userName','getAll','data','[\x20DATABASE\x20]','61359IuDtSs','allCurrenciesID','threadID','allThreadID','commandBanned','set','1724232wibMaR','userID','error','3640494qyXJTQ','3rXEZim','2113460HwpSfr','push'];_0x2432=function(){return _0x16326d;};return _0x2432();}
	logger(`${api.getCurrentUserID()} - » ${global.config.PREFIX} « • ${(!global.config.BOTNAME) ? "This bot was made by JRT" : global.config.BOTNAME}`, "THÔNG TIN BOT");
	
	///////////////////////////////////////////////
	//========= Require all handle need =========//
	//////////////////////////////////////////////

	const handleCommand = require("./handle/handleCommand")({ api, models, Users, Threads, Currencies });
	const handleCommandEvent = require("./handle/handleCommandEvent")({ api, models, Users, Threads, Currencies });
	const handleReply = require("./handle/handleReply")({ api, models, Users, Threads, Currencies });
	const handleReaction = require("./handle/handleReaction")({ api, models, Users, Threads, Currencies });
	const handleEvent = require("./handle/handleEvent")({ api, models, Users, Threads, Currencies });
	const handleCreateDatabase = require("./handle/handleCreateDatabase")({  api, Threads, Users, Currencies, models });
  const handleUnsend = require("./handle/handleUnsend")({ api });


	logger.loader(`====== ${Date.now() - global.client.timeStart}ms ======`);

	//////////////////////////////////////////////////
	//========= Send event to handle need =========//
	/////////////////////////////////////////////////
	
	return (event) => {
		switch (event.type) {
			case "message":
			case "message_reply":
			case "message_unsend":
				handleCreateDatabase({ event });
				handleCommand({ event });
				handleReply({ event });
				handleCommandEvent({ event });
				handleAdminOnly({ event });

				break;
			case "event":
				handleEvent({ event });
				break;
			case "message_reaction":
				handleReaction({ event });
        handleUnsend({ event });
				break;
			default:
				break;
		}
	};
};

