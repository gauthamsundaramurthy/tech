#include <stdio.h>
 

int a[11] = { 10, 14, 19, 26, 27, 31, 33, 35, 42, 44, 0 };
int b[10];

void merging(int low, int mid, int high) {
   int l1, l2, i;

	printf("\n .. merging ..\n");
	printf("%d %d %d ", low, mid, high);
   for(l1 = low, l2 = mid + 1, i = low; l1 <= mid && l2 <= high; i++) {
      printf("\n .. comparing %d and %d ... \n ", a [l1], a[l2]);
      if(a[l1] <= a[l2])
     {
         b[i] = a[l1++]; 
     }   
      else
         b[i] = a[l2++];
   }
   
   while(l1 <= mid)    
      b[i++] = a[l1++];

   while(l2 <= high)   
      b[i++] = a[l2++];

   for(i = low; i <= high; i++)
      a[i] = b[i];
      
    printf("\n .. after merge .. \n");
    for(i = 0; i <= 10; i++)
      printf("%d ", a[i]);
   
}

void sort(int low, int high) {
   int mid;
   
   if(low < high) {
      mid = (low + high) / 2;
      printf("\n .. low mid high .. \n");
      printf("%d %d %d",low, mid, high);
      sort(low, mid);
      sort(mid+1, high);
      merging(low, mid, high);
   } else { 
      return;
   }   
}

int main(void) { 
   int i;

   printf("List before sorting\n");
   
   for(i = 0; i <= 10; i++)
      printf("%d ", a[i]);

   sort(0, 10);

   printf("\nList after sorting\n");
   
   for(i = 0; i <= 10; i++)
      printf("%d ", a[i]);
      
    return 0  ;
}