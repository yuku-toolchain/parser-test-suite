async function fn() {
  const first = await import('./update-to-dynamic-import_FIXTURE.js');
  const other = await first.default();
}