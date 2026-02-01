function tag(templateObject) {
  previousObject = templateObject;
}
var a = 1;
var firstObject = null;
var previousObject = null;
tag`head${a}tail`;
firstObject = previousObject;
previousObject = null;
tag`head${a}tail`;