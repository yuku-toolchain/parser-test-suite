var callCount = 0;
var f;
f = function* ([arrow = () => {}]) {
  callCount = callCount + 1;
};
f([]).next();