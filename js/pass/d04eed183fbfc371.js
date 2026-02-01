new Function("a1,a2", "a3", "this.shifted=a1;").call(null, [3, 2, 1]);
if (this["shifted"][0] !== 3 || this["shifted"][1] !== 2 || this["shifted"][2] !== 1) {}