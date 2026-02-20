var f = async () => {
  try {
    throw "early-throw";
  } finally {
    throw "override";
  }
};
f().then($DONE, function (value) {}).then($DONE, $DONE);