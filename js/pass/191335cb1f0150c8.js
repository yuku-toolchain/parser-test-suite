const date = Date.now();
const objectValueOf = {
  valueOf: function () {}
};
const objectToString = {
  toString: function () {}
};
const dtf = new Intl.DateTimeFormat(["pt-BR"]);
const s = Symbol('1');