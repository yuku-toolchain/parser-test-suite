function fn(e) {
  return e;
}
var obj1 = {
  length: 1,
  0: 'a',
  toString() {
    return 'obj1';
  }
};
var obj2 = new Int32Array(2);
var obj3 = {
  get length() {
    throw "should not even consider the length property";
  },
  toString() {
    return 'obj3';
  }
};
var arr = [obj1, obj2, obj3];
var actual = arr.flatMap(fn);
var arrLike = {
  length: 4,
  0: obj1,
  1: obj2,
  2: obj3,
  get 3() {
    return arrLike;
  },
  toString() {
    return 'obj4';
  }
};
actual = [].flatMap.call(arrLike, fn);