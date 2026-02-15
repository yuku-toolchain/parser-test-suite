for (let [numberingSystem, digits] of Object.entries(numberingSystemDigits)) {
  let digitList = [...digits];
  let nf = new Intl.NumberFormat(undefined, {
    numberingSystem
  });
  for (let i = 0; i <= 9; ++i) {}
}