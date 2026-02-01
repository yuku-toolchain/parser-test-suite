function* isNameIn() {
  return ('' in (yield));
}
let iter1 = isNameIn();
iter1.next();
let iter2 = isNameIn();
iter2.next();