module.exports.config = {
  name: "shortvideo",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "CatalizCS mod by banledangyeuu",
  description: "Tạo shortvideo cho 1 tin nhắn",
  commandCategory: "Nhóm",
  usages: "shortvideo a => [reply video/link video (nếu nhiều link ngăn cách bằng " | ")]",
  cooldowns: 5,
  dependencies: {
        "fs-extra": ""
    }
}

module.exports.onLoad = () => {
  const fs = global.nodemodule["fs-extra"];
  if (!fs.existsSync(__dirname + "/cache/shortvideo.json")) fs.writeFileSync(__dirname + "/cache/shortvideo.json", JSON.stringify([]), 'utf-8');
}

module.exports.handleEvent = async function({ api, event }) {
  const fs = global.nodemodule["fs-extra"]; 
  const axios = global.nodemodule["axios"]; 
  if (event.type !== "message_unsend" && event.body.length !== -1) {
    let shortcut = JSON.parse(fs.readFileSync(__dirname + "/cache/shortvideo.json"));
    if (shortcut.some(item => item.id == event.threadID)) {
      let getThread = shortcut.find(item => item.id == event.threadID).shorts;
      if (getThread.some(item => item.in == event.body)) {
        let shortOut = getThread.find(item => item.in == event.body).out;
        if (typeof shortOut == "string") {
          var regex = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");
          if (shortOut.indexOf(" | ") !== -1) {
            var arrayOut = shortOut.split(" | ");
            let shortlink = [] 
            for (let link of arrayOut) {
              if (!regex.test(`${link}`)) return api.sendMessage(`Item ${link} không phải là url`, event.threadID);
              shortlink.push(link)
            }   
            var path = [];
            //return api.sendMessage(`${shortlink.toString()}`, event.threadID);          
            for (let i = 0; i < shortlink.length; i++) {
            let shortimage = (await axios.get( `${shortlink[i]}`, { responseType: "arraybuffer" })).data;
            fs.writeFileSync( __dirname + `/cache/shortvideo${i}.mp4`, Buffer.from(shortimage, "utf-8"));
            path.push(fs.createReadStream( __dirname + `/cache/shortvideo${i}.mp4`));
            //api.sendMessage({attachment: fs.createReadStream( __dirname + `/cache/shortvideo${i}.mp4`)}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/shortvideo${i}.mp4`));                 
            }
            var mainpath = [...path];
            api.sendMessage({attachment: mainpath}, event.threadID);  
            for (let i = 0; i < mainpath.length; i++) {
            fs.unlinkSync(__dirname + `/cache/shortvideo${i}.mp4`)
            }           
            //return api.sendMessage(`${arrayOut[Math.floor(Math.random() * arrayOut.length)]}`, event.threadID);
          }
          else {
            if (!regex.test(`${shortOut}`)) return api.sendMessage(`Item ${shortOut} không phải là url`, event.threadID, () => fs.unlinkSync(__dirname + `/cache/shortvideo.mp4`));
            let shortimage = (await axios.get( `${shortOut}`, { responseType: "arraybuffer" })).data;
            fs.writeFileSync( __dirname + `/cache/shortvideo.mp4`, Buffer.from(shortimage, "utf-8"));
            api.sendMessage({attachment: fs.createReadStream( __dirname + `/cache/shortvideo.mp4`)}, event.threadID);             }
        }
        else if (typeof shortOut == "object") {
          var path = [], unlink = [];
          for (let i = 0; i < shortOut.length; i++) {
          let shortimage = (await axios.get( `${shortOut[i]}`, { responseType: "arraybuffer" })).data;
          fs.writeFileSync( __dirname + `/cache/shortvideo${i}.mp4`, Buffer.from(shortimage, "utf-8"));
          path.push(fs.createReadStream( __dirname + `/cache/shortvideo${i}.mp4`));
          }
          var mainpath = [...path];
          api.sendMessage({attachment: mainpath}, event.threadID);  
          for (let i = 0; i < mainpath.length; i++) {
          fs.unlinkSync(__dirname + `/cache/shortvideo${i}.mp4`)
          }
        }
      }
    }
  }
}

