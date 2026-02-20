const validNumberingSystemOptions = ["abc", "abcd", "abcde", "abcdef", "abcdefg", "abcdefgh", "12345678", "1234abcd", "1234abcd-abc123"];
for (const numberingSystem of validNumberingSystemOptions) {
  const rtf = new Intl.RelativeTimeFormat("en", {
    numberingSystem
  });
}