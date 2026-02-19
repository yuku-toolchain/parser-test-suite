var executed = false;
class C {
  x = eval('executed = true; () => new.target;');
}
var c = new C();