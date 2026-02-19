var log = [];
var obj = {
  get [Symbol.iterator]() {
    log.push({
      name: "get [Symbol.iterator]"
    });
  },
  get [Symbol.asyncIterator]() {
    log.push({
      name: "get [Symbol.asyncIterator]",
      thisValue: this
    });
    return function () {
      log.push({
        name: "call [Symbol.asyncIterator]",
        thisValue: this,
        args: [...arguments]
      });
      var nextCount = 0;
      return {
        name: "asyncIterator",
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
                name: "next-promise-1",
                get then() {
                  log.push({
                    name: "get next then (1)",
                    thisValue: this
                  });
                  return function (resolve) {
                    log.push({
                      name: "call next then (1)",
                      thisValue: this,
                      args: [...arguments]
                    });
                    resolve({
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
                    });
                  };
                }
              };
            }
            return {
              name: "next-promise-2",
              get then() {
                log.push({
                  name: "get next then (2)",
                  thisValue: this
                });
                return function (resolve) {
                  log.push({
                    name: "call next then (2)",
                    thisValue: this,
                    args: [...arguments]
                  });
                  resolve({
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
                  });
                };
              }
            };
          };
        }
      };
    };
  }
};
var callCount = 0;
var C = class {
  async *gen() {
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
};
var gen = C.prototype.gen;
var iter = gen();
iter.next("next-arg-1").then(v => {
  iter.next("next-arg-2").then(v => {}).then($DONE, $DONE);
}).catch($DONE);