module.exports.config = {
	name: "baicao",
	version: "2.0.1",
	hasPermssion: 0,
	credits: "CatalizCS",
	description: "Game bài cào dành cho nhóm có đặt cược\nMod by MintDaL",
	commandCategory: "Game",
	usages: "[create/start/join/info/leave/check]",
	cooldowns: 5
};

module.exports.handleEvent = async ({ Currencies, event, api, Users }) => {
  const fs = require ("fs-extra");
	const { senderID, threadID, body, messageID } = event;
	if (typeof body == "undefined") return;
	if (!global.moduleData.baicao) global.moduleData.baicao = new Map();
	if (!global.moduleData.baicao.has(threadID)) return;
	var values = global.moduleData.baicao.get(threadID);
	if (values.start != 1) return;
  
	const deckShuffel = values.deckShuffel;

	if (body.indexOf("Chia bài") == 0) {
		if (values.chiabai == 1) return;
		for (const key in values.player) {
			const card1 = deckShuffel.shift();
			const card2 = deckShuffel.shift();
			const card3 = deckShuffel.shift();
			var tong = (card1.Weight + card2.Weight + card3.Weight);
			if (tong >= 20) tong -= 20;
			if (tong >= 10) tong -= 10;
			values.player[key].card1 = card1;
			values.player[key].card2 = card2;
			values.player[key].card3 = card3;
			values.player[key].tong = tong;
			
			const linkCards = [];
			
			for (let i = 1; i < 4; i++) {
			  const Card = values.player[key]["card" + i];
			  linkCards.push(getLinkCard(Card.Value, Card.Suit));
			}
			
			const pathSave = __dirname + `/cache/card${values.player[key].id}.png`;
			fs.writeFileSync(pathSave, await drawCard(linkCards));
			
			api.sendMessage({
			  body: `Bài của bạn: ${card1.Icon}${card1.Value} 丨 ${card2.Icon}${card2.Value} 丨 ${card3.Icon}${card3.Value} \n\nTổng bài của bạn: ${tong}`,
			  attachment: fs.createReadStream(pathSave)
			}, values.player[key].id, (error, info) => {
				if (error) return api.sendMessage(`Không thể chia bài cho ${values.player[key].id}`, threadID);
				fs.unlinkSync(pathSave);
			});
				
		}
		values.chiabai = 1;
		global.moduleData.baicao.set(threadID, values);
		return api.sendMessage("Bài đã được chia thành công! Tất cả mọi người đều có 2 lượt đổi bài nếu không thấy bài hãy kiểm tra lại tin nhắn chờ", threadID);
	}

	if (body.indexOf("Đổi bài") == 0) {
		if (values.chiabai != 1) return;
		var player = values.player.find(item => item.id == senderID);
		if (player.doibai == 0) return api.sendMessage("Bạn đã sử dụng toàn bộ lượt đổi bài", threadID, messageID);
		if (player.ready == true) return api.sendMessage("Bạn đã ready, bạn không thể đổi bài!", threadID, messageID);
		const card = ["card1","card2","card3"];
		player[card[(Math.floor(Math.random() * card.length))]] = deckShuffel.shift();
		player.tong = (player.card1.Weight + player.card2.Weight + player.card3.Weight);
		if (player.tong >= 20) player.tong -= 20;
		if (player.tong >= 10) player.tong -= 10;
		player.doibai -= 1;
		global.moduleData.baicao.set(values);
		
		const linkCards = [];
			
		for (let i = 1; i < 4; i++) {
		  const Card = player["card" + i];
		  linkCards.push(getLinkCard(Card.Value, Card.Suit));
		}
		
	  const pathSave = __dirname + `/cache/card${player.id}.png`;
		fs.writeFileSync(pathSave, await drawCard(linkCards));
	  
		return api.sendMessage({
		  body: `Bài của bạn sau khi được đổi: ${player.card1.Icon}${player.card1.Value} 丨 ${player.card2.Icon}${player.card2.Value} 丨 ${player.card3.Icon}${player.card3.Value}\n\nTổng bài của bạn: ${player.tong}`,
		  attachment: fs.createReadStream(pathSave)
    }, player.id, (error, info) => {
			if (error) return api.sendMessage(`Không thể đổi bài cho ${player.id}`, threadID);
			fs.unlinkSync(pathSave);
		});
	}

	if (body.indexOf("ready") == 0) {
		if (values.chiabai != 1) return;
		var player = values.player.find(item => item.id == senderID);
		if (player.ready == true) return;
		const name = await Users.getNameUser(player.id);
		values.ready += 1;
		player.ready = true;
		if (values.player.length == values.ready) {
			const player = values.player;
			player.sort(function (a, b) { return b.tong - a.tong });

			var ranking = [], num = 1;

			for (const info of player) {
				const name = await Users.getNameUser(info.id);
				ranking.push(`${num++} • ${name}: ${info.card1.Icon}${info.card1.Value} 丨 ${info.card2.Icon}${info.card2.Value} 丨 ${info.card3.Icon}${info.card3.Value} => ${info.tong} nút\n`);
			}
			
			try {
				await Currencies.increaseMoney(player[0].id, values.rateBet * player.length);
			} catch (e) {};
			global.moduleData.baicao.delete(threadID);
			
			return api.sendMessage(`Kết quả:\n\n ${ranking.join("\n")}\n\nRiêng người chơi đứng đầu nhận được ${values.rateBet * player.length}$`, threadID);
		}
		else return api.sendMessage(`Người chơi ${name} đã sẵn sàng lật bài, còn ${values.player.length - values.ready} người chơi chưa lật bài`, event.threadID);
	}
	
	if (body.indexOf("nonready") == 0) {
		const data = values.player.filter(item => item.ready == false);
		var msg = [];

		for (const info of data) {
			const name = global.data.userName.get(info.id) || await Users.getNameUser(info.id);
			msg.push(name);
		}
		if (msg.length != 0) return api.sendMessage("Những người chơi chưa ready bao gồm: " + msg.join(", "), threadID);
		else return;
	}
}


