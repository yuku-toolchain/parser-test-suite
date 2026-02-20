var startTime = Date.now();
import('./await-import-evaluation_FIXTURE.js').then(imported => {
  var endTime = Date.now() - startTime;
}).then($DONE, $DONE);