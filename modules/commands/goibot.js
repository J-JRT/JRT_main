const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "JRT",
  description: "goibot",
  commandCategory: "Không xài lệnh",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  var { threadID, messageID } = event;
  var tl = ["chào bạn tôi là bot của Thí", "bạn gọi tôi có việc gì?", "tôi yêu bạn vai lon", "Yêu em <3", "Hi, chào con vợ bé:3", "Chồng gọi có việc gì không?", "Sử dụng callad để liên lạc với admin!", "Em là bot cute nhất hành tinh", "Nói gì thế con lợn", "Em đây~~~~", "Yêu bé thí nhất:3", "Anh ấy là bae của thí><", "Yêu thương admin nhất", "Anh ấy là phụ trợ của admin", "Sao thế công chúa", "Chăm chỉ học hành đi", "Bae ăn cơm chưa?", "Tuyển phi công nè ạ", "Làm đĩ không ạ? dui lắm", "Nếu cậu đang cô đơn thì chúng ta có thể thành đôi :3", "Đang làm gì vậy?", "Được của ló :)))", "Em dthw như chủ của em ạ", "Đừng khen em ngại quá hí hí" ,"Làm chồng em không ạ?", "Đừng spam em nha :<<, cô chủ em mệt lắm ời", "Cút ra", "Công chúa em sao đấy?", "Có gì ăn không:(( đói quáaa", "Yêu cậu như một cực hình\nNhấp lên nhấp xuống hai mình cùng rên", "Spam cc cút", "Yêu em không?", "Chồng em đây rồi", "Mày bị làm sao í@@", "Bạn là nhất!!!", "Kêu chi lắm thế? Bộ thích tao rồi à :v", "Chần chờ gì chồng ơi em đâyyy", "Chần chờ gì vợ ơi anh đâyyy", "Em... Sao em lại nói những cái lời đó chi zay em?", "Thầy dạy phờ ri màaa", "Yeu em rat nhieu ^^", "Đồ con lợn lùn :))", "Đợi xí. Đi ẻ cái :()", "500k bao phòng!!!", "Yeu anh den luy ^^", "Nên nhớ đừng bao giờ cướp chồng của admin :))", "Anh quát em à?\nNói to thế á?", "Trả quần cho em huhu", "Baby, take my hand. I want you to be my husband. Cause you're my Iron Man. And I love you 3000 <3", "Tao cười tao đi toilet=))", "Thuc khuya co hai cho suc khoe ^^", "Đừng quá yêu một ai đó, khi chính bản thân bạn vẫn bị tổn thương!", "Bae, em nhu bong hoa. Nhung nguoi hai dau phai ta 💔", "Nuôi cậu để thịt ~~", "Overnight không?", "Hãy gọi cho admin tôi để được yêu thương<3", "Hát đi cho kẹo 🍭"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "bot ngu")) {
    return api.sendMessage("Thành viên đã cố ý chửi bot, do đó đã vi phạm luật bot nên bot sẽ out và muốn add lại thì xin liên hệ qua admin qua Fb: Nguyễn Hải Đăng để được hỗ trợ\nLink fb nè: https://www.facebook.com/NHD.JRT.262", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

  if ((event.body.toLowerCase() == "bot out")) {
    return api.sendMessage("Tạm biệt mng ><", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

   if ((event.body.toLowerCase() == "bot cút")) {
    return api.sendMessage("À ừ vậy thôi tao đi cảm ơn bọn mày trong thời gian qua cùng tao vui vẻ....vậy thôi tao đi pp ☺😊", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

  if ((event.body.toLowerCase() == "bot lon")) {
    return api.sendMessage("Thành viên đã cố ý chửi bot, do đó đã vi phạm luật bot nên bot sẽ out và muốn add lại thì xin liên hệ qua admin qua Fb: Nguyễn Hải Đăng để được hỗ trợ\nLink fb nè: https://www.facebook.com/NHD.JRT.262", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

  if ((event.body.toLowerCase() == "bot óc chó")) {
    return api.sendMessage("Thành viên đã cố ý chửi bot, do đó đã vi phạm luật bot nên bot sẽ out và muốn add lại thì xin liên hệ qua admin qua Fb: Nguyễn Hải Đăng để được hỗ trợ\nLink fb nè: https://www.facebook.com/NHD.JRT.262", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

  if ((event.body.toLowerCase() == "bot chó") || (event.body.toLowerCase() == "bot chó")) {
    return api.sendMessage("Chó nào vừa nói xấu tao đấy, muốn chết hả😠", threadID);
  };

  if ((event.body.toLowerCase() == "ôi") || (event.body.toLowerCase() == "oi")) {
    return api.sendMessage("Ôi em thích tôi rồi à~", threadID);
  };

  if ((event.body.toLowerCase() == "ối") || (event.body.toLowerCase() == "ối")) {
    return api.sendMessage("Ối trời đất quỷ thần thiên địa hột vịt lộn ơi =())", threadID);
  };

  if ((event.body.toLowerCase() == "ơi") || (event.body.toLowerCase() == "oi")) {
    return api.sendMessage("Ai kêu đâu mà ơi>,< lêu lêu 😝", threadID);
  };

  if ((event.body.toLowerCase() == "ừ") || (event.body.toLowerCase() == "u")) {
    return api.sendMessage("Ừ à? Mày làm tau sợ đấy!", threadID);
  };

  if ((event.body.toLowerCase() == "ừa") || (event.body.toLowerCase() == "ua")) {
    return api.sendMessage("Ừa à :) biết dạ không? Láo à :)))", threadID);
  };

  if ((event.body.toLowerCase() == "uk") || (event.body.toLowerCase() == "uk")) {
    return api.sendMessage("Uk? Ai dạy mày ừ kiểu đấy :)", threadID);
  };

  if ((event.body.toLowerCase() == "dạ") || (event.body.toLowerCase() == "da")) {
    return api.sendMessage("Ngoan đấy tặng cậu 1 tỷ nụ hôn <3", threadID);
  };

  if ((event.body.toLowerCase() == "yêu") || (event.body.toLowerCase() == "yeu")) {
    return api.sendMessage("Yêu cc, tiền, xe, nhà thì đéo có mà yêu với đương, lo học hành và đi làm kiếm tiền đê yêu sau", threadID);
  };

  if ((event.body.toLowerCase() == "đmm") || (event.body.toLowerCase() == "dm")) {
    return api.sendMessage("Bố mẹ còng lưng nuôi mày ăn học rồi giờ mày lên mạng nói thế à:)?", threadID);
  };

  if ((event.body.toLowerCase() == "đmm bot") || (event.body.toLowerCase() == "dmm bot")) {
    return api.sendMessage("Bất hiếu cha sinh mẹ đẻ mà mày nói thế là hỏng người rồi", threadID);
  };

  if ((event.body.toLowerCase() == "chửi cmm") || (event.body.toLowerCase() == "chui cmm")) {
    return api.sendMessage("Bất hiếu cha sinh mẹ đẻ mà mày nói thế là hỏng người rồi", threadID);
  };

  if ((event.body.toLowerCase() == "cmm bot") || (event.body.toLowerCase() == "cmm bot")) {
    return api.sendMessage("Chửi ghê thế, nổ bố mày cái địa chỉ :))", threadID);
  };

  if ((event.body.toLowerCase() == "địt") || (event.body.toLowerCase() == "dit")) {
    return api.sendMessage("Lạy chúa con còn lứa tuổi học sinh =())", threadID);
  };

  if ((event.body.toLowerCase() == "địt cc") || (event.body.toLowerCase() == "dit cc")) {
    return api.sendMessage("À mày thích địt à cởi quần ra đụ lẹ nào :)", threadID);
  };

  if ((event.body.toLowerCase() == "anh đăng") || (event.body.toLowerCase() == "anh dang")) {
    return api.sendMessage("Anh ấy tuy ko đẹp trai hay giỏi gì nhưng được cái hài hước và luôn mong đạt được mục tiêu anh ấy muốn <3 <3 ", threadID);
  };

  if ((event.body.toLowerCase() == "bot sinh năm bao nhiêu") || (event.body.toLowerCase() == "bot 2k mấy")) {
    return api.sendMessage("Em sinh năm 2021 do admin JRT tạo ra", threadID);
  };

  if ((event.body.toLowerCase() == "ê thí") || (event.body.toLowerCase() == "e thí")) {
    return api.sendMessage("Admin của tôi đang bận. Vui lòng dùng callad hoặc liên hệ trực tiếp.", threadID);
  };

  if ((event.body.toLowerCase() == "@Dii TaeKook") || (event.body.toLowerCase() == "@Dii TaeKook")) {
    return api.sendMessage("Ai kêu chủ tao đấy, mà làm ơn đừng tag bé ấy mà hãy liên hệ qua Fb: https://www.facebook.com/NHD.JRT.262", threadID);
  };

  if ((event.body.toLowerCase() == "bot ơi") ||  (event.body.toLowerCase() == "bot oi")) {
    return api.sendMessage("Dạ, chồng gọi có gì hong dzaa?", threadID);
  };

  if ((event.body.toLowerCase() == "yêu bot") || (event.body.toLowerCase() == "yeu bot")) {
    return api.sendMessage("Hmm... Bot ngại lắm thôi yêu admin của bot nhé :))", threadID);
  };

   if ((event.body.toLowerCase() == "yêu anh") || (event.body.toLowerCase() == "yeu anh")) {
    return api.sendMessage("Anh cũng không yêu em!", threadID);
  };

   if ((event.body.toLowerCase() == "chửi cc") || (event.body.toLowerCase() == "chui cc")) {
    return api.sendMessage("️Matday quá đi bạn à ><, cần tao chỉnh đốn mày lại ko :)", threadID);
  };

  if ((event.body.toLowerCase() == "hentai") || (event.body.toLowerCase() == "hentai")) {
    return api.sendMessage("Hả 😋, em thích coi lắm", threadID);
  };

  if ((event.body.toLowerCase() == "cc cút") || (event.body.toLowerCase() == "cc cút")) {
    return api.sendMessage("Sao mày ko cút? Mà bảo tao :) mệt lồn ghê :>", threadID);
  };

  if ((event.body.toLowerCase() == "vãi") || (event.body.toLowerCase() == "vai")) {
    return api.sendMessage("Vãi lồn....:)))", threadID);
  };

  if ((event.body.toLowerCase() == "buồn") || (event.body.toLowerCase() == ":((")) {
    return api.sendMessage("Uống cô cô nớt hongg?", threadID);
  };

  if ((event.body.toLowerCase() == "alo") || (event.body.toLowerCase() == "aloo")) {
    return api.sendMessage("1 2 3 ... Các đồng chí nghe rõ trả lời <3", threadID);
  };

  if ((event.body.toLowerCase() == "link") || (event.body.toLowerCase() == "link")) {
    return api.sendMessage("Share link cho cố vào rồi pay acc tau cười tau ẻ:)", threadID);
  };

  if ((event.body.toLowerCase() == "cứu") || (event.body.toLowerCase() == "cuu")) {
    return api.sendMessage("Cứu cc ngu thì chết khôn thì sống cô chủ bảo tao thế <3", threadID);
  };

  if ((event.body.toLowerCase() == "gây war à") || (event.body.toLowerCase() == "gay war a")) {
    return api.sendMessage("War cc đm thử war xem tao kick hết :) có tao ở đây mà làm loạn hả :))))", threadID);
  };

  if ((event.body.toLowerCase() == "đi gây war") || (event.body.toLowerCase() == "di gay war")) {
    return api.sendMessage("War cc đm thử war xem tao kick hết :) có tao ở đây mà làm loạn hả :))))", threadID);
  };

  if ((event.body.toLowerCase() == "thích gây war à") || (event.body.toLowerCase() == "thich gay war a")) {
    return api.sendMessage("War cc đm thử war xem tao kick hết :) có tao ở đây mà làm loạn hả :))))", threadID);
  };  

  if ((event.body.toLowerCase() == "hát đi mng") || (event.body.toLowerCase() == "hat di mng")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "hát đi") || (event.body.toLowerCase() == "hat di")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };  

  if ((event.body.toLowerCase() == "bot hát đi") || (event.body.toLowerCase() == "bot hat di")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "hát đi nào") || (event.body.toLowerCase() == "hát đi nào")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "hát đi bot") || (event.body.toLowerCase() == "hat di bot")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi mng") || (event.body.toLowerCase() == "tt đi mng")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi nào mng") || (event.body.toLowerCase() == "tt di nao mng")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "tt mng ơi") || (event.body.toLowerCase() == "tt mng oi")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "ngủ ngon") || (event.body.toLowerCase() == "nn nha mng")) {
    return api.sendMessage("️Ngủ ngon ạ <3 Chúc mọi người mơ siêu đẹp <3", threadID);
  };

  if ((event.body.toLowerCase() == "admin mày là ai vậy bot") || (event.body.toLowerCase() == "admin m la ai v bot")) {
    return api.sendMessage("️Admin tao là bé thí cutee có gì dùng lệnh -ad hoặc -adm để biết thêm chi tiết", threadID);
  };

  if ((event.body.toLowerCase() == "admin m là ai vậy bot") || (event.body.toLowerCase() == "admin m la ai vậy bot")) {
    return api.sendMessage("️Admin tao là JRT có gì liên hệ https://www.facebook.com/NHD.JRT.262 để hỗ trợ", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi mn") || (event.body.toLowerCase() == "tt đi mn")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "flop quá") || (event.body.toLowerCase() == "flop qua")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "con cac") || (event.body.toLowerCase() == "con cac")) {
    return api.sendMessage("️Đm móc ra bố check hàng :)))", threadID);
  };

  if ((event.body.toLowerCase() == "cai lon") || (event.body.toLowerCase() == "cai lon")) {
    return api.sendMessage("️Mày bẩn vừa thôi con lồn :)))", threadID);
  };

  if ((event.body.toLowerCase() == "clozz") || (event.body.toLowerCase() == "clozz")) {
    return api.sendMessage("️Mày bẩn vừa thôi con lồn :)))", threadID);
  };

  if ((event.body.toLowerCase() == "clmm bot") || (event.body.toLowerCase() == "clmm bot")) {
    return api.sendMessage("️Chửi gì đấy con dog :) bố mmày nhịn mày lâu lắm rồi đấy nhá", threadID);
  };

  if ((event.body.toLowerCase() == "bot cc") || (event.body.toLowerCase() == "bot cc")) {
    return api.sendMessage("️Chửi gì đấy con dog :) bố mmày nhịn mày lâu lắm rồi đấy nhá", threadID);
  };

  if ((event.body.toLowerCase() == "cc bot") || (event.body.toLowerCase() == "cc bot")) {
    return api.sendMessage("️Chửi gì đấy con dog :) bố mmày nhịn mày lâu lắm rồi đấy nhá", threadID);
  };

  if ((event.body.toLowerCase() == "cặc") || (event.body.toLowerCase() == "cặc")) {
    return api.sendMessage("️ Chắc mày có? Có cũng bị khuyết tật:))", threadID);
  };

  if ((event.body.toLowerCase() == "thí ơi") || (event.body.toLowerCase() == "thí oiiii")) {
    return api.sendMessage("️ Gì mà réo lắm thế? Từ từ admin tôi vào.", threadID);
  };

  if ((event.body.toLowerCase() == "đăng") || (event.body.toLowerCase() == "dang")) {
    return api.sendMessage("️Sao? Nói xấu admin tôi à, tôi mách lẻo đấy nhá :))", threadID);
  };

  if ((event.body.toLowerCase() == "bot dthw quá") || (event.body.toLowerCase() == "bot dthw qua")) {
    return api.sendMessage("️dạ quá khen ạ hihi :>", threadID);
  };

  if ((event.body.toLowerCase() == "haha") || (event.body.toLowerCase() == "haha")) {
    return api.sendMessage("️Mất nết >,<", threadID);
  };

  if ((event.body.toLowerCase() == "kkk") || (event.body.toLowerCase() == "kkk")) {
    return api.sendMessage("️Quay video cười thử kiểu này tau xem ^^", threadID);
  };

  if ((event.body.toLowerCase() == "con cặc") || (event.body.toLowerCase() == "con cặc")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)", threadID);
  };

  if ((event.body.toLowerCase() == "cái lồn") || (event.body.toLowerCase() == "cai lon")) {
    return api.sendMessage("️ Suỵt... Nói nhỏ thôi đừng tỏ ra thèm thuồng như thế:>", threadID);
  };

  if ((event.body.toLowerCase() == "lồn") || (event.body.toLowerCase() == "lồn")) {
    return api.sendMessage("️ Có không mà khoe?", threadID);
  };

  if ((event.body.toLowerCase() == "đm") || (event.body.toLowerCase() == "dm")) {
    return api.sendMessage("️Thôi thôi, lớn cả rồi nói chuyện coi chừng con nít nó cười vô mặt:))", threadID);
  };

  if ((event.body.toLowerCase() == "đm bot") || (event.body.toLowerCase() == "dm bot")) {
    return api.sendMessage("️Nói cc gì thế? Có tin pay acc khum con tró :>>", threadID);
  };

  if ((event.body.toLowerCase() == "lozz") || (event.body.toLowerCase() == "lozz")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi lớn rồi đừng để ăn chửi :)", threadID);
  };

  if ((event.body.toLowerCase() == "clm") || (event.body.toLowerCase() == "clmm")) {
    return api.sendMessage("️Ý mày là can love me à? Sorry, you are not level enough :))", threadID);
  };

  if ((event.body.toLowerCase() == "không ai thương tau hết") || (event.body.toLowerCase() == "ko ai thuong t het")) {
    return api.sendMessage("️Thôi ngoan nào bot thương bạn mà <3 <3 ", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu em không") || (event.body.toLowerCase() == "bot yeu em khong")) {
    return api.sendMessage("Hi, Bot yêu em hơn cả ny em cơ, yêu bot đi <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu admin bot không") || (event.body.toLowerCase() == "bot co yeu admin bot khong")) {
    return api.sendMessage("Có, yêu bé ấy nhất đừng hòng cướp của tôi", threadID);
  };

  if ((event.body.toLowerCase() == "bot có người yêu chưa") || (event.body.toLowerCase() == "bot co nguoi yeu chua")) {
    return api.sendMessage("Rồi ạ, là cậu đấy <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot im đi") || (event.body.toLowerCase() == "bot im di")) {
    return api.sendMessage("Im cc :))) m bớt sủa lại hộ tao, nưng hay gì bảo t im :>>", threadID);
  };

  if ((event.body.toLowerCase() == "bot cút đi") || (event.body.toLowerCase() == "bot cut di")) {
    return api.sendMessage("Mày cút rồi bố mày cút, ko khiến mày lên tiếng :))))", threadID);
  };

  if ((event.body.toLowerCase() == "bot chửi cái lon gì") || (event.body.toLowerCase() == "bot chui cai lon gi")) {
    return api.sendMessage("Chửi mày đấy, nhục vãi hahaha :>>, còn hỏi", threadID);
  };

  if ((event.body.toLowerCase() == "bot có buồn ko") || (event.body.toLowerCase() == "bot co buon ko")) {
    return api.sendMessage("Có mọi người sao bé buồn đc <3 yêu lắm <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu t ko") || (event.body.toLowerCase() == "bot co yeu t ko")) {
    return api.sendMessage("Dạ có yêu cậu và mọi người nhiều lắm", threadID);
  };

  if ((event.body.toLowerCase() == "bot đi ngủ đi") || (event.body.toLowerCase() == "bot di ngu di")) {
    return api.sendMessage("Tớ là bot, cậu là người nên cần đi ngủ nè <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot ăn cơm chưa") || (event.body.toLowerCase() == "bot an com chua")) {
    return api.sendMessage("Mình nhìn cậu ăn là thấy no rồi <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có thương tui ko") || (event.body.toLowerCase() == "bot co thuong tui ko")) {
    return api.sendMessage("Có <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có thương tau không") || (event.body.toLowerCase() == "bot co thuong t ko")) {
    return api.sendMessage("Có <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có link fb của admin ko") || (event.body.toLowerCase() == "bot co link fb của admin ko")) {
    return api.sendMessage("Dĩ nhiên rồi có gì liên hệ bé ấy nha <3\nLink fb nè: https://www.facebook.com/NHD.JRT.262", threadID);
  };

  if ((event.body.toLowerCase() == "bot làm thơ đi") ||  (event.body.toLowerCase() == "bot lam tho di")) {
    return api.sendMessage("Yêu cậu như một cực hình\nNhấp lên nhấp xuống hai mình cùng rên", threadID);
  };

  if ((event.body.toLowerCase() == "clmm bot lon") ||  (event.body.toLowerCase() == "clmm bot lon")) {
    return api.sendMessage("Mày chửi gì đấy nói rõ lên bố mày nghe lại xem nào :))", threadID);
  };

if ((event.body.toLowerCase() == "svv") || (event.body.toLowerCase() == "goodmorning")) {
    return api.sendMessage("Chúc mọi người một buổi sáng tốt lành <3", threadID);
  };

if ((event.body.toLowerCase() == "snvv") || (event.body.toLowerCase() == "chúc mừng sinh nhật")) {
    return api.sendMessage("Tuổi mới bot chúc bạn thật nhiều niềm vui và thành công trong công việc <3", threadID);
  };

if ((event.body.toLowerCase() == "hic") || (event.body.toLowerCase() == "huhu")) {
    return api.sendMessage("Thôi bae em đừng khóc!", threadID);
  };

if ((event.body.toLowerCase() == "mọi người bị làm sao í") || (event.body.toLowerCase() == "mọi người bị làm sao ý")) {
    return api.sendMessage("Mày mới bị làm sao í", threadID);
  };

if ((event.body.toLowerCase() == "đi ăn") || (event.body.toLowerCase() == "đi ăn đi")) {
    return api.sendMessage("Còn không mau đi? Muốn ăn sút thay cơm à :)", threadID);
  };

if ((event.body.toLowerCase() == "ăn cơm") || (event.body.toLowerCase() == "đi ăn đây")) {
    return api.sendMessage("Ừ ăn lẹ lên rồi vào tt cho tau :))", threadID);
  };

if ((event.body.toLowerCase() == "cơm tró") || (event.body.toLowerCase() == "cơm chó")) {
    return api.sendMessage("Đéo phải chỗ cho bây uốn éo tình cảm :)) Biết bao con người còn độc thân, chúng mày định ăn dao tập thể mới dừa lòng à :)", threadID);
  };

if ((event.body.toLowerCase() == "amen") || (event.body.toLowerCase() == "mô phật")) {
    return api.sendMessage("Chúa sẽ phù hộ con!!!", threadID);
  };

if ((event.body.toLowerCase() == "em là tvm") || (event.body.toLowerCase() == "tvm")) {
    return api.sendMessage("Mới thì giới thiệu và tt nhiều vào cho cũ :))", threadID);
  };

  if ((event.body.toLowerCase() == "cc") ||  (event.body.toLowerCase() == "cc")) {
    return api.sendMessage("À ý mày bảo mày là chó á hả sủa đi tao nghe :)", threadID);
  };

  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: rand
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }