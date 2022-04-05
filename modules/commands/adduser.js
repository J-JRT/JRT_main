module.exports.config = {
    name: "adduser",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "D-Jukie",
    description: "Thêm người dùng vào nhóm bằng link hoặc uid",
    commandCategory: "Nhóm",
    usages: "adduser [url]",
    cooldowns: 5
};
module.exports.run = async function ({ api, event, args, Threads, Users }) {
const { threadID, messageID } = event;
const axios = require('axios')
const link = args.join(" ")
if(!args[0]) return api.sendMessage('Vui lòng nhập link hoặc id người dùng muốn thêm vào nhóm!', threadID, messageID);
var { participantIDs, approvalMode, adminIDs } = await api.getThreadInfo(threadID);
if(link.indexOf(".com/")!==-1) {
    const res = await axios.get(`https://api-rosie.j-jrt-official.repl.co/finduid?url=${link}`);
    var uidUser = res.data.id
    api.addUserToGroup(uidUser, threadID, (err) => {
    if (participantIDs.includes(uidUser)) return api.sendMessage(`Thành viên đã có mặt trong nhóm`, threadID, messageID);
    if (err) return api.sendMessage(`Không thể thêm thành viên vào nhóm`, threadID, messageID);
    else if (approvalMode && !adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage(`Đã thêm người dùng vào danh sách phê duyệt`, threadID, messageID);
    else return api.sendMessage(`Thêm thành viên vào nhóm thành công`, threadID, messageID);
    });
    }
  else { 
    var uidUser = args[0] 
    api.addUserToGroup(uidUser, threadID, (err) => {
    if (participantIDs.includes(uidUser)) return api.sendMessage(`Thành viên đã có mặt trong nhóm`, threadID, messageID);
    if (err) return api.sendMessage(`Không thể thêm thành viên vào nhóm`, threadID, messageID);
    else if (approvalMode && !adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage(`Đã thêm người dùng vào danh sách phê duyệt`, threadID, messageID);
    else return api.sendMessage(`Thêm thành viên vào nhóm thành công`, threadID, messageID);
    });
  }
  }