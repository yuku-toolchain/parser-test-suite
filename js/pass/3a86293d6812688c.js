var finallyCount = 0;
function Reject() {}
function* iterator() {
  try {
    yield Promise.reject(new Reject());
  } finally {
    finallyCount += 1;
  }
}
async function* asyncIterator() {
  yield* iterator();
}