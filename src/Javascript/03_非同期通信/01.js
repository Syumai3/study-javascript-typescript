// #1
const promise = new Promise((resolve, reject) => {
  // ここでresolveを呼び出す
  resolve("Hello, Promise!");
});

promise.then((value) => {
  console.log(value);
});
