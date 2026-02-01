let sequence = [];
let p1 = new Promise((_, reject) => {
  reject('');
});
let p2 = new Promise(resolve => {
  resolve('');
});
let p3 = new Promise((_, reject) => {
  reject('');
});
sequence.push(1);
p1.catch(() => {
  sequence.push(3);
  checkSequence(sequence, 'Expected to be called first.');
}).catch($DONE);
Promise.any([p1, p2, p3]).then(() => {
  sequence.push(6);
  checkSequence(sequence, 'Expected to be called fourth.');
}).then($DONE, $DONE);
p2.then(() => {
  sequence.push(4);
  checkSequence(sequence, 'Expected to be called second.');
}).catch($DONE);
sequence.push(2);
p3.catch(() => {
  sequence.push(5);
  checkSequence(sequence, 'Expected to be called third.');
}).catch($DONE);