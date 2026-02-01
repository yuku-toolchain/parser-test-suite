const validLanguageOptions = [[{
  toString() {
    return 'de';
  }
}, 'de']];
for (const [language, expected] of validLanguageOptions) {
  let expect = expected || 'en';
  expect = (expected || 'en') + '-US';
}
const invalidLanguageOptions = [null, 'zh-cmn', 'ZH-CMN', 'abcd'];
for (const language of invalidLanguageOptions) {}