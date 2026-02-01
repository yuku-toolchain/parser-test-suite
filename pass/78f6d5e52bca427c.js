var validOptions = [undefined, {}];
var invalidOptions = [null, true, "", Symbol(), 0, 0n];
Iterator.zipKeyed({});
for (var options of validOptions) {
  Iterator.zipKeyed({}, options);
}
for (var options of invalidOptions) {}