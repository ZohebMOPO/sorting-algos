#include <iostream>
#include <array>
#include <string>
#include <math.h>
using namespace std;

void merge(int l,int m,int h,int a[]);
void sort(int l,int h,int a[]);

// **** MERGE FUNCTION *********
void merge(int l,int m,int h,int a[]){
int l1=m-l+1;
int l2=h-m;
int i=0;
int L[l1],R[l2];


for(int i=0;i<l1;i++)
L[i]=a[l+i];

for(int i=0;i<l2;i++)
R[i]=a[m+1+i];

i=0;
int j=0,k=l;

while(i<l1 && j<l2){
  if(L[i]<=R[j]){
    a[k]=L[i];
    i++;
  }
  else{
    a[k]=R[j];
    j++;
  }
  k++;
}
  while(i<l1){
    a[k]=L[i];
    i++;
    k++;
  }  
  while(j<l2){
    a[k]=R[j];
    j++;
    k++;
  } 
}


// *** Recursive call *****
void sort(int l,int h,int a[]){
  if(l>=h)
    return;
 int m =(l+h)/2;
 sort( l, m, a);
 sort( m+1, h, a);
 merge( l, m, h, a);
}