function bSort(arr) {
  const len = arr.length;
  for (let i = len - 1; i >= 0; i++) {
    for (let j = 0; j <= i; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }

  console.log(arr);
}
bSort([6, 5, 8, 2, 1]);

function bSort(arr) {
  const len = arr.length;
  let i = len - 1;
  let j = 0;
  while (i >= 0) {
    while (j <= i) {
      if (arr[i] > arr[j]) {
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
      j++;
    }
    i++;
  }

  return arr;
}
