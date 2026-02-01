try {
  throw 1;
  throw 2;
  throw 3;
} catch (e) {
  if (e !== 1) {}
}
try {
  {
    throw 1;
    throw 2;
  }
  throw 3;
} catch (e) {
  if (e !== 1) {}
}
try {
  throw 1;
  {
    throw 2;
    throw 3;
  }
} catch (e) {
  if (e !== 1) {}
}