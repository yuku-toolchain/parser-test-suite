async function foo(a) {
  arguments[0] = 2;
  a = 3;
}
foo(1).then($DONE, $DONE);