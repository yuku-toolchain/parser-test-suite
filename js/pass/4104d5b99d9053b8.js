var regExp = /a/;
var string = "foo";
RegExp.prototype.exec = function () {
  this.lastIndex = 100;
  return {
    length: 0,
    index: 0
  };
};
var result = regExp[Symbol.split](string);