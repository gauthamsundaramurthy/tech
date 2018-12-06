/* Quiksort algorithm */ 

function quickSort(first, last)
{
	let pivot = arr[first];
	let i=first, j=last, temp;
	
	if (first<last) {
		while(i < j) {
			while( arr[i]<=pivot && i<last) {
				i++;
			}
			
			while(arr[j]>pivot){
				j--;
			}
			
			if (i<j) {
				temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
		
		temp= arr[j];
		arr[j]= arr[first];
		arr[first]=temp;
		
		quickSort(first, j-1 );
		quickSort(j+1, last);
	}
}
	
let arr = [200,400,66,11,3]

console.log(`Original array -->`)
arr.forEach(element => console.log(` ${element}`))

quickSort(0, arr.length-1);

console.log(`After sorting -->`)
arr.forEach(element => console.log(` ${element}`))
