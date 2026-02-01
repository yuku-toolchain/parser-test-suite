var foo = function () {
  this.caller = 12;
};
var obj = new foo();