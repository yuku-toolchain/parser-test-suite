async function f() {
  var iter = {
    [Symbol.asyncIterator]: IsHTMLDDA,
    get [Symbol.iterator]() {}
  };
  for await (var x of iter) return "for-await-of body shouldn't be reached";
  return "should have failed earlier";
}
f().then($DONE, function (e) {}).then($DONE, $DONE);