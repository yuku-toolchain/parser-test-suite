var result;
class A {
  *foo(a) {}
}
result = A.prototype.foo(3).next();