module.exports.config = {
	name: "threads2",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "HungCho",
	description: "",
	commandCategory: "Admin",
	usages: "sendnoti [Text]",
	cooldowns: 5,
	info: [
		{
			key: "Text",
			prompt: "Đoạn văn bản bạn muốn gửi tới mọi người",
			type: 'Văn bản',
			example: 'Hello Em'
		}
	]
};

module.exports.run = async ({ api, event, args, Threads }) => {
	let data =  (await Threads.getAll(['threadID', 'name'])).filter(item => !!item.name);
		  let num = 0
            let thread = '';
				        for (i = 0 ; i < data.length; i++ ){
                num += 1;
                thread += num + '. ' + data[i].name + '-' + data[i].threadID + '\n'
                }
      				  api.sendMessage(thread, event.threadID);
      				  (async () => {

var inbox = await api.getThreadList(100, null, ['INBOX']);
	let list = [...inbox].filter(group => group.isSubscribed && group.isGroup);
var msg = "" , num = 0 ;
for(let ab of list) {
 var name = ab.name;
var id = ab.threadID
var sotv = ab.participantIDs.length
msg += ${num+=1}.  + name +"\nTID : " + id + "\nThành Viên : "+sotv+'\n\n'; 
}
out(msg)
})()
};