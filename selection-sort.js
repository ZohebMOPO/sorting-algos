function sSort(arr) {
  let minIdx,
    temp,
    len = arr.length;

  for (let i = 0; i < len; i++) {
    minIdx = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
  }

  return arr;
}
