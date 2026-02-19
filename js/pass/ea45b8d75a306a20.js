try {
  new decodeURIComponent();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}