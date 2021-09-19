/** Module được clone ra từ 1 module gốc ( Không quan trọng là "procoder hay gì cả" mà quan trọng là ý tưởng làm ra nó. Nếu có module ngon hơn thì hãy dùng module đó ! Xin đừng đánh giá **/
/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "saomoc",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nguyễn Duy Quân",
  description: "Thông tin về các hành tinh trong hệ mặt trời",
  commandCategory: "Solar System",
  usages: "saomoc",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs": "",
    "axios": ""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
	var link = [
"https://upload.wikimedia.org/wikipedia/commons/5/5a/Jupiter_by_Cassini-Huygens.jpg",
  ];
   var callback = () => api.sendMessage({body:`Sao Mộc (Jupiter) hay Mộc tinh (chữ Hán: 木星) là hành tinh thứ năm tính từ Mặt Trời và là hành tinh lớn nhất trong Hệ Mặt Trời. Nó là hành tinh khí khổng lồ với khối lượng bằng một phần nghìn của Mặt Trời nhưng bằng hai lần rưỡi tổng khối lượng của tất cả các hành tinh khác trong Hệ Mặt Trời cộng lại. Sao Mộc được xếp vào nhóm hành tinh khí khổng lồ cùng với Sao Thổ (Sao Thiên Vương và Sao Hải Vương được xếp vào hành tinh băng khổng lồ). Hai hành tinh này đôi khi được gọi là hành tinh kiểu Sao Mộc  hoặc hành tinh vòng ngoài. Các nhà thiên văn học cổ đại đã biết đến hành tinh này, và gắn với thần thoại và niềm tin tôn giáo trong nhiều nền văn hóa. Người La Mã đặt tên hành tinh theo tên của vị thần Jupiter, vị thần quan trọng nhất trong số các vị thần. Tên gọi trong tiếng Trung Quốc, tiếng Triều Tiên, tiếng Nhật và tiếng Việt của hành tinh này được đặt dựa vào hành "mộc" trong ngũ hành. Khi nhìn từ Trái Đất, Sao Mộc có cấp sao biểu kiến −2,94, đủ sáng để tạo bóng; và là thiên thể sáng thứ ba trên bầu trời đêm sau Mặt Trăng và Sao Kim. (Sao Hỏa hầu như sáng bằng Sao Mộc khi Sao Hỏa ở những vị trí xung đối trên quỹ đạo của nó với Trái Đất.)
Sao Mộc chứa chủ yếu hiđrô và heli - chiếm một phần tư khối lượng của nó, mặc dù heli chỉ chiếm một phần mười số lượng phân tử. Có thể có một lõi đá trong hành tinh chứa các nguyên tố nặng hơn, nhưng giống như những hành tinh khí khổng lồ khác, Sao Mộc không có một bề mặt rắn định hình. Bởi vì có tốc độ tự quay nhanh, hình dạng của hành tinh có hình phỏng cầu dẹt (nó hơi phình ra tại xích đạo). Lớp khí quyển ngoài cùng hiện lên với nhiều dải mây ở những độ cao khác nhau, do kết quả của hiện tượng nhiễu loạn khí động và tương tác với những cơn bão tại biên. Một đặc điểm nổi bật trên ảnh chụp của nó đó là Vết Đỏ Lớn, một cơn bão khổng lồ được biết đến tồn tại ít nhất từ thế kỷ 17 khi các nhà thiên văn lần đầu tiên quan sát nó bằng kính thiên văn. Bao quanh Mộc Tinh là một hệ thống vành đai mờ nhạt cũng như từ quyển mạnh. Có ít nhất 67 vệ tinh tự nhiên quay quanh nó, bao gồm bốn vệ tinh lớn nhất gọi là các vệ tinh Galileo do nhà bác học Galileo Galilei lần đầu tiên quan sát năm 1610. Ganymede, vệ tinh lớn nhất, có đường kính lớn hơn Sao Thủy.
Đã có một vài tàu không gian thám hiểm đến Sao Mộc, bao gồm tàu Pioneer và Voyager trong các phi vụ bay ngang qua và sau đó tàu Galileo bay quay hành tinh này. Con tàu gần đây nhất bay qua Sao Mộc trên hành trình đến Sao Diêm Vương - tàu New Horizons bay qua vào cuối 2007. Con tàu sử dụng sự hỗ trợ của hấp dẫn từ Sao Mộc nhằm tăng tốc độ của nó. Hiện nay tàu Juno của NASA đã đến vào ngày 5 tháng 7 năm 2016. Trong tương lai có phi vụ của ESA đến thám hiểm các vệ tinh Galileo nói chung và Europa nói riêng.`,attachment: fs.createReadStream(__dirname + "/cache/30.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/30.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/30.jpg")).on("close",() => callback());
   };
