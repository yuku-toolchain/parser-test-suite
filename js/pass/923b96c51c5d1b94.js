(function (x) {
  try {
    let x = 'inner';
    throw 0;
  } catch (e) {}
})('outer');