var caught;
class C extends Object {
  constructor() {
    try {
      super['x'];
    } catch (err) {
      caught = err;
    }
  }
}
try {
  new C();
} catch (_) {}