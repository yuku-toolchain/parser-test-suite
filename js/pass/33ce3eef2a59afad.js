function Base() {}
Base.prototype = {
  set m(_) {}
};
class C extends Base {
  m() {
    return 1;
  }
}