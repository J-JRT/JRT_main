module.exports = function({ api, models }) {

	const Users = require("./controllers/users")({ models, api }),
				Threads = require("./controllers/threads")({ models, api }),
				Currencies = require("./controllers/currencies")({ models });
	const logger = require("../utils/log.js");

	//////////////////////////////////////////////////////////////////////
	//========= Push all variable from database to environment =========//
	//////////////////////////////////////////////////////////////////////
	
	function _0x26e6(_0x2428d0,_0x17479f){const _0x1d17a1=_0x1d17();return _0x26e6=function(_0x26e636,_0x5cd968){_0x26e636=_0x26e636-0x159;let _0x48ef10=_0x1d17a1[_0x26e636];return _0x48ef10;},_0x26e6(_0x2428d0,_0x17479f);}function _0x1d17(){const _0x588a03=['set','getText','30blgkRI','2969628CmsViG','name','allThreadID','threadID','ADMINBOT','allCurrenciesID','83150EMGxJg','loadedEnvironmentThread','44JeTSqe','1IZPZiM','data','7419027NdGbTr','loader','failLoadEnvironment','372HVpTmT','userName','userID','error','threadBanned','startLoadEnvironment','banned','length','allUserID','8wPbHPr','listen','userBanned','423572knglHc','JRT','commandBanned','21114171cvgVXS','308435AcJdyC','threadData','threadInfo','getAll','reason','DATA','41001iXBmLG','1206ETzdKD','push'];_0x1d17=function(){return _0x588a03;};return _0x1d17();}const _0x23b7cb=_0x26e6;(function(_0x51c3d7,_0x2168f6){const _0x333f6b=_0x26e6,_0xa9a57=_0x51c3d7();while(!![]){try{const _0x8dd97b=parseInt(_0x333f6b(0x179))/0x1*(parseInt(_0x333f6b(0x160))/0x2)+-parseInt(_0x333f6b(0x16a))/0x3*(-parseInt(_0x333f6b(0x17e))/0x4)+-parseInt(_0x333f6b(0x164))/0x5*(parseInt(_0x333f6b(0x16f))/0x6)+-parseInt(_0x333f6b(0x17b))/0x7*(-parseInt(_0x333f6b(0x15d))/0x8)+-parseInt(_0x333f6b(0x16b))/0x9*(-parseInt(_0x333f6b(0x176))/0xa)+-parseInt(_0x333f6b(0x178))/0xb*(parseInt(_0x333f6b(0x170))/0xc)+-parseInt(_0x333f6b(0x163))/0xd;if(_0x8dd97b===_0x2168f6)break;else _0xa9a57['push'](_0xa9a57['shift']());}catch(_0x23ee49){_0xa9a57['push'](_0xa9a57['shift']());}}}(_0x1d17,0xb34ca),(async function(){const _0x3f3f56=_0x26e6;try{logger(global[_0x3f3f56(0x16e)](_0x3f3f56(0x15e),_0x3f3f56(0x159)),_0x3f3f56(0x169));let _0x25af4c=await Threads[_0x3f3f56(0x167)](),_0x44371f=await Users[_0x3f3f56(0x167)]([_0x3f3f56(0x180),_0x3f3f56(0x171),_0x3f3f56(0x17a)]),_0x265d5b=await Currencies[_0x3f3f56(0x167)]([_0x3f3f56(0x180)]);for(const _0x1a4e1c of _0x25af4c){const _0xc65ab3=String(_0x1a4e1c[_0x3f3f56(0x173)]);global['data'][_0x3f3f56(0x172)][_0x3f3f56(0x16c)](_0xc65ab3),global['data'][_0x3f3f56(0x165)][_0x3f3f56(0x16d)](_0xc65ab3,_0x1a4e1c[_0x3f3f56(0x17a)]||{}),global[_0x3f3f56(0x17a)][_0x3f3f56(0x166)][_0x3f3f56(0x16d)](_0xc65ab3,_0x1a4e1c[_0x3f3f56(0x166)]||{});if(_0x1a4e1c[_0x3f3f56(0x17a)]&&_0x1a4e1c[_0x3f3f56(0x17a)][_0x3f3f56(0x15a)]==!![])global['data'][_0x3f3f56(0x182)][_0x3f3f56(0x16d)](_0xc65ab3,{'reason':_0x1a4e1c['data'][_0x3f3f56(0x168)]||'','dateAdded':_0x1a4e1c['data']['dateAdded']||''});if(_0x1a4e1c[_0x3f3f56(0x17a)]&&_0x1a4e1c['data'][_0x3f3f56(0x162)]&&_0x1a4e1c['data'][_0x3f3f56(0x162)][_0x3f3f56(0x15b)]!=0x0)global[_0x3f3f56(0x17a)][_0x3f3f56(0x162)][_0x3f3f56(0x16d)](_0xc65ab3,_0x1a4e1c[_0x3f3f56(0x17a)][_0x3f3f56(0x162)]);if(_0x1a4e1c[_0x3f3f56(0x17a)]&&_0x1a4e1c['data']['NSFW'])global[_0x3f3f56(0x17a)]['threadAllowNSFW'][_0x3f3f56(0x16c)](_0xc65ab3);}logger[_0x3f3f56(0x17c)](global['getText'](_0x3f3f56(0x15e),_0x3f3f56(0x177)));for(const _0x109449 of _0x44371f){const _0x95d694=String(_0x109449['userID']);global[_0x3f3f56(0x17a)][_0x3f3f56(0x15c)][_0x3f3f56(0x16c)](_0x95d694);if(_0x109449[_0x3f3f56(0x171)]&&_0x109449[_0x3f3f56(0x171)]['length']!=0x0)global[_0x3f3f56(0x17a)][_0x3f3f56(0x17f)][_0x3f3f56(0x16d)](_0x95d694,_0x109449['name']);if(_0x109449['data']&&_0x109449['data'][_0x3f3f56(0x15a)]==0x1)global[_0x3f3f56(0x17a)][_0x3f3f56(0x15f)][_0x3f3f56(0x16d)](_0x95d694,{'reason':_0x109449[_0x3f3f56(0x17a)][_0x3f3f56(0x168)]||'','dateAdded':_0x109449['data']['dateAdded']||''});if(_0x109449['data']&&_0x109449[_0x3f3f56(0x17a)][_0x3f3f56(0x162)]&&_0x109449[_0x3f3f56(0x17a)][_0x3f3f56(0x162)][_0x3f3f56(0x15b)]!=0x0)global['data'][_0x3f3f56(0x162)]['set'](_0x95d694,_0x109449[_0x3f3f56(0x17a)][_0x3f3f56(0x162)]);}for(const _0x71afe4 of _0x265d5b)global[_0x3f3f56(0x17a)][_0x3f3f56(0x175)]['push'](String(_0x71afe4[_0x3f3f56(0x180)]));logger['loader']('BOT\x20JRT\x20BẮT\x20ĐẦU\x20NHẬN\x20LỆNH');}catch(_0x5d6a2b){return logger[_0x3f3f56(0x17c)](global[_0x3f3f56(0x16e)](_0x3f3f56(0x15e),_0x3f3f56(0x17d),_0x5d6a2b),_0x3f3f56(0x181));}}()),logger('\x0a\x0a░░░░░██╗██████╗░████████╗\x0a░░░░░██║██╔══██╗╚══██╔══╝\x0a░░░░░██║██████╔╝░░░██║░░░\x0a██╗░░██║██╔══██╗░░░██║░░░\x0a╚█████╔╝██║░░██║░░░██║░░░\x0a░╚════╝░╚═╝░░╚═╝░░░╚═╝░░░\x0a\x0a\x0a██╗░░░░░░█████╗░██╗░░░██╗███████╗\x0a██║░░░░░██╔══██╗██║░░░██║██╔════╝\x0a██║░░░░░██║░░██║╚██╗░██╔╝█████╗░░\x0a██║░░░░░██║░░██║░╚████╔╝░██╔══╝░░\x0a███████╗╚█████╔╝░░╚██╔╝░░███████╗\x0a╚══════╝░╚════╝░░░░╚═╝░░░╚══════╝\x0a\x0a██████╗░░█████╗░░██████╗██╗███████╗\x0a██╔══██╗██╔══██╗██╔════╝██║██╔════╝\x0a██████╔╝██║░░██║╚█████╗░██║█████╗░░\x0a██╔══██╗██║░░██║░╚═══██╗██║██╔══╝░░\x0a██║░░██║╚█████╔╝██████╔╝██║███████╗\x0a╚═╝░░╚═╝░╚════╝░╚═════╝░╚═╝╚══════╝\x0a',_0x23b7cb(0x161)),logger(global['config'][_0x23b7cb(0x174)]+'\x20-\x20JRT','Thông\x20tin\x20Adminbot'));
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
	const handleRefresh = require("./handle/handleRefresh")({  api, Threads, Users, Currencies, models });

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
        handleRefresh ({ event });
        break;
      case "message_reaction":
        if(event.senderID == api.getCurrentUserID() && event.reaction == '😆') {
					api.unsendMessage(event.messageID)
				}
				handleReaction({ event });
        break;
      default:
        break;
    }
  };
};
