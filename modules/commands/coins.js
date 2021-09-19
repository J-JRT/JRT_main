module.exports.config = {
	name: "coins",
	version: "1.0.4-hotfix2",
	hasPermssion: 2,
	credits: "Dũng UwU, hotfix by Thọ",
	description: "Tăng giảm tiền",
	commandCategory: "Economy",
	usages: "coins [args]",
    cooldowns: 5,
     info: [
    {
    	key: "inc",
    	prompt: "tăng coins",
    	type: 'admin',
    	example: 'coins inc'
    },
    {
    	key: "dec",
    	prompt: "giảm coins",
    	type: 'admin',
    	example: 'coins dec'
    }] 
};

module.exports.run = async ({ event, api, Currencies, args, utils }) => {
	let { threadID, messageID, senderID } = event;
	const coins = parseInt(args[2])
	const userID = Object.keys(event.mentions)[0];
	var nameL
	switch(args[0]) {
		case "inc": {
		if (args[1] == 'me') return api.sendMessage({ body: `Đã thêm cho bản thân ${coins} coins`}, threadID, async () => {
            await Currencies.increaseMoney(senderID, coins);}, messageID);
        if(userID) nameL = event.mentions[userID].split(" ").length
		return api.sendMessage({ body: 'Đã chuyển cho ' + event.mentions[userID].replace(/@/g, "") + ` ${args[1+ nameL]} coins`}, threadID, async () => {
            await Currencies.increaseMoney(userID, parseInt(args[1+ nameL]));
            }, messageID);
       }
			break;
		case "dec": {
		if (args[1] == 'me') {
		let balance = (await Currencies.getData(userID)).money;
		if(args[2] == "all") return api.sendMessage(`Bạn đã giảm toàn bộ tiền của bản thân`, threadID, async () => {
            await Currencies.decreaseMoney(senderID, parseInt(balance));}, messageID);
		 if(!isNaN(args[2])){ 
		 if(coins > balance) return api.sendMessage("Số coins bạn giảm lớn hơn số coins hiện có",threadID,messageID)
	       	else return api.sendMessage(`Đã giảm ${coins} coins của bản thân`, threadID, async () => {
            await Currencies.decreaseMoney(senderID, coins);}, messageID);
            }
         else return api.sendMessage("Vui lòng nhập số coins muốn giảm",threadID,messageID)
        }
	    else if(userID){
	    nameL = event.mentions[userID].split(" ").length
	    let balance = (await Currencies.getData(userID)).money;
	    if(args[1+ nameL] == "all") return api.sendMessage(`Bạn đã giảm toàn bộ coins của ${event.mentions[userID].replace(/@/g, "")}`, threadID, async () => {
            await Currencies.decreaseMoney(userID, balance);}, messageID);
        
	    api.sendMessage({ body: `Đã giảm ${args[1+ nameL]} coins của ` + event.mentions[userID].replace(/@/g, "")}, threadID, async () => {
            await Currencies.decreaseMoney(userID, parseInt(args[1+nameL]));}, messageID);
            }
        else return api.sendMessage("Bạn muốn giảm coin của ai",threadID,messageID)
        }
			break;
		default:
		return utils.throwError("coins", threadID, messageID);
		break;
		}
	}