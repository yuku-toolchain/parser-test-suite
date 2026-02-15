const matcher = /(?:(?<x>a)|(?<y>a)(?<x>b))(?:(?<z>c)|(?<z>d))/d;
const threeMatchResult = ("abc").match(matcher);
const twoMatchResult = ("ad").match(matcher);
const iteratedMatcher = /(?:(?:(?<x>a)|(?<x>b)|c)\k<x>){2}/d;
const matchedInPrevIterationResult = ("aac").match(iteratedMatcher);