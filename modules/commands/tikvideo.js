module.exports.config = {
  name: "tikvideo",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Horizon",
  description: "lấy video tiktok no logo",
  commandCategory: "Phương tiện",
  usages: "tikvd [url]",
  cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
  const { createReadStream, unlinkSync, writeFileSync } = require("fs-extra");
  const axios = require("axios");
  const { threadID, messageID } = event;
  const request = require("request");
  if (event.type == "message_reply") {
    try {
      let results = {};
      let key = await axios.get(
        `http://api.leanhtruong.net/api-no-key/tiktok?url=${event.messageReply.args[0]}`,
      );
      console.log(key)
      key = JSON.parse(JSON.stringify(key.data, null, 2));
      if (key.error != 0)
        return api.sendMessage(
          "Link Không Tồn Tại Hoặc Sai Link , Vui Lòng Báo Admin",
          event.threadID,
        );
  
        results = {
          author: key.author_video,
          description: key.title,
          video: {
            with_watermark: key.data_watermark[0].url,
            no_watermark: key.data_nowatermark[0].url,
          },
          Mname: key.data_music.title,
          music: key.data_music.url,
        };
        
      var path = __dirname + `/cache/tiktok.mp4`;
      const { data: stream } = await axios.get(results.video.no_watermark, {
        responseType: "arraybuffer",
      });
      writeFileSync(path, Buffer.from(stream, "utf-8"));
      return api.sendMessage(
        {
          body: `Tên : ${results.author} | Nội Dung : ${results.description || "Không Có Nội Dung"} | Nhạc: ${results.Mname}`,
          attachment: createReadStream(path),
        },
        threadID,
        () => unlinkSync(path),
        messageID,
      );
    } catch (e) {
      console.log(e);
      return api.sendMessage(
        "Link Không Tồn Tại Hoặc Sai Link, Hoặc Video Ở Chế Độ riêng tư , Vui Lòng Báo Admin",
        event.threadID,
      );
    }
  }
  if (args.length == 0)
    return api.sendMessage(
      "vui lòng nhập link , kiểu : '/tiktok https://www.tiktok.com/@choul2002/video/6996459846480465179' hoặc lấy nhạc thông qua : '/tiktok music https://www.tiktok.com/@choul2002/video/6996459846480465179'",
      event.threadID,
      event.messageID,
    );
  switch (args[0]) {
    case "music": {
      try {
        let results = {};
        if (args.length == 0)
          return api.sendMessage(
            "vui lòng nhập link , kiểu : '/tiktok https://www.tiktok.com/@choul2002/video/6996459846480465179'",
            event.threadID,
            event.messageID,
          );
        let key = await axios.get(
          `http://api.leanhtruong.net/api-no-key/tiktok?url=${args[1]}`,
        );
        key = JSON.parse(JSON.stringify(key.data, null, 2));
        if (key.error != 0)
          return api.sendMessage(
            "Link Không Tồn Tại Hoặc Sai Link , Vui Lòng Báo Admin",
            event.threadID,
          );
       
      results = {
        author: key.author_video,
        description: key.title,
        video: {
          with_watermark: key.data_watermark[0].url,
          no_watermark: key.data_nowatermark[0].url,
        },
        Mname: key.data_music.title,
        music: key.data_music.url,
      };

        var path = __dirname + `/cache/tiktok.mp3`;
        const { data: stream } = await axios.get(results.music, {
          responseType: "arraybuffer",
        });
        writeFileSync(path, Buffer.from(stream, "utf-8"));
        return api.sendMessage(
          {
            body: `Tên : ${results.author} | Nội Dung : ${results.description || "Không Có Nội Dung"} | Nhạc: ${results.Mname}`,
            attachment: createReadStream(path),
          },
          threadID,
          () => unlinkSync(path),
          messageID,
        );
      } catch (e) {
        console.log(e);
        return api.sendMessage(
          "Link Không Tồn Tại Hoặc Sai Link, Hoặc Video Ở Chế Độ riêng tư , Vui Lòng Báo Admin",
          event.threadID,
        );
      }
    } break;
    default:
      try {
        let results = {};
        let key = await axios.get(
          `http://api.leanhtruong.net/api-no-key/tiktok?url=${args[0]}`,
        );
        key = JSON.parse(JSON.stringify(key.data, null, 2));
        
        if (key.error != 0)
          return api.sendMessage(
            "Link Không Tồn Tại Hoặc Sai Link , Vui Lòng Báo Admin",
            event.threadID,
          );
       
         
      results = {
        author: key.author_video,
        description: key.title,
        video: {
          with_watermark: key.data_watermark[0].url,
          no_watermark: key.data_nowatermark[0].url,
        },
        Mname: key.data_music.title,
        music: key.data_music.url,
      };

        var path = __dirname + `/cache/tiktok.mp4`;
        const { data: stream } = await axios.get(results.video.no_watermark, {
          responseType: "arraybuffer",
        });
        writeFileSync(path, Buffer.from(stream, "utf-8"));
        return api.sendMessage(
          {
            body: `Tên : ${results.author} | Nội Dung : ${results.description || "Không Có Nội Dung"} | Tên Nhạc: ${results.Mname}`,
            attachment: createReadStream(path),
          },
          threadID,
          () => unlinkSync(path),
          messageID,
        );
      } catch (e) {
        return api.sendMessage(
          "Link Không Tồn Tại Hoặc Sai Link, Hoặc Video Ở Chế Độ riêng tư , Vui Lòng Báo Admin",
          event.threadID,
        );
      }
  }
};
