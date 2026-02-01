var context = null;
var fn = function () {
  return function () {
    context = this;
  };
};
(fn())`NoSubstitutionTemplate`;
fn = function () {
  return () => {
    context = this;
  };
};
context = null;
(fn())`NoSubstitutionTemplate`;