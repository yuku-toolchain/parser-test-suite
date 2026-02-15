var caught;
try {
  eval('super();');
} catch (err) {
  caught = err;
}