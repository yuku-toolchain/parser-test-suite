function Base() {}
Base.prototype = {
  set constructor(_) {}
};
class C extends Base {}
new C();