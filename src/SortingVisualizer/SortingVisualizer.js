import React from 'react';
import './SortingVisualizer.css';
import {getMergeSort} from './SortingAlgorithms';
import {getbubleSort} from './Buble';
import  {getQuickSort} from './Quicksort';
import  {heapSort} from './Heapsort';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;
const ANIMATION_SPEED_QUICK=10;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 250;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

class SortingVisualizer extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            array:[],
        };
        //console.log("i was here");
    }
    componentDidMount()
    {
        this.resetArray();
    }

    resetArray()
    {
        const array=[];
        for(let i=0;i<NUMBER_OF_ARRAY_BARS;i++)
        {
            array.push(randomIntFromInterval(0,680));
        } //then change the state of the array
        this.setState({array});
    }
    quickSort()
    {
        const animations=getQuickSort(this.state.array);
        // console.log(animations);
       

        for(let i=0;i<animations.length;i++)
        {
            const arrayBars=document.getElementsByClassName('first');
            //get all the bars present on the screen right now
            //select the element from the all the bars using index values
            //unwrap the values stored in the animations which stores the height and index
           
            setTimeout(()=>{
                const[one,two]=animations[i]; //one has index and two has the height
                const barStyle=arrayBars[one].style;
                barStyle.height=`${two}px`;
            },i*ANIMATION_SPEED_QUICK);
        }
    }

    heapSort()
    {
       const animations=heapSort(this.state.array);
       console.log(animations);
       for(let i=0;i<animations.length;i++)
       {
           const arrayBars=document.getElementsByClassName('first');
           setTimeout(()=>{
            const[one,two]=animations[i]; //one has index and two has the height
            const barStyle=arrayBars[one].style;
            barStyle.height=`${two}px`;


           },i*ANIMATION_SPEED_MS)
       }
    }


    mergeSort()
    {
        const animations=getMergeSort(this.state.array);
       // animation array basically contains tuples of (i,j) the poa value being compared 
        //and the succesiding tuple contains who won the comparison and where to place the element
        for(let i=0;i<animations.length;i++)
        {
            const arrayBars=document.getElementsByClassName('first');
            //for every third element we need to change the colout
            const isColorChange=i%3!==2; //change 0%3==3{true} 1%3==1{true}  2%3==2{false}
            //change colour when it is true
            if(isColorChange)
            {
                const[one,two]=animations[i];  //indices
                const barOneStyle=arrayBars[one].style;
                const barTwoStyle=arrayBars[two].style;
                //choose the colour
                const color=i%3===0? SECONDARY_COLOR:PRIMARY_COLOR ; //if first time change the color to red to pop out
                setTimeout(()=>{
                    barOneStyle.backgroundColor=color;
                    barTwoStyle.backgroundColor=color;
                }, i*ANIMATION_SPEED_MS);
            }
            else{
                setTimeout(()=>{
                    const[index,newHeight]=animations[i];
                    const barOneStyle=arrayBars[index].style;
                    barOneStyle.height=`${newHeight}px`;

                },i*ANIMATION_SPEED_MS);
            }

        }



    }

    bubleSort()
    {
        const animations=getbubleSort(this.state.array);
        

        for(let i=0;i<animations.length;i++)
        {
            const arrayBars=document.getElementsByClassName('first');
            // console.log(arrayBars);
            const isColorChange=(i%4!==2 && i%4!==3); 
            if(isColorChange)
            {
                const[one,two]=animations[i];

                const barOneStyle=arrayBars[one].style;
                const barTwoStyle=arrayBars[two].style;
                const color=i%4===0?SECONDARY_COLOR:PRIMARY_COLOR ;
                setTimeout(()=>{
                    barOneStyle.backgroundColor=color;
                    barTwoStyle.backgroundColor=color;

                },i*ANIMATION_SPEED_MS);
            }
            else{
                setTimeout(()=>{
                    const[index,newHeight]=animations[i];
                    const barOneStyle=arrayBars[index].style;
                    barOneStyle.height=`${newHeight}px`;
                },i*ANIMATION_SPEED_MS);
            }


        }

    }

    render()
    {
        const {array}=this.state; // we write everything on {} this for jsx
        return(
            <React.Fragment>
        {array.map((value,idx)=>(
            <div className="first" key={idx} 
            style={{height: `${value}px`}}>
            </div>   
        ))} 
         <button id='Button1'
            onClick={()=>this.resetArray()}>
                Generate New Array
            </button>
            <button id='Button1' onClick={()=>this.quickSort()}>Quick Sort</button>
            <button  id='Button1' onClick={()=>this.mergeSort()}>Merge Sort</button>
            <button id='Button1' onClick={()=>this.heapSort()}>Heap Sort</button>
            <button id='Button1' onClick={()=>this.bubleSort()}>Buble Sort</button>
            </React.Fragment>

        );
    }
    //mapping value of the array to divison tags
}

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
export default SortingVisualizer;