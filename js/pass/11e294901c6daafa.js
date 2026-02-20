function f() {}
Object.defineProperty(f, "length", {
  value: 2147483648
});
Object.defineProperty(f, "length", {
  value: Number.MAX_SAFE_INTEGER
});