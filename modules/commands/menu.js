module.exports.config = {
	name: "menu",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "JRT",//ko biết của ai nên thôi để của mình cho dui =))
	description: "Menu",
	usages: "[all/-a] [số trang]",
	commandCategory: "Danh sách lệnh",
	cooldowns: 5
};

module.exports.handleReply = async function ({ api, event, handleReply }) {
	let num = parseInt(event.body.split(" ")[0].trim());
	(handleReply.bonus) ? num -= handleReply.bonus : num;
	let msg = "";
	let data = handleReply.content;
	let check = false;
	if (isNaN(num)) msg = "vυι lòng cнọn ѕố";
	else if (num > data.length || num <= 0) msg = "ɴɢᴜ ᴠãɪ ʟồɴ ";
	else {
		const { commands } = global.client;
		let dataAfter = data[num-=1];
		if (handleReply.type == "cmd_info") {
			let command_config = commands.get(dataAfter).config;
			msg += ` ╭──────╮\n   ${command_config.commandCategory.toUpperCase()}  \n╰──────╯   \n`;
			msg += `\n💢 Tên: ${dataAfter}`;
			msg += `\n📝 Mô tả: ${command_config.description}`;
			msg += `\n💥 Cách dùng: ${(command_config.usages) ? command_config.usages : ""}`;
			msg += `\n⏱ Thời gian chờ: ${command_config.cooldowns || 5}s`;
			msg += `\n🔰 Quyền hạn: ${(command_config.hasPermssion == 0) ? "Người dùng" : (command_config.hasPermssion == 1) ? "Quản trị viên nhóm" : "Quản trị viên bot"}`;
      msg += `\n✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏`
			msg += `\n\n» Module code by ${command_config.credits} «`;
		} else {
			check = true;
			let count = 0;
			msg += `【    ${dataAfter.group.toUpperCase()}    】\n`;

			dataAfter.cmds.forEach(item => {
				msg += `\n 【${count+=1}】 ${item}: ${commands.get(item).config.description}🐉`;
			})
			msg += "\n\n╭──────╮\n    Reply \n╰──────╯ tin nhắn theo số để xem thông tin chi tiết lệnh";
		}
	}
	const axios = require('axios');
	const fs = require('fs-extra');
	const img = ["https://i.postimg.cc/J4qKwgcz/images.jpg",
"https://i.postimg.cc/hvRMgR5f/images-1.jpg",
"https://i.postimg.cc/8Cnn23G6/images-10.jpg",
"https://i.postimg.cc/bwg5TrFL/images-11.jpg",
"https://i.postimg.cc/qRhZ4LBZ/images-12.jpg",
"https://i.postimg.cc/br1C2wtx/images-13.jpg",
"https://i.postimg.cc/NfwPvm3p/images-14.jpg",
"https://i.postimg.cc/wxNbr0G1/images-15.jpg",
"https://i.postimg.cc/J4cYrtmm/images-16.jpg",
"https://i.postimg.cc/L5W7jbCS/images-17.jpg",
"https://i.postimg.cc/8zM3rwh8/images-18.jpg",
"https://i.postimg.cc/DwxCGD8M/images-19.jpg",
"https://i.postimg.cc/L6RvbRPW/images-2.jpg",
"https://i.postimg.cc/T3d7pGYb/images-20.jpg",
"https://i.postimg.cc/DytHZR4d/images-21.jpg",
"https://i.postimg.cc/1zSd06H8/images-22.jpg",
"https://i.postimg.cc/9MFNKhsV/images-23.jpg",
"https://i.postimg.cc/4dLFT0Tc/images-24.jpg",
"https://i.postimg.cc/Bbj7ZCqV/images-25.jpg",
"https://i.postimg.cc/1RdYCbBh/images-26.jpg",
"https://i.postimg.cc/K8SpFLC0/images-27.jpg",
"https://i.postimg.cc/QdQ4MC3h/images-28.jpg",
"https://i.postimg.cc/1zyWVSm6/images-29.jpg",
"https://i.postimg.cc/Hn0zkvq3/images-3.jpg",
"https://i.postimg.cc/4ddBw1hx/images-30.jpg",
"https://i.postimg.cc/4dSw0hzb/images-31.jpg",
"https://i.postimg.cc/5yQpWNgc/images-32.jpg",
"https://i.postimg.cc/xqr5fDpX/images-33.jpg",
"https://i.postimg.cc/pV9tLf1v/images-34.jpg",
"https://i.postimg.cc/Dft3JStX/images-35.jpg",
"https://i.postimg.cc/13SxBLRR/images-36.jpg",
"https://i.postimg.cc/Hk9qhBjw/images-37.jpg",
"https://i.postimg.cc/Ls4cKLZr/images-38.jpg",
"https://i.postimg.cc/nLd6Hr4M/images-39.jpg",
"https://i.postimg.cc/9fzLYp9F/images-4.jpg",
"https://i.postimg.cc/1t22qdYQ/images-40.jpg",
"https://i.postimg.cc/2yWJFxPB/images-41.jpg",
"https://i.postimg.cc/zDH9rJVX/images-42.jpg",
"https://i.postimg.cc/26ZTPSTs/images-5.jpg",
"https://i.postimg.cc/wBP0fm55/images-6.jpg",
"https://i.postimg.cc/7YvjPp21/images-7.jpg",
"https://i.postimg.cc/HLLhPmqm/images-8.jpg",
"https://i.postimg.cc/L827LLvn/images-9.jpg",
"https://i.postimg.cc/c44w3Jwd/t-i-xu-ng.jpg",
"https://i.postimg.cc/3xfBNvqM/t-i-xu-ng-1.jpg",
"https://i.postimg.cc/7YxMN988/t-i-xu-ng-10.jpg",
"https://i.postimg.cc/rws1Bpwf/t-i-xu-ng-11.jpg",
"https://i.postimg.cc/DwNrnKWn/t-i-xu-ng-12.jpg",
"https://i.postimg.cc/7LTgLQ77/t-i-xu-ng-13.jpg",
"https://i.postimg.cc/SsFcY77P/t-i-xu-ng-14.jpg",
"https://i.postimg.cc/c1cf63KD/t-i-xu-ng-15.jpg",
"https://i.postimg.cc/B6THTLmn/t-i-xu-ng-16.jpg",
"https://i.postimg.cc/yxnR5q4q/t-i-xu-ng-17.jpg",
"https://i.postimg.cc/6qBRYWPL/t-i-xu-ng-18.jpg",
"https://i.postimg.cc/8kLt4s7W/t-i-xu-ng-19.jpg",
"https://i.postimg.cc/YCCRt3bf/t-i-xu-ng-2.jpg",
"https://i.postimg.cc/jjWh7jVD/t-i-xu-ng-3.jpg",
"https://i.postimg.cc/N0Wk7wYp/t-i-xu-ng-4.jpg",
"https://i.postimg.cc/595SvGrS/t-i-xu-ng-5.jpg",
"https://i.postimg.cc/sDwPHWsB/t-i-xu-ng-6.jpg",
"https://i.postimg.cc/4yGvqbYc/t-i-xu-ng-7.jpg",
"https://i.postimg.cc/PJMbjpDR/t-i-xu-ng-8.jpg",
"https://i.postimg.cc/pTzYs1Lx/t-i-xu-ng-9.jpg",     ]
	var path = __dirname + "/cache/menu2.jpg"
	var rdimg = img[Math.floor(Math.random() * img.length)]; 
	const imgP = []
	let dowloadIMG = (await axios.get(rdimg, { responseType: "arraybuffer" } )).data; 
	fs.writeFileSync(path, Buffer.from(dowloadIMG, "utf-8") );
	imgP.push(fs.createReadStream(path))
	var msgg = {body: msg, attachment: imgP}
	api.unsendMessage(handleReply.messageID);
	return api.sendMessage(msgg, event.threadID, (error, info) => {
		if (error) console.log(error);
		if (check) {
			global.client.handleReply.push({
				type: "cmd_info",
				name: this.config.name,
				messageID: info.messageID,
				content: data[num].cmds
			})
		}
	}, event.messageID);
}

