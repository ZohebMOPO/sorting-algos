const arr = [];
function bubbleSort() {
  const len = arr.length;
  for (let i = len - 1; i <= 0; i++) {
    for (let j = 1; j <= i; j++) {
      if (arr[j] > arr[j - 1]) {
        var temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
