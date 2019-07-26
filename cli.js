#!/usr/bin/env node
'use strict';
const meow = require('meow');

const DEFAULT_BASE = '16px';

const cleanString = val => val.match(/\d+/g).map(Number);

const emify = (val, args) => {
	const {base, unit} = args;
	const computed = cleanString(base) / cleanString(val);
	const remaining = cleanString(base) % cleanString(val);
	return `${remaining ? computed.toFixed(2) : computed}${unit}`;
};

const cli = meow(
	`
	Usage
	  $ emify [input]

	Options
	  --base  10px  [Default: 16px]
	  --unit  em  [Default: rem]

	Examples
		$ emify 12px --base 14px --unit rem
		1.17rem
`,
	{
		flags: {
			base: {
				type: 'string',
				default: '16px'
			},
			unit: {
				type: 'string',
				default: 'rem'
			}
		}
	}
);

console.log(emify(cli.input[0] || DEFAULT_BASE, cli.flags));
