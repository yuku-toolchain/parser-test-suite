var nonThenable = {
  then: null
};
Promise.resolve(nonThenable).then(function (value) {}).then($DONE, $DONE);