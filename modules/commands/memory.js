module.exports.config = {
  name: "memory",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "NTKhang",
  description: "Game thử thách trí nhớ của bạn",
  commandCategory: "game",
  usages: "[level](từ 1 tới 20)",
  cooldowns: 5,
  dependencies: {"canvas": "", "axios": ""}
};

function wrapText(ctx, text, maxWidth) {
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
};

module.exports.handleEvent = async function({ api, event, args }) {
	if(!global.client.gamememory) return;
	let { body, senderID, messageID, threadID } = event;
	var gamememory = global.client.gamememory;
	if(gamememory.has(event.senderID.toString())) {
		var result1 = body;
		var resulttrue = gamememory.get(senderID);
    if(resulttrue.toLocaleLowerCase() == result1.toLocaleLowerCase()) {
	     api.sendMessage("You Win!!", threadID, messageID);
    }
	  else{
	     api.sendMessage("You Lose!! kết quả đúng là: "+resulttrue.toUpperCase(), threadID, messageID);
	  }
	  global.client.gamememory.delete(senderID);
	};
}

module.exports.run = async function({ api, event, args }) {
	
  let { senderID, threadID, messageID } = event;
  if(!args[0]) return api.sendMessage("Bạn cần nhập level (1-20)", threadID, messageID);
  if(isNaN(args[0]) == true) return api.sendMessage("Level bạn chọn phải là số (1-20)", threadID, messageID);
  const level = args[0];
  if(level < 1 || level > 20) return api.sendMessage("Level bạn chọn phải trong phạm vi 1 -> 20", threadID, messageID);
  
  const { registerFont, loadImage, createCanvas, Canvas } = global.nodemodule["canvas"];
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const path = global.nodemodule["path"];

  if(!fs.existsSync(__dirname + "/cache/memory.ttf")) {
  let getfont = (await axios.get(`https://download1513.mediafire.com/smhvmz75l9kg/uwe71q2ji5x2c9q/Montserrat-Bold.ttf`, { responseType: "arraybuffer" })).data;
  fs.writeFileSync(__dirname + "/cache/memory.ttf", Buffer.from(getfont, "utf-8"));
  }
	var imgrd = "https://i.ibb.co/MZgPTtV/IMG-20210622-185316.jpg";
  var getimg = (await axios.get(imgrd, { responseType: "arraybuffer" }))
    .data;
  var pathImg = __dirname+'/cache/memorygame.png';
  fs.writeFileSync(pathImg, Buffer.from(getimg, "utf-8"));
  
  const directions = ['up', 'down', 'left', 'right'];
  const colors = ['red', 'blue', 'green', 'black'];
  const fruits = ['apple', 'orange', 'pear', 'banana'];
  const animals = ["cat", "dog", "snake", "fox", "lion"];
  const onepieces = ["luffy", "zoro", "robin", "sanji", "nami", "chopper", "usopp"];
  
  function genArray(level) {
      const sourceArr = [colors, directions, fruits, onepieces, animals][Math.floor(Math.random() * 3)];
      const arr = [];
      for (let i = 0; i < level; i++) arr.push(sourceArr[Math.floor(Math.random() * sourceArr.length)]);
      return arr;
  };
  
  const memorize = genArray(level);
  const memorytext1 = memorize.map(word => `${word.toUpperCase()}`).join(' ');
  
  let baseImage = await loadImage(pathImg);
  let canvas = createCanvas(baseImage.width, baseImage.height);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
  const __root = path.resolve(__dirname, "cache", "rank");
  
  registerFont(__dirname + "/cache/memory.ttf", {
		family: "NTK",
		weight: "regular",
		style: "normal"
	});
	
  ctx.font = "19px NTK";//Courier New
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  const memorytext2 = wrapText(ctx, memorytext1, baseImage.width);
  
  ctx.fillText((await memorytext2).join("\n"), baseImage.width/2, baseImage.height/2);
  ctx.beginPath();
  
  const imageBuffer = canvas.toBuffer();
  
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
 fs.writeFileSync(pathImg, imageBuffer);

  return api.sendMessage(
    { body: "Bạn có 10 giây để ghi nhớ nội dung bên dưới, sau đó nhập lại nó!!", attachment: fs.createReadStream(pathImg) }, threadID, async (e, info) => {
	    	fs.unlinkSync(pathImg);
	    	await delay(10000);
	    	api.unsendMessage(info.messageID);
	    	if(!global.client.gamememory) global.client.gamememory = new Map();
	    	global.client.gamememory.set(senderID.toString(), memorytext1);
    	},
    messageID
  );
};
