try {
  new encodeURI();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}