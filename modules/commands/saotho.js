/** Module được clone ra từ 1 module gốc ( Không quan trọng là "procoder hay gì cả" mà quan trọng là ý tưởng làm ra nó. Nếu có module ngon hơn thì hãy dùng module đó ! Xin đừng đánh giá **/
/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "saotho",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nguyễn Duy Quân",
  description: "Thông tin về các hành tinh trong hệ mặt trời",
  commandCategory: "Solar System",
  usages: "saotho",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs": "",
    "axios": ""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
	var link = [
"https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
  ];
   var callback = () => api.sendMessage({body:`Sao Thổ (Saturn) tức Thổ tinh (chữ Hán: 土星) là hành tinh thứ sáu tính theo khoảng cách trung bình từ Mặt Trời và là hành tinh lớn thứ hai về đường kính cũng như khối lượng, sau Sao Mộc trong Hệ Mặt Trời. Tên tiếng Anh của hành tinh mang tên thần Saturn trong thần thoại La Mã, ký hiệu thiên văn của hành tinh là (♄) thể hiện cái liềm của thần. Sao Thổ là hành tinh khí khổng lồ với bán kính trung bình bằng 9 lần của Trái Đất. Tuy khối lượng của hành tinh cao gấp 95 lần khối lượng của Trái Đất nhưng với thể tích lớn hơn 763 lần, khối lượng riêng trung bình của Sao Thổ chỉ bằng một phần tám so với của Trái Đất.Cấu trúc bên trong của Sao Thổ có lẽ bao gồm một lõi sắt, nikel và đá (hợp chất silic và ôxy), bao quanh bởi một lớp dày hiđrô kim loại, một lớp trung gian giữa hiđrô lỏng với heli lỏng và bầu khí quyển bên trên cùng. Hình ảnh hành tinh có màu sắc vàng nhạt là do sự có mặt của các tinh thể amonia trong tầng thượng quyển. Dòng điện bên trong lớp hiđrô kim loại là nguyên nhân Sao Thổ có một từ trường hành tinh với cường độ hơi yếu hơn so với từ trường của Trái Đất và bằng một phần mười hai so với cường độ từ trường của Sao Mộc. Lớp khí quyển bên trên cùng hành tinh có những màu đồng nhất và hiện lên dường như yên ả so với bầu khí quyển hỗn loạn của Sao Mộc, mặc dù nó cũng có những cơn bão mạnh. Tốc độ gió trên Sao Thổ có thể đạt tới 1.800 km/h, nhanh hơn trên Sao Mộc, nhưng không nhanh bằng tốc độ gió trên Sao Hải Vương.Sao Thổ có một hệ thống vành đai bao gồm chín vành chính liên tục và ba cung đứt đoạn, chúng chứa chủ yếu hạt băng với lượng nhỏ bụi và đá. Sao Thổ có 82 vệ tinh tự nhiên đã biết; trong đó 53 vệ tinh đã được đặt tên. Số lượng vệ tinh này không bao gồm hàng trăm tiểu vệ tinh ("moonlet") bên trong vành đai. Titan là vệ tinh lớn nhất của Sao Thổ và là vệ tinh lớn thứ hai trong Hệ Mặt Trời, nó cũng lớn hơn cả Sao Thủy và là vệ tinh tự nhiên duy nhất trong Hệ Mặt Trời có bầu khí quyển dày đặc.`,attachment: fs.createReadStream(__dirname + "/cache/30.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/30.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/30.jpg")).on("close",() => callback());
   };
