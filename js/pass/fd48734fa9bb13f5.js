var previousObject = null;
var firstObject = null;
function tag(templateObject) {
  previousObject = templateObject;
}
tag`foo${1}bar`;
firstObject = previousObject;
previousObject = null;
tag`foo\${1}bar`;