1.
const arr = [2, 3, 4];
//arr.unshift(0,1);
//arr.push(5,6,7);

2.
const arr = [5, 7, 9];
arr.push(6); // returns 
//[5, 7, 9, 6]

3.
const numbers = [4, 9, 7, 2, 1, 8];

for (let i = 0; i < numbers.length ; i++){

    numbers[i] = numbers[i] * 2;
}

//  [8, 18, 14, 4, 2, 16]
4.
const numbers = [4, 9, 7, 2, 1, 8];

for (let i = 0; i < numbers.length ; i++){

    if (numbers[i] % 2 !== 0){
        numbers[i] = numbers[i] * 2;
    }

}
// [4, 18, 14, 2, 2, 8]
5.
const color = ['red', 'pink', 'green'];

for ( let i = 0; i < color.length; i++){
	console.log(`My # ${i+1} choice is ${color[i]} `);

};
//  My # 1 choice is red 
//  My # 2 choice is pink
//  My # 3 choice is green 

6.
const ages = [20 , 22, 21, 70 , 30, 3];

for (let i = 0; i < ages.length ; i++){

	if (ages[i] > 21){
		console.log(ages[i]);
};
};

// 22
// 70
// 30

7.
const rainbowColors = [];
rainbowColors.push('orange');
rainbowColors.unshift('red');
rainbowColors.push('yellow');
rainbowColors.push("green", "blue", "indigo","violet");  // ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
rainbowColors.length // 7
rainbowColors[1]; // "orange"
console.log(rainbowColors[rainbowColors.length - 1]); // violet
rainbowColors.indexOf("blue"); //4

8.

const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const twoColorss = rainbowColors.slice(1,-3);
twoColorss =  // ["orange", "yellow", "green"]

----------

var numss = [0, 1, 2, 2, 2, 3, 3, 4, 5];
numss.splice(3,2);
numss.splice(3,1);
consle.log(numss); // [0, 1, 2, 3, 4, 5]

9.

var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
console.log(arrOfArrs[0][0]); // inner array first item

let subArray = [];
subArray = arrOfArrs[arrOfArrs.length - 1];
console.log(subArray[subArray.length - 1]);
// third

10.

sorry did not solve it !!
need more Time ,,


