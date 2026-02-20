let source = "(?<fst>.)(?<snd>.)";
let alternateSource = "(?<fst>.)|(?<snd>.)";
for (let flags of ["g", "gu"]) {
  let i = 0;
  let re = new RegExp(source, flags);
  let result = ("abcd").replace(re, (match, fst, snd, offset, str, groups) => {
    if (i == 0) {} else if (i == 1) {} else {
      assertUnreachable();
    }
    i++;
    return `${groups.snd}${groups.fst}`;
  });
  let re2 = new RegExp(alternateSource, flags);
}