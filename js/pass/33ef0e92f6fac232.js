let matchResult = (/(?:(?:(?<x>a)|(?<x>b))\k<x>){2}/).test("aabb");
let notMatched = (/(?:(?:(?<x>a)|(?<x>b))\k<x>){2}/).test("abab");