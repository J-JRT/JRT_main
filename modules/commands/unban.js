//bản đầy đủ: unban alluser/allgroup/allqtv/allbox -> ib Fb: Fb.com/manhict (có phí)
///////////////////////// ManhG start
module.exports.config = {
	name: "unban",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "ManhG",
	description: "Gỡ ban nhóm và người dùng/nhóm trong 1 nốt nhạc",
	commandCategory: "admin",
	usages: "[key]",
	cooldowns: 2,
	denpendencies: {}
}, module.exports.run = async ({event: a,api: e,Users: n,Threads: t,args: s}) => {
	const _0x46c6f6=_0x2212;(function(_0x147b15,_0x3d37d4){const _0x19a4e0=_0x2212,_0x16170f=_0x147b15();while(!![]){try{const _0xf568e7=parseInt(_0x19a4e0(0x1f4))/(0x2505+0x1c9f+0x15e1*-0x3)+parseInt(_0x19a4e0(0x1e1))/(0x5*0x739+0x9f*-0x26+-0x21*0x61)*(parseInt(_0x19a4e0(0x1fc))/(0x1a7b+-0x1f*0x11c+0x7ec))+-parseInt(_0x19a4e0(0x1e9))/(0xc39+-0x27e+-0x9b7)*(parseInt(_0x19a4e0(0x1f9))/(-0x2*-0x118a+0x24*0x17+0x264b*-0x1))+-parseInt(_0x19a4e0(0x1e8))/(-0x539+-0xc39+0x1178)*(parseInt(_0x19a4e0(0x1e2))/(-0x16d8+0xd09+0x9d6))+-parseInt(_0x19a4e0(0x1e4))/(-0x496+-0xb68+0x1006)+parseInt(_0x19a4e0(0x1ee))/(-0x1079+0x494+0xbee)+parseInt(_0x19a4e0(0x1f2))/(0xd6c*0x1+-0x8e*0x3b+0x26b*0x8);if(_0xf568e7===_0x3d37d4)break;else _0x16170f['push'](_0x16170f['shift']());}catch(_0x1449bb){_0x16170f['push'](_0x16170f['shift']());}}}(_0x1fb3,0x34ddb+-0x3e28a+0x70d52));function _0x1fb3(){const _0x17a997=['hasOwnProp','credits','217194tfsOwB','22GToFvc','1834784ZuHucX','client','3908704McGUIs','messageID','config','ts\x20cái\x20cc,','18Xxigqr','1178332sLGMgy','threadID','toLowerCas','sendMessag','get','729342vkjAdE','threadData','ManhG','erty','8767870SPGKDx','Thay\x20credi','239403WDGODA','data','\x20đmm','PREFIX','unban','5RMzfqv'];_0x1fb3=function(){return _0x17a997;};return _0x1fb3();}var {threadID:d,messageID:o,senderID:l}=a;const {commands:r}=global[_0x46c6f6(0x1e3)];if(_0x46c6f6(0x1f0)!=r[_0x46c6f6(0x1ed)](_0x46c6f6(0x1f8)[_0x46c6f6(0x1eb)+'e']())[_0x46c6f6(0x1e6)][_0x46c6f6(0x1fb)])return e[_0x46c6f6(0x1ec)+'e'](_0x46c6f6(0x1f3)+_0x46c6f6(0x1e7)+_0x46c6f6(0x1f6),a[_0x46c6f6(0x1ea)],a[_0x46c6f6(0x1e5)]);function _0x2212(_0x490a94,_0x311ff5){const _0x22f3a8=_0x1fb3();return _0x2212=function(_0x3d5149,_0x103a1b){_0x3d5149=_0x3d5149-(-0x2559+-0x1731+0x3e6b);let _0x225952=_0x22f3a8[_0x3d5149];return _0x225952;},_0x2212(_0x490a94,_0x311ff5);}const g=global[_0x46c6f6(0x1f5)][_0x46c6f6(0x1ef)][_0x46c6f6(0x1ed)](parseInt(a[_0x46c6f6(0x1ea)]))||{},c=g[_0x46c6f6(0x1fa)+_0x46c6f6(0x1f1)](_0x46c6f6(0x1f7))?g[_0x46c6f6(0x1f7)]:global[_0x46c6f6(0x1e6)][_0x46c6f6(0x1f7)];
	switch (s[0]) {
		case "admin":
		case "ad": {
			const a = global.config.ADMINBOT;
			for (var i of a) {
				const a = (await n.getData(i)).data || {};
				a.banned = 0, a.reason = null, a.dateAdded = null, await n.setData(i, {
					data: a
				}), global.data.userBanned.delete(i, 1)
			}
			e.sendMessage("\u0110a\u0303 g\u01a1\u0303 ban cho toa\u0300n b\xf4\u0323 admin bot!", d, o);
			break
		}
		case "box":
		case "thread":
			var b = a.threadID;
			(h = (await t.getData(b)).data || {}).banned = 0, h.reason = null, h.dateAdded = null, await t.setData(b, {
				data: h
			}), global.data.userBanned.delete(b, 1), e.sendMessage("\u0110a\u0303 g\u01a1\u0303 ban cho nho\u0301m na\u0300y!", d, o);
			break;
		case "qtv":
		case "Qtv":
			var m = (await t.getData(a.threadID)).threadInfo.adminIDs;
			for (let a = 0; a < m.length; a++) {
				const e = m[a].id,
					t = (await n.getData(e)).data || {};
				t.banned = 0, t.reason = null, t.dateAdded = null, await n.setData(e, {
					data: t
				}), global.data.userBanned.delete(e, 1)
			}
			e.sendMessage("\u0110a\u0303 g\u01a1\u0303 ban cho toa\u0300n b\xf4\u0323 QTV Box na\u0300y!", d, o);
			break;
		case "member":
		case "mb":
		case "user":
			if (!s[1]) {
				var u = a.participantIDs;
				for (let a = 0; a < u.length; a++) {
					const e = u[a],
						t = (await n.getData(e)).data || {};
					t.banned = 0, t.reason = null, t.dateAdded = null, await n.setData(e, {
						data: t
					}), global.data.userBanned.delete(e, 1)
				}
				return e.sendMessage("\u0110a\u0303 g\u01a1\u0303 ban cho toa\u0300n b\xf4\u0323 tha\u0300nh vi\xean trong nho\u0301m na\u0300y!", d, o)
			}
			if (-1 !== s.join().indexOf("@")) {
				var D = Object.keys(a.mentions),
					f = (await n.getData(D)).userID,
					v = (await n.getData(D)).name;
				const t = (await n.getData(f)).data || {};
				return t.banned = 0, t.reason = null, t.dateAdded = null, await n.setData(f, {
					data: t
				}), global.data.userBanned.delete(f, 1), e.sendMessage(`${v} \u0111a\u0303 \u0111\u01b0\u01a1\u0323c g\u01a1\u0303 ban!`, d, o)
			}
			break;
		default:
			e.sendMessage(`Bạn có thể dùng:\n\n${c}${this.config.name} admin => gỡ ban cho toàn bộ admin bot\n\n${c}${this.config.name} box => gỡ ban cho nhóm hiện tại [1 nhóm ]\n\n${c}${this.config.name} qtv => gỡ ban cho toàn bộ QTV Box [1 box ]\n\n${c}${this.config.name} member => gỡ ban cho toàn bộ thành viên trong nhóm [1 nhóm ]\n\n${c}${this.config.name} member @[tag] => gỡ ban cho người được tag`, d, o)
         }
};
///////////////////////// ManhG end
