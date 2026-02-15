var inCatch = false;
try {
  throw "expected_message";
} catch (err) {
  inCatch = true;
}