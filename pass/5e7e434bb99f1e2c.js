function tag(arg) {
  return arg[0];
}
async function fn() {
  const ns = await import(tag`./module-code-other_FIXTURE.js`);
}