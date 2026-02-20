var error = new Error('boop');
var g = async function* () {
  try {
    yield 1;
  } catch (err) {
    return 'done';
  }
};
var it = g();
it.next().then(function (ret) {
  it.throw(error).then(function (ret) {
    it.next().then(function (ret) {}).then($DONE, $DONE);
  }).catch($DONE);
}).catch($DONE);