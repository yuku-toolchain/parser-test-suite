var yieldSet, obj, iter;
function* g() {
  obj = {
    get [yield]() {
      return 'get yield';
    },
    set [yield](param) {
      yieldSet = param;
    }
  };
}
iter = g();
iter.next();
iter.next('first');
iter.next('second');
obj.second = 'set yield';