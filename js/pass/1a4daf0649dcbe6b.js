var callCount = 0;
var f;
f = ({x: y = 33}) => {
  callCount = callCount + 1;
};
f({});