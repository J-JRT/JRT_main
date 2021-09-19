module.exports.config = {
	name: "users",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "HungCho",
	description: "",
	commandCategory: "System",
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

module.exports.run = async ({ api, event, args, Threads, Users }) => {
	let data =  (await Users.getAll(['name'])).filter(item => !!item.name);
		  let num = 0
            let thread = '';
				        for (i = 0 ; i < data.length; i++ ){
                num += 1;
                thread += num + '. ' + data[i].name + '\n'
                }
      				  api.sendMessage(thread, event.threadID);

					};