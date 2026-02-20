Promise.resolve = null;
Promise.any([1]).then(() => $DONE('The promise should not be resolved.'), error => {}).then($DONE, $DONE);