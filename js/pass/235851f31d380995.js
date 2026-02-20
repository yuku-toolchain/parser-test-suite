let sequence = [1];
let lateRejector = {
  then(resolve, reject) {
    return new Promise(resolve => {
      sequence.push(3);
      resolve();
      sequence.push(4);
    }).then(() => {
      sequence.push(5);
      resolve(9);
      sequence.push(6);
      reject();
      sequence.push(7);
    });
  }
};
sequence.push(2);
Promise.race([lateRejector]).then(resolution => {
  checkSequence(sequence);
}).then($DONE, $DONE);