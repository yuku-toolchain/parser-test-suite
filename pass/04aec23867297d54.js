var log = [];
var obj = {
  [Symbol.iterator]() {
    var throwCount = 0;
    return {
      name: "syncIterator",
      get next() {
        log.push({
          name: "get next"
        });
        return function () {
          return {
            value: "next-value-1",
            done: false
          };
        };
      },
      get throw() {
        log.push({
          name: "get throw",
          thisValue: this
        });
        return function () {
          log.push({
            name: "call throw",
            thisValue: this,
            args: [...arguments]
          });
          throwCount++;
          if (throwCount == 1) {
            return {
              name: "throw-result-1",
              get value() {
                log.push({
                  name: "get throw value (1)",
                  thisValue: this
                });
                return "throw-value-1";
              },
              get done() {
                log.push({
                  name: "get throw done (1)",
                  thisValue: this
                });
                return false;
              }
            };
          }
          return {
            name: "throw-result-2",
            get value() {
              log.push({
                name: "get throw value (2)",
                thisValue: this
              });
              return "throw-value-2";
            },
            get done() {
              log.push({
                name: "get throw done (2)",
                thisValue: this
              });
              return true;
            }
          };
        };
      }
    };
  }
};
var callCount = 0;
class C {
  async *#gen() {
    callCount += 1;
    log.push({
      name: "before yield*"
    });
    var v = yield* obj;
    log.push({
      name: "after yield*",
      value: v
    });
    return "return-value";
  }
  get gen() {
    return this.#gen;
  }
}
const c = new C();
var iter = c.gen();
iter.next().then(v => {
  iter.throw("throw-arg-1").then(v => {
    iter.throw().then(v => {}).then($DONE, $DONE);
  }).catch($DONE);
}).catch($DONE);