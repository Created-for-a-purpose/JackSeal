#! /usr/bin/env node

const { program } = require('commander')
const list = require('./commands/list')

program
    .command('list')
    .description('List of poker commands')
    .action(list)

program.parse()