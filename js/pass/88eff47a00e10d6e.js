var values = [1, 2, 3];
var callCount = 0;
var f;
f = function* ([...[...x]]) {
  callCount = callCount + 1;
};
f(values).next();