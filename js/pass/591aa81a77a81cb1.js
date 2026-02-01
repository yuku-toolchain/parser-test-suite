const obj = {
  a: './module-code_FIXTURE.js',
  b: './module-code-other_FIXTURE.js'
};
async function fn() {
  const ns1 = await import(obj['a']);
  const ns2 = await import(obj.b);
}