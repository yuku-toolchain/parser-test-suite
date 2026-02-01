var a = 1;
var __obj = {
  a: 2
};
with (__obj) {
  var __func = function () {
    return a;
  };
}
if (__obj.hasOwnProperty('__func')) {}
if (!this.hasOwnProperty('__func')) {}
if ((__func in __obj)) {}
if (this.__func === undefined) {}