function callbackfn(val, idx, obj) {
  return '[object JSON]' !== Object.prototype.toString.call(obj);
}
JSON.length = 1;
JSON[0] = 1;