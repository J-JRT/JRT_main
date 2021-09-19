
module.exports.config = {
    name: "sim",
    version: "4.3.7",
    hasPermssion: 0,
    credits: "ProCoderMew",
    description: "Chat c\xF9ng con sim m\u1EA5t d\u1EA1y nh\u1EA5t",
    commandCategory: "General",
    usages: "[args]",
    cooldowns: 5,
    dependencies: {
        axios: ""
    },
    envConfig: {
        APIKEY: "http://developer.simsimi.leanhtruong.net/?text=chào&lc=vn"
    }
}


async function simsimi(a) {
    const d = global.nodemodule.axios, { APIKEY: e } = global.configModule.sim, g = (a) => encodeURIComponent(a);
    try {
        var { data: j } = await d({ url: `http://developer.simsimi.leanhtruong.net/?text=${g(a)}&lc=vn`, method: "GET" });
        return { error: !1, data: j }
    } catch {
        return { error: !0, data: {} }
    }
}
module.exports.onLoad = async function () {
    "undefined" == typeof global.procodermew && (global.procodermew = {}), "undefined" == typeof global.procodermew.simsimi && (global.procodermew.simsimi = new Map);
    console.log('='.repeat(20) + " Reg APIKEY tại meewmeew.info/site " + '='.repeat(20));
};
module.exports.handleEvent = async function ({ api: b, event: a }) {
    const { threadID: c, messageID: d, senderID: e, body: f } = a, g = (e) => b.sendMessage(e, c, d);
    if (global.procodermew.simsimi.has(c)) {
        if (e == b.getCurrentUserID() || "" == f || d == global.procodermew.simsimi.get(c)) return;
        var { data: h, error: i } = await simsimi(f);
        return !0 == i ? void 0 : !1 == h.success ? g(h.error) : g(h.success)
    }
}
module.exports.run = async function ({ api: b, event: a, args: c }) {
    const { threadID: d, messageID: e } = a, f = (c) => b.sendMessage(c, d, e);
    if (0 == c.length) return f("B\u1EA1n ch\u01B0a nh\u1EADp tin nh\u1EAFn");
    switch (c[0]) {
        case "on":
            return global.procodermew.simsimi.has(d) ? f("B\u1EA1n ch\u01B0a t\u1EAFt sim.") : (global.procodermew.simsimi.set(d, e), f("\u0110\xE3 b\u1EADt sim th\xE0nh c\xF4ng."));
        case "off":
            return global.procodermew.simsimi.has(d) ? (global.procodermew.simsimi.delete(d), f("\u0110\xE3 t\u1EAFt sim th\xE0nh c\xF4ng.")) : f("B\u1EA1n ch\u01B0a b\u1EADt sim.");
        default:
            var { data: g, error: h } = await simsimi(c.join(" "));
            return !0 == h ? void 0 : !1 == g.success ? f(g.error) : f(g.success);
    }
};