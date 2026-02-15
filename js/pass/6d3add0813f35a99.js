var non_ident = "~`!@#$%^&*()-+={[}]|\\:;'<,>./?" + '"';
for (var k = 0; k < non_ident.length; ++k) {
  var arr = new RegExp("\\" + non_ident[k], "g").exec(non_ident);
}