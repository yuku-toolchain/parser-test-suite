const yield = './module-code_FIXTURE.js';
async function fn() {
  const ns1 = await import(yield);
}