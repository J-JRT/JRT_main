module.exports.config = {
	name: "sing",
	version: "1.0.5",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Phát nhạc thông qua link YouTube, SoundCloud hoặc từ khoá tìm kiếm",
	commandCategory: "Youtube",
	usages: "[link or content need search]",
	cooldowns: 10,
	dependencies: {
		"ytdl-core": "",
		"simple-youtube-api": "",
		"soundcloud-downloader": "",
		"fs-extra": "",
		"axios": ""
	},
	envConfig: {
		"YOUTUBE_API": "AIzaSyA81xmaIo6uozgapDe7_yDjFfnOwkfx_XA",
		"SOUNDCLOUD_API": "M4TSyS6eV0AcMynXkA3qQASGcOFQTWub"
	}
};

module.exports.handleReply = async function({ api, event, handleReply }) {
	const ytdl = global.nodemodule["ytdl-core"];
	const { createReadStream, createWriteStream, unlinkSync, statSync } = global.nodemodule["fs-extra"];
	ytdl.getInfo(handleReply.link[event.body - 1]).then(res => {
	let body = res.videoDetails.title;
	api.sendMessage(`[⚜️]→ Đang xử lý audio !\n\n${body}\n\n[⚜️]→ Xin Vui lòng Đợi !`, event.threadID, (err, info) =>
	setTimeout(() => {api.unsendMessage(info.messageID) } , 10000));
    });
	try {
		ytdl.getInfo(handleReply.link[event.body - 1]).then(res => {
		let body = res.videoDetails.title;
		ytdl(handleReply.link[event.body - 1])
			.pipe(createWriteStream(__dirname + `/cache/${handleReply.link[event.body - 1]}.m4a`))
			.on("close", () => {
				if (statSync(__dirname + `/cache/${handleReply.link[event.body - 1]}.m4a`).size > 26214400) return api.sendMessage('[⚜️]→ Không thể gửi file vì dung lượng lớn hơn 25MB.', event.threadID, () => unlinkSync(__dirname + `/cache/${handleReply.link[event.body - 1]}.m4a`), event.messageID);
				else return api.sendMessage({body : `${body}`, attachment: createReadStream(__dirname + `/cache/${handleReply.link[event.body - 1]}.m4a`)}, event.threadID, () => unlinkSync(__dirname + `/cache/${handleReply.link[event.body - 1]}.m4a`), event.messageID)
			})
			//.on("error", (error) => api.sendMessage(`Đã xảy ra vấn đề khi đang xử lý request, lỗi: \n${error}`, event.threadID, event.messageID));
		});
		}
	catch {
		api.sendMessage("Không thể xử lý yêu cầu của bạn!", event.threadID, event.messageID);
	}
	return api.unsendMessage(handleReply.messageID);
}

