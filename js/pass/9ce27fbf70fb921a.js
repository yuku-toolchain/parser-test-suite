const await = './module-code_FIXTURE.js';
const getpromise = () => import(await);
async function fn() {
  const ns1 = await getpromise();
}