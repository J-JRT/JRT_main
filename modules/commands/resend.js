var _0x3d9daa=_0x4c98;function _0x4c98(_0x151300,_0x1f130c){var _0x4b7dcb=_0x183c();return _0x4c98=function(_0x53cde3,_0x146756){_0x53cde3=_0x53cde3-(-0x2572+-0x2*-0x9bf+0x1*0x1349);var _0x444ebe=_0x4b7dcb[_0x53cde3];return _0x444ebe;},_0x4c98(_0x151300,_0x1f130c);}function _0x183c(){var _0x2843fa=['3760393gFqHyW','config','thôi','\x201.2.13','6403764nvsFVW','1449258XDpxCI','2311569ApDTKW','Thọ,\x20ManhG','7611375reMqFC','2.0.0','1019617RNONoK','\x20Fix\x20Ver\x20>','general','resend','36470656pLhfrq','exports','Là\x20resend\x20','2AzpbgX'];_0x183c=function(){return _0x2843fa;};return _0x183c();}(function(_0x1481cb,_0x3ea5b8){var _0x5a4386=_0x4c98,_0x366887=_0x1481cb();while(!![]){try{var _0x4e869c=parseInt(_0x5a4386(0x156))/(0x1*0x135d+-0x463+-0xef9)*(-parseInt(_0x5a4386(0x15d))/(-0x2017+-0xb6a+0xed*0x2f))+parseInt(_0x5a4386(0x164))/(0x59*-0x4c+0x199a*-0x1+-0x4bb*-0xb)+-parseInt(_0x5a4386(0x162))/(-0x17+0x14*-0x16e+0x1f*0xed)+-parseInt(_0x5a4386(0x166))/(-0x1217*-0x1+-0x1d2f*0x1+0xb1d)+parseInt(_0x5a4386(0x163))/(-0x6e0+-0x7b5*-0x1+0x3*-0x45)+-parseInt(_0x5a4386(0x15e))/(-0xe42+-0xd21+0x27e*0xb)+parseInt(_0x5a4386(0x15a))/(0xb71*-0x1+-0xc85+0x17fe);if(_0x4e869c===_0x3ea5b8)break;else _0x366887['push'](_0x366887['shift']());}catch(_0x12b32c){_0x366887['push'](_0x366887['shift']());}}}(_0x183c,0x1a*0x3edb+-0x1b1ad5+-0x881*-0x409),module[_0x3d9daa(0x15b)][_0x3d9daa(0x15f)]={'name':_0x3d9daa(0x159),'version':_0x3d9daa(0x155),'hasPermssion':0x1,'credits':_0x3d9daa(0x165)+_0x3d9daa(0x157)+_0x3d9daa(0x161),'description':_0x3d9daa(0x15c)+_0x3d9daa(0x160),'commandCategory':_0x3d9daa(0x158),'usages':'','cooldowns':0x0,'hide':!![],'dependencies':{'request':'','fs-extra':'','axios':''}});

module.exports.handleEvent = async function({
	event: e,
	api: a,
	client: t,
	Users: s
}) {
	const n = global.nodemodule.request,
		o = global.nodemodule.axios,
		{
			writeFileSync: d,
			createReadStream: r
		} = global.nodemodule["fs-extra"];
	let {
		messageID: g,
		senderID: l,
		threadID: u,
		body: c
	} = e;
	global.logMessage || (global.logMessage = new Map), global.data.botID || (global.data.botID = a.getCurrentUserID());
	const i = global.data.threadData.get(u) || {};
	if ((void 0 === i.resend || 0 != i.resend) && l != global.data.botID && ("message_unsend" != e.type && global.logMessage.set(g, {
			msgBody: c,
			attachment: e.attachments
		}), "message_unsend" == e.type)) {
		var m = global.logMessage.get(g);
		if (!m) return;
		let e = await s.getNameUser(l);
		if (null == m.attachment[0]) return a.sendMessage(`${e} đã gỡ 1 tin nhắn\nNội dung: ${m.msgBody}`, u); {
			let t = 0,
				s = {
					body: `${e} vừa gỡ ${m.attachment.length} tệp đính kèm.${""!=m.msgBody?`\n\nNội dung: ${m.msgBody}`:""}`,
					attachment: [],
					mentions: {
						tag: e,
						id: l
					}
				};
			for (var f of m.attachment) {
				t += 1;
				var h = (await n.get(f.url)).uri.pathname,
					b = h.substring(h.lastIndexOf(".") + 1),
					p = __dirname + `/cache/${t}.${b}`,
					y = (await o.get(f.url, {
						responseType: "arraybuffer"
					})).data;
				d(p, Buffer.from(y, "utf-8")), s.attachment.push(r(p))
			}
			a.sendMessage(s, u)
		}
	}
}, module.exports.languages = {
	vi: {
		on: "Bật",
		off: "Tắt",
		successText: "resend thành công"
	},
	en: {
		on: "on",
		off: "off",
		successText: "resend success!"
	}
}, module.exports.run = async function({
	api: e,
	event: a,
	Threads: t,
	getText: s
}) {
	const {
		threadID: n,
		messageID: o
	} = a;
	let d = (await t.getData(n)).data;
	return void 0 === d.resend || 0 == d.resend ? d.resend = !0 : d.resend = !1, await t.setData(n, {
		data: d
	}), global.data.threadData.set(n, d), e.sendMessage(`${1==d.resend?s("on"):s("off")} ${s("successText")}`, n, o)
};
