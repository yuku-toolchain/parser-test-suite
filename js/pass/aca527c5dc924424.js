class C {
  #field;
  static *isNameIn() {
    return (#field in (yield));
  }
}
let iter1 = C.isNameIn();
iter1.next();
let iter2 = C.isNameIn();
iter2.next();