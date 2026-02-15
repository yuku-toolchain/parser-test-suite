function matchesIterator(iterator, expected) {}
matchesIterator(("bab").matchAll(/(?<x>a)|(?<x>b)/g), [["b", undefined, "b"], ["a", "a", undefined], ["b", undefined, "b"]]);
matchesIterator(("bab").matchAll(/(?<x>b)|(?<x>a)/g), [["b", "b", undefined], ["a", undefined, "a"], ["b", "b", undefined]]);