module.exports.config = {
	name: "phub",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "MewMew",
	description: "Comment trên pỏnhub ( ͡° ͜ʖ ͡°)",
	commandCategory: "edit-img",
	usages: "phub [text]",
	cooldowns: 10,
	dependencies: {
		"canvas":"",
		 "axios":"",
		 "fs-extra":""
	}
};

module.exports.wrapText = (ctx, text, maxWidth) => {
	return new Promise(resolve => {
		if (ctx.measureText(text).width < maxWidth) return resolve([text]);
		if (ctx.measureText('W').width > maxWidth) return resolve(null);
		const words = text.split(' ');
		const lines = [];
		let line = '';
		while (words.length > 0) {
			let split = false;
			while (ctx.measureText(words[0]).width >= maxWidth) {
				const temp = words[0];
				words[0] = temp.slice(0, -1);
				if (split) words[1] = `${temp.slice(-1)}${words[1]}`;
				else {
					split = true;
					words.splice(1, 0, temp.slice(-1));
				}
			}
			if (ctx.measureText(`${line}${words[0]}`).width < maxWidth) line += `${words.shift()} `;
			else {
				lines.push(line.trim());
				line = '';
			}
			if (words.length === 0) lines.push(line.trim());
		}
		return resolve(lines);
	});
} 

module.exports.run = async function({ api, event, args }) {
	let { senderID, threadID, messageID } = event;
	const { loadImage, createCanvas } = global.nodemodule["canvas"];
	const fs = global.nodemodule["fs-extra"];
	const axios = global.nodemodule["axios"];
	let avatar = __dirname + '/cache/avt.png';
	let pathImg = __dirname + '/cache/porn.png';
	var text = args.join(" ");
	let name = (await api.getUserInfo(senderID))[senderID].name
	var linkAvatar = (await api.getUserInfo(senderID))[senderID].thumbSrc;
	if (!text) return api.sendMessage("Nhập nội dung comment trên pỏnhub", threadID, messageID);
	let getAvatar = (await axios.get(linkAvatar, { responseType: 'arraybuffer' })).data;
	let getPorn = (await axios.get(`https://i.imgur.com/XrgnIyK.png`, { responseType: 'arraybuffer' })).data;
	fs.writeFileSync(avatar, Buffer.from(getAvatar, 'utf-8'));
	fs.writeFileSync(pathImg, Buffer.from(getPorn, 'utf-8'));
	let image = await loadImage(avatar);
	let baseImage = await loadImage(pathImg);
	let canvas = createCanvas(baseImage.width, baseImage.height);
	let ctx = canvas.getContext("2d");
	ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
	ctx.drawImage(image, 30, 310, 70, 70);
	ctx.font = "700 23px Arial";
	ctx.fillStyle = "#FF9900";
	ctx.textAlign = "start";
	ctx.fillText(name, 115, 350);
	ctx.font = "400 23px Arial";
	ctx.fillStyle = "#ffff";
	ctx.textAlign = "start";
	let fontSize = 23;
	while (ctx.measureText(text).width > 2600) {
		fontSize--;
		ctx.font = `400 ${fontSize}px Arial, sans-serif`;
	}
	const lines = await this.wrapText(ctx, text, 1160);
	ctx.fillText(lines.join('\n'), 30,430);
	ctx.beginPath();
	const imageBuffer = canvas.toBuffer();
	fs.writeFileSync(pathImg, imageBuffer);
	fs.removeSync(avatar);
	return api.sendMessage({ attachment: fs.createReadStream(pathImg) }, threadID, () => fs.unlinkSync(pathImg), messageID);        
}