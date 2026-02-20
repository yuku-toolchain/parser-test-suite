const matcher = /(?:(?<x>a)|(?<y>a)(?<x>b))(?:(?<z>c)|(?<z>d))/;
const threeMatchResult = matcher.exec("abc");
const twoMatchResult = matcher.exec("ad");
const iteratedMatcher = /(?:(?:(?<x>a)|(?<x>b)|c)\k<x>){2}/;
const matchedInPrevIterationResult = iteratedMatcher.exec("aac");