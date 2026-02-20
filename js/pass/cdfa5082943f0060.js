function verifyFormatParts(actual, expected, message) {
  for (let i = 0; i < actual.length; ++i) {}
}
function CustomIterator(array) {
  this.i = 0;
  this.array = array;
}
CustomIterator.prototype[Symbol.iterator] = function () {
  return this;
};
CustomIterator.prototype.next = function () {
  if (this.i >= this.array.length) {
    return {
      "done": true
    };
  }
  return {
    "value": this.array[this.i++],
    "done": false
  };
};
const transforms = [a => a, a => a[Symbol.iterator](), a => new CustomIterator(a)];
const lf = new Intl.ListFormat("es-ES", {
  "style": "long",
  "type": "unit"
});
for (const f of transforms) {
  verifyFormatParts(lf.formatToParts(f([])), []);
  verifyFormatParts(lf.formatToParts(f(["foo"])), [{
    "type": "element",
    "value": "foo"
  }]);
  verifyFormatParts(lf.formatToParts(f(["foo", "bar"])), [{
    "type": "element",
    "value": "foo"
  }, {
    "type": "literal",
    "value": " y "
  }, {
    "type": "element",
    "value": "bar"
  }]);
  verifyFormatParts(lf.formatToParts(f(["foo", "bar", "baz"])), [{
    "type": "element",
    "value": "foo"
  }, {
    "type": "literal",
    "value": ", "
  }, {
    "type": "element",
    "value": "bar"
  }, {
    "type": "literal",
    "value": " y "
  }, {
    "type": "element",
    "value": "baz"
  }]);
  verifyFormatParts(lf.formatToParts(f(["foo", "bar", "baz", "quux"])), [{
    "type": "element",
    "value": "foo"
  }, {
    "type": "literal",
    "value": ", "
  }, {
    "type": "element",
    "value": "bar"
  }, {
    "type": "literal",
    "value": ", "
  }, {
    "type": "element",
    "value": "baz"
  }, {
    "type": "literal",
    "value": " y "
  }, {
    "type": "element",
    "value": "quux"
  }]);
}
verifyFormatParts(lf.formatToParts("foo"), [{
  "type": "element",
  "value": "f"
}, {
  "type": "literal",
  "value": ", "
}, {
  "type": "element",
  "value": "o"
}, {
  "type": "literal",
  "value": " y "
}, {
  "type": "element",
  "value": "o"
}]);