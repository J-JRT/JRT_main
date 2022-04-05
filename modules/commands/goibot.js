module.exports.config = {
    name: "goibot",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "ManhG",
    description: "Gọi Bot No reply",
    commandCategory: "Bot",
    usages: "",
    cooldowns: 2,
    denpendencies: {}
}, module.exports.handleEvent = async ({
    event: e,
    api: o,
    Users: t,
    Threads: a
}) => {
    var {
        threadID: n,
        messageID: s,
        body: i,
        senderID: d
    } = e;
    const r = global.data.threadData.get(n) || {};
    if (void 0 !== r.goibot && 0 == r.goibot) return;
    if (d == global.data.botID) return;
    let g = await t.getNameUser(e.senderID),
        c = (await a.getData(e.threadID)).threadInfo;
    var h = e.threadID,
        l = ["hmmmm", "Đừng spam em nha :<<", "Đừng để em nóng!!!", "cậu gọi bot có gì không?", "mệt kêu hoài -.-", "Chăm chỉ học hành đi", "Bae ăn cơm chưa?", "Tuyển phi công nè ạ", "Nếu cậu đang cô đơn thì chúng ta có thể thành đôi :3", "Đang làm gì vậy?", "Được của ló :)))", "Làm chồng em không ạ?", "đi ga chỗ khác chơi", "Công chúa em sao đấy?", "Có gì ăn không:(( đói quáaa", "Yêu em không?", "cậu bị làm sao í@@", "Bạn là nhất!!!", "Kêu chi lắm thế? Bộ thích tao rồi à :v", "Chần chờ gì chồng ơi em đâyyy", "Em... Sao em lại nói những cái lời đó chi zay em?", "Thầy dạy phờ ri màaa", "Yeu em rat nhieu ^^", "Đồ con lợn lùn :))", "Đợi xí. Đi ẻ cái :()", "500k bao phòng!!!", "Yeu anh den luy ^^", "Nên nhớ đừng bao giờ cướp chồng của admin :))", "Anh quát em à?\nNói to thế á?", "Trả quần cho em huhu", "Baby, take my hand. I want you to be my husband. Cause you're my Iron Man. And I love you 3000 <3", "Tao cười tao đi toilet=))", "Hãy nên nhớ, cuộc tình nào cũng có lúc tàn phai", "hoa hồng nở rộ 4 mùa...nối tiếp đi:)", "lalalalaaaa", "Đừng quá yêu một ai đó, khi chính bản thân bạn vẫn bị tổn thương!", "Bae, em nhu bong hoa. Nhung nguoi hai dau phai ta 💔", "Nuôi cậu để thịt ~~", "Overnight không?", "Hãy gọi cho admin tôi để được yêu thương<3", "Hát đi cho kẹo 🍭", "vợ gọi có việc gì không?", "Dzạaaaaa~~~", "gọi bot có gì hemm :3", "Dzạ em đây :>", "sao thế bae yêu dấu :>", "Sao thế công chúa", "Được của ló :)))", "Nếu một ngày nào đó bạn gọi tôi mà tôi không trả lời nghĩa là bot bị payyy acccc ;-;", "Em đây", "chào bạn tôi là bot của Duy", "Vợ gọi có việc gì không?", "Sử dụng •callad để liên lạc với admin!", "Em đây~~~~", "Yêu anh Dyy nhất", "chị ấy là bae của Dyy", "Sao thế công chúa nhõng nhẽo của em", "Đừng làm em đau ~~~~", "Tuyển máy bay trực thăng nè ai yêu em hog", "Cậu có cô đơn ko để mik tâm sự", "Yêu ko ạ vã quá!!!", "bot dthw như chủ của bot ạ", "Đừng khen anh ngại quá hí hí", "Làm vợ anh ko ạ?", "Đừng spam anh nha :<<, cậu chủ anh mệt lắm ời", "Cút ra😏 tớ có vợ rồi😏🖕", "Ai Làm Vợ Em Hog?", "Alaba Trap", "không được spam bot nhé các bae", "Yêu anh ko?", "Vợ anh đây rồi", "chủ tớ là thứ hai hong ai là nhất", "làm Vợ em đuy😏", "Chủ Em Đẹp Zai Khoai To Lắm UwU", "Yêu Tất Cả Mụi Người:3", "Tuyển Ghệ nè các bbi😏🖕y ạ :3", `${g}, sử dụng callad để liên lạc với admin!`, `${g}, gọi em có việc gì thế`, `${g}, yêu em ko mà gọi😢`, `${g}, tôi yêu bạn vl ❤`, `${g}, yêu nhau không?`, `${g}, bạn có yêu tôi không ❤`, `${g}, dạ có em đây:3`, `${g}, yêu admin bot đi rồi hãy gọi`, `${g}, yêu em ❤`, `${g}, [Góc Donate] Bạn có thể donate cho tôi chứ?`, `${g}, Tao đây`, "chào bạn tôi là bot của JRT", "bạn gọi tôi có việc gì?", "tôi yêu bạn vai lon", "Yêu em <3", "Hi, chào con vợ bé:3", "Chồng gọi có việc gì không?", "Sử dụng callad để liên lạc với admin!", "Em là bot cute nhất hành tinh", "Nói gì thế con lợn", "Em đây~~~~", "Yêu anh Đăng nhất💟", "Yêu thương admin nhất", "Anh ấy là phụ trợ của admin", "Sao thế công chúa", "Chăm chỉ học hành đi", "Bae ăn cơm chưa?", "Tuyển phi công nè ạ", "Làm đĩ không ạ? dui lắm", "Nếu cậu đang cô đơn thì chúng ta có thể thành đôi :3", "Đang làm gì vậy?", "Được của ló :)))", "Em dthw như chủ của em ạ", "Đừng khen em ngại quá hí hí", "Làm chồng em không ạ?", "Đừng spam em nha :<<, cô chủ em mệt lắm ời", "Cút ra", "Công chúa em sao đấy?", "Có gì ăn không:(( đói quáaa", "Yêu cậu như một cực hình\nNhấp lên nhấp xuống hai mình cùng rên", "Spam cc cút", "Yêu em không?", "Chồng em đây rồi", "Mày bị làm sao í @@", "Bạn là nhất!!!", "Kêu chi lắm thế? Bộ thích tao rồi à :v", "Chần chờ gì chồng ơi em đâyyy", "Chần chờ gì vợ ơi anh đâyyy", "Em... Sao em lại nói những cái lời đó chi zay em?", "Thầy dạy phờ ri màaa", "Yeu em rat nhieu ^^", "Đồ con lợn lùn :))", "Đợi xí. Đi ẻ cái :()", "500k bao phòng!!!", "Yeu anh den luy ^^", "Nên nhớ đừng bao giờ cướp chồng của admin :))", "Anh quát em à?\nNói to thế á?", "Trả quần cho em huhu", "Baby, take my hand. I want you to be my husband. Cause you're my Iron Man. And I love you 3000 <3", "Tao cười tao đi toilet=))", "Đây là trang web thông tin của admin, có gì liên hệ qua web này: https://j-jrt.github.io/Info/", "Đừng quá yêu một ai đó, khi chính bản thân bạn vẫn bị tổn thương!", "Bae, em nhu bong hoa. Nhung nguoi hai dau phai ta 💔", "Nuôi cậu để thịt ~~", "Overnight không?", "Hãy gọi cho admin tôi để được yêu thương<3", "Hát đi cho kẹo 🍭", "Kêu làm gì", "Chơi bê đê hong", "Ú mai gót", "Em nứng hả em?", "tao có mấy câu này á cứ kêu tao không à !!!", "Em đây~~~~", "Admin seen kìa đĩ", "Tao mệt!", "Dễ thương không có trong danh sách của mày", "Ultr?", "Có giấy súc không?", "Đừngg sướng lắm anh ơi", "Rên với em nhé a á á á", "ớ ớ ớ ớ á á á á", "Con chim bé uwu", "Vl con này thích tao m ạ", "Đụ với anh nè em", "Tao báo công an", "Xin lỗi :( ", "4 nháy 1 đêm chịu nổi k", "Đang cho bạn con cu", "Đút tutu thôi em đau :'(", "Yêu cậu như một cực hình\nNhấp lên nhấp xuống hai mình cùng rên", "Gì đó thánh bú liếm", "Con dung lồn kêu quài mày", "Lên giường k em??", "Quá ghê gớm....🌚😳 Và đây là Folontilô!😱😱 Folontilô ui... 🥶🥶👿lạnh lùng nhìn em quay gót đi mãi😞😞💔 Anh đứng chết lặng trong mưa😭😭 Dù rằng bên😊😊 em đã có ai Nhưng nơi đây anh 🤗🤗🥱vẫn còn chờ...", "Tôi đã học được tìm kiếm hạnh phúc bằng cách giới hạn những ham muốn của mình, hơn là tìm cách thỏa mãn chúng.", "Nếu bạn muốn thành công trong thế giới này, hãy hứa hẹn mọi thứ, và chẳng trao gì đi.", "Lòng can đảm không phải là có sức lực để đi tiếp - đó là đi tiếp khi bạn không còn sức lực.", "Mục đích của tôn giáo là để ngăn cản kẻ nghèo không giết kẻ giàu.", "Trừ phi bạn giang rộng đôi cánh, bạn sẽ không biết mình bay được bao xa.", "Tình bạn có thể giống như các tài khoản ngân hàng. Khi bạn kiếm được tiền, bạn gửi vào tài khoản tiết kiệm, và khi bạn cần tiền, bạn rút tiền. Bạn càng tiết kiệm được nhiều, bạn càng có nhiều để giúp mình vượt qua được thời buổi khó khăn. Tương tự như vậy, khi bạn đối xử tốt với ai đó, bạn bổ sung cho tình bạn (gửi vào 'ngân hàng tin cậy' của mình), và khi bạn làm ai đó tổn thương, bạn dùng bớt tình bạn. Nếu một người bạn cứ mãi rút ra từ tài khoản tình bạn của bạn, người đó sẽ làm nó cạn kiệt theo thời gian.", "Hãy nhớ rằng nợ nần chỉ là một công cụ, giống như búa hoặc cưa. Nó có thể được sử dụng để giúp bạn xây dựng một tương lai tài chính vững mạnh, hoặc đẩy sụp tương lai ấy. Bạn là người quyết định mình muốn sử dụng nó như thế nào.", "Những người đáng sợ không phải là người bất đồng ý kiến với bạn, mà là người bất đồng ý kiến với bạn nhưng quá hèn nhát để cho bạn biết điều đó.", "Kẻ ngốc nói về quá khứ, người khôn nói về hiện tại, kẻ khờ nói về tương lai.", "Thà sống cuộc đời của riêng mình một cách không hoàn hảo còn hơn bắt chước cuộc đời của người khác một cách hoàn hảo.", "Luyện tập không cho bạn sự hoàn hảo.Luyện tập làm giảm sự không hoàn hảo"],
        u = l[Math.floor(Math.random() * l.length)];
    ["bot", "bot ơi", "bot oi", "yêu bot", "bot đâu"].forEach((e => {
        let t = e[0].toUpperCase() + e.slice(1);
        if (i === e.toUpperCase() | i === e | t === i) {
            let t = c.threadName;
            return modules = "------ Gọi bot ------\n", console.log(modules, e + "|", t, h), a = u, void o.sendMessage(a, n, s)
        }
        var a
    }))
}, module.exports.languages = {
    vi: {
        on: "Bật",
        off: "Tắt",
        successText: "goibot thành công"
    },
    en: {
        on: "on",
        off: "off",
        successText: "goibot success!"
    }
}, module.exports.run = async function ({
    api: e,
    event: o,
    Threads: t,
    getText: a
}) {
    const {
        threadID: n,
        messageID: s
    } = o;
    let i = (await t.getData(n)).data;
    return void 0 === i.goibot || 1 == i.goibot ? i.goibot = !1 : i.goibot = !0, await t.setData(n, {
        data: i
    }), global.data.threadData.set(n, i), e.sendMessage(`${0==i.goibot?a("off"):a("on")} ${a("successText")}`, n, s)
};