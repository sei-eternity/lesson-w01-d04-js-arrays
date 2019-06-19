

let numbers3 = [4, 9, 7, 2, 1, 8];
numbers3 = numbers3.map((v) => v * 2);
console.log(numbers3)

let numbers4 = [4, 9, 7, 2, 1, 8];
numbers4 = numbers4.map(v => {
    if(v % 2){
        return v * 2;
    }
    else return v;
})
console.log(numbers4)

const favColors = ['blue', 'black'];
favColors.forEach((v,i) => console.log(`My #${i + 1} choice is ${v}.`));

const ages = [12, 42, 5 ,23,4];
ages.forEach(v => v > 21 ? console.log(v):v);

const rainbowColors = [];
rainbowColors.push('orange');
rainbowColors.unshift('red');
rainbowColors.push('yellow');
rainbowColors.push('green', 'blue', 'indigo', 'violet');
console.log(rainbowColors.length);
console.log(rainbowColors[1]);
console.log(rainbowColors[rainbowColors.length -1]);
console.log(rainbowColors.indexOf('blue'));


const twoColors = rainbowColors.slice(1,3);
console.log(twoColors);

const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
nums.splice(3,3)
console.log(nums);


let  arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
console.log(arrOfArrs[0][0])
const last = arrOfArrs.length -1
console.log(arrOfArrs[arrOfArrs.length -1][arrOfArrs[arrOfArrs.length -1].length -1])

const TopMovies = ['Toy Story', 'The Good, The Bad, and the Ugly']

