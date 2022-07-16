const foods1 = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];



const foods2 = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
Splice = (foods, pos) => {
    foods.splice(pos, 0, 'noodles', 'icecream')
    return foods
}
console.log(Splice(foods2, 2))


const numberArray = [12,324,213,4,2,3,45,4234];
isEven = (numberArray) => {
    return numberArray.filter((x) => x % 2 == 0)
}
console.log(isEven(numberArray))


isPrime = (numberArray) => {
    return numberArray.filter(checkPrime);
}
checkPrime = (num) => {
    if (num === 1) {}
    else if (num < 1) {}
    else if (num > 1) {
        let prime = 1
        for (let index = 2; index < num; index++) {
            if (num % index == 0) {
               prime = 0 
            }
        }
        if (prime === 1) {
            return num
        }
    }
}
console.log(isPrime(numberArray))


nonPrime = (numberArray) => {
    return numberArray.filter(checknonPrime);
}
checknonPrime = (num) => {
    if (num === 1) {}
    else if (num < 1) {}
    else if (num > 1) {
        let prime = 1
        for (let index = 2; index < num; index++) {
            if (num % index == 0) {
               prime = 0 
            }
        }
        if (prime === 0) {
            return num
        }
    }
}
console.log(nonPrime(numberArray))


const myArray = [11, 34, 20, 5, 53, 16];
findSquareOfNumbers = (myArray) => {
    return myArray.map((x) => x * x)
}
console.log(findSquareOfNumbers(myArray))


const nums = [2, 3, 5, 10]
multiply = (nums) => {
    return nums.reduce((total, x) => total *= x)
}
console.log(multiply(nums))


// multiply2 = (nums) => {
//     return nums.map((x) => x *= x)
// }
// console.log(multiply2(nums))