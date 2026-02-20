async function f() {
  return await import(import(import('./empty_FIXTURE.js')));
}