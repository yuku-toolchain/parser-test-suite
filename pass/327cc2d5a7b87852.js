async function* f() {
  return await import('./THIS_FILE_DOES_NOT_EXIST.js');
}
f().next().catch(error => {}).then($DONE, $DONE);