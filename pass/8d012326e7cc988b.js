var __obj = {
  toString: function () {
    throw "intostr";
  }
};
__obj.toLocaleLowerCase = String.prototype.toLocaleLowerCase;
try {
  var x = __obj.toLocaleLowerCase();
} catch (e) {
  if (e !== "intostr") {}
}