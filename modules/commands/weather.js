module.exports.config = {
	name: "weather",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Xem thông tin thời tiết tại khu vực",
	commandCategory: "Sức khoẻ",
	usages: " $weather [Location]",
	cooldowns: 5,
	dependencies: {
		"moment-timezone": "",
		"request": ""
	},
	envConfig: {
		"OPEN_WEATHER": "081c82065cfee62cb7988ddf90914bdd"
	}
};

module.exports.languages = {
	"vi": {
		"locationNotExist": "Địa điểm %1 không tồn tại!",
		"returnResult": "🌡 Nhiệt độ: %1°C\n🌡 Nhiệt độ cơ thể cảm nhận được: %2°C\n☁️ Cảnh quan hiện tại: %3\n💦 Độ ẩm: %4%\n💨 Tốc độ gió: %5km/h\n🌅 Mặt trời mọc vào lúc: %6\n🌄 Mặt trời lặn vào lúc: %7\n"
	},
	"en": {
		"locationNotExist": "Can't find %1.",
		"returnResult": "🌡 Temp: %1℃\n🌡 Feels like: %2℃\n☁️ Sky: %3\n💦 Humidity: %4%\n💨 Wind speed: %5km/h\n🌅 Sun rises: %6\n🌄 Sun sets: %7"
	}
}

module.exports.run = async ({ api, event, args, getText }) => {
	const request = global.nodemodule["request"];
	const moment = global.nodemodule["moment-timezone"];
	const { throwError } = global.utils;
	const { threadID, messageID } = event;
	
	var city = args.join(" ");
	if (city.length == 0) return throwError(this.config.name, threadID, messageID);
	return request(encodeURI("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + global.configModule[this.config.name].OPEN_WEATHER + "&units=metric&lang=" + global.config.language), (err, response, body) => {
		if (err) throw err;
		var weatherData = JSON.parse(body);
		if (weatherData.cod !== 200) return api.sendMessage(getText("locationNotExist", city), threadID, messageID);
		var sunrise_date = moment.unix(weatherData.sys.sunrise).tz("Asia/Ho_Chi_Minh");
		var sunset_date = moment.unix(weatherData.sys.sunset).tz("Asia/Ho_Chi_Minh");
		api.sendMessage({
			body: getText("returnResult", weatherData.main.temp, weatherData.main.feels_like, weatherData.weather[0].description, weatherData.main.humidity, weatherData.wind.speed, sunrise_date.format('HH:mm:ss'), sunset_date.format('HH:mm:ss')),
			location: {
				latitude: weatherData.coord.lat,
				longitude: weatherData.coord.lon,
				current: true
			},
		}, threadID, messageID);
	});
}