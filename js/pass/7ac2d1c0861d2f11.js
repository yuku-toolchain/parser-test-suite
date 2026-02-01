for (let i = 1; i <= 9; i++) {
  const property = "$" + i;
  const desc = Object.getOwnPropertyDescriptor(RegExp, property);
}