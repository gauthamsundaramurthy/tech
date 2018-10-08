#include <stdio.h>

void quicksort( int number[], int first, int last)
{
	int pivot=number[first];
	int i=first, j=last,temp;
	
	if (first<last) {
		while(i < j) {
			while( number[i]<=pivot && i<last) {
				i++;
			}
			
			while(number[j]>pivot){
				j--;
			}
			
			if (i<j) {
				temp = number[i];
				number[i]=number[j];
				number[j]=temp;
			}
		}
		
		temp= number[j];
		number[j]= pivot;
		number[first]=temp;
		
		quicksort(number, first, j-1 );
		quicksort(number, j+1, last);
	}	
}

int main(void) {
	
	int number[5] = {200,400,66,11,3};
	int i;
	
	quicksort(number,0, 4);
	
	for(i=0;i<5;i++) {
		printf(" %d ", number[i]);
	}
	return 0;
}
