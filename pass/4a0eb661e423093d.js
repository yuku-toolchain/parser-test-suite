(function (x) {
  label: {
    let x = 'middle';
    {
      let x = 'inner';
      break label;
    }
  }
})('outer');