async function* f() {
  await import(import(import('./empty_FIXTURE.js')));
}