var thrown = new Test262Error();
var options = {
  get with() {
    throw thrown;
  }
};
import('./2nd-param_FIXTURE.js').then(function () {}, function (caught) {}).then($DONE, $DONE);