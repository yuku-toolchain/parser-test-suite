var count = 0;
class C {
  constructor() {
    count++;
  }
}
var desc = Object.getOwnPropertyDescriptor(C.prototype, 'constructor');
var c = new C();