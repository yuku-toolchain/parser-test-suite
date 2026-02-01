const zdt = new Temporal.ZonedDateTime(0n, "UTC");
const badStrings = ['PREVIOUS', 'following', 'next\0', 'prevıous'];
for (const badString of badStrings) {}