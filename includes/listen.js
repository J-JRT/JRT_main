module.exports = function({ api, models }) {

	const Users = require("./controllers/users")({ models, api }),
				Threads = require("./controllers/threads")({ models, api }),
				Currencies = require("./controllers/currencies")({ models });
	const logger = require("../utils/log.js");

	//////////////////////////////////////////////////////////////////////
	//========= Push all variable from database to environment =========//
	//////////////////////////////////////////////////////////////////////
	
	function _0x5eae(_0x2a5871,_0x434ac7){const _0x38f432=_0x38f4();return _0x5eae=function(_0x5eae49,_0x235025){_0x5eae49=_0x5eae49-0x1f2;let _0xc5288d=_0x38f432[_0x5eae49];return _0xc5288d;},_0x5eae(_0x2a5871,_0x434ac7);}(function(_0x2a70d0,_0x184aa9){const _0x6bfe0f=_0x5eae,_0xd8765=_0x2a70d0();while(!![]){try{const _0x18b265=parseInt(_0x6bfe0f(0x1fa))/0x1*(parseInt(_0x6bfe0f(0x1f6))/0x2)+-parseInt(_0x6bfe0f(0x1f4))/0x3+-parseInt(_0x6bfe0f(0x1f3))/0x4*(-parseInt(_0x6bfe0f(0x20e))/0x5)+-parseInt(_0x6bfe0f(0x1f8))/0x6*(-parseInt(_0x6bfe0f(0x205))/0x7)+-parseInt(_0x6bfe0f(0x206))/0x8*(parseInt(_0x6bfe0f(0x1f7))/0x9)+-parseInt(_0x6bfe0f(0x207))/0xa*(parseInt(_0x6bfe0f(0x211))/0xb)+parseInt(_0x6bfe0f(0x1f9))/0xc;if(_0x18b265===_0x184aa9)break;else _0xd8765['push'](_0xd8765['shift']());}catch(_0x5153fd){_0xd8765['push'](_0xd8765['shift']());}}}(_0x38f4,0xdbb12),(async function(){const _0x5215b4=_0x5eae;try{let _0x3e3550=await Threads[_0x5215b4(0x214)](),_0x104daf=await Users[_0x5215b4(0x214)]([_0x5215b4(0x20a),_0x5215b4(0x1f2),_0x5215b4(0x20b)]),_0x21bccd=await Currencies[_0x5215b4(0x214)]([_0x5215b4(0x20a)]);for(const _0x4347db of _0x3e3550){const _0x346843=String(_0x4347db['threadID']);global[_0x5215b4(0x20b)]['allThreadID'][_0x5215b4(0x1fd)](_0x346843),global['data'][_0x5215b4(0x1fc)][_0x5215b4(0x1fb)](_0x346843,_0x4347db[_0x5215b4(0x20b)]||{}),global[_0x5215b4(0x20b)][_0x5215b4(0x202)][_0x5215b4(0x1fb)](_0x346843,_0x4347db[_0x5215b4(0x202)]||{});if(_0x4347db['data']&&_0x4347db[_0x5215b4(0x20b)]['banned']==!![])global[_0x5215b4(0x20b)][_0x5215b4(0x213)][_0x5215b4(0x1fb)](_0x346843,{'reason':_0x4347db[_0x5215b4(0x20b)][_0x5215b4(0x20f)]||'','dateAdded':_0x4347db['data'][_0x5215b4(0x210)]||''});if(_0x4347db['data']&&_0x4347db['data'][_0x5215b4(0x212)]&&_0x4347db[_0x5215b4(0x20b)][_0x5215b4(0x212)][_0x5215b4(0x1fe)]!=0x0)global[_0x5215b4(0x20b)][_0x5215b4(0x212)][_0x5215b4(0x1fb)](_0x346843,_0x4347db['data'][_0x5215b4(0x212)]);if(_0x4347db[_0x5215b4(0x20b)]&&_0x4347db[_0x5215b4(0x20b)][_0x5215b4(0x1f5)])global['data']['threadAllowNSFW'][_0x5215b4(0x1fd)](_0x346843);}for(const _0x3b1512 of _0x104daf){const _0x5cf0f3=String(_0x3b1512[_0x5215b4(0x20a)]);global['data'][_0x5215b4(0x1ff)]['push'](_0x5cf0f3);if(_0x3b1512[_0x5215b4(0x1f2)]&&_0x3b1512[_0x5215b4(0x1f2)][_0x5215b4(0x1fe)]!=0x0)global[_0x5215b4(0x20b)][_0x5215b4(0x20c)]['set'](_0x5cf0f3,_0x3b1512[_0x5215b4(0x1f2)]);if(_0x3b1512[_0x5215b4(0x20b)]&&_0x3b1512[_0x5215b4(0x20b)][_0x5215b4(0x201)]==0x1)global[_0x5215b4(0x20b)][_0x5215b4(0x200)][_0x5215b4(0x1fb)](_0x5cf0f3,{'reason':_0x3b1512[_0x5215b4(0x20b)][_0x5215b4(0x20f)]||'','dateAdded':_0x3b1512[_0x5215b4(0x20b)]['dateAdded']||''});if(_0x3b1512[_0x5215b4(0x20b)]&&_0x3b1512[_0x5215b4(0x20b)][_0x5215b4(0x212)]&&_0x3b1512[_0x5215b4(0x20b)][_0x5215b4(0x212)][_0x5215b4(0x1fe)]!=0x0)global[_0x5215b4(0x20b)][_0x5215b4(0x212)][_0x5215b4(0x1fb)](_0x5cf0f3,_0x3b1512[_0x5215b4(0x20b)][_0x5215b4(0x212)]);}for(const _0x554fa5 of _0x21bccd)global[_0x5215b4(0x20b)][_0x5215b4(0x209)][_0x5215b4(0x1fd)](String(_0x554fa5[_0x5215b4(0x20a)]));logger[_0x5215b4(0x203)](_0x5215b4(0x204));}catch(_0x3afafb){return logger['loader'](global[_0x5215b4(0x208)]('listen',_0x5215b4(0x20d),_0x3afafb),'error');}}()));function _0x38f4(){const _0x1d9ca1=['banned','threadInfo','loader','BOT\x20JRT\x20BẮT\x20ĐẦU\x20NHẬN\x20LỆNH','18417iINRvW','7284152hCVRZX','6320BpQaUE','getText','allCurrenciesID','userID','data','userName','failLoadEnvironment','65255VXOQFy','reason','dateAdded','16621dPbrkY','commandBanned','threadBanned','getAll','name','60BzgXvq','4028643lmCUIu','NSFW','6KBaeAP','9YFHwfS','1146rvxugO','20041212HBUWJC','579941KFiSjq','set','threadData','push','length','allUserID','userBanned'];_0x38f4=function(){return _0x1d9ca1;};return _0x38f4();}
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

