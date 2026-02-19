var numBak = Number;
try {
  Number = 12;
} finally {
  Number = numBak;
}