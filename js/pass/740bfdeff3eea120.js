var f = async function () {
  try {
    await new Promise(function (resolve, reject) {
      reject("early-reject");
    });
  } finally {
    return "override";
  }
};
f().then(function (value) {}).then($DONE, $DONE);