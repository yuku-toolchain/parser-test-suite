var result;
function* g() {
  ({
    yield: 1
  });
}
result = g().next();