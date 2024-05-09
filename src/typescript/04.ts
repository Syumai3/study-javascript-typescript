// Reverse Mapped Type
// 文字列リテラル型のユニオン type Keys = 'first' | 'second' | 'third'; があります。
// このユニオンに対して、それぞれのキーが boolean の値を持つオブジェクト型 Flags を作成してください。

type Keys = "first" | "second" | "third";

// 解答
type Flags = {
  [K in Keys]: boolean;
};
