function tag(templateObject) {
  previousObject = templateObject;
}
var a = 1;
var firstObject = null;
var previousObject = null;
function factory() {
  return function () {
    tag`head${a}tail`;
  };
}
factory()();
firstObject = previousObject;
previousObject = null;
factory()();