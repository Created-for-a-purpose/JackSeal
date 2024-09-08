#! /usr/bin/env node

const { program } = require('commander')
const list = require('./commands/list')
const table = require('./commands/table')
const join = require('./commands/join')
const cards = require('./commands/cards')

program
    .command('list')
    .description('List of poker commands')
    .action(list)

program
    .command('table')
    .description('Create a table')
    .option('-n, --tableName <>', 'Name of the table')
    .option('-b, --buyInAmount <>', 'Amount of buy-in')
    .option('-s, --smallBlind <>', 'Amount of small blind')
    .action(table)

program.
    command('join')
    .description('Join a table')
    .option('-n, --tableName <>', 'Name of the table')
    .option('-b, --buyInAmount <>', 'Amount of buy-in')
    .action(join)

program.
     command('cards')
    .description('Generate cards')
    .option('-n, --tableName <>', 'Name of the table')
    .action(cards)  

program.parse()