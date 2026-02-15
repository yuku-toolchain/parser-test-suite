var f = async () => {
  try {
    return "early-return";
  } finally {
    await new Promise(function (resolve, reject) {
      reject("override");
    });
  }
};
f().then($DONE, function (value) {}).then($DONE, $DONE);