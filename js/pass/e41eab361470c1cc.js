const a = () => ({
  x: './module-code_FIXTURE.js',
  y: './module-code-other_FIXTURE.js'
});
async function fn() {
  const ns1 = await import(a().x);
  const ns2 = await import(a().y);
}