var accessed = false;
function callbackfn(val, idx, obj) {
  accessed = true;
  return idx !== 2;
}
var arr = {
  2: 6.99,
  8: 19
};
Object.defineProperty(arr, "length", {
  get: function () {
    delete arr[2];
    return 10;
  },
  configurable: true
});