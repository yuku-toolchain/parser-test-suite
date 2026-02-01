async function foo() {
  throw 1;
}
foo().then(function () {}, function (e) {});