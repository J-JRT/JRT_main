/**
* @author ProCoderMew
* @warn Do not edit code or edit credits
*/

const url = 'https://raw.githubusercontent.com/ProCoderMew/Module-Miraiv2/Mew/repo.json';
const evtUrl = 'https://raw.githubusercontent.com/ProCoderMew/Module-Miraiv2/Mew/modules/events/{name}.js';
const cmdUrl = 'https://raw.githubusercontent.com/ProCoderMew/Module-Miraiv2/Mew/modules/commands/{name}.js';

module.exports.config = {
    name: 'meewmeew',
    version: '2.2.7',
    hasPermssion: 2,
    credits: 'ProCoderMew',
    description: 'T\u1EA3i ho\u1EB7c c\u1EADp nh\u1EADt t\u1EA5t c\u1EA3 module c\u1EE7a Mew',
    commandCategory: 'Admin',
    usages: '[install/uninstall/update/b\u1ECF tr\u1ED1ng]',
    cooldowns: 1,
    dependencies: {
        'axios': '',
        "fs-extra": '',
        'path': ''
    }
};
module.exports.languages = {
    "vi": {
        "nameExist": "Tên module bị trùng với một module mang cùng tên khác!",
        "notFoundLanguage": "Module %1 không hỗ trợ ngôn ngữ ngôn ngữ của bạn",
        "notFoundPackage": "Không tìm thấy package %1 hỗ trợ cho module %2, tiến hành cài đặt...",
        "cantInstallPackage": "Không thể cài đặt package %1 cho module %2, lỗi: %3",
        "loadedPackage": "Đã tải thành công toàn bộ package cho module %1",
        "loadedConfig": "Đã tải thành công config cho module %1",
        "cantLoadConfig": "Không thể tải config của module %1, lỗi: %2",
        "cantOnload": "Không thể khởi chạy setup của module %1, lỗi: %1",
        "successLoadModule": "Đã tải thành công module %1",
        "failLoadModule": "Không thể tải thành công module %1, lỗi: %2",
        "moduleError": "Những module đã xảy ra sự cố không mong muốn khi đang tải: \n\n%1"
    },
    "en": {
        "nameExist": "Module's name is similar to another module!",
        "notFoundLanguage": "Module %1 does not support your language",
        "notFoundPackage": "Can't find package %1 for module %2, install...",
        "cantInstallPackage": "Can't install package %1 for module %2, error: %3",
        "loadedPackage": "Loaded package for module %1",
        "loadedConfig": "Loaded config for module %1",
        "cantLoadConfig": "Can't load config for module %1, error: %2",
        "cantOnload": "Can't load setup for module %1, error: %1",
        "successLoadModule": "Loaded module %1",
        "failLoadModule": "Can't load module %1, error: %2",
        "moduleError": "Modules which have unexpected error when loading: \n\n%1"
    }
}
module.exports.version = function () {
    const { resolve: a } = global.nodemodule.path;
    try {
        var b = a(__dirname, 'cache', 'meewmeew.json'), c = require(b), d = c.version
    } catch (b) {
        d = '1.0.0'
    }
    return [d, b, c]
}
module.exports.onLoad = async function () {
    const b = global.nodemodule.axios
    const c = require(process.cwd() + '/utils/log')
    const { existsSync: d, writeFileSync: e } = global.nodemodule['fs-extra']
    const { data: f } = await b.get(url);
    var [a, g, h] = this.version();
    if (!d(g)) e(g, JSON.stringify({ version: a }, null, 4));
    else {
        const b = h;
        b.hasOwnProperty('version') || (b.version = '1.0.0'),
        e(g, JSON.stringify(b, null, 4))
    }
    f.version != a && (c(`[!] Đã có bản cập nhật mới [!]`, '[ MeewMeew ]'),
    c(`Phiên bản ${f.version}`, '[ MeewMeew ]'),
    c(`Các module có sự thay đổi: ${f.change.join(', ')}`, '[ MeewMeew ]'))
};
module.exports.getAll = async function () {
    const axios = global.nodemodule.axios;
    const { data: a } = await axios.get(url);
    return [a.modules, a];
};
module.exports.getName = async function () {
    var a = { events: {}, commands: {} };
    for (const b of global.client.events.values()) 'ProCoderMew' == b.config.credits && (a.events[b.config.name] = b.config.version);
    for (const b of global.client.commands.values()) 'ProCoderMew' == b.config.credits && (a.commands[b.config.name] = b.config.version);
    return a;
};
module.exports.falseVersion = async function (a, b) {
    var c = { events: {}, commands: {} };
    return Object.keys(a.commands).map(d => b.commands[d] == a.commands[d] && b.commands[d] || (c.commands[d] = [a.commands[d], b.commands[d] || null, d])),
        Object.keys(a.events).map(d => b.events[d] == a.events[d] && b.events[d] || (c.events[d] = [a.events[d], b.events[d] || null, d])), c
};
module.exports.update = async function (a, b) {
    const axios = global.nodemodule.axios;
    const { existsSync, writeFileSync, unlinkSync } = global.nodemodule['fs-extra'];
    const { data: c } = await axios.get(a);
    existsSync(b) && (await unlinkSync(b)), await new Promise((a) => setTimeout(a, 200)), await writeFileSync(b, Buffer.from(c, 'utf-8'))
};
module.exports.switchArgs = function (a) {
    switch (a[1]) {
        case void 0:
        case 'all':
            return 'all';
        default:
            return 'idk';
    }
}
module.exports.run = async function ({ args: a, event: b, api: c, getText }) {
    async function d(a, d) {
        const e = require('./command');
        const f = require('./event');
        if (0 == a.length, !Array.isArray(a)) return;
        var x = { moduleList: a, threadID: b.threadID, messageID: b.messageID, getText };
        0 != a.length && ('commands' === d ? e.loadCommand(x) : 'events' === d ? f.loadCommand(x) : void 0);
    }
    const e = await this.getName();
    const [f, g] = await this.getAll();
    const h = Object.keys(f.commands);
    const i = Object.keys(f.events);
    const { resolve } = global.nodemodule.path;
    const { commands: j, events: k } = await this.falseVersion(f, e);
    const l = (a, d = function () { }) => c.sendMessage(a, b.threadID, d);
    const { writeFileSync, unlinkSync } = global.nodemodule['fs-extra'];
    var [localVersion, meewmeew, meewmeewData] = this.version();
    switch (a[0]) {
        case 'install':
            if ('all' == this.switchArgs(a)) {
                meewmeewData.version = g.version, await writeFileSync(meewmeew, JSON.stringify(meewmeewData, null, 4));
                var m = '\xBB Commands:\n', n = '\xBB Events:\n';
                i.forEach((a) => n += `- ${a}: ${f.events[a]}\n`), h.forEach((a) => m += `- ${a}: ${f.commands[a]}\n`),
                    l('Thao t\xE1c n\xE0y s\u1EBD t\u1EA3i xu\u1ED1ng to\xE0n b\u1ED9 modules.', async () => l('Bao g\u1ED3m c\xE1c modules:\n' + m + n));
                for (const a of h) {
                    const b = resolve(__dirname, `${a}.js`);
                    await this.update(cmdUrl.replace('{name}', a), b)
                }
                for (const a of i) {
                    const b = resolve(__dirname, '../events', `${a}.js`);
                    await this.update(evtUrl.replace('{name}', a), b)
                }
                l('[!] T\u1EA3i xu\u1ED1ng ho\xE0n t\u1EA5t [!]'),
                    await d(i, 'events'), await d(h, 'commands');
            }
            break;
        case 'update':
            if ('all' == this.switchArgs(a)) {
                if (0 == Object.keys(j).length && 0 == Object.keys(k).length) return l('==== MeewMeew ====\n\xBB T\u1EA5t c\u1EA3 c\xE1c module hi\u1EC7n \u0111ang \u1EDF phi\xEAn b\u1EA3n m\u1EDBi nh\u1EA5t!');
                meewmeewData.version = g.version, await writeFileSync(meewmeew, JSON.stringify(meewmeewData, null, 4));
                const a = Object.keys(j), b = Object.keys(k);
                var m = '\xBB Module Command:\n', n = '\xBB Module Event:\n';
                b.forEach((a) => n += `- ${a}:\n    + Current version: ${k[a][1]}\n    + Latest version: ${k[a][0]}\n`),
                    a.forEach((a) => m += `- ${a}:\n    + Current version: ${j[a][1]}\n    + Latest version: ${j[a][0]}\n`),
                    l(`Tiến hành update..\n${m}${n}`);
                for (const b of a) {
                    const a = resolve(__dirname, `${b}.js`);
                    await this.update(cmdUrl.replace('{name}', b), a)
                }
                for (const a of b) {
                    const b = resolve(__dirname, '../events', `${a}.js`);
                    await this.update(evtUrl.replace('{name}', a), b)
                }
                l('[!] C\u1EADp nh\u1EADt ho\xE0n t\u1EA5t [!]')
                await d(b, 'events'), await d(a, 'commands');
            }
            break;
        case 'uninstall':
            if ('all' == this.switchArgs(a)) {
                meewmeewData.version = '1.0.0', await writeFileSync(meewmeew, JSON.stringify(meewmeewData, null, 4));
                for (const a of h) 'meewmeew' != a && (await unlinkSync(resolve(__dirname, a + '.js')));
                for (const a of i) await unlinkSync(resolve(__dirname, '../events', a + '.js'));
                l('[!] \u0110\xE3 g\u1EE1 c\xE0i \u0111\u1EB7t t\u1EA5t c\u1EA3 module c\u1EE7a Mew [!]', () => l('\u0110\u1EC3 c\xE0i \u0111\u1EB7t l\u1EA1i, h\xE3y s\u1EED d\u1EE5ng l\u1EC7nh meewmeew install'))
            }
            break;
        default:
            l('==== MeewMeew ====\n' +
                `» Phiên bản hiện tại: ${localVersion}\n` +
                `» Phiên bản mới nhất: ${g.version}\n` +
                `» Module thay đổi: ${g.change.join(', ')}\n` +
                `» ${g.version == localVersion ?
                    'B\u1EA1n \u0111ang s\u1EED d\u1EE5ng phi\xEAn b\u1EA3n m\u1EDBi nh\u1EA5t.' :
                    '\u0110\xE3 c\xF3 b\u1EA3n c\u1EADp nh\u1EADt m\u1EDBi, h\xE3y update.'}`);
    }
};