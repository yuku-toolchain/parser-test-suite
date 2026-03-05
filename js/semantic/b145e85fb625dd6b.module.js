var result;
function* g() {
  function h() {
    yield = 1;
  }
}
result = g().next();