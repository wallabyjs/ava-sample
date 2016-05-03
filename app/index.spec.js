import test from 'ava';
import A from './';

test('should work', t => {
  console.log(new A().hello());
  t.deepEqual({a: 1}, {a: 1});
});