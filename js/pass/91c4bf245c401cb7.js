const matcher = /(?:(?<x>a)|(?<y>a)(?<x>b))(?:(?<z>c)|(?<z>d))/;
const threeMatchResult = ("abc").match(matcher);
const twoMatchResult = ("ad").match(matcher);
const iteratedMatcher = /(?:(?:(?<x>a)|(?<x>b)|c)\k<x>){2}/;
const matchedInPrevIterationResult = ("aac").match(iteratedMatcher);