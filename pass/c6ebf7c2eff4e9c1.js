const f = async () => {
  await import('./THIS_FILE_DOES_NOT_EXIST.js');
};
f().catch(error => {}).then($DONE, $DONE);