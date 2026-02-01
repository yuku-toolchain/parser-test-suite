var test;
var tokenCodes = {
  set null(value) {
    test = 'null';
  },
  get null() {
    return 'null';
  },
  set true(value) {
    test = 'true';
  },
  get true() {
    return 'true';
  },
  set false(value) {
    test = 'false';
  },
  get false() {
    return 'false';
  }
};
var arr = ['null', 'true', 'false'];
for (var i = 0; i < arr.length; ++i) {
  var propertyName = arr[i];
  tokenCodes[propertyName] = 0;
}