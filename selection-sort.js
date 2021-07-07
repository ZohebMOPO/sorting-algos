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

    temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }

  return arr;
}

function sSort(arr) {
  let minIdx,
    temp,
    len = arr.length;
  let i = 0,
    j = i++;
  while (i < len) {
    minIdx = 1;
    while (j < len) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
      j++;
    }
    temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
    i++;
  }

  return arr;
}
