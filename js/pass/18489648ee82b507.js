var result;
function* g() {
  ({
    get yield() {
      return 1;
    }
  });
}
result = g().next();