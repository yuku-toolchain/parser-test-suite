function fn() {
  return 42;
}
await (function fn() {
  return 111;
});