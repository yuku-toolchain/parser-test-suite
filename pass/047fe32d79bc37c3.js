const y = {
  z: 0
};
Object.freeze(y);
const b = './module-code-other_FIXTURE.js';
async function fn() {
  const ns2 = await import(y.z = b);
}