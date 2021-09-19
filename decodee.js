module.exports.config = {
	name: "decode",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "HungCho",
	description: "s",
	commandCategory: "Media",
	usages: "d",
	cooldowns: 0,
	dependencies: ["javascript-obfuscator"]
};

module.exports.run = async function({ api, event, args, __GLOBAL,Currencies }) {
var JavaScriptObfuscator = require('javascript-obfuscator');

var obfuscationResult = JavaScriptObfuscator.obfuscate(`${args.join("")}`,
    {
        compact: true,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 1,
        numbersToExpressions: true,
        simplify: true,
        shuffleStringArray: true,
        splitStrings: true,
        stringArrayThreshold: 1
    }
);

console.log(obfuscationResult.getObfuscatedCode());
api.sendMessage(obfuscationResult.getObfuscatedCode(), event.threadID,event.messageID)
}
