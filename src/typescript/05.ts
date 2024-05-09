// オプショナルなプロパティを必須に変換
// 与えられた型 PartialPerson のすべてのプロパティを必須に変換する新しい型 RequiredPerson を作成してください。

interface PartialPerson {
  name?: string;
  age?: number;
  email?: string;
}

// 解答
type RequiredPerson = {
  [K in keyof PartialPerson]-?: PartialPerson[K];
};
