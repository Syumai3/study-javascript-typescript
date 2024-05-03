// プロパティの型を変更
// 以下の Employee 型が定義されています。
// この型のプロパティ salary の型を number から string に変更する新しい型 UpdatedEmployee を作成してください。

interface Employee {
  name: string;
  position: string;
  salary: number;
}

// ここに UpdatedEmployee 型を作成してください。

type UpdatedEmployee = {
  [K in keyof Employee]: Employee[K] extends "salary" ? string : Employee[K];
};
