let x = 'foo';
const y = {
  z: 0
};
const a = './module-code_FIXTURE.js';
const b = './module-code-other_FIXTURE.js';
async function fn() {
  const ns1 = await import(x = a);
  const ns2 = await import(y.z = b);
}