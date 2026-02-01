var newTarget = null;
var withSpaces = function () {
  newTarget = new.target;
};
withSpaces();
new withSpaces();
newTarget = null;
var withLineBreaks = function () {
  newTarget = new.target;
};
withLineBreaks();
new withLineBreaks();
var withSLDC = function () {
  newTarget = new.target;
};
withSLDC();
new withSLDC();
var withMLC = function () {
  newTarget = new.target;
};
withMLC();
new withMLC();