var callCount = 0;
var f;
f = ({arrow = () => {}} = {}) => {
  callCount = callCount + 1;
};
f();