module.exports.run = async function({ api, event, args }) {
	const ytdl = global.nodemodule["ytdl-core"];
	const YouTubeAPI = global.nodemodule["simple-youtube-api"];
	const scdl = global.nodemodule["soundcloud-downloader"].default;
	const axios = global.nodemodule["axios"];
	const { createReadStream, createWriteStream, unlinkSync, statSync } = global.nodemodule["fs-extra"];
  //if (global.client.sing == true) return api.sendMessage("Hệ thống đang xử lý yêu cầu từ box khác, vui lòng quay lại sau", event.threadID, event.messageID);
        global.client.sing = true;
	
	const youtube = new YouTubeAPI(global.configModule[this.config.name].YOUTUBE_API);
	const keyapi = global.configModule[this.config.name].YOUTUBE_API
	if (args.length == 0 || !args) return api.sendMessage('[⚜️]→ Phần tìm kiếm không được để trống!', event.threadID, event.messageID);
	const keywordSearch = args.join(" ");
	const videoPattern = /^(https?:\/\/)?(www\.)?(m\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
	const scRegex = /^https?:\/\/(soundcloud\.com)\/(.*)$/;
	const urlValid = videoPattern.test(args[0]);
	
	if (urlValid) {
		try {
			ytdl.getInfo(args[0]).then(res => {
			let body = res.videoDetails.title;
			var id = args[0].split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
            (id[2] !== undefined) ? id = id[2].split(/[^0-9a-z_\-]/i)[0] : id = id[0];
			ytdl(args[0])
				.pipe(createWriteStream(__dirname + `/cache/${id}.m4a`))
				.on("close", () => {
					if (statSync(__dirname + `/cache/${id}.m4a`).size > 26214400) return api.sendMessage('[⚜️]→ Không thể gửi file vì dung lượng lớn hơn 25MB.', event.threadID, () => unlinkSync(__dirname + `/cache/${id}.m4a`), event.messageID);
					else return api.sendMessage({body : `${body}`, attachment: createReadStream(__dirname + `/cache/${id}.m4a`)}, event.threadID, () => unlinkSync(__dirname + `/cache/${id}.m4a`) , event.messageID)
				})
				.on("error", (error) => api.sendMessage(`Đã xảy ra vấn đề khi đang xử lý request, lỗi: \n${error}`, event.threadID, event.messageID));
			});
			}
		catch (e) {
			console.log(e);
			api.sendMessage("Không thể xử lý yêu cầu của bạn!", event.threadID, event.messageID);
		}

	}
	else if (scRegex.test(args[0])) {
		let body;
		try {
			var songInfo = await scdl.getInfo(args[0], global.configModule[this.config.name].SOUNDCLOUD_API);
			var timePlay = Math.ceil(songInfo.duration / 1000);
			body = `Tiêu đề: ${songInfo.title} | ${(timePlay - (timePlay %= 60)) / 60 + (9 < timePlay ? ':' : ':0') + timePlay}]`;
		}
		catch (error) {
			if (error.statusCode == "404") return api.sendMessage("[⚜️]→ Không tìm thấy bài nhạc của bạn thông qua link trên ;w;", event.threadID, event.messageID);
			api.sendMessage("Không thể xử lý request do dã phát sinh lỗi: " + error.message, event.threadID, event.messageID);
		}
		try {
			await scdl.downloadFormat(args[0], scdl.FORMATS.OPUS, global.configModule[this.config.name].SOUNDCLOUD_API ? global.configModule[this.config.name].SOUNDCLOUD_API : undefined).then(songs => songs.pipe(createWriteStream(__dirname + "/cache/music.mp3")).on("close", () => api.sendMessage({ body, attachment: createReadStream(__dirname + "/cache/music.mp3" )}, event.threadID, () => unlinkSync(__dirname + "/cache/music.mp3"), event.messageID)));
		}
		catch (error) {
			await scdl.downloadFormat(args[0], scdl.FORMATS.MP3, global.configModule[this.config.name].SOUNDCLOUD_API ? global.configModule[this.config.name].SOUNDCLOUD_API : undefined).then(songs => songs.pipe(createWriteStream(__dirname + "/cache/music.mp3")).on("close", () => api.sendMessage({ body, attachment: createReadStream(__dirname + "/cache/music.mp3" )}, event.threadID, () => unlinkSync(__dirname + "/cache/music.mp3"), event.messageID)));
		}
	}
	else {
		try {
			var link = [], msg = "", num = 0;
			var results = await youtube.searchVideos(keywordSearch, 6);
			for (let value of results) {
				if (typeof value.id == 'undefined') return;
				link.push(value.id);
				let datab = (await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${value.id}&key=${keyapi}`)).data;
				let gettime = datab.items[0].contentDetails.duration;
				let time = (gettime.slice(2));
				let datac = (await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${value.id}&key=${keyapi}`)).data;
				let channel = datac.items[0].snippet.channelTitle;
				msg += (`${num+=1}. ${value.title}\nTime: ${time}\nChannel: ${channel}\n\n`);
			}
			return api.sendMessage(`[⚜️]→ Có ${link.length} kết quả trùng với từ khoá tìm kiếm của bạn: \n${msg}\n[⚜️]→ Hãy reply(phản hồi) chọn một trong những tìm kiếm trên\nThời Gian Bài Hát Tối Đa Là 10M!`, event.threadID,(error, info) => global.client.handleReply.push({ name: this.config.name, messageID: info.messageID, author: event.senderID, link }), event.messageID);
		}
		catch (error) {
			api.sendMessage("Không thể xử lý request do dã phát sinh lỗi: " + error.message, event.threadID, event.messageID);
		}
	}
}
