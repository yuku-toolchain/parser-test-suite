var thrown = new Test262Error();
var options = {
  with: new Proxy({}, {
    ownKeys: function () {
      throw thrown;
    }
  })
};
import('./2nd-param_FIXTURE.js').then(function () {}, function (error) {}).then($DONE, $DONE);