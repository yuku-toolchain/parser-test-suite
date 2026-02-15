var callCount = 0;
var f;
f = ({x: y}) => {
  callCount = callCount + 1;
};
f({
  x: 23
});