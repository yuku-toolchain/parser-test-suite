var x;
function poison() {}
x = undefined;
x = ((undefined ?? 42) ?? undefined) ?? poison();
x = undefined;
x = (42 ?? undefined) ?? poison();
x = undefined;
x = (undefined ?? 42) ?? poison();
x = undefined;
x = 42 ?? poison();