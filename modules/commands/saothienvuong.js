/** Module được clone ra từ 1 module gốc ( Không quan trọng là "procoder hay gì cả" mà quan trọng là ý tưởng làm ra nó. Nếu có module ngon hơn thì hãy dùng module đó ! Xin đừng đánh giá **/
/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "saothienvuong",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nguyễn Duy Quân",
  description: "Thông tin về các hành tinh trong hệ mặt trời",
  commandCategory: "Solar System",
  usages: "saothienvuong",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs": "",
    "axios": ""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
	var link = [
"https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg",
  ];
   var callback = () => api.sendMessage({body:`Sao Thiên Vương (Uranus) hay Thiên Vương tinh (chữ Hán: 天王星) là hành tinh thứ bảy tính từ Mặt Trời; là hành tinh có bán kính lớn thứ ba và có khối lượng lớn thứ tư trong Hệ Mặt Trời. Sao Thiên Vương có thành phần tương tự như Sao Hải Vương. Cả hai có thành phần hóa học khác so với hai hành tinh khí khổng lồ lớn hơn là Sao Mộc và Sao Thổ. Vì vậy, các nhà thiên văn thỉnh thoảng đưa các hành tinh này vào danh sách "hành tinh băng khổng lồ". Khí quyển của Sao Thiên Vương tương tự như của Sao Mộc và Sao Thổ về thành phần cơ bản như hiđrô và heli. Khác là chúng chứa nhiều hợp chất dễ bay hơi như nước, amonia và mêtan cùng với lượng nhỏ hydrocarbon. Hành tinh này có bầu khí quyển lạnh nhất trong số các hành tinh trong Hệ Mặt Trời, với nhiệt độ cực tiểu bằng 49 K (−224 °C). Nó có cấu trúc tầng mây phức tạp. Khả năng những đám mây thấp nhất chứa chủ yếu nước trong khi mêtan lại chiếm chủ yếu trong những tầng mây phía trên. Ngược lại, cấu trúc bên trong Sao Thiên Vương chỉ chứa chủ yếu một lõi băng và đá.Giống như những hành tinh khí khổng lồ khác, Sao Thiên Vương có một hệ thống vành đai, từ quyển và rất nhiều vệ tinh tự nhiên. Hệ thống Sao Thiên Vương có cấu trúc độc nhất bởi vì trục tự quay của nó bị nghiêng rất lớn, gần như song song với mặt phẳng quỹ đạo của hành tinh. Do vậy cực bắc và cực nam của hành tinh này nằm gần như tại vị trí xích đạo so với những hành tinh khác. Năm 1986, những ảnh chụp của tàu không gian Voyager 2 cho thấy Sao Thiên Vương qua ánh sáng khả kiến hiện lên với một màu gần như đồng nhất mà không có các dải mây hay cơn bão như những hành tinh khí khổng lồ khác. Các nhà thiên văn thực hiện quan sát từ mặt đất phát hiện ra dấu hiệu của sự thay đổi mùa và sự gia tăng hoạt động thời tiết trong những năm gần đây khi nó tiếp cận đến vị trí điểm phân trên quỹ đạo. Tốc độ gió trên Sao Thiên Vương đạt tới 250 mét trên giây (900 km/h).`,attachment: fs.createReadStream(__dirname + "/cache/30.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/30.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/30.jpg")).on("close",() => callback());
   };
