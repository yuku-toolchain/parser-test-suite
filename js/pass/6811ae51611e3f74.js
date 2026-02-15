try {} catch (e) {
  if (e instanceof Test262Error) {
    throw e;
  }
}