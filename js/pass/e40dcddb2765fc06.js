var calls = 0;
var replaceValue = {
  toString: function () {
    calls += 1;
    return "b";
  }
};
var newString = ("").replace("a", replaceValue);