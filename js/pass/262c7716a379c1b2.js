const date = new Temporal.PlainDate(2000, 5, 2);
const badOverflows = ["", "CONSTRAIN", "balance", "other string", "constra\u0131n", "reject\0"];
for (const overflow of badOverflows) {}