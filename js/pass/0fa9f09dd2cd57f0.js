var regExp = /a/;
var limit = {
  valueOf: function () {
    regExp.compile("b");
    return -1;
  }
};
var result = regExp[Symbol.split]("abba", limit);