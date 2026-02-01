const a = () => ['./module-code_FIXTURE.js', './module-code-other_FIXTURE.js'];
async function fn() {
  const ns1 = await import(a()[0]);
  const ns2 = await import(a()[(0, 1)]);
}