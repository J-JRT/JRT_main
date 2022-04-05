module.exports.config = {
	name: "osu",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "JRT",
	description: "Lấy thông tin người chơi osu",
    usages:"[standard/catch/taiko/mania] <playername>",
	commandCategory: "Thông tin",
	dependencies: {
		"fs-extra": "",
        "path": "",
        "node-fetch": "",
        "canvas": ""
	},
	cooldowns: 5,
}
function rect(ctx, x, y, width, height, radius = 5) {
    if (typeof radius === 'number') {
        radius = {
            tl: radius,
            tr: radius,
            br: radius,
            bl: radius
        } 
    }
    ctx.beginPath() 
    ctx.moveTo(x + radius.tl, y)
    ctx.lineTo(x + width - radius.tr, y)
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr)
    ctx.lineTo(x + width, y + height - radius.br)
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height)
    ctx.lineTo(x + radius.bl, y + height)
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl)
    ctx.lineTo(x, y + radius.tl)
    ctx.quadraticCurveTo(x, y, x + radius.tl, y)
    ctx.closePath()
    ctx.fill()
}
async function drawcanvas(js,playmode,event,api){
    var fs = global.nodemodule["fs-extra"]
    var { Image, createCanvas, registerFont,loadImage } = global.nodemodule["canvas"]
    registerFont(__dirname + `/cache/Varela.ttf`, { family: 'VarelaRound' })
    var username = js.username
    var globalrank = js.statistics.global_rank
    var countryrank = js.statistics.rank.country
    var score = js.statistics.ranked_score
    var country = js.country.name
    var countrycode = js.country.code
    var accuracy = js.statistics.hit_accuracy .toFixed(2)
    var pp = Number(js.statistics.pp).toFixed(0)
    var level = js.statistics.level.current
    var levelprogress = js.statistics.level.progress
    var playtime = (Number(js.statistics.play_time) / 3600 ).toFixed(1) + "h"
    var A = js.statistics.grade_counts.a
    var S = js.statistics.grade_counts.s
    var SH = js.statistics.grade_counts.sh
    var SS = js.statistics.grade_counts.ss
    var SSH = js.statistics.grade_counts.ssh
    if(playmode==undefined){
        var playmode = js.playmode
        if(js.playmode=="fruits"){var playmode="catch"}
    }
    if(playmode=="fruits"){var playmode="catch"}
    if (score > 999999999) {
        var score = (score / 1000000000).toFixed(1) + `B`
    }
    else if (score > 999999) {
        var score = (score / 1000000).toFixed(1) + `M`
    }
    else if (score > 99999) {
        var score = (score / 1000).toFixed(1) + `K`
    }
    else {
        var score = score //lmao
    }
    const canvas = createCanvas(1200, 624)
    const ctx = canvas.getContext('2d')
    //new img object
    const img = new Image()
    //template
    img.onload = function () { ctx.drawImage(img, 0, 0) }
    img.src = __dirname + `/cache/backgroundcard.png`
    //avatar
    try{
        var avatarimg = await loadImage(js.avatar_url)
        }catch{
            var avatarimg = await loadImage(`https://osu.ppy.sh/images/layout/avatar-guest.png`)
            }
    ctx.drawImage(avatarimg, 45, 55, 277, 277)
    img.onload = function () { ctx.drawImage(img, 45, 55) }
    img.src = __dirname + `/cache/avatarcornerround.png`
    //username
    ctx.fillStyle = "#ffffff"
    ctx.font = '63px VarelaRound'
    ctx.fillText(username, 347, 56 + 63)
    //flag
    var flag = await loadImage(`https://osu.ppy.sh/images/flags/${countrycode}.png`)
    ctx.drawImage(flag, 350, 130, 60, 40)
    ctx.font = '40px VarelaRound'
    ctx.fillText(country, 420, 127 + 40)
    //a,s,sh,ss,ssh
    ctx.fillStyle =`#ffffff`
    ctx.font = '28px VarelaRound'
    ctx.textAlign = 'center'
    ctx.fillText(A, 792 + 22, 171 + 25 + 28)
    ctx.fillText(S, 955 + 16, 171 + 25 + 28)
    ctx.fillText(SH, 1108 + 22, 171 + 25 + 28)
    ctx.fillText(SS, 888 + 9, 279 + 25 + 28)
    ctx.fillText(SSH, 1038 + 13, 279 + 25 + 28)
    //rank
    ctx.textAlign = 'left'
    ctx.font = '75px VarelaRound'
    ctx.fillText("#"+globalrank, 347, 170 + 75)
    ctx.font = '57px VarelaRound'
    ctx.fillText('#' + countryrank, 347, 259 + 57)
    //level
    ctx.textAlign = 'center'
    ctx.font = '33px VarelaRound'
    ctx.fillText(Math.floor(level || 0), 378, 332 + 50)
    ctx.fillStyle = '#969696'//790, 370
    rect(ctx, 440, 360, 504, 12, 7)
    ctx.fillStyle = 'rgb(255, 204, 34)'
    rect(ctx, 440, 360, 504 / 100 * levelprogress, 12, 7)
    ctx.textAlign = 'left'
    ctx.fillStyle = "#FFFFFF"
    ctx.font = '21px VarelaRound'
    ctx.fillText(levelprogress + '%', 960, 359 + 21)
    //stuff
    ctx.textAlign = 'center'
    ctx.font = '40px VarelaRound'
    ctx.fillText(pp, 82 + 60, 534 + 40)
    ctx.fillText(accuracy + '%', 324 + 75, 537 + 40)
    ctx.fillText(playtime, 651 + 50, 536 + 40)
    ctx.fillText(score, 930 + 100, 536 + 40)
    switch(playmode){
        case "osu":
            var userjpg = `osu_`+username+`.jpg`
            img.onload = function () { ctx.drawImage(img, 252, 261) }
            img.src = __dirname + `/cache/osu.png`
            break
        case "catch":
            var userjpg = `catch_`+username+`.jpg`
            img.onload = function () { ctx.drawImage(img, 252, 261) }
            img.src = __dirname + `/cache/catch.png`
            break
        case "mania":
            var userjpg = `mania_`+username+`.jpg`
            img.onload = function () { ctx.drawImage(img, 252, 261) }
            img.src = __dirname + `/cache/mania.png`
            break
        case "taiko":
            var userjpg = `danhtrongae_`+username+`.jpg`
            img.onload = function () { ctx.drawImage(img, 252, 261) }
            img.src = __dirname + `/cache/taiko.png`
            break
    }
    //write
    await fs.writeFileSync(__dirname + `/cache/${userjpg}`, canvas.toBuffer())
    //stream
    const imgstream = fs.createReadStream(__dirname + `/cache/${userjpg}`)
    return api.sendMessage({ attachment: imgstream }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/${userjpg}`),event.messageID)
}
async function getapidata(username,playmode,event,args,api){
    var fetch = global.nodemodule["node-fetch"]
    if(playmode == undefined){var apiz = `https://osu.ppy.sh/api/v2/users/${encodeURIComponent(username)}/`}
    else {var apiz = `https://osu.ppy.sh/api/v2/users/${encodeURIComponent(username)}/${playmode}`}
    var clientgrant = await fetch("https://osu.ppy.sh/oauth/token", {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "grant_type": "client_credentials",
            "client_id": 6091,
            "client_secret": "JaHpgCMOHDMyllcS5dAXIALZoN1ftZK4ms6myXQ0",
            "scope": "public"
        })
    })
    var clientgrant = await clientgrant.json()
    var accesstoken = clientgrant.access_token
    var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application.json',
        'Authorization': `Bearer ${accesstoken}`
    }
    var res = await fetch(apiz, {
        method: 'GET',
        headers: headers
    })
    var js = await res.json()
    if (js.id == undefined) return api.sendMessage(`không có người chơi nào tên "${username}"`,event.threadID,event.messageID)
    else return drawcanvas(js,playmode,event,api)
}
module.exports.onLoad = async()=>{
	var { existsSync } = global.nodemodule["fs-extra"]
    var path = global.nodemodule["path"]
    if (!existsSync(path.resolve(__dirname,"cache","backgroundcard.png"))){ global.utils.downloadFile("https://raw.githubusercontent.com/Hiyoriii/osu-plugin-for-c3cbot-0.x/main/template/backgroundcard.png", path.resolve(__dirname,"cache","backgroundcard.png"))}
    if (!existsSync(path.resolve(__dirname,"cache","avatarcornerround.png"))){ global.utils.downloadFile("https://raw.githubusercontent.com/Hiyoriii/osu-plugin-for-c3cbot-0.x/main/template/avatarcornerround.png", path.resolve(__dirname,"cache","avatarcornerround.png"))}
    if (!existsSync(path.resolve(__dirname,"cache","osu.png"))){ global.utils.downloadFile("https://raw.githubusercontent.com/Hiyoriii/osu-plugin-for-c3cbot-0.x/main/template/osu.png", path.resolve(__dirname,"cache","osu.png"))}
    if (!existsSync(path.resolve(__dirname,"cache","mania.png"))){ global.utils.downloadFile("https://raw.githubusercontent.com/Hiyoriii/osu-plugin-for-c3cbot-0.x/main/template/mania.png", path.resolve(__dirname,"cache","mania.png"))}
    if (!existsSync(path.resolve(__dirname,"cache","catch.png"))){global.utils.downloadFile("https://raw.githubusercontent.com/Hiyoriii/osu-plugin-for-c3cbot-0.x/main/template/catch.png", path.resolve(__dirname,"cache","catch.png"))}
    if (!existsSync(path.resolve(__dirname,"cache","taiko.png"))){global.utils.downloadFile("https://raw.githubusercontent.com/Hiyoriii/osu-plugin-for-c3cbot-0.x/main/template/taiko.png", path.resolve(__dirname,"cache","taiko.png"))}
    if (!existsSync(path.resolve(__dirname,"cache","Varela.ttf"))){global.utils.downloadFile("https://raw.githubusercontent.com/Hiyoriii/osu-plugin-for-c3cbot-0.x/main/font/font.ttf", path.resolve(__dirname,"cache","Varela.ttf"))}
}
module.exports.run = async({event,args,api})=>{
    if(args.length == 0) return api.sendMessage(`username không được để trống`,event.threadID,event.messageID)
    switch(args[0]){
        case "standard":
            var playmode = "osu"
            var username = args.splice(1, args.length).join(" ")
            if(username=="") return api.sendMessage(`username không được để trống`,event.threadID,event.messageID)
            else return getapidata(username,playmode,event,args,api) 
        case "catch":
            var playmode = "fruits"
            var username = args.splice(1, args.length).join(" ")
            if(username=="") return api.sendMessage(`username không được để trống`,event.threadID,event.messageID)
            else return getapidata(username,playmode,event,args,api) 
        case "taiko":
            var playmode = "taiko"
            var username = args.splice(1, args.length).join(" ")
            if(username=="") return api.sendMessage(`username không được để trống`,event.threadID,event.messageID)
            else return getapidata(username,playmode,event,args,api) 
        case "mania":
            var playmode = "mania"
            var username = args.splice(1, args.length).join(" ")
            if(username=="") return api.sendMessage(`username không được để trống`,event.threadID,event.messageID)
            else return getapidata(username,playmode,event,args,api) 
        default:
            var username = args.join(" ")
            var playmode = undefined
            return getapidata(username,playmode,event,args,api)
    }
}