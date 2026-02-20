try {
  Promise.any('xyz').then(v => {}, error => {}).then($DONE, $DONE);
} catch (error) {}