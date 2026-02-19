var test;
var tokenCodes = {
  set undefined(value) {
    test = 'undefined';
  },
  get undefined() {
    return 'undefined';
  },
  set NaN(value) {
    test = 'NaN';
  },
  get NaN() {
    return 'NaN';
  },
  set Infinity(value) {
    test = 'Infinity';
  },
  get Infinity() {
    return 'Infinity';
  }
};
var arr = ['undefined', 'NaN', 'Infinity'];
for (var i = 0; i < arr.length; ++i) {
  var propertyName = arr[i];
  tokenCodes[propertyName] = 0;
}