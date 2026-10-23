assert(/[/]/.test("/"), "Forward slash");
assert.sameValue(/[/]/.test("x"), false, "Forward slash");
assert(/[
assert.sameValue(/[