//1.
const arr = [2, 3, 4];

arr.unshift(0,1);
arr.push(6,7);

arr; // => [0, 1, 2, 3, 4, 5, 6, 7]

//2.
const arr = [5, 7, 9];
arr.push(6); // returns 4 (the array size)

//3.
const numbers = [4, 9, 7, 2, 1, 8];
for (let i =0; i<numbers.length; i++){
    numbers[i] *=2; 
}

numbers; // => [8, 18, 14, 4, 2, 16]

//4.
const numbers = [4, 9, 7, 2, 1, 8];

for (let i =0; i<numbers.length; i++){
    if( numbers[i] % 2)
         numbers[i] *=2; 
}

numbers; // => [4, 18, 14, 2, 2, 8]

//5.
const colors = ['green','red','blue','white','black'];

colors.forEach(function(color,i){
    console.log(`My #${i+1} choice is ${color}`);
})


//6.
const ages = [22,21,14,11,7,30,33,54,12,27,25,37,3,2,46];
ages.forEach(function(age){
    if (age > 21)
        console.log(age);
})

//7.
const rainbowColors =[];
rainbowColors.push('orange');
rainbowColors.unshift('red');
rainbowColors.push('yellow');
rainbowColors.push('green', 'blue', 'indigo', 'voilet');
console.log(rainbowColors.length);
console.log(rainbowColors[1]);
console.log(rainbowColors[rainbowColors.length-1]);
console.log(rainbowColors.indexOf('blue'));

//8.
const twoColors = rainbowColors.slice(1,3);
var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
nums.splice(2,2)
nums.splice(3,1);

//9.
var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
console.log(arrOfArrs[0][0]);
console.log(arrOfArrs[arrOfArrs.length-1][arrOfArrs[arrOfArrs.length-1].length-1]);


//10.
const oNum = function(num){
    if (num == 1){
        return 'st';
    }           
    if (num == 2){
        return 'nd';
    }
    if (num == 3){
        return 'rd'
    }
    return 'th';
}
const movies = ['Goodfellas', 'The Lord of the Rings', 'Forrest Gumb', 'Good Will Hunting', 'The Godfather' ];

movies.forEach(function(movie,i){
    console.log(`My ${i+1}${oNum(i+1)} choice is ${movie}.`)
})



