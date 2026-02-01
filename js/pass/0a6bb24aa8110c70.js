async function f() {
  try {
    throw "early-throw";
  } finally {
    await new Promise(function (resolve, reject) {
      reject("override");
    });
  }
}
f().then($DONE, function (value) {}).then($DONE, $DONE);