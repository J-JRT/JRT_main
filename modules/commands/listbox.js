module.exports.config = {
  name: 'listbox',
  version: '1.0.0',
  credits: 'manhIT fix get + ban box by D-Jukie', //Jukie fix ban box
  hasPermssion: 2,
  description: 'List thread bot đã tham gia',
  commandCategory: 'Admin',
  usages: 'listbox',
  cooldowns: 15
};


module.exports.handleReply = async function({ api, event, args, Threads, handleReply }) {

  if (parseInt(event.senderID) !== parseInt(handleReply.author)) return;

  var arg = event.body.split(" ");
  var idgr = handleReply.groupid[arg[1] - 1];


  switch (handleReply.type) {

    case "reply":
      {
        if (arg[0] == "ban" || arg[0] == "Ban") {
          const data = (await Threads.getData(idgr)).data || {};
          data.banned = true;
          
          await Threads.setData(idgr, { data });
          global.data.threadBanned.set(parseInt(idgr), 1);
          api.sendMessage(`[${idgr}] Đã ban thành công!`, event.threadID, event.messageID);
          break;
        }

        if (arg[0] == "out" || arg[0] == "Out") {
        var data = (await Threads.getData(event.threadID)).threadInfo;
        var namethread = data.threadName;
          api.removeUserFromGroup(`${api.getCurrentUserID()}`, idgr);
          api.sendMessage("Đã out thread có id: " + idgr + "\n" + namethread, event.threadID, event.messageID);
          break;
        }

      }
  }
};


module.exports.run = async function({ api, event, client }) {
  var inbox = await api.getThreadList(100, null, ['INBOX']);
  let list = [...inbox].filter(group => group.isSubscribed && group.isGroup);

  var listthread = [];

  //////////


  for (var groupInfo of list) {
    //const botID = api.getCurrentUserID();
    const listUserID = event.participantIDs.filter(ID => ID);

    listthread.push({
      id: groupInfo.threadID,
      name: groupInfo.name,
      sotv: listUserID.length,
    });

  } //for

  var listbox = listthread.sort((a, b) => {
    if (a.sotv > b.sotv) return -1;
    if (a.sotv < b.sotv) return 1;
  });

  let msg = '',
    i = 1;
  var groupid = [];
  for (var group of listbox) {
    msg += `${i++}. ${group.name}\n🧩TID: ${group.id}\n\n`;
    groupid.push(group.id);
  }

  api.sendMessage(msg + 'Reply "out" hoặc "ban" + số thứ tự để out hoặc ban thread đó!!', event.threadID, (e, data) =>
    global.client.handleReply.push({
      name: this.config.name,
      author: event.senderID,
      messageID: data.messageID,
      groupid,
      type: 'reply'
    })
  );
};
