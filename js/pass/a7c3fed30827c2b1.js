Function.prototype.toString = () => './module-code_FIXTURE.js';
async function fn() {
  const ns = await import(() => {});
}