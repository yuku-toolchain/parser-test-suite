var regExp = /a/;
Object.defineProperty(regExp, Symbol.match, {
  get: function () {
    regExp.compile("b");
  }
});
var result = regExp[Symbol.split]("abba");