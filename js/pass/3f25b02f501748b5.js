var caught = false;
try {
  {
    let xx = 18;
    throw 25;
  }
} catch (e) {
  caught = true;
  (function () {
    try {
      eval('xx');
    } catch (e2) {}
  })();
}