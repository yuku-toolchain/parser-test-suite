try {
  new parseFloat();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}