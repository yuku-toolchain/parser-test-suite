let sequence = [];
let p1 = new Promise((_, reject) => {
  reject('foo');
});
let p2 = new Promise((_, reject) => {
  reject('bar');
});
sequence.push(1);
p1.catch(() => {
  sequence.push(3);
  checkSequence(sequence, 'Expected to be called first.');
}).catch($DONE);
Promise.any([p1, p2]).then(() => {
  sequence.push(5);
  checkSequence(sequence, 'Expected to be called third.');
}).then($DONE, outcome => {}).then($DONE, $DONE);
p2.catch(() => {
  sequence.push(4);
  checkSequence(sequence, 'Expected to be called second.');
}).catch($DONE);
sequence.push(2);