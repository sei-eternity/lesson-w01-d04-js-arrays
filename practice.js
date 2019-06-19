//1 
const arr = [2, 3, 4];
arr.unshift(0,1);
arr.push(5,6,7);
arr.flat()
// returns  (8) [0, 1, 2, 3, 4, 5, 6, 7]


//2 

const arr = [5, 7, 9];
arr.push(6);
returns :4


//3
const numbers = [4, 9, 7, 2, 1, 8].map(function(x) { return x * 2; });

numbers; // => (6) [8, 18, 14, 4, 2, 16]

//4


const numbers = [4, 9, 7, 2, 1, 8];

for(let i=0;i<numbers.length;i++)
{
if (numbers[i]%2!=0){

numbers[i]=numbers[i]*2;

}
else numbers[i]=numbers[i]}

console.log(numbers);

// (6) [4, 18, 14, 2, 2, 8]

//5
const myColor = ['white', 'blue', 'green', 'black'];


console.log('My #1 choice is ' + myColor[0])
console.log('My #2 choice is ' + myColor[1])
console.log('My #3 choice is ' + myColor[2])
console.log('My #4 choice is ' + myColor[3])


//6

const ages = [30, 40, 80, 18]

for (let i = 0; i > 21; i++) {
  console.log('Above 21 ' + ages[i] + ' ')
}



//7

const rainbowColors = [];


rainbowColors.push('orange');
rainbowColors.unshift('red');
rainbowColors.push('yellow');
rainbowColors.push('green', 'blue', "indigo", 'violet');
console.log(rainbowColors.length)
console.log(rainbowColors[1])
rainbowColors.pop()
rainbowColors.indexOf ('blue')


// (6) ["red", "orange", "yellow", "green", "blue", "indigo"]




//8






const twoColors = rainbowColors;
twoColors.slice (1,3);
twoColors.splice (1,3);

var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
nums.slice(3,3);
nums; 



//9


var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];

console.log(arrOfArrs[0][0]);
console.log(arrOfArrs[1][2]);


//10 

var top = ["music", "books", "movies", "whatever"];

for(let i=0;i<top.length;i++)
{
console.log("My #"+[i+1]+" choice is "+top[i]+"");

}








