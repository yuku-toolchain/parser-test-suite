var x;
x = undefined;
x = (null ?? 41) && 42;
x = undefined;
x = null ?? (41 && 42);
x = undefined;
x = (41 && 42) ?? null;
x = undefined;
x = 41 && (null ?? 42);