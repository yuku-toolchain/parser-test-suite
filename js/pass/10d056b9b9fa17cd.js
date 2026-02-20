let a = new Promise((_, reject) => reject('a'));
let b = new Promise((_, reject) => reject('b'));
let sequence = [1];
Promise.all([a.catch(() => {
  sequence.push(3);
  return checkSequence(sequence, 'Expected to be called first.');
}), Promise.race([a, b]).catch(() => {
  sequence.push(5);
  return checkSequence(sequence, 'Expected to be called third.');
}), b.catch(() => {
  sequence.push(4);
  return checkSequence(sequence, 'Expected to be called second.');
})]).then(result => {
  checkSequence(sequence);
}).then($DONE, $DONE);
sequence.push(2);