import execa from 'execa';
import test from 'ava';

test('it can handle empties', async t => {
	const {stdout1} = await execa('./cli.js', [null]);
	t.is(stdout1, undefined);
	const {stdout2} = await execa('./cli.js', [undefined]);
	t.is(stdout2, undefined);
	const {stdout3} = await execa('./cli.js', ['']);
	t.is(stdout3, undefined);
});

test('it converts 16px to rems', async t => {
	const {stdout} = await execa('./cli.js', ['16px']);
	t.is(stdout, '1rem');
});

test('it converts 32px to rems', async t => {
	const {stdout} = await execa('./cli.js', ['32px']);
	t.is(stdout, '2rem');
});

test('it converts 3px to rems', async t => {
	const {stdout} = await execa('./cli.js', ['3px']);
	t.is(stdout, '0.188rem');
});

test('it converts 250px to rems', async t => {
	const {stdout} = await execa('./cli.js', ['250px']);
	t.is(stdout, '15.625rem');
});

test('it converts floats to rems', async t => {
	const {stdout} = await execa('./cli.js', ['20.23px']);
	t.is(stdout, '1.264rem');
});

test('it convert large floats to rems', async t => {
	const {stdout} = await execa('./cli.js', ['2033.234589745698px']);
	t.is(stdout, '127.077rem');
});
