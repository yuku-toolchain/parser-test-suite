const invalidStrings = [["1970-01-01T00:00[UTC][U-CA=iso8601]", "invalid capitalized key"], ["1970-01-01T00:00[UTC][u-CA=iso8601]", "invalid partially-capitalized key"], ["1970-01-01T00:00[UTC][FOO=bar]", "invalid capitalized unrecognized key"]];
invalidStrings.forEach(([arg, descr]) => {
  for (const offset of ["use", "prefer", "ignore", "reject"]) {}
});