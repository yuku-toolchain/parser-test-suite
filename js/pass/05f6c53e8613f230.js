let ArrayIteratorPrototype = Object.getPrototypeOf([].values());
let values;
ArrayIteratorPrototype.next = function () {
  let done = values.length === 0;
  let value = values.pop();
  return {
    value,
    done
  };
};