// Optional Mapped Type
// 以下の Product 型が定義されています。
// この型のすべてのプロパティをオプショナルにする新しい型 OptionalProduct を作成してください。

interface Product {
  productId: number;
  title: string;
  price: number;
}

// 解答
type OptionalProduct = {
  [K in keyof Product]?: Product[K];
};
