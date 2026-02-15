async function f() {
  try {
    return "early-return";
  } finally {
    throw "override";
  }
}
f().then($DONE, function (value) {}).then($DONE, $DONE);