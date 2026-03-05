var result;
function* g() {
  (function yield() {});
}
result = g().next();