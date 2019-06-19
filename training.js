1-
const arr = [2, 3, 4];
arr.unshift(0,1)
arr.push(5,6,7)

2-
const arr = [5, 7, 9];
arr.push(6);
returns :4

3-
const numbers = [4, 9, 7, 2, 1, 8];

console.log(numbers);

for(let i=0;i<numbers.length;i++)
{
numbers[i]=numbers[i]*2;

}
console.log(numbers);

4-
const numbers = [4, 9, 7, 2, 1, 8];

console.log(numbers);
for(let i=0;i<numbers.length;i++)
{
if (numbers[i]%2!=0){

numbers[i]=numbers[i]*2;

}
else numbers[i]=numbers[i]}
console.log(numbers);
4
let favorite_colors=[];
let red="red";
let blue="blue";

favorite_colors.push(red);
favorite_colors.push(blue);
for(let i=0;i<favorite_colors.length;i++)
{
console.log("My #"+[i+1]+" choice is "+favorite_colors[i]+"");

}
console.log( favorite_colors);

5-
let ages=['welcome'];


 let m=23;

if (m>21){
for(let i=0;i<ages.length;i++)
{
console.log(ages);

}}
else
 console.log( "sorry");

 6-
 let rainbowColors=[];


 rainbowColors.push("orange");

  rainbowColors.unshift("yellow");
  rainbowColors.unshift("red");

   rainbowColors.push("green","blue","indigo","violet");

console.log(rainbowColors);
console.log(rainbowColors.length);
console.log(rainbowColors[1]);
console.log(rainbowColors.pop());
console.log(rainbowColors.indexOf("blue"));

7-
let rainbowColors=[];

twoColors= rainbowColors.slice(1,3);

 rainbowColors.push("orange");

  rainbowColors.unshift("yellow");
  rainbowColors.unshift("red");

   rainbowColors.push("green","blue","indigo","violet");

console.log(rainbowColors);
console.log(rainbowColors.length);
console.log(rainbowColors[1]);
console.log(rainbowColors.pop());
console.log(rainbowColors.indexOf("blue"));
8-

let rainbowColors=[];
let twoColors=[];
twoColors= rainbowColors.slice(1,3);

 rainbowColors.push("orange");

  rainbowColors.unshift("yellow");
  rainbowColors.unshift("red");

   rainbowColors.push("green","blue","indigo","violet");

console.log(rainbowColors);
console.log(rainbowColors.length);
console.log(rainbowColors[1]);
console.log(rainbowColors.pop());
console.log(rainbowColors.indexOf("blue"));

console.log(twoColors);


var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];

for (var j = 0; j < nums.length; j++){
if (nums[j] === nums[j]) 
nums.splice(j,1)
}
console.log(nums);
9-
var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];

console.log(arrOfArrs[0][0]);
console.log(arrOfArrs[1][2]);

10-
var top = ["music", "books", "movies", "whatever"];

for(let i=0;i<top.length;i++)
{
console.log("My #"+[i+1]+" choice is "+top[i]+"");

}