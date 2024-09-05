const chalk = require('chalk')

function list() {
    console.log(chalk.white.bold('List of poker commands'))
    console.log('-----------------------')
    console.log(chalk.green.bold('create') + ' --> Create a new poker game')
    console.log(chalk.yellow.bold('join') + ' --> Join an existing poker game')
    console.log(chalk.blue.bold('deal') + ' --> Deal cards to players')
    console.log(chalk.red.bold('action') + ' --> Perform an action in a poker game')
    console.log(chalk.magenta.bold('stats') + ' --> Get the status of a poker game')
}

module.exports = list