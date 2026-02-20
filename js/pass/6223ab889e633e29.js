var bIsFooCalled = false;
var foo = function () {
  bIsFooCalled = true;
};
var d = delete foo();