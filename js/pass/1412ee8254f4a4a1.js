try {
  true instanceof true;
} catch (e) {
  if (e instanceof TypeError !== true) {}
}
try {
  1 instanceof 1;
} catch (e) {
  if (e instanceof TypeError !== true) {}
}
try {
  "string" instanceof "string";
} catch (e) {
  if (e instanceof TypeError !== true) {}
}
try {
  undefined instanceof undefined;
} catch (e) {
  if (e instanceof TypeError !== true) {}
}
try {
  null instanceof null;
} catch (e) {
  if (e instanceof TypeError !== true) {}
}