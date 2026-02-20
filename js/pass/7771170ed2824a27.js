var yieldSet, C, iter;
function* g() {
  class C_ {
    get [yield]() {
      return 'get yield';
    }
    set [yield](param) {
      yieldSet = param;
    }
  }
  C = C_;
}
iter = g();
iter.next();
iter.next('first');
iter.next('second');
C.prototype.second = 'set yield';