/** Module được clone ra từ 1 module gốc ( Không quan trọng là "procoder hay gì cả" mà quan trọng là ý tưởng làm ra nó. Nếu có module ngon hơn thì hãy dùng module đó ! Xin đừng đánh giá **/
/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "traidat",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nguyễn Duy Quân",
  description: "Thông tin về các hành tinh trong hệ mặt trời",
  commandCategory: "Solar System",
  usages: "traidat",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs": "",
    "axios": ""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
	var link = [
"https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/599px-The_Earth_seen_from_Apollo_17.jpg",
  ];
   var callback = () => api.sendMessage({body:`Trái Đất hay Địa Cầu (chữ Hán: 地球, tiếng Anh: Earth), là hành tinh thứ ba tính từ Mặt Trời, đồng thời cũng là hành tinh lớn nhất trong các hành tinh đất đá của hệ Mặt Trời xét về bán kính, khối lượng và mật độ vật chất. Trái Đất còn được biết tên với các tên gọi "hành tinh xanh", là nhà của hàng triệu loài sinh vật, trong đó có con người và cho đến nay nó là nơi duy nhất trong vũ trụ được biết đến là có sự sống. Hành tinh này được hình thành cách đây 4,55 tỷ năm và sự sống xuất hiện trên bề mặt của nó khoảng 1 tỷ năm trước. Kể từ đó, sinh quyển, khí quyển của Trái Đất và các điều kiện vô cơ khác đã thay đổi đáng kể, tạo điều kiện thuận lợi cho sự phổ biến của các vi sinh vật ưa khí cũng như sự hình thành của tầng ôzôn-lớp bảo vệ quan trọng, cùng với từ trường của Trái Đất, đã ngăn chặn các bức xạ có hại và chở che cho sự sống. Các đặc điểm vật lý của Trái Đất cũng như lịch sử địa lý hay quỹ đạo, cho phép sự sống tồn tại trong thời gian qua. Người ta ước tính rằng Trái Đất chỉ còn có thể hỗ trợ sự sống thêm 1,5 tỷ năm nữa, trước khi kích thước của Mặt Trời tăng lên (trở thành sao khổng lồ đỏ) và tiêu diệt hết sự sống.Bề mặt Trái Đất được chia thành các mảng kiến tạo, chúng di chuyển từ từ trên bề mặt Trái Đất trong hàng triệu năm. Khoảng 71% bề mặt Trái Đất được bao phủ bởi các đại dương nước mặn, phần còn lại là các lục địa và các đảo. Nước là thành phần rất cần thiết cho sự sống và cho đến nay con người vẫn chưa phát hiện thấy sự tồn tại của nó trên bề mặt của bất kì hành tinh nào khác ngoại trừ sao Hỏa là có nước bị đóng băng ở hai cực. Tuy nhiên, người ta có chứng cứ xác định nguồn nước có ở Sao Hỏa trong quá khứ, và có thể tồn tại cho tới ngày nay. Lõi của Trái Đất vẫn hoạt động được bao bọc bởi lớp manti rắn dày, lớp lõi ngoài lỏng tạo ra từ trường và lõi sắt trong rắn.Trái Đất tương tác với các vật thể khác trong không gian bao gồm Mặt Trời và Mặt Trăng. Hiện quãng thời gian Trái Đất di chuyển hết một vòng quanh Mặt Trời bằng 365,2564 lần quãng thời gian nó tự quay một vòng quanh trục của mình. Khoảng thời gian này bằng với một năm thiên văn tức 365,2564 ngày trong dương lịch. Trục tự quay của Trái Đất nghiêng một góc bằng 23,44° so với trục vuông góc với mặt phẳng quỹ đạo, tạo ra sự thay đổi mùa trên bề mặt của Trái Đất trong một năm chí tuyến. Mặt Trăng, vệ tinh tự nhiên duy nhất của Trái Đất, đồng thời cũng là nguyên nhân chính gây ra hiện tượng thủy triều đại dương, bắt đầu quay quanh Trái Đất từ 4,53 tỷ năm trước, vẫn giữ nguyên góc quay ban đầu theo thời gian nhưng đang chuyển động chậm dần lại. Trong khoảng từ 4,1 đến 3,8 tỷ năm trước, sự va đập của các thiên thạch trong suốt thời kì "Công phá Mạnh muộn" đã tạo ra những sự thay đổi đáng kể trên bề mặt Mặt Trăng.
Cả tài nguyên khoáng sản lẫn các sản phẩm của sinh quyển Trái Đất được sử dụng để cung cấp cho cuộc sống của con người. Dân cư được chia thành hơn hàng trăm quốc gia độc lập, có quan hệ với nhau thông qua các hoạt động ngoại giao, du lịch, thương mại, quân sự. Văn hóa loài người đã phát triển tạo nên nhiều cách nhìn về Trái Đất bao gồm việc nhân cách hóa Trái Đất như một vị thần, niềm tin vào một Trái Đất phẳng hoặc Trái Đất là trung tâm của cả vũ trụ, và một quan điểm nhìn hiện đại hơn như Trái Đất là một môi trường thống nhất cần có sự định hướng.`,attachment: fs.createReadStream(__dirname + "/cache/30.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/30.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/30.jpg")).on("close",() => callback());
   };
