var callCount = 0;
var C = class {
  *method({arrow = () => {}} = {}) {
    callCount = callCount + 1;
  }
};
new C().method().next();