(function (x) {
  label: {
    let x = 'inner';
    break label;
  }
})('outer');