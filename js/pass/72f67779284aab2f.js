var startedCount = 0;
var finallyCount = 0;
var iterationCount = 0;
function* values() {
  startedCount += 1;
  try {
    yield;
  } finally {
    finallyCount += 1;
  }
}
var iterable = values();
for (var x of iterable) {
  iterationCount += 1;
  break;
}