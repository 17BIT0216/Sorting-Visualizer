export function getQuickSort(array)
{
    let animations=[];
    if(array.length<=1)
    return array;
    let auxArray=array.slice();
    quickSort(auxArray,0,auxArray.length-1,animations);
    return animations;
}


function swap(items, leftIndex, rightIndex,animations){
  animations.push([leftIndex,items[rightIndex]]); //writting the value of left on write
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
    animations.push([rightIndex,temp]); //writting the value of right on left
}
function partition(items, left, right,animations) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    //i and j are being compared here
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
            //animations.push([i,pivot]);  // i and pivot are being compared
        }
        while (items[j] > pivot) {
            j--;
            //animations.push([j,pivot]); // j and pivot are being compared
        }
        if (i <= j) {
            swap(items, i, j,animations); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right,animations) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right,animations); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1,animations);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right,animations);
        }
    }
    return items;
}