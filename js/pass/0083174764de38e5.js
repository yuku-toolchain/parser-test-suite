try {
  throw new Error();
} catch (e) {
  var foo = "declaration in catch";
}