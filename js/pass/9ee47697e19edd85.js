function inspect(array) {
  return [Reflect.has(array, 0), Reflect.has(array, 1), Reflect.has(array, 2), Reflect.has(array, 3), Reflect.has(array, 4)].join(",");
}