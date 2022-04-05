module.exports.config = {
	name: "masoi",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "UwU",
	description: "Game ma sói",
	commandCategory: "Game",
	usages: "[start/join/list/leave/test]",
	cooldowns: 1
};

module.exports.handleEvent = async ({ event, api, Users }) => {
        const { senderID, threadID, body, messageID } = event;

        	if (!global.moduleData.masoi) global.moduleData.masoi = new Map();
        	if (!global.moduleData.masoi.has(threadID)) return;
        	var values = global.moduleData.masoi.get(threadID);
        	if (values.start != 1) return;

        	if (body.indexOf("sói") == 0 || body.indexOf("Sói") == 0) {
        		if (values.sosoi > 0) return api.sendMessage("Số sói đã được chọn, bạn không thể chọn lại", threadID);
        		if (body.slice(-1) > 5 /*&& body.slice(-1) < 2*/) return api.sendMessage("Số sói chọn không được ít hơn 2 và lớn hơn 5!", threadID);
        		if (values.sosoi == 0 && !isNaN(body.slice(-1))) {
        		    values.sosoi = (body.slice(-1));
        		    return api.sendMessage(`Đã đặt số sói thành: ${body.slice(-1)}`, threadID);
        		}
        	}

        	if (body.indexOf("Phanvai") == 0 || body.indexOf("Phân vai") == 0 || body.indexOf("phân vai") == 0) {
        	    var vaitro = [{
        	        id: 1,
        	        ten: "Bác Sĩ",
        	        gioithieu: "Chọn một người chơi để che chở vào mỗi đêm, người chơi đó sẽ không bị giết nếu bị sói vote trúng.",
        	        Phe: "Dân Làng"
        	        },
        	        {id: 2,
        	        ten: "Xạ Thủ",
        	        gioithieu: "Bạn có 2 viên đạn để bắn bất kì ai đó. Chỉ được bắn 1 viên mỗi ngày. Vì âm thanh của súng rất lớn nên vai của bạn sẽ bị lộ tron nhát bắn đầu tiên.",
        	        Phe: "Dân Làng"
        	        },
        	        {id: 3,
        	        ten: "Tiên Tri",
        	        gioithieu: "Mỗi đêm bạn có thể xem vai trò của người chơi khác.",
        	        Phe: "Dân Làng"
        	        },
        	        {id: 4,
        	        ten: "Thầy Bói",
        	        gioithieu: "Mỗi đêm bạn có thể chọn một người chơi để biết họ Thiện, Ác hay Không Rõ.\n\nÁc là phe Ma Sói, thiện là phe Dân Làng.\n\nNhững mục tiêu Không Rõ có thể là: Xạ Thủ, Thầy Đồng, Thợ Săn Quái Thú, Sói Đầu Đàn, Thằng Ngố, Thợ Săn Người, Kẻ Đặt Bom hoặc Sát Nhân.",
        	        Phe: "Dân Làng"
        	        },
        	        {id: 5,
        	        ten: "Thám Tử",
        	        gioithieu: "Mỗi đêm, bạn có thể chọn 2 người chơi để biết được họ ở cùng một phe hay là khác phe. Các phe được chia ra gồm: Dân Làng, Ma Sói, Thằng Ngố, Thợ Săn Người, Sát Nhân..vvvv",
        	        Phe: "Dân Làng"
        	        },
        	        {id: 6,
        	        ten: "Thầy Đồng",
        	        gioithieu: "Vào ban đêm bạn có thể nói chuyện ẩn danh với người chết. Bạn có 1 lần hồi sinh người khác.",
        	        Phe: "Dân Làng"
        	        },
        	        {id: 7,
        	        ten: "Kẻ Báo Thù",
        	        gioithieu: "Bạn có thể chọn 1 người chơi để giết khi bạn chết.",
        	        Phe: "Dân Làng"
        	        },
        	        {id: 8,
        	        ten: "Thợ Săn Quái Thú",
        	        gioithieu: "Vào ban đêm, bạn có thể đặt bẫy vào người chơi, nó sẽ kích hoạt vào đêm hôm sau. Người chơi này không thể bị giết vào ban đêm. Nếu người chơi này bị Ma Sói tấn công, Ma Sói yếu nhất đàn sẽ chết. Phe giết người solo không thể bị giết bởi cái bẫy, thay vào đó sẽ mất bẫy sau khi bị họ tấn công.",
        	        Phe: "Dân Làng"
        	        },
        	        {id: 9,
        	        ten: "Bán Sói",
        	        gioithieu: "Bạn là một người dân bình thường cho tới khi bị Sói căn, lúc đó bạn sẽ trở thành Ma Sói.",
        	        Phe: "Ma Sói Hoặc Dân Làng"
        	        },
        	        {id: 10,
        	        ten: "Sói Trẻ",
        	        gioithieu: "Bạn là một con sói con dễ huông, bạn có thể chọn một người chơi khác để chết theo bạn khi bạn chết.",
        	        Phe: "Ma Sói"
        	        },
        	        {id: 11,
        	        ten: "Sói Đầu Đàn",
        	        gioithieu: ": Bạn là một Ma Sói bình thường. Ngoài việc bạn có sức mạnh gấp đôi so với sói khác (x2 vote đó).",
        	        Phe: "Ma Sói"
        	        },
        	        {id: 12,
        	        ten: "Sói Tiên Tri",
        	        gioithieu: "Mỗi đêm, bạn có thể chọn một người để xem vai trò của họ. Nếu bạn là người sói cuối cùng, bạn sẽ trở thành một Ma Sói bình thường.",
        	        Phe: "Ma Sói"
        	        },
        	        {id: 13,
        	        ten: "Thằng Ngố",
        	        gioithieu: "Bạn phải lừa dân làng treo cổ bạn. Nếu họ treo cổ bạn, bạn thắng.",
        	        Phe: "Solo"
        	        },
        	        {id: 14,
        	        ten: "Sát Nhân",
        	        gioithieu: "Mỗi đêm bạn có thể ngụy trang một người chơi. Người chơi này sẽ bị sói tiên tri soi thành Sát Nhân. Bạn có thể giết tất cả người chơi bị dính ảo ảnh trong giai đoạn thảo luận. Bạn không thể bị giết bởi Ma Sói\n Bạn thắng nếu bạn là người cuối cùng.",
        	        Phe: "Solo"
        	        }];
        	    if (values.sosoi == 0) return api.sendMessage("Bạn chưa đặt số sói cho phòng", event.messageID, event.threadID);
        	    if (values.phanvai == 1) return api.sendMessage("Phòng Ma Sói này đã được phân vai", event.messageID, event.threadID);
        	    for (var soi = 0; soi < values.sosoi.length; soi++) {
        	        const nguoichoi = values.player[Math.floor(Math.random() * values.player.length)];
        	        console.log(nguoichoi)
        	        const getMaSoi2 = vaitro.filter(vai => vai.Phe2 == "Ma Sói hoặc Dân Làng");
        	        const getMaSoi = vaitro.filter(vai => vai.Phe == "Ma Sói");
        	        const allMasoi = getMaSoi2.concat(getMaSoi);
        	        const randomToUser = allMasoi[Math.floor(Math.random() * allMasoi.length)];
        	        values.player[soi].vai = randomToUser.ten;
        	        values.player[soi].phe = randomToUser.Phe;
        	        api.sendMessage(`Vai trò của bạn lần này là: ${randomToUser.ten}\n\nGiới Thiệu: ${randomToUser.gioithieu}\n\nBạn thuộc phe: ${randomToUser.Phe}`, values.player[soi].id);
        	    }
        	    for (var dan = 0; dan < values.player.length; dan++) {
        	        if (values.player.vai != 0) {
        	            return;
        	        } else {
        	        const DanLang = values.player[Math.floor(Math.random() * values.player.length)];
        	        const getDanLang2 = vaitro.filter(vai => vai.Phe2 != "Ma Sói hoặc Dân Làng");
        	        const getDanLang = vaitro.filter(vai => vai.Phe != "Dân Làng");
        	        const allDanLang = getDanLang2.concat(getDanLang);
        	        const randomToUser = allDanLang[Math.floor(Math.random() * allDanLang.length)];
        	        values.player[dan].vai = randomToUser.ten;
        	        values.player[dan].phe = randomToUser.Phe;
        	        api.sendMessage(`Vai trò của bạn lần này là: ${randomToUser.ten}\n\nGiới Thiệu: ${randomToUser.gioithieu}\n\nBạn thuộc phe: ${randomToUser.Phe}`, values.player[dan].id);
        	        }
        	    }
        	    values.phanvai = 1;
        		global.moduleData.masoi.set(threadID, values);
        		return api.sendMessage("Tất cả mọi người đã được phân vai, vui lòng ib cho Bot để biết vai trò của mình.", threadID);
        	}
}
module.exports.run = async ({ api, event, args }) => {
	const { senderID, threadID, messageID } = event;

	if (!global.moduleData.masoi) global.moduleData.masoi = new Map();
	var values = global.moduleData.masoi.get(threadID) || {};

	if (args[0] == "create" || args[0] == "Create" || args[0] == "tạo" || args[0] == "Tạo") {
	    let nhanh1 = parseInt('0');
	    let nhanh2 = parseInt('0');
	    let nhanh3 = parseInt('0');
	    let nhanh4 = parseInt('0');
	    let nhanh5 = parseInt('0');
	    let IDthread = (event.threadID);
	    if (IDthread == nhanh1 || IDthread == nhanh2 || IDthread == nhanh3 || IDthread == nhanh4 || IDthread == nhanh5) {
	        return api.sendMessage('lol chơi ở box khác đi bọn loz', event.threadID, event.messageID);
	    } else
		if (global.moduleData.masoi.has(threadID)) return api.sendMessage("Hiện tại nhóm đã có phòng chơi Ma Sói", threadID, messageID);
		global.moduleData.masoi.set(event.threadID, { 
		    "author": event.senderID,
		    "start": 0,
		    "ready": 0,
		    "phanvai": 0,
		    "sosoi": 0,
		    player: [ {
		        "id": senderID,
		        "vai": 0,
		        "phe": 0,
		        "ready": false } ] });
		        console.log(values)
		return api.sendMessage("Phòng Ma Sói đã được tạo thành công.\nnhấn masoi join để tham gia", threadID, messageID);
	}

	else if (args[0] == "join" || args[0] == "Join") {
		if (!values) return api.sendMessage("Hiện tại phòng Ma Sói chưa được tạo, bạn có thể tạo phòng bằng #masoi create", threadID, messageID);
		if (values.start == 1) return api.sendMessage("Phòng Ma Sói đã bắt đầu rồi, chờ hết ván rồi tham gia nha", threadID, messageID);
		if (values.player.find(item => item.id == senderID)) return api.sendMessage("Bạn đã tham gia phòng Ma Sói này rồi!", threadID, messageID);
		values.player.push({
		    "id": senderID,
		    "vai": 0,
		    "phe": 0,
		    "ready": false });
		global.moduleData.masoi.set(threadID, values);
		console.log(values)
		return api.sendMessage("Bạn đã tham gia phòng Ma Sói thành công!", threadID, messageID);
	}

	else if (args[0] == "list") {
		if (typeof values.player == "undefined") return api.sendMessage("Hiện tại chưa có phòng Ma Sói nào, bạn có thể tạo bằng cách sử dụng #masoi create", threadID, messageID);
		return api.sendMessage(
			"=== Phòng Ma Sói ===" +
			"\nNgười Tạo: " + values.author +
			"\nTổng số người chơi: " + values.player.length + " Người"
		, threadID, messageID);
	}

	else if (args[0] == "leave") {
		if (typeof values.player == "undefined") return api.sendMessage("Hiện tại chưa có phòng Ma Sói nào, bạn có thể tạo bằng cách sử dụng #masoi create", threadID, messageID);
		if (!values.player.some(item => item.id == senderID)) return api.sendMessage("Bạn chưa tham gia vào phòng Ma Sói trong nhóm này!", threadID, messageID);
		if (values.author == senderID) {
			global.moduleData.masoi.delete(threadID);
			api.sendMessage("Chủ phòng đã rời khỏi phòng, đồng nghĩa với việc phòng sẽ bị giải tán!", threadID, messageID);
		}
		else {
			values.player.splice(values.player.findIndex(item => item.id === senderID), 1);
			api.sendMessage("Bạn đã rời khỏi phòng Ma Sói này!", threadID, messageID);
			global.moduleData.masoi.set(threadID, values);
		}
		return;
	}

	else if (args[0] == "start" && values.author == senderID) {
		if (!values) return api.sendMessage("Hiện tại chưa có phòng Ma Sói nào, bạn có thể tạo bằng cách sử dụng #masoi create", threadID, messageID);
		if (values.player.length <= 1) return api.sendMessage("Hiện tại phòng của bạn không có người chơi nào tham gia, bạn có thể mời người đấy tham gia bằng cách yêu cầu người chơi khác nhập #masoi join", threadID, messageID);
		if (values.start == 1) return api.sendMessage("Hiện tại phòng đã được bắt đầu bởi chủ phòng", threadID, messageID);
		values.start = 1;
		return api.sendMessage("Phòng Ma Sói của bạn được bắt đầu", threadID, messageID);
	}

	else if (args[0] == "test" && values.author == senderID) {
		if (!values) return api.sendMessage("Hiện tại chưa có phòng Ma Sói nào, bạn có thể tạo bằng cách sử dụng #masoi create", threadID, messageID);
		if (!values.player.some(item => item.id == event.senderID)) return api.sendMessage("Bạn chưa tham gia vào phòng Ma Sói trong nhóm này!", threadID, messageID);
		if (values.player.length <= 1) return api.sendMessage("Hiện tại phòng của bạn không có người chơi nào tham gia, bạn có thể mời người đấy tham gia bằng cách yêu cầu người chơi khác nhập #masoi join", threadID, messageID);
		values.player.forEach(info => { return api.sendMessage("Bạn có thấy tin nhắn này?", info.id) });
		return api.sendMessage("Bạn có thấy tin nhắn của bot gửi tới bạn? Nếu không, hãy kiểm tra phần tin nhắn chờ hoặc tin nhắn spam!", threadID, messageID);
	}

	else return global.utils.throwError(this.config.name, threadID, messageID);
}