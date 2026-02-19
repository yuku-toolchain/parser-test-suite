function assertOnlyOwnProperties(object, props, message) {}
function reviverWithExpectedSources(expectedSources) {
  let i = 0;
  return function reviver(key, value, context) {
    if (expectedSources[i] !== undefined) {
      assertOnlyOwnProperties(context, ["source"], "the JSON value is a primitve value, its context should only have a source property");
    } else {
      assertOnlyOwnProperties(context, [], "the JSON value is an Array or Object, its context should have no property");
      i++;
    }
    return value;
  };
}