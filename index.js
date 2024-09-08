#! /usr/bin/env node

const { program } = require('commander')
const list = require('./commands/list')
const table = require('./commands/table')

program
    .command('list')
    .description('List of poker commands')
    .action(list)

program
    .command('table')
    .description('Create a table')
    .option('-n, --tableName <>', 'Name of the table')
    .option('-b, --buyInAmount <>', 'Amount of buy-in')
    .option('-p, --players <players...>', 'Number of players')
    .option('-s, --smallBlind <>', 'Amount of small blind')
    .action(table)

program.parse()