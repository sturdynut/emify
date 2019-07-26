import execa from 'execa';
import test from 'ava';

test('it converts pixels to rems', async t => {
	const {stdout} = await execa('./cli.js', ['16px']);
	t.is(stdout, '1rem');
});
