function Constructor(x) {
  arg = x;
}
var tag = function (x) {
  templateObject = x;
  return Constructor;
};
var arg = null;
var instance, templateObject;
instance = new tag`first template`();
instance = new tag`second template`('constructor argument');