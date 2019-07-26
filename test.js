import execa from 'execa';
import test from 'ava';

test('it converts pixels to rems', async t => {
	const {stdout} = await execa('./cli.js', ['16px']);
	t.is(stdout, '1rem');
});

test('it converts 3px to rems', async t => {
	const {stdout} = await execa('./cli.js', ['3px']);
	t.is(stdout, '0.19rem');
});

test('it converts 250px to rems', async t => {
	const {stdout} = await execa('./cli.js', ['250px']);
	t.is(stdout, '15.63rem');
});
