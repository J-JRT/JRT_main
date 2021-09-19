/** Module được clone ra từ 1 module gốc ( Không quan trọng là "procoder hay gì cả" mà quan trọng là ý tưởng làm ra nó. Nếu có module ngon hơn thì hãy dùng module đó ! Xin đừng đánh giá **/
/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "saothuy",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nguyễn Duy Quân",
  description: "Thông tin về các hành tinh trong hệ mặt trời",
  commandCategory: "Solar System",
  usages: "saothuy",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs": "",
    "axios": ""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
	var link = [
"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mercury_in_color_-_Prockter07_centered.jpg/300px-Mercury_in_color_-_Prockter07_centered.jpg",
  ];
   var callback = () => api.sendMessage({body:`Sao Thủy (Mercury) hay Thủy tinh (chữ Hán: 水星) là hành tinh nhỏ nhất và gần Mặt Trời nhất trong tám hành tinh thuộc Hệ Mặt Trời, với chu kỳ quỹ đạo bằng 88 ngày Trái Đất. Nhìn từ Trái Đất, hành tinh hiện lên với chu kỳ giao hội trên quỹ đạo bằng xấp xỉ 116 ngày, và nhanh hơn hẳn những hành tinh khác. Tốc độ chuyển động nhanh này đã khiến người La Mã đặt tên hành tinh là Mercurius, vị thần liên lạc và đưa tin một cách nhanh chóng. Trong thần thoại Hy Lạp tên của vị thần này là Hermes (Ερμής). Tên tiếng Việt của hành tinh này dựa theo tên do Trung Quốc đặt, chọn theo hành thủy trong ngũ hành.
Do hành tinh hầu như không có khí quyển để giữ lại nhiệt lượng, bề mặt Sao Thủy trải qua sự biến đổi nhiệt độ lớn nhất trong số các hành tinh, thay đổi từ 100 K (−173 °C; −280 °F) vào ban ngày tới 700 K (427 °C; 800 °F) vào ban ngày. Trục quay của Sao Thủy có độ nghiêng nhỏ nhất trong Hệ Mặt Trời (khoảng 1⁄30 độ), nhưng hành tinh lại có độ lệch tâm quỹ đạo lớn nhất. Tại viễn điểm quỹ đạo, Sao Thủy ở cách xa Mặt Trời hơn 1,5 lần khi so với hành tinh ở cận điểm quỹ đạo. Bề mặt hành tinh có rất nhiều hố va chạm nhìn trông giống như bề mặt của Mặt Trăng, và hành tinh không còn hoạt động địa chất trong hàng tỷ năm trước.
Trên Sao Thủy không có sự biến đổi thời tiết theo mùa như ở các hành tinh khác bởi vì nó không có bầu khí quyển đáng kể. Hành tinh bị khóa thủy triều với Mặt Trời do đó nó quay trên quỹ đạo rất khác so với các hành tinh khác. Khi lấy các ngôi sao cố định làm điểm mốc, nó tự quay được chính xác ba vòng trong hai chu kỳ quỹ đạo quanh Mặt Trời . Khi nhìn từ Mặt Trời, trong hệ quy chiếu quay cùng với chuyển động quỹ đạo, hành tinh hiện lên chỉ quay quanh trục một lần trong hai "năm" Sao Thủy. Do vậy nếu có người đứng trên Sao Thủy họ chỉ nhận thấy 1 ngày trong 2 năm.
Bởi vì quỹ đạo Thủy Tinh nằm bên trong quỹ đạo Trái Đất (và của Sao Kim), khi nhìn từ Trái Đất hành tinh có lúc hiện lên vào buổi sáng hoặc vào buổi tối, nhưng không bao giờ có thể nhìn thấy lúc nửa đêm. Tương tự như Sao Kim và Mặt Trăng, hành tinh cũng có các pha quan sát khi nó di chuyển trên quỹ đạo. Sao Thủy không có một vệ tinh tự nhiên nào. Độ sáng biểu kiến của Sao Thủy thay đổi từ −2,0 đến 5,5; nhưng vì quá gần Mặt Trời nên nếu quan sát hành tinh này qua kính viễn vọng rất khó khăn và ít khi thực hiện được.
Hai phi thuyền đã ghé thăm sao Thủy: Mariner 10 bay vào năm 1974 và 1975; và MESSENGER, được phóng lên vào năm 2004, đã quay quanh sao Thủy hơn 4.000 lần trong vòng bốn năm trước khi cạn kiệt nguồn nhiên liệu và rơi vào bề mặt hành tinh này vào ngày 30 tháng 4 năm 2015.`,attachment: fs.createReadStream(__dirname + "/cache/30.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/30.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/30.jpg")).on("close",() => callback());
   };
