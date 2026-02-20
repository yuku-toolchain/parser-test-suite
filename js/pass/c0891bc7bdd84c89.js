const date = new Temporal.PlainDate(2000, 5, 2);
const tests = [["2000-05-02T15:23", "uppercase T"], ["2000-05-02t15:23", "lowercase T"], ["2000-05-02 15:23", "space between date and time"]];
tests.forEach(([arg, description]) => {});