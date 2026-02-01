var poison = [];
Object.defineProperty(poison, Symbol.iterator, {
  get() {}
});
try {
  Promise.any(poison).then(() => {}, error => {}).then($DONE, $DONE);
} catch (error) {}