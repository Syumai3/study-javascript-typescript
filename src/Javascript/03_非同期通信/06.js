//#6
async function nestedCalls() {
  console.log(await Promise.resolve("done"));
}
fetchData().then((data) => {
  console.log(data);
  return fetchData2();
});
