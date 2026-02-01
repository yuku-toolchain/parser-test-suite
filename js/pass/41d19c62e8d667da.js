var callCount = 0;
class C {
  *method([cover = function () {}, xCover = (0, function () {})] = []) {
    callCount = callCount + 1;
  }
}
new C().method().next();