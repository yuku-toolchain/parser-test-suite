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
try {
  for (var x of iterable) {
    iterationCount += 1;
    throw 0;
  }
} catch (err) {}