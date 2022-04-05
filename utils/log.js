const chalk = require('chalk');

module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#FF7F50")('[ WARN ] → ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#FF0000")('[ WARN ] → ') + data);
			break;
		default:
			console.log(chalk.bold.hex("#FF4500")(`[ ${option} ] → `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#FF0000")('[ J-JRT ] → ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#FF0000")('[ J-JRT ] → ') + data);
			break;
		default:
			console.log(chalk.bold.hex("#00FFFF")(`[ J-JRT ] → `) + data);
			break;
	}
}
