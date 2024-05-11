// #2

new Promise((resolve, reject) => {
  throw new Error("Something went wrong!");
})
  .then((value) => {
    console.log("This will not run.");
  })
  .catch((error) => {
    console.log(error);
  });
