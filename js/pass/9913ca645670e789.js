function testSequence(inputs, inputsLabel, minLength, maxLength) {
  function test(options, optionsLabel) {
    var label = optionsLabel + ", " + inputsLabel;
    var it = Iterator.zip(inputs, options);
    assertZipped(it, inputs, minLength, label);
    if (minLength === maxLength) {
      assertIteratorResult(it.next(), undefined, true, label + ": after completion");
    } else {}
  }
  test({
    mode: "strict"
  }, "options = { mode: 'strict' }");
}
forEachSequenceCombination(testSequence);