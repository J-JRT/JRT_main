module.exports.config = {
	name: "random", // Tên lệnh, được sử dụng trong việc gọi lệnh
	version: "1.0.0", // phiên bản của module này
	hasPermssion: 0, // Quyền hạn sử dụng, với 0 là toàn bộ thành viên, 1 là quản trị viên trở lên, 2 là admin/owner
	credits: "BerVer", // Công nhận module sở hữu là ai
	description: "random số theo giới hạn max min", // Thông tin chi tiết về lệnh
	commandCategory: "group", // Thuộc vào nhóm nào
	usages: "random [min] [max]", // Cách sử dụng lệnh
	cooldowns: 5, // Thời gian một người có thể lặp lại lệnh
	dependencies: {"random":""}, //Liệt kê các package module ở ngoài tại đây để khi load lệnh nó sẽ tự động cài!
	// Info là phần chi tiết thêm của cách sử dụng lệnh
	// Key: Từ khoá thuộc trong usages
	// prompt: Chi tiết dữ liệu đầu vào của key
	// type: Định dạng dữ liệu đầu vào của key
	// example: Ví dụ ¯\_(ツ)_/¯ 
	info: [
		{
			key: 'min',
			prompt: 'Số bắt đầu',
			type: 'Số liệu',
			example: '1'
		},
		{
			key: 'max',
			prompt: 'Số kết thúc',
			type: 'Số liệu',
			example: '100'
		}
	],
	envConfig: {
		//Đây là nơi bạn sẽ setup toàn bộ env của module, chẳng hạn APIKEY, ...
	}
};
module.exports.run = function({ api, event, args, client, __GLOBAL }) {
	//Làm cái gì ở đây tuỳ thuộc vào bạn ¯\_(ツ)_/¯ 
	const random = global.nodemodule["random"];
    if (!args.join("") != " " ) return api.sendMessage("Chưa nhập tham số", event.threadID, event.messageID);
	else 
    var x = args[0];
    var y = args[args.length-1];
	var rd = Math.floor(Math.random() * Number(y)) + Number(x)
return api.sendMessage(String(rd), event.threadID, event.messageID)

    }