var callCount = 0;
var f;
f = ({x: [y]} = {
  x: [45]
}) => {
  callCount = callCount + 1;
};
f();