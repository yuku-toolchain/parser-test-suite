const dtm = new Temporal.PlainDateTime(2000, 10, 29, 1, 45);
for (const disambiguation of ["compatible", "earlier", "later", "reject"]) {
  const result = dtm.toZonedDateTime("UTC", {
    disambiguation
  });
}
for (const disambiguation of ["compatible", "earlier", "later", "reject"]) {
  const result = dtm.toZonedDateTime("+03:30", {
    disambiguation
  });
}