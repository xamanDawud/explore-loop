var arr = [1, 23, 4, 5, 6, 4, 323, 56];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] == 323) {
    continue;
  }
  console.log(arr[i]);
}
