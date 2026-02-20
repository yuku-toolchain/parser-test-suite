const a = './module-code_FIXTURE.js';
const b = './module-code-other_FIXTURE.js';
async function fn() {
  const ns1 = await import([a]);
  Array.prototype.toString = () => b;
  const ns2 = await import([]);
}