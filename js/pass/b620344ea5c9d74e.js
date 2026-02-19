var f = async function () {
  try {
    return "early-return";
  } finally {
    return await new Promise(function (resolve, reject) {
      resolve("override");
    });
  }
};
f().then(function (value) {}).then($DONE, $DONE);