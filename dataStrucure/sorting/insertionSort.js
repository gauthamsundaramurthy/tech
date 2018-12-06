
/* Insertion sort */

function insertionSort (arr) {

  let i, j, temp;

  console.log('Original array --> ');

  arr.forEach(element => console.log(` ${element}`) )


  for (i = 1 ; i <= arr.length-1; i++) {
    j = i;

    while ( j > 0 && arr[j-1] > arr[j]) {
      temp       = arr[j];
      arr[j]   = arr[j-1];
      arr[j-1] = temp;

      j--;
    }
  }

  console.log('After sorting --> ');

  arr.forEach(element => console.log(` ${element}`) )
}

let arr = [5,99,45,66,2,15]
insertionSort(arr)
