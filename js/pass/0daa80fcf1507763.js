let source = "(.)(.)|(x)";
for (let flags of ["", "u"]) {
  let re = new RegExp(source, flags);
}