module.exports.run = async ({ api, event, args, Currencies }) => {
	var { senderID, threadID, messageID } = event;
  if (args.length == 0) return api.sendMessage(`===== [ BAICAO ] =====\nMỗi người sẽ được phát ba lá bài. Người chơi có thể xem bài của mình kín đáo hoặc công khai và tính điểm. Điểm của người chơi trong mỗi ván là số lẻ của tổng điểm ba lá bài. Nhất ăn tất\n\nHướng dẫn chơi bài cào:\n» create: để tạo bàn bài cào\n» join: để tham gia bàn bài cào\n» start: để bắt đầu\n  • chia bài: để chia bài cho người chơi\n  • đổi bài: để đổi bài (mỗi người có 2 lượt đổi)\n  • ready: để sẵn sàng\n» info: để xem thông tin bàn bài cào \n» check: kiểm tra tình trạng inbox của người chơi\n» leave: rời khỏi bàn`, event.threadID, event.messageID);
	senderID = String(senderID);
	
	if (!global.moduleData.baicao) global.moduleData.baicao = new Map();
	var values = global.moduleData.baicao.get(threadID) || {};
  var data = await Currencies.getData(event.senderID);
  var money = data.money     
    
	switch (args[0]) {
		case "create":
		case "-c": {
			if (global.moduleData.baicao.has(threadID)) return api.sendMessage("Hiện tại nhóm này đang có bàn bài cào đang được mở", threadID, messageID);
			if (!args[1] || isNaN(args[1]) || parseInt(args[1]) <= 1) return api.sendMessage("Mức đặt cược của bạn không phải là một con số hoặc mức đặt cược của bạn bé hơn 1$", threadID, messageID);
      if (money < args[1]) return api.sendMessage(`Bạn không đủ tiền để có thể khởi tạo bàn với giá: ${args[1]}$`,event.threadID,event.messageID);
      await Currencies.decreaseMoney(event.senderID, Number(args[1]));
			global.moduleData.baicao.set(event.threadID, { "author": senderID, "start": 0, "chiabai": 0, "ready": 0, player: [ { "id": senderID, "card1": 0, "card2": 0, "card3": 0, "doibai": 2, "ready": false } ], rateBet: Number(args[1])});
			return api.sendMessage(`Bàn bài cào của bạn đã được tạo thành công. Để tham gia bạn hãy nhập 'baicao join'`, event.threadID, event.messageID);
		}
		
		case "join":
		case "-j": {
			if (!values) return api.sendMessage("Hiện tại chưa có bàn bài cào nào, bạn có thể tạo bằng cách sử dụng 'baicao create'", threadID, messageID);
			if (values.start == 1) return api.sendMessage("Hiện tại bàn bài cào đã được bắt đầu", threadID, messageID);
			if (money < values.rateBet) return api.sendMessage(`Bạn không đủ ${values.rateBet}$ để tham gia bàn bài cào này`,event.threadID,event.messageID)
			if (values.player.find(item => item.id == senderID)) return api.sendMessage("Bạn đã tham gia vào bàn bài cào này!", threadID, messageID);
			values.player.push({ "id": senderID, "card1": 0, "card2": 0, "card3": 0, "tong": 0, "doibai": 2, "ready": false });
			await Currencies.decreaseMoney(event.senderID, values.rateBet);
			global.moduleData.baicao.set(threadID, values);
			return api.sendMessage("Bạn đã tham gia thành công!", threadID, messageID);
		}

		case "leave":
		case "-l": {
			if (typeof values.player == "undefined") return api.sendMessage("Hiện tại chưa có bàn bài cào nào, bạn có thể tạo bằng cách sử dụng 'baicao create'", threadID, messageID);
			if (!values.player.some(item => item.id == senderID)) return api.sendMessage("Bạn chưa tham gia vào bàn bài cào trong nhóm này!", threadID, messageID);
			if (values.start == 1) return api.sendMessage("Hiện tại bàn bài cào đã được bắt đầu", threadID, messageID);
			if (values.author == senderID) {
				global.moduleData.baicao.delete(threadID);
				api.sendMessage("Author đã rời khỏi bàn, đồng nghĩa với việc bàn sẽ bị giải tán!", threadID, messageID);
			}
			else {
				values.player.splice(values.player.findIndex(item => item.id === senderID), 1);
				api.sendMessage("Bạn đã rời khỏi bàn bài cào này!", threadID, messageID);
				global.moduleData.baicao.set(threadID, values);
			}
			return;
		}
      
    case 'check': {
      for (const key in values.player) {
			
			api.sendMessage(`Bạn có nhìn thấy tin nhắn này?`, values.player[key].id, (error, info) => {
				if (error) return api.sendMessage(`Không thể nhắn tin cho ${values.player[key].id}`, threadID);
			});
		}
		return api.sendMessage("Đang kiểm tra tình trạng inbox của người chơi", threadID);
	}

		case "start":
		case "-s": {
			if (!values) return api.sendMessage("Hiện tại chưa có bàn bài cào nào, bạn có thể tạo bằng cách sử dụng 'baicao create'", threadID, messageID);
			if (values.author !== senderID) return api.sendMessage("Bạn không phải là chủ bàn để có thể bắt đầu", threadID, messageID);
			if (values.player.length <= 1) return api.sendMessage("Hiện tại bàn của bạn không có người chơi nào tham gia, bạn có thể mời người đấy tham gia bằng cách yêu cầu người chơi khác nhập 'baicao join'", threadID, messageID);
			if (values.start == 1) return api.sendMessage("Hiện tại bàn đã được bắt đầu bởi chủ bàn", threadID, messageID);
			values.deckShuffel = createDeck();
			values.start = 1;
			return api.sendMessage("Bàn bài cào của bạn được bắt đầu", threadID, messageID);
		}

		case "info":
		case "-i": {
			if (typeof values.player == "undefined") return api.sendMessage("Hiện tại chưa có bàn bài cào nào, bạn có thể tạo bằng cách sử dụng 'baicao create'", threadID, messageID);
			return api.sendMessage(
				"=== [ BAICAO ] ===" +
				"\n- Author Bàn: " + values.author +
				"\n- Tổng số người chơi: " + values.player.length + " người" +
        "\n- Mức cược: " + values.rateBet + " đô"
			, threadID, messageID);
		}

		default: {
			console.log("[ MINT ] » Hi, have a good day.")
		}
	}
}

