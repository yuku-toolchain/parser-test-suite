const yearmonth = new Temporal.PlainYearMonth(2000, 5);
const badOverflows = ["", "CONSTRAIN", "balance", "other string", "constra\u0131n", "reject\0"];
for (const overflow of badOverflows) {}