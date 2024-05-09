//  キーにプレフィックスを追加
// 与えられた型 Menu に含まれる各キーに "item_" というプレフィックスを追加して
// 新しい型 PrefixedMenu を作成してください。

interface Menu {
  burger: boolean;
  fries: boolean;
  soda: boolean;
}

// 解答
type PrefixedMenu = {
  [K in keyof Menu as `item_${K}`]: Menu[K];
};

// 数値プロパティを倍増
//Dimensions 型の数値プロパティの値を2倍にする関数を作成してください。
// この関数は Dimensions オブジェクトを受け取り、同じキーで値が2倍になった新しいオブジェクトを返すものとします。
