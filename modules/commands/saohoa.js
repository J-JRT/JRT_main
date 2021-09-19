/** Module được clone ra từ 1 module gốc ( Không quan trọng là "procoder hay gì cả" mà quan trọng là ý tưởng làm ra nó. Nếu có module ngon hơn thì hãy dùng module đó ! Xin đừng đánh giá **/
/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "saohoa",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nguyễn Duy Quân",
  description: "Thông tin về các hành tinh trong hệ mặt trời",
  commandCategory: "Solar System",
  usages: "saohoa",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs": "",
    "axios": ""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
	var link = [
"https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
  ];
   var callback = () => api.sendMessage({body:`Sao Hỏa hay Hỏa tinh (chữ Hán: 火星, tiếng Anh: Mars) là hành tinh thứ tư tính từ Mặt Trời trong Thái Dương Hệ. Nó thường được gọi với tên khác là "Hành tinh Đỏ", do sắt ôxít có mặt rất nhiều trên bề mặt hành tinh làm cho bề mặt nó hiện lên với màu đỏ đặc trưng. Sao Hỏa là một hành tinh đất đá với một khí quyển mỏng, có những đặc điểm trên bề mặt có nét giống với cả các hố va chạm trên Mặt Trăng và các núi lửa, thung lũng, sa mạc và chỏm băng ở cực trên của Trái Đất. Chu kỳ tự quay và sự tuần hoàn của các mùa trên Hỏa Tinh khá giống với của Trái Đất do độ nghiêng của trục quay tạo ra. Trên Sao Hỏa có ngọn núi Olympus Mons, ngọn núi cao nhất trong Hệ Mặt Trời, và hẻm núi Valles Marineris, hẻm núi dài và rộng nhất trong Thái Dương Hệ. Lòng chảo Borealis bằng phẳng trên bán cầu bắc bao phủ tới 40% diện tích bề mặt hành tinh đỏ và có thể là một hố va chạm khổng lồ trong quá khứ.Cho đến khi tàu Mariner 4 lần đầu tiên bay ngang qua Sao Hỏa vào năm 1965, đã có nhiều suy đoán về sự có mặt của nước lỏng trên bề mặt hành tinh này. Chúng dựa trên những quan sát về sự biến đổi chu kỳ về độ sáng và tối của những nơi trên bề mặt hành tinh, đặc biệt tại những vĩ độ vùng cực, nơi có đặc điểm của biển và lục địa; những đường kẻ sọc dài và tối ban đầu được cho là những kênh tưới tiêu chứa nước lỏng. Những đường sọc thẳng này sau đó được giải thích như là những ảo ảnh quang học, mặc dù các chứng cứ địa chất thu thập bởi các tàu thăm dò không gian cho thấy Sao Hỏa có khả năng đã từng có nước lỏng bao phủ trên diện rộng ở bề mặt của nó. Năm 2005, dữ liệu từ tín hiệu radar cho thấy sự có mặt của một lượng lớn nước đóng băng ở hai cực, và tại các vũng vĩ độ trung bình. Robot tự hành Spirit đã lấy được mẫu các hợp chất hóa học chứa phân tử nước vào tháng 3 năm 2007. Tàu đổ bộ Phoenix đã trực tiếp lấy được mẫu nước đóng băng trong lớp đất nông trên bề mặt vào ngày 31 tháng 7 năm 2008.Sao Hỏa có hai vệ tinh: Phobos và Deimos, chúng là các vệ tinh nhỏ và dị hình. Đây có thể là các tiểu hành tinh bị Hỏa Tinh bắt được, tương tự như 5261 Eureka - một tiểu hành tinh Troia của Hỏa Tinh. Hiện nay có ba tàu quỹ đạo còn hoạt động đang bay quanh Sao Hỏa: Mars Odyssey, Mars Express, và Mars Reconnaissance Orbiter. Trên bề mặt nó có robot tự hành thám hiểm Sao Hỏa (Mars Exploration Rover) Opportunity không còn hoạt động và cặp song sinh với nó robot tự hành Spirit đã ngừng hoạt động, cùng với đó là những tàu đổ bộ và robot tự hành trong quá khứ-cả thành công lẫn không thành công. Tàu đổ bộ Phoenix đã hoàn thành phi vụ của nó vào năm 2008. Những quan sát bởi tàu quỹ đạo đã ngừng hoạt động của NASA Mars Global Surveyor chỉ ra chứng cứ về sự dịch chuyển thu nhỏ và mở rộng của chỏm băng cực bắc theo các mùa. Tàu quỹ đạo Mars Reconnaissance Orbiter của NASA đã thu nhận được các bức ảnh cho thấy khả năng có nước chảy trong những tháng nóng nhất trên sao Hỏa.Sao Hỏa có thể dễ dàng nhìn từ Trái Đất bằng mắt thường. Cấp sao biểu kiến của nó đạt giá trị −3,0 chỉ đứng sau so với Sao Mộc, Sao Kim, Mặt Trăng, và Mặt Trời.`,attachment: fs.createReadStream(__dirname + "/cache/30.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/30.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/30.jpg")).on("close",() => callback());
   };
