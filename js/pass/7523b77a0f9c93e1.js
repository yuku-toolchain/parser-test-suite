let a = new Promise(resolve => resolve('a'));
let b = new Promise(resolve => resolve('b'));
let sequence = [1];
Promise.all([a.then(() => {
  sequence.push(3);
  return checkSequence(sequence, 'Expected to be called first.');
}), Promise.race([a, b]).then(() => {
  sequence.push(5);
  return checkSequence(sequence, 'Expected to be called third.');
}), b.then(() => {
  sequence.push(4);
  return checkSequence(sequence, 'Expected to be called second.');
})]).then(result => {
  checkSequence(sequence);
}).then($DONE, $DONE);
sequence.push(2);