{
  const date = new Date(2019, 7, 10, 1, 2, 3, 234);
  let dtf = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  dtf = new Intl.DateTimeFormat("en", {
    minute: "numeric",
    second: "numeric"
  });
  dtf = new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    minute: "numeric"
  });
  dtf = new Intl.DateTimeFormat("en", {
    dateStyle: "long",
    timeStyle: "short"
  });
}
{
  const date1 = new Date(2019, 7, 10, 1, 2, 3, 234);
  const date2 = new Date(2019, 7, 10, 1, 2, 3, 235);
  let dtf = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  dtf = new Intl.DateTimeFormat("en", {
    minute: "numeric",
    second: "numeric"
  });
  dtf = new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    minute: "numeric"
  });
  dtf = new Intl.DateTimeFormat("en", {
    dateStyle: "long",
    timeStyle: "short"
  });
}