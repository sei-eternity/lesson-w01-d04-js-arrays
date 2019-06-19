const fruits = ['apple','orange','lemon','grapes','strawberry','peach'];
fruits[3];
fruits.shift()
const list =[];
const anotherList=['Nelly',100,false,2]
anotherList[0]
anotherList[5]='addme'

anotherList
const arr =[2,3,4]
arr.unshift(0,1)
arr.push(5,6,7)
arr.flat()
const rainbowColors =[]
rainbowColors.push('orange')
rainbowColors
rainbowColors.unshift('red')
rainbowColors.push('yellow');
rainbowColors.push('blue','indigo','violet')
console.log(rainbowColors.length)
console.log(rainbowColors[1])
console.log(rainbowColors.indexOf('blue'))
console.log(rainbowColors)
console.log(rainbowColors[rainbowColors.length -1])
const twoColors=rainbowColors;
twoColors.slice(1,3)
var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
nums.splice(3,3)
console.log(nums);
var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second",'yyy', "third"]]
console.log(arrOfArrs[0][0])
console.log(arrOfArrs.length)
console.log(arrOfArrs[arrOfArrs.length-1][arrOfArrs[arrOfArrs.length-1].length-1])
let arrOfChoices =['Saudi','Canada','USA','UK','Egypt']
let suffixArr =['1st','2nd','3rd','4th','5th']
for(var i=0;i<arrOfChoices.length;i++){
console.log("My "+suffixArr[i]+" choice is "+arrOfChoices[i] )
}