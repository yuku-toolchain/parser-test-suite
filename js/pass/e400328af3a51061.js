const a = './module-code_FIXTURE.js';
const b = './module-code-other_FIXTURE.js';
async function fn() {
  const ns1 = await import(b && a);
  const ns2 = await import(delete void typeof +-~!0 && b);
}