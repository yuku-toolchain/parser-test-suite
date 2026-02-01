var log = [];
var obj = {
  get [Symbol.iterator]() {
    log.push({
      name: "get [Symbol.iterator]",
      thisValue: this
    });
    return function () {
      log.push({
        name: "call [Symbol.iterator]",
        thisValue: this,
        args: [...arguments]
      });
      var nextCount = 0;
      return {
        name: "syncIterator",
        get next() {
          log.push({
            name: "get next",
            thisValue: this
          });
          return function () {
            log.push({
              name: "call next",
              thisValue: this,
              args: [...arguments]
            });
            nextCount++;
            if (nextCount == 1) {
              return {
                name: "next-result-1",
                get value() {
                  log.push({
                    name: "get next value (1)",
                    thisValue: this
                  });
                  return "next-value-1";
                },
                get done() {
                  log.push({
                    name: "get next done (1)",
                    thisValue: this
                  });
                  return false;
                }
              };
            }
            return {
              name: "next-result-2",
              get value() {
                log.push({
                  name: "get next value (2)",
                  thisValue: this
                });
                return "next-value-2";
              },
              get done() {
                log.push({
                  name: "get next done (2)",
                  thisValue: this
                });
                return true;
              }
            };
          };
        }
      };
    };
  },
  get [Symbol.asyncIterator]() {
    log.push({
      name: "get [Symbol.asyncIterator]"
    });
    return null;
  }
};
var callCount = 0;
var gen = async function* () {
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
};
var iter = gen();
iter.next("next-arg-1").then(v => {
  iter.next("next-arg-2").then(v => {}).then($DONE, $DONE);
}).catch($DONE);