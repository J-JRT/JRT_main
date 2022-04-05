module.exports.config = {
        name: "listbox",
        version: "1.0.0",
        credits: "ManhG",
        hasPermssion: 3,
        description: "[Ban/Unban/Remove] List thread bot đã tham gia",
        commandCategory: "Hệ thống admin-bot",
        usages: "[số trang/all]",
        cooldowns: 5
    },
    module.exports.handleReply = async function ({
        api: e,
        event: a,
        args: n,
        Threads: s,
        handleReply: t
    }) {
        const {
            threadID: o,
            messageID: r
        } = a;
        if (parseInt(a.senderID) !== parseInt(t.author)) return;
        const d = require("moment-timezone").tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
        var g = a.body.split(" ");
        switch (t.type) {
        case "reply":
            if ("ban" == g[0] || "Ban" == g[0]) {
                var i = a.body.split(" "),
                    l = "",
                    u = "------- Thực thi Ban -------\n";
                (c = i.map((e => parseInt(e)))).shift();
                for (let e of c) {
                    var h = t.groupid[e - 1],
                        m = t.groupName[e - 1];
                    const a = (await s.getData(h)).data || {};
                    a.banned = 1, a.dateAdded = d;
                    var p = await s.setData(h, {
                        data: a
                    });
                    global.data.threadBanned.set(h, {
                        dateAdded: a.dateAdded
                    }), l += p + " " + m + "\n🔰TID: " + h + "\n", console.log(u, l)
                }
                e.sendMessage("»Thông báo từ Admin«\n\n Nhóm Bạn Đã Bị Ban, cấm dùng bot.", h, (() => e.sendMessage(`${global.data.botID}`, (() => e.sendMessage(`★★Thực thi Ban(true/false)★★\n\n${l}`, o, (() => e.unsendMessage(t.messageID)))))));
                break
            }
            if ("unban" == g[0] || "Unban" == g[0] || "ub" == g[0] || "Ub" == g[0]) {
                i = a.body.split(" "), l = "", u = "------- Thực thi Unban -------\n";
                (c = i.map((e => parseInt(e)))).shift();
                for (let e of c) {
                    h = t.groupid[e - 1], m = t.groupName[e - 1];
                    const a = (await s.getData(h)).data || {};
                    a.banned = 0, a.dateAdded = null;
                    p = await s.setData(h, {
                        data: a
                    });
                    global.data.threadBanned.delete(h, 1), l += p + " " + m + "\n🔰TID: " + h + "\n", console.log(u, l)
                }
                e.sendMessage("»Thông báo từ Admin«\n\n Nhóm Bạn Đã Được Gỡ Ban", h, (() => e.sendMessage(`${global.data.botID}`, (() => e.sendMessage(`★★Thực thi Unban(true/false)\n\n${l}`, o, (() => e.unsendMessage(t.messageID)))))));
                break
            }
            if ("out" == g[0] || "Out" == g[0]) {
                var c;
                i = a.body.split(" "), l = "", u = "------- Thực thi Out -------\n";
                (c = i.map((e => parseInt(e)))).shift();
                for (let a of c) {
                    h = t.groupid[a - 1], m = t.groupName[a - 1], p = e.removeUserFromGroup(`${e.getCurrentUserID()}`, h);
                    l += p + " " + m + "\n🔰TID: " + h + "\n", console.log(u, l)
                }
                e.sendMessage("»Thông báo từ Admin«\n\nTạm biệt nhé\nTớ out đây😢", h, (() => e.sendMessage(`${global.data.botID}`, (() => e.sendMessage(`★★Thực thi Out(true/false)★★\n\n${l} `, o, (() => e.unsendMessage(t.messageID)))))));
                break
            }
        }
    }, module.exports.run = async function ({
        api: e,
        event: a,
        args: n
    }) {
        if ("all" === n[0]) {
            var s = await e.getThreadList(100, null, ["INBOX"]);
            let p = [...s].filter((e => e.isSubscribed && e.isGroup));
            var t = [],
                o = [];
            for (var r of p) t.push({
                id: r.threadID,
                name: r.name || "Chưa đặt tên",
                messageCount: r.messageCount
            });
            o = t.sort(((e, a) => e.messageCount > a.messageCount ? -1 : e.messageCount < a.messageCount ? 1 : void 0));
            var d = [],
                g = [],
                i = 1;
            (i = parseInt(n[0]) || 1) < -1 && (i = 1);
            for (var l = 50, u = "🎭DS NHÓM ĐÃ THAM GIA🎭\n\n", h = Math.ceil(o.length / l), m = l * (i - 1); m < l * (i - 1) + l && !(m >= o.length); m++) {
                let e = o[m];
                u += `${m+1}. ${e.name}\n🔰TID: ${e.id}\n📩messageCount: ${e.messageCount}\n`, d.push(e.id), g.push(e.name)
            }
            u += `\n--Trang ${i}/${h}--\nDùng ${global.config.PREFIX}listbox all + số trang\n\n`, e.sendMessage(u + "🎭Reply Out, Ban, Unban + số thứ tự, có thể rep nhiều số, cách nhau bằng dấu cách để Out, Ban, Unban thread đó!", a.threadID, ((e, n) => global.client.handleReply.push({
                name: this.config.name,
                author: a.senderID,
                messageID: n.messageID,
                groupid: d,
                groupName: g,
                type: "reply"
            })))
        } else try {
            s = await e.getThreadList(100, null, ["INBOX"]);
            let p = [...s].filter((e => e.isSubscribed && e.isGroup));
            t = [], o = [];
            for (var r of p) t.push({
                id: r.threadID,
                name: r.name || "Chưa đặt tên",
                messageCount: r.messageCount
            });
            o = t.sort(((e, a) => e.messageCount > a.messageCount ? -1 : e.messageCount < a.messageCount ? 1 : void 0)), d = [], g = [], i = 1;
            (i = parseInt(n[0]) || 1) < -1 && (i = 1);
            for (l = 15, u = "🎭DS NHÓM ĐÃ THAM GIA🎭\n\n", h = Math.ceil(o.length / l), m = l * (i - 1); m < l * (i - 1) + l && !(m >= o.length); m++) {
                let e = o[m];
                u += `${m+1}. ${e.name}\n🔰TID: ${e.id}\n📩messageCount: ${e.messageCount}\n`, d.push(e.id), g.push(e.name)
            }
            u += `--Trang ${i}/${h}--\nDùng ${global.config.PREFIX}listbox + số trang/all\n\n`, e.sendMessage(u + "🎭Reply Out, Ban, Unban + số thứ tự, có thể rep nhiều số, cách nhau bằng dấu cách để Out, Ban, Unban thread đó!", a.threadID, ((e, n) => global.client.handleReply.push({
                name: this.config.name,
                author: a.senderID,
                messageID: n.messageID,
                groupid: d,
                groupName: g,
                type: "reply"
            })))
        } catch (e) {
            return console.log(e)
        }
    };