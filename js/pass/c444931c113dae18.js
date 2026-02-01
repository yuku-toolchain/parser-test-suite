let source = "(?<fst>.)(?<snd>.)|(?<thd>x)";
for (let flags of ["g", "gu"]) {
  let re = new RegExp(source, flags);
}
for (let flags of ["", "u"]) {
  let re = new RegExp(source, flags);
}