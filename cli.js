#!/usr/bin/env node
'use strict';
const meow = require('meow');

const DEFAULT_BASE = '16px';

const cleanString = val => {
	const cleaned = val.match(/\d+(\.\d+)?/g);

	return cleaned && Array.isArray(cleaned) ? cleaned.map(Number) : '0';
};

const emify = (val, args) => {
	const {base, unit, rounding} = args;
	const computed = cleanString(val) / cleanString(base);
	const formatted = computed % 1 ? computed.toFixed(rounding) : computed;
	return `${formatted}${unit}`;
};

const cli = meow(
	`
	Usage
	  $ emify [input]

	Options
	  --base  10px  [Default: 16px]
	  --unit  em  [Default: rem]
	  --rounding  2  [Default: 3]

	Examples
		$ emify 12px --base 14px --unit rem --rounding 3
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
			},
			rounding: {
				type: 'number',
				default: 3
			}
		}
	}
);

console.log(emify(cli.input[0] || DEFAULT_BASE, cli.flags));
