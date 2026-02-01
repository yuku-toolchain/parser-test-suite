if (typeof global.evaluated === 'undefined') {
  global.evaluated = 0;
}
global.evaluated++;
Promise.all([import('./eval-self-once-module.js'), import('./eval-self-once-module.js')]).then(async () => {
  await import('./eval-self-once-module.js');
  await import('./eval-self-once-module.js');
}).then($DONE, $DONE);