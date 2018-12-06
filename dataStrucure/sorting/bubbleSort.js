/* Bubble sort */

function bubbleSort (arr) {
  let i,j, temp

  if(arr.length > 0) {
    console.log(`Original array --> `)
    arr.forEach(element => console.log(` ${element}`))
    
    for (i = 0 ; i <= arr.length - 2; i++)
    {
      for (j = 0 ; j <= arr.length - 2 - i ; j++)
      {
        if (arr[j] > arr[j+1]) /* For decreasing order use < */
        {
          temp     = arr[j];
          arr[j]   = arr[j+1];
          arr[j+1] = temp;
        }
      }
    }
    
    console.log(`After sorting --> `)
    arr.forEach(element => console.log(` ${element}`))
  } else {
    console.log(`Empty array`)
  }
  
}

let arr = [35,75,50,66,85]

bubbleSort(arr)
