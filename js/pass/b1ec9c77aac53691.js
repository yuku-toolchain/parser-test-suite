async function foo() {
  let x = 2;
  let y = await Promise.resolve(2) * x;
}