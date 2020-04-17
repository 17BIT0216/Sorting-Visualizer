export function getbubleSort(array)
{
const animations=[];
if(array.length<=1)
return array;

const auxArray=array.slice();

for(let i=0;i<auxArray.length;i++)
{
    for(let j=0;j<auxArray.length-(i);j++)
    {
        //values that are being compared are j and j+1
     
        if(auxArray[j]>auxArray[j+1])
        {
            //swap both values
            animations.push([j,j+1]);
            animations.push([j,j+1]);
            let temp=auxArray[j];
            auxArray[j]=auxArray[j+1];
            auxArray[j+1]=temp;
           animations.push([j,auxArray[j]]);
           animations.push([j+1,auxArray[j+1]]);
        }
    }
}
return animations;

}