async function foo() {
  await Promise.resolve();
  throw 1;
}
foo().then(function () {}, function (e) {});