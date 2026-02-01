try {
  if (true) (function () {
    throw "instatement";
  })();
} catch (e) {
  if (e !== "instatement") {}
}
try {
  if (false) (function () {
    throw "truebranch";
  })();
  (function () {
    throw "missbranch";
  })();
} catch (e) {
  if (e !== "missbranch") {}
}