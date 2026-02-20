try {
  throw 1;
} catch (e) {
  if (!(e !== "1")) {}
}
try {
  throw "1";
} catch (e) {
  if (!(1 !== e)) {}
}