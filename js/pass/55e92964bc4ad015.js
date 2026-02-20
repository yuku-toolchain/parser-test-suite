var finallyCount = 0;
var caught = false;
function* iterator() {
  try {
    yield Promise.reject("reject");
  } finally {
    finallyCount += 1;
  }
}