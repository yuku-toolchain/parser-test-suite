let value;
function await() {
  return value;
}
class C {
  #field;
  static isNameIn() {
    return (#field in await(null));
  }
}
value = new C();
value = {};