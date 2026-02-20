var thrown = new Test262Error();
import({
  toString: function () {
    throw thrown;
  }
}).then(function () {}, function (caught) {}).then($DONE, $DONE);