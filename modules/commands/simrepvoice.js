/**
 * @author ProCoderMew
 * @warn Do not edit code or edit credits
 * @apikey Reg key tại: https://meewmeew.info/site
 */
module.exports.config = {
    name: "sim",
    version: "4.3.7",
    hasPermssion: 0,
    credits: "ProCoderMew",
    description: "Chat c\xF9ng con sim m\u1EA5t d\u1EA1y nh\u1EA5t",
    commandCategory: "Chat cùng sim",
    usages: "[args]",
    cooldowns: 5,
    dependencies: {
        axios: ""
    },
    envConfig: {
        APIKEY: ""
    }
}


async function simsimi(a, b, c) {
    const d = global.nodemodule.axios, { APIKEY: e } = global.configModule.sim, g = (a) => encodeURIComponent(a);
    try {
        var { data: j } = await d({ url: `https://meewmeew.info/simsimi/api?ask=${g(a)}&apikey=${e}`, method: "GET" });
        return { error: !1, data: j }
    } catch (p) {
        return { error: !0, data: {} }
    }
}
module.exports.onLoad = async function () {
    "undefined" == typeof global.procodermew && (global.procodermew = {}), "undefined" == typeof global.procodermew.simsimi && (global.procodermew.simsimi = new Map);
};
module.exports.handleEvent = async ({ api: b, event: a ,event}) => {
        const { createReadStream, unlinkSync } = global.nodemodule["fs-extra"];
        const { resolve } = global.nodemodule["path"];
    const { threadID: c, messageID: d, senderID: e, body: f } = a, g = (e) => b.sendMessage(e, c, d);
    if (global.procodermew.simsimi.has(c)) {
        if (e == b.getCurrentUserID() || "" == f || d == global.procodermew.simsimi.get(c)) return;
        var { data: h, error: i } = await simsimi(f, b, a);
        //return !0 == i ? void 0 : !1 == h.success ? g(h.error) : g(h.msg)
        const path = resolve(__dirname, 'cache', `${event.threadID}_${event.senderID}.mp3`);
        await global.utils.downloadFile(`https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(h.msg)}&tl=vi&client=tw-ob`, path);
        return g({ attachment: createReadStream(path)},a.d, event.threadID, () => unlinkSync(path));
    }
}
module.exports.run = async ({ api: b, event: a, args: c,event }) => {
        const { createReadStream, unlinkSync } = global.nodemodule["fs-extra"];
        const { resolve } = global.nodemodule["path"];
    const { threadID: d, messageID: e } = a, f = (c) => b.sendMessage(c, d, e);
    if (0 == c.length) return f("B\u1EA1n ch\u01B0a nh\u1EADp tin nh\u1EAFn");
    switch (c[0]) {
        case "on":
            return global.procodermew.simsimi.has(d) ? f("B\u1EA1n ch\u01B0a t\u1EAFt sim.") : (global.procodermew.simsimi.set(d, e), f("\u0110\xE3 b\u1EADt sim th\xE0nh c\xF4ng."));
        case "off":
            return global.procodermew.simsimi.has(d) ? (global.procodermew.simsimi.delete(d), f("\u0110\xE3 t\u1EAFt sim th\xE0nh c\xF4ng.")) : f("B\u1EA1n ch\u01B0a b\u1EADt sim.");
        default:
            var { data: g, error: h } = await simsimi(c.join(" "), b, a);
        const path = resolve(__dirname, 'cache', `${event.threadID}_${event.senderID}.mp3`);
        await global.utils.downloadFile(`https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(g.msg)}&tl=vi&client=tw-ob`, path);
        return f({ attachment: createReadStream(path)},a.e, event.threadID, () => unlinkSync(path));
    }
};