module.exports.run = async function({ api, event, args }) {
	const { commands } = global.client;
	const { threadID, messageID } = event;
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
	const axios = require('axios');
	const fs = require('fs-extra');
	const imgP = []
	const img = ["https://i.postimg.cc/J4qKwgcz/images.jpg",
"https://i.postimg.cc/hvRMgR5f/images-1.jpg",
"https://i.postimg.cc/8Cnn23G6/images-10.jpg",
"https://i.postimg.cc/bwg5TrFL/images-11.jpg",
"https://i.postimg.cc/qRhZ4LBZ/images-12.jpg",
"https://i.postimg.cc/br1C2wtx/images-13.jpg",
"https://i.postimg.cc/NfwPvm3p/images-14.jpg",
"https://i.postimg.cc/wxNbr0G1/images-15.jpg",
"https://i.postimg.cc/J4cYrtmm/images-16.jpg",
"https://i.postimg.cc/L5W7jbCS/images-17.jpg",
"https://i.postimg.cc/8zM3rwh8/images-18.jpg",
"https://i.postimg.cc/DwxCGD8M/images-19.jpg",
"https://i.postimg.cc/L6RvbRPW/images-2.jpg",
"https://i.postimg.cc/T3d7pGYb/images-20.jpg",
"https://i.postimg.cc/DytHZR4d/images-21.jpg",
"https://i.postimg.cc/1zSd06H8/images-22.jpg",
"https://i.postimg.cc/9MFNKhsV/images-23.jpg",
"https://i.postimg.cc/4dLFT0Tc/images-24.jpg",
"https://i.postimg.cc/Bbj7ZCqV/images-25.jpg",
"https://i.postimg.cc/1RdYCbBh/images-26.jpg",
"https://i.postimg.cc/K8SpFLC0/images-27.jpg",
"https://i.postimg.cc/QdQ4MC3h/images-28.jpg",
"https://i.postimg.cc/1zyWVSm6/images-29.jpg",
"https://i.postimg.cc/Hn0zkvq3/images-3.jpg",
"https://i.postimg.cc/4ddBw1hx/images-30.jpg",
"https://i.postimg.cc/4dSw0hzb/images-31.jpg",
"https://i.postimg.cc/5yQpWNgc/images-32.jpg",
"https://i.postimg.cc/xqr5fDpX/images-33.jpg",
"https://i.postimg.cc/pV9tLf1v/images-34.jpg",
"https://i.postimg.cc/Dft3JStX/images-35.jpg",
"https://i.postimg.cc/13SxBLRR/images-36.jpg",
"https://i.postimg.cc/Hk9qhBjw/images-37.jpg",
"https://i.postimg.cc/Ls4cKLZr/images-38.jpg",
"https://i.postimg.cc/nLd6Hr4M/images-39.jpg",
"https://i.postimg.cc/9fzLYp9F/images-4.jpg",
"https://i.postimg.cc/1t22qdYQ/images-40.jpg",
"https://i.postimg.cc/2yWJFxPB/images-41.jpg",
"https://i.postimg.cc/zDH9rJVX/images-42.jpg",
"https://i.postimg.cc/26ZTPSTs/images-5.jpg",
"https://i.postimg.cc/wBP0fm55/images-6.jpg",
"https://i.postimg.cc/7YvjPp21/images-7.jpg",
"https://i.postimg.cc/HLLhPmqm/images-8.jpg",
"https://i.postimg.cc/L827LLvn/images-9.jpg",
"https://i.postimg.cc/c44w3Jwd/t-i-xu-ng.jpg",
"https://i.postimg.cc/3xfBNvqM/t-i-xu-ng-1.jpg",
"https://i.postimg.cc/7YxMN988/t-i-xu-ng-10.jpg",
"https://i.postimg.cc/rws1Bpwf/t-i-xu-ng-11.jpg",
"https://i.postimg.cc/DwNrnKWn/t-i-xu-ng-12.jpg",
"https://i.postimg.cc/7LTgLQ77/t-i-xu-ng-13.jpg",
"https://i.postimg.cc/SsFcY77P/t-i-xu-ng-14.jpg",
"https://i.postimg.cc/c1cf63KD/t-i-xu-ng-15.jpg",
"https://i.postimg.cc/B6THTLmn/t-i-xu-ng-16.jpg",
"https://i.postimg.cc/yxnR5q4q/t-i-xu-ng-17.jpg",
"https://i.postimg.cc/6qBRYWPL/t-i-xu-ng-18.jpg",
"https://i.postimg.cc/8kLt4s7W/t-i-xu-ng-19.jpg",
"https://i.postimg.cc/YCCRt3bf/t-i-xu-ng-2.jpg",
"https://i.postimg.cc/jjWh7jVD/t-i-xu-ng-3.jpg",
"https://i.postimg.cc/N0Wk7wYp/t-i-xu-ng-4.jpg",
"https://i.postimg.cc/595SvGrS/t-i-xu-ng-5.jpg",
"https://i.postimg.cc/sDwPHWsB/t-i-xu-ng-6.jpg",
"https://i.postimg.cc/4yGvqbYc/t-i-xu-ng-7.jpg",
"https://i.postimg.cc/PJMbjpDR/t-i-xu-ng-8.jpg",
"https://i.postimg.cc/pTzYs1Lx/t-i-xu-ng-9.jpg",]
	var path = __dirname + "/cache/menu2.jpg"
	var rdimg = img[Math.floor(Math.random() * img.length)]; 

   	let dowloadIMG = (await axios.get(rdimg, { responseType: "arraybuffer" } )).data; 
        fs.writeFileSync(path, Buffer.from(dowloadIMG, "utf-8") );
        imgP.push(fs.createReadStream(path))
	const command = commands.values();
	var group = [], msg = "╭──────╮\n         MENU \n╰──────╯\n     ◆━━━━━━━━━━◆";
	let check = true, page_num_input = "";
	let bonus = 0;

	for (const commandConfig of command) {
		if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
		else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
	}

	if (args[0] && ["all", "-a"].includes(args[0].trim())) {
		let all_commands = [];
		group.forEach(commandGroup => {
			commandGroup.cmds.forEach(item => all_commands.push(item));
		});
		let page_num_total = Math.ceil(all_commands.length / 10);
		if (args[1]) {
			check = false;
			page_num_input = parseInt(args[1]);
			if (isNaN(page_num_input)) msg = "Vui Lòng Chọn Số!!";
		else if (page_num_input > page_num_total || page_num_input <= 0) msg = "Vui Lòng Chọn Lại Số!!";
			else check = true;
		}
		if (check) {
			index_start = (page_num_input) ? (page_num_input * 10) - 10 : 0;
			bonus = index_start;
			index_end = (index_start + 10 > all_commands.length) ? all_commands.length : index_start + 10;
			all_commands = all_commands.slice(index_start, index_end);
			all_commands.forEach(e => {
				msg += `\n${index_start+=1} ${e}: ${commands.get(e).config.description}`;
			})
			msg += `\n\n🍑 𝘛𝘳𝘢𝘯𝘨【${page_num_input || 1}/${page_num_total}】`;
			msg += `\n🚀 Để xem các trang khác, dùng: ${prefix}menu [all/-a] [số trang]`;
			msg += "\n╭──────╮\n     Reply \n╰──────╯tin nhắn theo số để xem thông tin chi tiết lệnh";
		}
		var msgg = {body: msg, attachment: imgP}
		return api.sendMessage(msgg, threadID, (error, info) => {
			if (check) {
				global.client.handleReply.push({
					type: "cmd_info",
					bonus: bonus,
					name: this.config.name,
					messageID: info.messageID,
					content: all_commands
				})
			}
		}, messageID)
	}

	let page_num_total = Math.ceil(group.length / 10);
	if (args[0]) {
		check = false;
		page_num_input = parseInt(args[0]);
		if (isNaN(page_num_input)) msg = "Vui Lòng Chọn Số!!";
		else if (page_num_input > page_num_total || page_num_input <= 0) msg = "Vui Lòng Chọn Lại Số!!";
		else check = true;
	}
	if (check) {
		index_start = (page_num_input) ? (page_num_input * 10) - 10 : 0;
		bonus = index_start;
		index_end = (index_start + 10 > group.length) ? group.length : index_start + 10;
		group = group.slice(index_start, index_end);
		group.forEach(commandGroup => msg += `\n【${index_start+=1}】 🏨💒🏨 ${commandGroup.group.toUpperCase()} 🏩🏰🏩`);
		msg += `\n\n🍑 𝘛𝘳𝘢𝘯𝘨【${page_num_input || 1}/${page_num_total}】`;
		msg += `\n🚀 Để xem các trang khác, dùng: ${prefix}menu [số trang]`;
		msg += `\n╭──────╮\n       Reply \n╰──────╯ \nTin nhắn theo số để xem các lệnh theo phân loại`;
		msg += `\nBot được điều hành bởi JRT&ROSIE`;
	}
	var msgg = {body: msg, attachment: imgP}
	return api.sendMessage(msgg, threadID, async (error, info) => {
		global.client.handleReply.push({
			name: this.config.name,
			bonus: bonus,
			messageID: info.messageID,
			content: group
		})
	});
}
