var callCount = 0;
async function* gen() {
  callCount += 1;
  return (function (arg) {
    var yield = arg + 1;
    return yield;
  })(yield);
}
var iter = gen();
var item = iter.next();
item.then(({done, value}) => {});
item = iter.next(42);
item.then(({done, value}) => {}).then($DONE, $DONE);