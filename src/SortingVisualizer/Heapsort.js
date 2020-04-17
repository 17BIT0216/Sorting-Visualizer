export function heapSort(array)
{
    if(array.length<=1)
    return array;
const animations=[];
const aux_Array=array.slice();
   heapsort(aux_Array,animations);
   return animations;
}

function heapify(aux_Array,n,size,animations)
{
    let i=n; 
    let l=2*n+1;
    let r=2*n+2;
    let max=n;
    //find the max of left child and right child and swap it with the parent
    if(l<size && aux_Array[l]>aux_Array[max])
    max=l;
    if(r<size && aux_Array[r]>aux_Array[max])
    max=r;

    if(aux_Array[i]!==aux_Array[max])
    {
        swap(i,max,aux_Array,animations);
        //again go and check the heapify condition on the swapped value
         heapify(aux_Array,max,size,animations);
    }

}
function heapsort(aux_Array,animations)
{
    let size=aux_Array.length;
    for(let i=size/2-1;i>=0;i--)
    {
        heapify(aux_Array,i,size,animations);
    }
      //we have formed a heap now we retrieve elements and put it in its right place
      for(let i=size-1;i>=0;i--)
      {
          swap(i,0,aux_Array,animations);
          heapify(aux_Array,0,i,animations); //reduce the value of size each time we place an element to end
      }


}
function swap(i,max,aux_Array,animations)
{
    //if parent is not the largest swap it with the largest child and that will make it a heap
    animations.push([i,aux_Array[max]]);
    let temp=aux_Array[i];
    aux_Array[i]=aux_Array[max];
    aux_Array[max]=temp;
    animations.push([max,temp]);
    
}



