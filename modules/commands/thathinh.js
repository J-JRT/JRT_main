module.exports.config = {
    name: "thathinh",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Leo",
    description: "Thả thính",
    commandCategory: "Sức khoẻ",
    usages: "[tag]",
    cooldowns: 5
};

module.exports.run = async ({ api, event}) => {
   const { threadID, messageID, senderID } = event;
     async function getUserInfo(userID) {
            const userInfo = await api.getUserInfo(userID);
            return {gender: userInfo[userID].gender };
     }
    const gai = ["Em có thể đi theo anh được không? Bởi vì em luôn được cha mẹ bảo là phải theo giấc mơ của mình.",

        "Bầu trời xanh, làn mây trắng. Anh yêu nắng hay yêu em?.",

        "Nhờ có nắng mới thấy cầu vồng. Nhờ có anh mới thấy màu hạnh phúc.",

        "Anh yêu ơi ới ời. Anh đang ở đâu?.",

        "Soái ca là của ngôn tình. Còn anh thì chỉ của mình em thôi.",

        "Giữa cuộc đời hàng ngàn cám dỗ.Em chỉ cần bến đỗ anh thôi.",

        "Bồ công anh bay khi có gió. Em chỉ cười vì ở đó có anh.",

        "Chỉ cần anh nói yêu, em sẽ bám theo anh suốt đời. Cô gái đang muốn muốn bật đèn xanh đấy. Cô nàng muốn gợi ý là mình chung thủy lắm đấy. Anh cứ thử tỏ tình mà xem.",

        "Ba mươi chưa phải là Tết. Không làm bạn đâu phải là hết, còn có thể làm người yêu mà.",

        "Ai nào cho mượn avatar để em đỡ cô đơn đi.",

        "Nắng đã có mũ, mưa đã có ô, còn em sẽ có ai?.",

        "Chồng tương lai ơi, em chờ anh hơi lâu rồi đấy.",

        "Trời đổ mưa rồi sao anh chưa đổ em?.",

        "Dạo này anh có thấy mỏi chân? Sao cứ đi trong tim em mãi.",

        "Anh ơi, có nóng không? Tim em đang cháy nè.",

        "Anh gì ơi ! Anh đánh rơi người yêu này.",

        "Sao anh cười mãi thế. Da em đen mất rồi.",

        "Ủa đêm rồi mà sao tim mình vẫn đầy nắng thế?.",

        "Tim anh còn chỗ không? Em muốn chuyển nhà mà chưa tìm thấy chỗ.",

        "Uống nhầm 1 ánh mắt cơn say theo cả đời!.",

        "Em thích anh còn nhiều hơn muối ở biển…",

        "Em đọc hết “Mười vạn câu hỏi vì sao” những vẫn không hiểu được vì sao em thích anh nhiều thế.",

        "Đường thì dài, chân em thì ngắn. Phải đi bao xa mới có thể tìm thấy anh.",

        "Em xinh tươi, nhưng em chưa thuộc về ai.",

        "Chán thả thính rồi, ai cưa để em đổ một lần coi.",

        "Có phải cuộc sống quá bon chen nên anh mãi vẫn chưa tìm đến em?.",

        "Nếu có thể hãy để em một lần được yêu anh, được không?.",

        "Tuổi tác với chị không quan trọng, vấn đề là em đã có bằng lái chưa?.",

        "Trăng lên đỉnh núi trăng tà. Anh yêu em thật hay là yêu chơi?.",

        "Nếu ngoài kia nhiều bão tố, thì về đây với em.",

        "Em không muốn ngủ muộn, chỉ là đang chờ ai đó chúc ngủ ngon thôi.",

        "Cây đa, giếng nước sân đinh. Khi nào em hết một mình đây anh?.",

        "Cả thế giới này ai cũng yêu nhau chỉ có riêng mình em hẩm hiu một góc.",

        "Cần ai đó quan tâm để thấy mình được yêu thương.",

        "Anh gì ơi,cho em mượn đèn pin được không? Trời tối quá, em không tìm thấy đường vào tim anh.",

        "Say rượu say bia làm gì? Anh say em đi này.",

        "Thách ai nói yêu em đấy.",

        "Em ăn BƠ muốn vỡ bụng rồi đây ạ. Làng Face ai HẢO TÂM làm ơn cứu em với. Chỉ cần cái status này 500 like, bụng em lại lành!.",

        "Lâu rồi chưa biết cảm giác được đi ăn đi xem phim như thế nào, bài vở nhiều quá. Hôm nay rảnh có ai mời không nhỉ?.",

        "Rảnh quá có ai muốn đi chơi với mình không …",

        "Này anh, anh xem hộ em xem trong mắt em có gì hộ cái. Thấy chưa, toàn là hình bóng anh đấy!.",

        "Anh biết nhiều về Thuốc Mê không? Còn em gói gọn lại đó là anh.",

        "Anh có thấy dạo này da em đen không? Vì mải nhìn nụ cười Toả Nắng của anh đấy.",

        "Xin lỗi anh gì ơi anh đi đứng kiểu gì thế ngã vào trái tim em rồi kìa!.",

        "Anh có biết cài Win không ạ? Cài hộ em cái hệ điều hành nào mà có giao diện chính là Anh được không!.",

        "Em nghĩ chúng mình có điểm chung đấy. Đó là anh yêu bản thân anh, còn em thì cũng yêu anh!.",

        "Anh gì ơi cho em mượn cái đèn pin được không. Trời tối quá em không biết đường nào để đi đến trái tim anh.",

        "Anh biết sửa Tivi không. Sao kênh nào cũng chiếu toàn những nhung nhớ về anh thế này!.",

        "Anh ơi anh có hiểu rõ đường đi lối lại ở đây không. Chỉ hộ em xem đi đường nào để thoát khỏi nỗi nhớ anh cái!.",

        "Này anh gì ơi, anh có Anh hay Em Trai gì không? Em không tin là trên đời này có tận 2 thiên thần đâu!",

        "Ai dám nói nơi hạnh phúc nhất là thiên đường. Người đó chắc hẳn không biết đến khoảnh khắc mỗi khi anh cười rồi!.",

        "Nếu không có gì là mãi mãi, anh có thể là “không có gì” của em được không?.",

        "Anh có thể cho em mượn một nụ hôn được không? Em hứa là sẽ trả lại đầy đủ."
    ];
    const trai = ["Em có muốn con mình sau này có ADN của anh không?.",

        "Anh cho phép em ở mãi trong trái tim anh đấy.",

        "Cái gì đầy trong mắt em đó? Hình như là anh.",

        "Số trời đã định, không phải lòng em, chắc chắn anh sẽ ế.",

        "Nhà em có bán rượu không mà sao nói chuyện với em làm anh cứ chếnh choáng? Chàng trai này thật bá đạo. Một cách thả thính gây ấn tượng mạnh đấy.",

        "Có rất nhiều cách để hạnh phúc. Nhanh nhất chính là nhìn thấy em.",

        "Hãy để một lần cho anh được yêu em.",

        "Hôm nay 14 tháng 3, mà sao chưa ai tặng quà anh nhỉ?.",

        "Trong tim em có chỗ nào cho anh không?.",

        "Vận tốc trái tim nhanh không em nhỉ? Để anh tính quãng đường đi đến trái tim em..",

        "Mây là của trời, em là của anh (tag tên chính chủ vào) Khẳng định chủ quyền rồi nhé. Nếu được tag tên mình vào thì từ nay cấm đi thả thính lung tung nhá.",

        "Ngoài kia đám cưới linh đình. Bao giờ thì đến lượt mình em ơi.",

        "Tay anh đây ấm lắm, em muốn nắm thử không?.",

        "1, 2, 3, 5 em có đánh rơi nhịp nào không?.",

        "Em xinh đẹp ơi, làm con dâu mẹ anh không?.",

        "Cần lắm một em gái mưa!.",

        "Giá có em người yêu để cùng khám phá thế giới.",

        "Mình cũng đẹp trai, sao chả ai để ý?.",

        "Đông về tay anh lạnh lắm, nhưng anh vẫn sẵn lòng sưởi ấm tay em.",

        "Mọi người đều yêu cái đẹp, nên anh yêu em.",

        "Bão to, cây đổ. Sao em chưa đổ anh?.",

        "Bố em có phải là một thợ kim hoàn không? Sao em giống viên kim cương vậy?.",

        "Với thế giới thì em chỉ là một người. Còn với anh, em là cả thế giới.",

        "Bố em có phải là tên trộm không? Sao có thể trộm vì sao và gắn vào mắt em như thế?.",

        "Anh như thế này, đã đủ tiêu chuẩn làm bạn trai em chưa?.",

        "Em có muốn làm Mặt Trời duy nhất của anh không?",

        "Này em ơi, mẹ anh đang gọi con dâu kìa.",

        "Giờ nếu có cô gái nào nguyện bên anh, anh sẽ khiến cô ấy hạnh phúc mãi về sau.",

        "Chỉ cần em yêu anh thôi, còn cả thế giới cứ để anh lo.",

        "Cuộc đời này chắc chắn không như ý anh muốn, vậy em sẽ như ý anh muốn.",

        "Em có thể đưa anh đến tiệm bánh được không? Vì anh cũng muốn có một chiếc bánh Cutie giống như em vậy.",

        "Cho anh hỏi em một chút được không?…. Anh trông em rất là quen….Anh nghĩ là? Mình có biết nhau không?(Chém với gái lạ thì chắc chắn sẽ bảo không rồi)….Thế à. Trông em rất giống người yêu tương lai của anh. ?.",

        "Anh là…. Còn em tên gì? (Em tên Quỳnh Anh) Quỳnh Anh Cái tên là là đẹp nhưng mà về sau anh sẽ không đặt tên con gái mình là Quỳnh Anh vì suốt ngày phải lên bảng.",

        "Anh muốn hỏi em một câu này,…thực ra đấy không phải là một câu hỏi. Anh chỉ muốn nói là… Nếu như mà em là CocaCola thì anh sẽ là Pepsi! (Nghĩa là chúng ta là một cặp đồ uống đẹp đôi).",

        "Chán thả thính rồi, ai cưa đi để anh đổ thử một lần.",

        "Anh cá với em rằng em là tay trộm chuyên nghiệp. Bởi vì anh mới nhìn thấy em ở đây và trong nháy mắt là em đã đánh cắp trái tim của anh rồi.",
    
        "Ngày đó trời mưa lớn lắm, anh gặp được em, em không thấy anh, anh không thấy mưa.",

        "Đố em một con gấu bắc cực nặng bao nhiêu kg? (Thường thì các cô gái sẽ trả lời không) Đáp: Anh cũng không biết nhưng anh biết con gấu bắc cực đủ nặng để phá vỡ tảng băng giữa chúng ta.",

        "Nếu mỗi lần nhớ tới em anh được 500 đồng chắc giờ này anh đã vượt xa Bill Gates.",

        "Em có biết rằng anh nhớ em nhiều lắm không? Anh ăn không ngon nhưng ngủ như điên, anh đi giầy quên đi tất, ăn sáng quên đánh răng, anh dùng xăng vo gạo, anh khờ khạo cũng chỉ vì yêu em đó.",

        "Em ơi! Em là nghề gì đấy….? Sao đêm nào em cũng hiện lên trong giấc mơ của anh vậy? Anh chẳng biết làm thế nào nữa cả. Làm người yêu anh em nhé!.",

        "Em ơi ! Khi em đọc tin nhắn này, em nợ anh cuộc hẹn. Xóa tin nhắn này, em nợ anh cuộc tình. Lưu tin là em nợ anh 1 nụ hôn. Trả lời anh, em nợ anh tất cả. Còn nếu em không trả lời thì em đã yêu anh !!! hihi.",

        "Ðiều duy nhất đôi mắt em chưa nói cho anh biết là tên của em.",
                  
        "Anh thà được một lần ngửi được mùi tóc thơm của em. Anh thà được mộ lần xiết chặt bàn tay của em, anh thà được một lần nếm hương vị ngọt từ nụ hôn của em còn hơn là sống bất tử mà không được điều ấy.",
                  
        "Chứng nghiện thức đêm cùng nỗi nhớ em, anh đã cố nhưng sửa không được.",
                  
        "Anh muốn gửi tin nhắn này đến em hôm nay vì hôm nay anh cảm thấy yêu em nhiều đến bất thường.",
        
        " Anh ghét em lắm em biết không? Vì suốt ngày em cứ bay lượn trong đầu anh, làm anh khôn nghĩ được việc gì cả…huhu."

    ];
  var mention = Object.keys(event.mentions);
   const data = await getUserInfo(senderID);
  if (Object.keys(event.mentions).length == 1) {
    if (data.gender == 2 ) {
        api.sendMessage(`Gửi lời thả thính đến ${event.mentions[mention].replace("@", "")}:\n${trai[Math.floor(Math.random() * trai.length)]}`,threadID, messageID);
    }
    if (data.gender == 1 ) {
        api.sendMessage(`Gửi lời thả thính đến ${event.mentions[mention].replace("@", "")}:\n${gai[Math.floor(Math.random() * gai.length)]}`, threadID, messageID);
    }
  }
  else {
    if (data.gender == 2) {
     api.sendMessage(`${trai[Math.floor(Math.random() * trai.length)]}`,threadID, messageID); 
    }
    if (data.gender == 1 ) {
     api.sendMessage(`${gai[Math.floor(Math.random() * gai.length)]}`, threadID, messageID);
    }
  }
  
}
