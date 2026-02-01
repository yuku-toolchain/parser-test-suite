var objBak = Object;
try {
  Object = 12;
} finally {
  Object = objBak;
}