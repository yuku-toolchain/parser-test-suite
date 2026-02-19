var f = async function () {
  try {
    await new Promise(function (resolve, reject) {
      reject("early-reject");
    });
  } finally {
    throw "override";
  }
};
f().then($DONE, function (value) {}).then($DONE, $DONE);