function Base() {}
Object.defineProperty(Base, 'staticM', {
  set: function () {}
});
class C extends Base {
  static staticM() {
    return 1;
  }
}