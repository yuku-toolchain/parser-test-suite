var g = async function* () {
  yield 1;
};
var it = g();
var resolve;
var promise = new Promise(function (resolver) {
  resolve = resolver;
});
it.next().then(function (ret) {
  it.return(promise).then(function (ret) {
    it.next().then(function (ret) {}).then($DONE, $DONE);
  }).catch($DONE);
  resolve('unwrapped-value');
}).catch($DONE);