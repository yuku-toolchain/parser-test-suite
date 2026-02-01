var caught;
try {
  eval('new.target;');
} catch (err) {
  caught = err;
}