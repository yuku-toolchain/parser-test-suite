class C {
  #field;
  static async isNameIn(value) {
    return (#field in await value);
  }
}
C.isNameIn(new C()).then(function (result) {
  return C.isNameIn({});
}).then(function (result) {}).then($DONE, $DONE);