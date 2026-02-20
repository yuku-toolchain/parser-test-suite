var obj = {
  foo: 'not modified'
};
function* g() {
  try {
    obj.foo = yield;
  } finally {
    return 1;
  }
}
var iter = g();
var result;
iter.next();
result = iter.return(45).value;