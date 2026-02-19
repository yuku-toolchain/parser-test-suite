var isFirstScript = typeof global.evaluated === 'undefined';
if (isFirstScript) {
  global.evaluated = 0;
}
global.evaluated++;
var p = Promise.all([import('./eval-self-once-script.js'), import('./eval-self-once-script.js')]).then(async () => {
  await import('./eval-self-once-script.js');
  await import('./eval-self-once-script.js');
});
if (isFirstScript) {
  p.then($DONE, $DONE);
}