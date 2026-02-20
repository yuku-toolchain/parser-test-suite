var t = (function () {
  return this;
})();
var calls = [];
var replaceValue = function (...args) {
  calls.push([this, ...args]);
  return 'z';
};
var searchValue = new String('ab c');
var obj = new String('ab c ab cdab cab c');
var result = obj.replaceAll(searchValue, replaceValue);
var str = obj.toString();