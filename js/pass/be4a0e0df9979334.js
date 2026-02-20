var t = (function () {
  return this;
})();
var calls = [];
var replaceValue = function (...args) {
  calls.push([this, ...args]);
  return 'abc';
};
var searchValue = new String('');
var obj = new String('');
var result = obj.replaceAll(searchValue, replaceValue);
var str = obj.toString();