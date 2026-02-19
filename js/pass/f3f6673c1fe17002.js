var f = async function () {
  try {
    throw "early-throw";
  } finally {
    return await new Promise(function (resolve, reject) {
      resolve("override");
    });
  }
};
f().then(function (value) {}).then($DONE, $DONE);