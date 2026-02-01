Promise.all([import('./eval-rqstd-once_FIXTURE.js'), import('./eval-rqstd-once_FIXTURE.js')]).then(async () => {
  await import('./eval-rqstd-once_FIXTURE.js');
  await import('./eval-rqstd-once_FIXTURE.js');
}).then($DONE, $DONE);