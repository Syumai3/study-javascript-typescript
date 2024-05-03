// プロパティの型を変更
// 以下の Employee 型が定義されています。
// この型のプロパティ salary の型を number から string に変更する新しい型 UpdatedEmployee を作成してください。

interface Employee {
  name: string;
  position: string;
  salary: number;
}

// 解答
type UpdatedEmployee = {
  [K in keyof Employee]: Employee[K] extends "salary" ? string : Employee[K];
};
