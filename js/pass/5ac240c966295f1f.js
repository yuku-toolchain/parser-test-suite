let source = "(?<fst>.)(?<snd>.)";
let alternateSource = "(?<fst>.)|(?<snd>.)";
for (let flags of ["", "u"]) {
  let i = 0;
  let re = new RegExp(source, flags);
  let result = ("abcd").replace(re, (match, fst, snd, offset, str, groups) => {
    return `${groups.snd}${groups.fst}`;
  });
  let re2 = new RegExp(alternateSource, flags);
}