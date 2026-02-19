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
assertOnlyOwnProperties(JSON.parse('{}', reviverWithExpectedSources([])), [], "empty object");
const singleProp = JSON.parse('{"42":37}', reviverWithExpectedSources(['37']));
assertOnlyOwnProperties(singleProp, ["42"], "single numeric property key");
const multipleProps = JSON.parse('{"x": 1, "y": 2}', reviverWithExpectedSources(['1', '2']));
assertOnlyOwnProperties(multipleProps, ["x", "y"], "multiple properties");
const arrayProps = JSON.parse('{"x": [1,2], "y": [2,3]}', reviverWithExpectedSources(['1', '2', undefined, '2', '3', undefined]));
assertOnlyOwnProperties(arrayProps, ["x", "y"], "array-valued properties");
const objectProps = JSON.parse('{"x": {"x": 1, "y": 2}}', reviverWithExpectedSources(['1', '2', undefined, undefined]));
assertOnlyOwnProperties(objectProps, ["x"], "object-valued properties");
assertOnlyOwnProperties(objectProps.x, ["x", "y"], "object-valued properties, value of x");