/* Merge Sort */

function merge(low, mid, high) {
  let index1, index2, i;
  let temp = []

  for(index1 = low, index2 = mid + 1, i = low; index1 <= mid && index2 <= high; i++) {

    if(arr[index1] <= arr[index2])
    {
      temp[i] = arr[index1++]; 
    }   
    else
    temp[i] = arr[index2++];
  }
  
  while(index1 <= mid)    
    temp[i++] = arr[index1++];

  while(index2 <= high)   
    temp[i++] = arr[index2++];

  for(i = low; i <= high; i++)
    arr[i] = temp[i];
}

function mergeSort(low, high) {
  if(low < high) {
    let mid = Math.floor( (low + high) / 2);
    mergeSort(low, mid);
    mergeSort(mid+1, high);
    merge(low, mid, high);
   } else { 
    return;
   }   
}
 
let arr = [ 10, 19, 226, 14,  131, 33, 227, 35, 402, 44, 0 ]

console.log(`Original array -->`)
arr.forEach(element => console.log(` ${element}`))   
  
mergeSort(0, arr.length-1)

console.log(`After sorting -->`)
arr.forEach(element => console.log(` ${element}`))   
