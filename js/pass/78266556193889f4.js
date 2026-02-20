let sequence = [];
let p1 = new Promise(resolve => {
  resolve({});
});
sequence.push(1);
Promise.any([p1]).then(resolved => {
  sequence.push(4);
  checkSequence(sequence, 'Expected Promise.any().then to queue second');
}).catch($DONE);
p1.then(() => {
  sequence.push(3);
  checkSequence(sequence, 'Expected p1.then to queue first');
}).then(() => {
  sequence.push(5);
  checkSequence(sequence, 'Expected final then to queue last');
}).then($DONE, $DONE);
sequence.push(2);