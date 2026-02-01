const a = {};
const b = {};
const c = {};
Promise.any([a, b, c]).then(value => {}, () => {}).then($DONE, $DONE);