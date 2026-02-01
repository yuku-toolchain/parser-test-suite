var yield = 23;
var f, paramValue;
f = (x = yield) => {
  paramValue = x;
};
f();