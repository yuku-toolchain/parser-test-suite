var values = [1, 2, 3];
var callCount = 0;
var f;
f = ([...[...x]] = values) => {
  callCount = callCount + 1;
};
f();