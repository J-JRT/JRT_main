// ** modules code by Heyzer...
// * no edit credit **
const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.blue(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.blue(text) : chalk.bgKeyword(bgcolor)(text)
}

module.exports = {
	color,
	bgcolor
}
