// #3

async function asyncCall() {
  console.log("calling");
  const result = await new Promise((resolve) =>
    setTimeout(() => resolve("resolved"), 3000)
  );
  console.log(result);
}
asyncCall();
