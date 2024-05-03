// Mapped Type with Conditional Types
// 以下の Config 型が定義されています。
// この型に基づき、各プロパティが boolean 型ならばそのプロパティを必須に、
// それ以外の型ならばプロパティをオプショナルにする新しい型 AdjustedConfig を作成してください。

interface Config {
  darkMode: boolean;
  userId: number;
  username: string;
}

// 解答
type AdjustedConfig = {
  [K in keyof Config]: Config[K] extends boolean
    ? Config[K]
    : Config[K] | undefined;
};
