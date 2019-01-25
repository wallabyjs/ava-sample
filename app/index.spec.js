import test from 'ava';
import A from './';
import a from './test.css'

test('should work', t => {
  console.log(new A().hello());
  t.deepEqual({a: 1}, {a: 1});

  console.log(a);
});