var log = [];
var obj = {
  [Symbol.iterator]() {
    var returnCount = 0;
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
      get return() {
        log.push({
          name: "get return",
          thisValue: this
        });
        return function () {
          log.push({
            name: "call return",
            thisValue: this,
            args: [...arguments]
          });
          returnCount++;
          if (returnCount == 1) {
            return {
              name: "return-result-1",
              get value() {
                log.push({
                  name: "get return value (1)",
                  thisValue: this
                });
                return "return-value-1";
              },
              get done() {
                log.push({
                  name: "get return done (1)",
                  thisValue: this
                });
                return false;
              }
            };
          }
          return {
            name: "return-result-2",
            get value() {
              log.push({
                name: "get return value (2)",
                thisValue: this
              });
              return "return-value-2";
            },
            get done() {
              log.push({
                name: "get return done (2)",
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
var gen = async function* g() {
  callCount += 1;
  log.push({
    name: "before yield*"
  });
  yield* obj;
};
var iter = gen();
iter.next().then(v => {
  iter.return("return-arg-1").then(v => {
    iter.return().then(v => {}).then($DONE, $DONE);
  }).catch($DONE);
}).catch($DONE);