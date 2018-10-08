
#include <stdio.h>
 
int main(void)
{
  int array[100], n, c, d, swap;
 
  printf("Enter number of elements \n");
  scanf("%d", &n);
 
  printf("Enter %d integers \n", n);
 
  for (c = 0; c < n; c++)
    scanf("%d", &array[c]);
 
  for (c = 0 ; c <= n - 2; c++)
  {
    for (d = 0 ; d <= n - 2 - c ; d++)
    {
      if (array[d] > array[d+1]) /* For decreasing order use < */
      {
        swap       = array[d];
        array[d]   = array[d+1];
        array[d+1] = swap;
      }
    }
  }
 
  printf("Sorted list in ascending order: \n");
 
  for (c = 0; c < n; c++)
     printf("%d \n", array[c]);
 
  return 0;
}