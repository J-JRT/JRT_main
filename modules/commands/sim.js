module.exports.config = {
    name: "sim",
    version: "4.3.6",
    hasPermssion: 0,
    credits: "ProcodeMew",
    description: "Chat cùng sim",
    commandCategory: "Dạy - trò chuyện cùng sim",
    usages: "[args]",
    cooldowns: 5,
    dependencies: {
        axios: ""
    }
}


async function simsimi(a, b, c) {
    const d = global.nodemodule.axios, g = (a) => encodeURIComponent(a);
    try {
        var { data: j } = await d({ url: `https://api.simsimi.net/v2/?text=${g(a)}&lc=vn`, method: "GET" });
        return { error: !1, data: j }
    } catch (p) {
        return { error: !0, data: {} }
    }
}
module.exports.onLoad = async function () {
    "undefined" == typeof global && (global = {}), "undefined" == typeof global.simsimi && (global.simsimi = new Map);
};
module.exports.handleEvent = async function ({ api: b, event: a }) {
    const { threadID: c, messageID: d, senderID: e, body: f } = a, g = (e) => b.sendMessage(e, c, d);
    if (global.simsimi.has(c)) {
        if (e == b.getCurrentUserID() || "" == f || d == global.simsimi.get(c)) return;
        var { data: h, error: i } = await simsimi(f, b, a);
        return !0 == i ? void 0 : !1 == h.success ? g(h.error) : g(h.success)
    }
}
module.exports.run = async function ({ api: b, event: a, args: c }) {
    const { threadID: d, messageID: e } = a, f = (c) => b.sendMessage(c, d, e);
    if (0 == c.length) return f("B\u1EA1n ch\u01B0a nh\u1EADp tin nh\u1EAFn");
    switch (c[0]) {
        case "on":
            return global.simsimi.has(d) ? f("B\u1EA1n ch\u01B0a t\u1EAFt JRT.") : (global.simsimi.set(d, e), f("\u0110\xE3 b\u1EADt JRT th\xE0nh c\xF4ng."));
        case "off":
            return global.simsimi.has(d) ? (global.simsimi.delete(d), f("\u0110\xE3 t\u1EAFt JRT th\xE0nh c\xF4ng.")) : f("B\u1EA1n ch\u01B0a b\u1EADt sim.");
        default:
            var { data: g, error: h } = await simsimi(c.join(" "), b, a);
            return !0 == h ? void 0 : !1 == g.success ? f(g.error) : f(g.success);
    }
};