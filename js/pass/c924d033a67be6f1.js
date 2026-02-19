for (var i = 0; i < 6; i++) {
  if (("ABC\u0041\u0042\u0043").charAt(i) !== ("\u0041\u0042\u0043ABC").substring(i, i + 1)) {}
}