const tests = [["chinese", 2020, 4, 23, "relatedYear"], ["chinese", 2019, 4, 15, "relatedYear"], ["dangi", 2020, 4, 23, "relatedYear"], ["dangi", 2019, 4, 15, "relatedYear"], ["hebrew", 2024, 2, 15, "year"], ["hebrew", 2023, 2, 15, "year"]];
for (const [calendar, isoYear, zeroMonth, day, yearPartName] of tests) {
  const formatter = new Intl.DateTimeFormat(`en-u-ca-${calendar}`, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const date = new Date(isoYear, zeroMonth, day);
  const parts = formatter.formatToParts(date);
  const monthPart = parts.find(({type}) => type === "month");
  const yearPart = parts.find(({type}) => type === yearPartName);
  const formatted = formatter.format(date);
  const reconstructed = parts.map(part => part.value).join("");
}