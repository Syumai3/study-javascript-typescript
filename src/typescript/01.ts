// Read-Only Mapped Type
// User 型が与えられています。この型のすべてのプロパティを読み取り専用にする新しい型 ReadOnlyUser を作成してください。

interface User {
  id: number;
  name: string;
  email: string;
}

// 解答
type ReadOnlyUser = {
  readonly [K in keyof User]: User[K];
};