const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const suits = ["spades", "clubs", "diamonds", "hearts"];
const deck = [];

for (let i = 0 ; i < values.length; i++) {
  for (let x = 0; x < suits.length; x++) {
    let weight = parseInt(values[i]);
    if (["J", "Q", "K"].includes(values[i])) weight = 10;
    else if (values[i] == "A") weight = 11;
    const card = {
      Value: values[i],
      Suit: suits[x],
      Weight: weight,
      Icon: suits[x] == "spades" ? "♠️"  : suits[x] == "clubs" ? "♣️" : suits[x] == "diamonds" ? "♦️" : suits[x] == "hearts" ? "♥️" : ""
		};
    deck.push(card);
  }
}

module.exports.onLoad = async () => {
	console.log("====== BAICAO LOADED SUCCESSFULLY ======");
  console.log("[ INFO ] » J-JRT");
  console.log("[ DONATE ] » Bạn có thể donate cho tôi để giúp tôi có thêm động lực code");
  console.log("============ MOMO: 0396049649 - NGUYEN HAI DANG ============")
};

function createDeck() {
  const deckShuffel = [...deck];
  for (let i = 0; i < 1000; i++) {
    const location1 = Math.floor((Math.random() * deckShuffel.length));
    const location2 = Math.floor((Math.random() * deckShuffel.length));
    const tmp = deckShuffel[location1];
    deckShuffel[location1] = deckShuffel[location2];
    deckShuffel[location2] = tmp;
  }
  return deckShuffel;
}

function getLinkCard(Value, Suit) {
  return `https://raw.githubusercontent.com/J-JRT/card/mainV2/cards/${Value == "J" ? "jack" : Value == "Q" ? "queen" : Value == "K" ? "king" : Value == "A" ? "ace" : Value}_of_${Suit}.png`;
}

async function drawCard(cards) {
  const a = require("canvas");
	const b = a.createCanvas(500 * cards.length, 726);
  const ctx = b.getContext("2d");
  let x = 0;
  for (const card of cards) {
    const loadImgCard = await a.loadImage(card);
    ctx.drawImage(loadImgCard, x, 0);
    x += 500;
  }
  return b.toBuffer();
}
