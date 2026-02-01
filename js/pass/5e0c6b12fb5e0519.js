var __obj = {
  toString: function () {
    throw "intostr";
  }
};
__obj.valueOf = function () {
  return true;
};
try {
  var __str = new String(__obj);
} catch (e) {
  if (e !== "intostr") {}
}