var thenable = {
  then: function (onResolve, onReject) {
    return onResolve('resolved');
  }
};
var p = Promise.resolve(thenable);
p.then(function (r) {}).then($DONE, $DONE);