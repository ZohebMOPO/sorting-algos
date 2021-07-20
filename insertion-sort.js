function insertionSort(arr) {
  var el, j;
  for (let i = 1; i < arr.length; i++) {
    el = arr[i];
    j = i;

    while (j > 0 && arr[j - 1] > toInsert) {
      arr[j] = arr[j - 1];
      j--;
    }

    arr[j] = el;
  }

  return arr;
}
