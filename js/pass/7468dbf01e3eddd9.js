function tag(templateObject) {
  previousObject = templateObject;
}
var a = 1;
var firstObject = null;
var previousObject = null;
function runTemplate() {
  tag`head${a}tail`;
}
runTemplate();
firstObject = previousObject;
previousObject = null;
runTemplate();