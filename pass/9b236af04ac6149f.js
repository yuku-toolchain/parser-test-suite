var callCount = 0;
var f;
f = ({fn = function () {}, xFn = function x() {}} = {}) => {
  callCount = callCount + 1;
};
f();