try {
  new decodeURI();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}