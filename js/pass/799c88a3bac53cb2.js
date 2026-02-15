try {
  (function (x) {
    try {
      let x = 'inner';
      throw 0;
    } finally {}
  })('outer');
} catch (e) {}