try {} catch (e) {
  if (e instanceof Test262Error) {
    throw e;
  }
}
if (RegExp.hasOwnProperty('prototype') !== true) {}