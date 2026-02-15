try {
  Promise.any(new Test262Error()).then(() => {}, error => {}).then($DONE, $DONE);
} catch (error) {}