module.exports.run = async function({ api, event, args }) {
  const fs = global.nodemodule["fs-extra"];
  var { threadID, messageID } = event;
  var content = args.join(" ");
  //if (!content) return api.sendMessage("Sai Format", threadID, messageID);
  if (content.indexOf(`xóa`) == 0 || content.indexOf(`xoá`) == 0|| content.indexOf(`del`) == 0) {
    let delThis = content.slice(4, content.length);
    if (!delThis) return api.sendMessage("Không tìm thấy shortvideo bạn cần xóa", threadID, messageID);
    return fs.readFile(__dirname + "/cache/shortvideo.json", "utf-8", (err, data) => {
      if (err) throw err;
      var oldData = JSON.parse(data);
      var getThread = oldData.find(item => item.id == threadID).shorts;
      if (!getThread.some(item => item.in == delThis)) return api.sendMessage("Không tìm thấy shortvideo bạn cần xóa", threadID, messageID);
      getThread.splice(getThread.findIndex(item => item.in === delThis), 1);
      fs.writeFile(__dirname + "/cache/shortvideo.json", JSON.stringify(oldData), "utf-8", (err) => (err) ? console.error(err) : api.sendMessage("Đã xóa shortvideo thành công!", threadID, messageID));
    });
  }
  else if (content.indexOf(`all`) == 0)
    return fs.readFile(__dirname + "/cache/shortvideo.json", "utf-8", (err, data) => {
      if (err) throw err;
      let allData = JSON.parse(data);
      let msg = '';
      if (!allData.some(item => item.id == threadID)) return api.sendMessage("Hiện tại không có shortvideo nào", threadID, messageID);
      if (allData.some(item => item.id == threadID)) {
        let getThread = allData.find(item => item.id == threadID).shorts;
        getThread.forEach(item => msg = msg + item.in + ' -> ' + (typeof item.out == "object" ? `${item.out.length} video` : item.out.indexOf(" | ") !== -1 ? `${item.out.split(" | ").length} video` : "1 video") + '\n');
      }
      if (!msg) return api.sendMessage("Hiện tại không có shortvideo nào", threadID, messageID);
      api.sendMessage("Sau đây là shortvideo có trong nhóm: \n" + msg, threadID, messageID);
    });
  else if (content.indexOf(`clear`) == 0)
    return fs.readFile(__dirname + "/cache/shortvideo.json", "utf-8", (err, data) => {
      if (err) throw err;
      let allData = JSON.parse(data);
      if (!allData.some(item => item.id == threadID)) return api.sendMessage("Hiện tại không có shortvideo nào", threadID, messageID);
      if (allData.some(item => item.id == threadID)) {
        let getThread = allData.find(item => item.id == threadID).shorts;
        getThread.splice(0, getThread.length)
        return fs.writeFile(__dirname + "/cache/shortvideo.json", JSON.stringify(getThread), "utf-8", (err) => (err) ? console.error(err) : api.sendMessage("Đã xóa toàn bộ shortvideo" , threadID, messageID));
      }
    }); 
  else {
    const https = global.nodemodule["https"];
    var regex = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");
    var short = (url => new Promise((resolve, reject) => https.get('https://tinyurl.com/api-create.php?url=' + encodeURIComponent(url), res => res.on('data', chunk => resolve(chunk.toString()))).on("error", err => reject(err))))
    let narrow = content.indexOf(" =>");
    if (narrow == -1) return api.sendMessage("Sai Format", threadID, messageID);
    var shortin = content.slice(0, narrow);
    let shortout = content.slice(narrow + 4, content.length);
    if (shortin == shortout) return api.sendMessage("2 input và output giống nhau", threadID, messageID);
    if (!shortin) return api.sendMessage("Thiếu input", threadID, messageID);
    if (!shortout) {
      if(event.type == "message_reply" &&event.messageReply.attachments[0].type == "photo" ) {
        shortout = [];
        var att = Object.keys(event.messageReply.attachments); 
        for (let i = 0; i < att.length; i++) {
          let link = await short((event.messageReply.attachments[i] != "") ? (event.messageReply.attachments[i].type == "photo") ? event.messageReply.attachments[i].url : "":"");
          shortout.push (link)
        }
      } else return api.sendMessage("Thiếu output",event.threadID, event.messageID)
    } 
    return fs.readFile(__dirname + "/cache/shortvideo.json", "utf-8", (err, data) => {
      if (err) throw err;
      var oldData = JSON.parse(data);
      if (!oldData.some(item => item.id == threadID)) {
        let addThis = {
          id: threadID,
          shorts: []
        }
        addThis.shorts.push({ in: shortin, out: shortout });
        oldData.push(addThis);
        return fs.writeFile(__dirname + "/cache/shortvideo.json", JSON.stringify(oldData), "utf-8", (err) => (err) ? console.error(err) : api.sendMessage("Tạo shortvideo thành công", threadID, messageID));
      }
      else {
        let getShort = oldData.find(item => item.id == threadID);
        if (getShort.shorts.some(item => item.in == shortin)) {
          let index = getShort.shorts.indexOf(getShort.shorts.find(item => item.in == shortin));
          let output = getShort.shorts.find(item => item.in == shortin).out;
          getShort.shorts[index].out = output + " | " + shortout;
          
          return api.sendMessage("shortvideo đã tồn tại trong group này", threadID, messageID);
          
          //return fs.writeFile(__dirname + "/cache/shortvideo.json", JSON.stringify(oldData), "utf-8");
        }
        getShort.shorts.push({ in: shortin, out: shortout });
        return fs.writeFile(__dirname + "/cache/shortvideo.json", JSON.stringify(oldData), "utf-8", (err) => (err) ? console.error(err) : api.sendMessage("Tạo shortvideo thành công", threadID, messageID));
      }
    });
  }
  }