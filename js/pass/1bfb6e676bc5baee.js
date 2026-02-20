try {
  if ((function () {
    throw 1;
  })()) abracadabra;
} catch (e) {
  if (e !== 1) {}
}
try {
  if ((function () {
    throw 1;
  })()) abracadabra; else blablachat;
} catch (e) {
  if (e !== 1) {}
}