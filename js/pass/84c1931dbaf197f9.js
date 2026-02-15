let x = './module-code';
let y = './module-code';
const a = '_FIXTURE.js';
const b = '-other_FIXTURE.js';
async function fn() {
  const ns1 = await import(x + a);
  const ns2 = await import(y + b);
}