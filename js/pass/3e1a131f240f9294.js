var matchGroups;
var re = /./;
re.exec = function () {
  return {
    length: 1,
    0: "a",
    index: 0,
    groups: matchGroups
  };
};
var replacerCalls = 0;
var replacerLastArg;
var replacer = function () {
  replacerCalls++;
  replacerLastArg = arguments[arguments.length - 1];
};
matchGroups = null;
re[Symbol.replace]("a", replacer);
matchGroups = undefined;
re[Symbol.replace]("a", replacer);
matchGroups = 10;
re[Symbol.replace]("a", replacer);
matchGroups = {};
re[Symbol.replace]("a", replacer);