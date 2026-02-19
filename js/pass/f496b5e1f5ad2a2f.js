class Err extends Error {}
var g = async function* () {
  try {
    yield 1;
  } finally {
    return 'done';
  }
};
var it = g();
it.next().then(function (ret) {
  it.throw(new Err()).then(function (ret) {
    it.next().then(function (ret) {}).then($DONE, $DONE);
  }).catch($DONE);
}).catch($DONE);