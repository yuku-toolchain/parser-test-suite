function Parent() {}
Parent.test262 = 'test262';
var value;
class C extends Parent {
  static {
    value = super.test262;
  }
}