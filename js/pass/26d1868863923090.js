async function foo() {
  await Promise.resolve();
  return 42;
}
foo().then(function (v) {}, $DONE);