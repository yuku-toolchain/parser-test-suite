async function fn() {
  const ns1 = await import('./module-code_FIXTURE.js');
  const ns2 = await import((1, 0, './module-code-other_FIXTURE.js'));
}