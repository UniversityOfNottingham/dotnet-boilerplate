﻿const pkg = require('../package.json');

module.exports = `/* ${pkg.name} ${pkg.version} | ${new Date()} */\n`;
