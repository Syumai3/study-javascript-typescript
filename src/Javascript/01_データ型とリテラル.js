console.log(typeof true); // boolean

console.log(typeof 1); // number

console.log("複数業の\n文字列を\n入れたい"); // 複数業の 文字列を 入れたい

// オブジェクト
const obj = {
  key: "value",
};

console.log(obj.key);
console.log(obj["key"]);

// 配列
const aemptyArary = [];
const arr = [1, 2, 3, 4, 5];

console.log(arr[0]);
console.log(arr[4]);

// 正規表現
const numberRegExp = /\d+/;
console.log(numberRegExp.test("123"));

// 文字列をラップしたラッパーオブジェクト
// プリミティブ型でもオブジェクトのようにプロパティやメソッドを参照できる
const str = new String("文字列");
console.log(typeof str);
console.log(str.length);

let str2 = "文字列";
str[0] = "あ";
console.log(str2);
