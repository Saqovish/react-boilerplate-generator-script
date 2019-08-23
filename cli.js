#!/usr/bin/env node
const chalk = require('chalk');
const meow = require('meow');
const fs = require('fs');
const path = require('path');
const capitalize = require('./utils/capitalize');
const extractName = require('./utils/extractName');

const cli = meow();

// extract flags
const { flags, input } = cli;

// load template based on flags
const templateGenerator = require(`./templates/${ flags.t || 'func' }`);

// Create file or files
input.map( file => {
    // file string manipulation
    const filename = extractName(file);
    const capitalized = capitalize(filename);

    // generate template
    const template = templateGenerator(capitalized);

    fs.writeFile(path.join(process.cwd(), `./${ file }`), template, (err) => {
        if (err) {
            return console.error(chalk.red('Failed to create file ', err));
        }
        console.log(chalk.green(`Created ${ chalk.black(chalk.bgBlue(file)) } file Successfully!`));
    });
})