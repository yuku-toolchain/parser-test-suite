var symbol = Symbol('');
var subject = /./;
var badToString = {
  toString: function () {}
};
subject.lastIndex = 99;