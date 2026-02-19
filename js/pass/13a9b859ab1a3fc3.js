var caught;
try {
  eval('super.property;');
} catch (err) {
  caught = err;
}