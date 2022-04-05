module.exports.config = {
  name: "out",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "manhG",
  description: "chỉ là rời nhóm theo ID thôi",
  commandCategory: "Hệ thống admin-bot",
  usages: "[ID nhóm] [Nội dung]",
  cooldowns: 5,
  dependencies: "",

};

module.exports.run = async function ({ api, Users, Threads, event, args }) {

  var idbox = args[0];
  var reason = args.slice(1);
  if (!args[0]) return api.sendMessage(`${api.getCurrentUserID()}`, () =>
    api.sendMessage(`★★Tạm Biệt Nhé★★ \n\n Tớ out box đây😢 `, event.threadID, () =>
      api.removeUserFromGroup(`${api.getCurrentUserID()}`, event.threadID)));
        api.sendMessage("Đã nhận lệnh out nhóm từ admin, lý do: " + reason.join(" "), idbox, () =>
          api.removeUserFromGroup(`${api.getCurrentUserID()}`, idbox, () =>
            api.sendMessage("Đã out box có id: " + idbox + " với lý do: " + reason.join(" "), event.threadID)))
}