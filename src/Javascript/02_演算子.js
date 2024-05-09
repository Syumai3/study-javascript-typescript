// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// ここにコードを書いて、偶数だけを含む新しい配列を作成してください。

// const filterNumber = numbers.filter((number) => number % 2 === 0);

// console.log(filterNumber);

// const names = ["Alice", "Bob", "Charlie", "Diana"];
// // ここにコードを書いて、各名前の先頭に "Hello, " を付け加えた新しい配列を作成してください。

// const filterName = names.map((name) => `Hello, ${name}`);

// console.log(filterName);

// const prices = [100, 200, 300, 400, 500];
// // ここにコードを書いて、価格の合計を計算してください。

// const totalPrice = prices.reduce((acc, cur) => acc + cur, 0);

// console.log(totalPrice);

// 問題 1
// 整数の配列が与えられたとき、すべての数を2倍にして新しい配列を作成してください。

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const dubleNumbers = numbers1.map((number) => number * 2);

console.log(dubleNumbers);

// 問題 2
// 文字列の配列から、5文字以上の単語だけを含む新しい配列を作成してください。
const words1 = ["Apple", "Banana", "Orange", "Mango", "Strawberry"];

const filterWords = words1.filter((word) => word.length >= 5);

console.log(filterWords);

// 問題 3
// 商品の配列があり、各商品には price プロパティがあります。全商品の価格の合計を計算してください。
const prices = [
  { price: 100 },
  { price: 200 },
  { price: 300 },
  { price: 400 },
  { price: 500 },
];

const totalPrice = prices.reduce((acc, item) => acc + item.price, 0);

console.log(totalPrice);

// 問題 4
// 数値の配列から最初の偶数を見つけてください。
const array = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];

const evenNumber = array.find((number) => number % 2 === 0);
console.log(evenNumber);

// 問題 5
// 名前の配列を使用して、各名前の後ろにその名前の文字数を追加した新しい配列を作成してください（例：["Alice", "Bob"] → ["Alice (5)", "Bob (3)"]）。
const names = ["Alice", "Bob", "Charlie", "Diana"];

const nameWithCount = names.map((name) => `${name}(${name.length})`);
console.log(nameWithCount);

// 問題 6
// 人物の配列があり、各人物には age プロパティがあります。18歳未満の人だけを含む新しい配列を作成してください。
const people1 = [
  { name: "Alice", age: 18 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 15 },
  { name: "Diana", age: 20 },
];

const peopleUnder18 = people1.filter((people) => people.age < 18);
console.log(peopleUnder18);

// 問題 7
// 数値の配列が与えられたとき、その配列の最大値を見つけてください。
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 80];

// const maxNumber = numbers.reduce((acc, cur) => (acc < cur ? cur : acc));
const maxNumber = Math.max(...numbers);

console.log(maxNumber);

// 問題 8
// 文字列の配列が与えられたとき、全ての文字列を連結して一つの長い文字列を作成してください。
const words2 = ["Apple", "Banana", "Orange", "Mango", "Strawberry"];

const maxWord = words2.reduce((acc, cur) => acc + cur, "");
console.log(maxWord);

// 問題 9
// 人物の配列があり、各人物には isActive プロパティ（ブール値）があります。isActive が true の人物だけを含む新しい配列を作成してください。
const people = [
  { name: "Alice", isActive: true },
  { name: "Bob", isActive: false },
  { name: "Charlie", isActive: true },
  { name: "Diana", isActive: false },
];

const activePeople = people.filter((i) => i.isActive);
console.log(activePeople);

// 問題 10
// 配列の各要素を小文字に変換して、元の配列とは異なる新しい配列を作成してください。
const words = ["Apple", "Banana", "Orange", "Mango", "Strawberry"];

const lowerWord = words.map((word) => word.toLowerCase());
console.log(lowerWord);
