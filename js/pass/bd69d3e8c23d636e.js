var g = async function* () {};
var it = g();
var resolve;
var promise = new Promise(function (resolver) {
  resolve = resolver;
});
it.return(promise).then(function (ret) {
  it.next().then(function (ret) {}).then($DONE, $DONE);
}).catch($DONE);
resolve('unwrapped-value');