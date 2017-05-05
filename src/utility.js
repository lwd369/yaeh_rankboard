// flow

export default class Utility {
  static addRankNumber(arr: array, length: number): array {
    let index = 0;
    const rankdArray = arr.map((element) => {
      index += 1;
      element.no = index;
      return element;
    });

    if (rankdArray.length < length) {
      for (let index = rankdArray.length; index < length; index++) {
        rankdArray[index] = {};
      }
    }

    rankdArray.length = length;
    return rankdArray;
  }
}