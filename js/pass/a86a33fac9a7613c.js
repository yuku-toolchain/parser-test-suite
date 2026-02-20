Promise.resolve = null;
Promise.allSettled([1]).then(() => $DONE('The promise should not be resolved.'), error => {}).then($DONE, $DONE);