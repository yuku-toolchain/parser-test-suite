import('./indirect-resolution-1_FIXTURE.js').then(async imported => {
  var indirect = await imported.default;
}).then($DONE, $DONE);