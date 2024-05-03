// 数値プロパティを倍増
// Dimensions 型の数値プロパティの値を2倍にする関数を作成してください。
// この関数は Dimensions オブジェクトを受け取り、同じキーで値が2倍になった新しいオブジェクトを返すものとします。

type Dimensions = {
  width: number;
  height: number;
  depth: number;
};

// 解答
function DoubleDimensions(dimensions: Dimensions): Dimensions {
  return {
    width: dimensions.width * 2,
    height: dimensions.height * 2,
    depth: dimensions.depth * 2,
  };
}
