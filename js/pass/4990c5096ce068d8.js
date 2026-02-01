var callCount = 0;
async function* f(_ = (function () {})()) {
  callCount = callCount + 1;
}