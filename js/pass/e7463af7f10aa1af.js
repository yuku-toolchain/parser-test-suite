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
const longArray = JSON.parse('[1, "2", true, null, {"x": 1, "y": 1}]', reviverWithExpectedSources(['1', '"2"', 'true', 'null', '1', '1']));
assertOnlyOwnProperties(longArray[4], ["x", "y"], "array, element 5");