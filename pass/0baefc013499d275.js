var callCount = 0;
var f;
f = ({x} = {
  x: 23
}) => {
  callCount = callCount + 1;
};
f();