/*Your task is to write a function that takes a string and return a new string with all vowels removed. For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!". Note: for this kata y isn't considered a vowel. */

function disemvowel(str) {
    let withVowels = str;
    let noVowels = '';
    for (i = 0; i < withVowels.length; i++) {
        if (withVowels[i] === 'a' || withVowels[i] === 'e' || withVowels[i] === 'i' || withVowels[i] === 'o' || withVowels[i] === 'u') {

        } else {
            noVowels += withVowels[i];
        }

    }
    return noVowels
}

console.log(disemvowel("This website is for losers LOL!"))


//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number. //


function nonneg(num) {
    if (num >= 0) {
        let numArray = num.toString().split('');
        numArray.sort();
        numArray = numArray.reverse();
        return (numArray.join(''));
    }
}

console.log(nonneg(5678090980))

/*Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]



function tower(floors) {
let blankArray = [];
let numSpaces = 0;

    for (i = floors; i > 0; i--) {
        blankArray.push(" ".repeat(numSpaces) + "*".repeat(i) + "*".repeat(i-1)); numSpaces++

    }
    return blankArray.reverse()
}

console.log(tower(6))*/

//return a string backwards//

function reverseIt(str) {
    let newArray = [];
    str = str.split("");
    str = str.reverse();
    return str.join('');
}

console.log(reverseIt('lukas'))

function giveNum(str) {
    return str = parseInt(str);
}

console.log(giveNum('123456'))

//Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".


function greet(name){
    return `Hello, ${name} how are you doing today?`
}
 
//Can you find the needle in the haystack?

//Write a function findNeedle() that takes an array full of junk but containing one "needle"

//After your function finds the needle it should return a message (as a string) that says:

//"found the needle at position " plus the index it found the needle, so:

//findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])should return "found the needle at position 5"
let haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];

/*function findNeedle(haystack) {
    haystack.forEach((x,y) => {
        if (x === 'needle') {
            return `found the needle at position ${y}`
        }
    })
}

console.log(findNeedle(haystack_1))

function name => (x,y) {
    if (x === 'needle') {
        return `found the needle at position ${y}`
    }
}*/

//You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

function printer_error(s) {
    let i = 0;
    let x = 0;
    while (i <= s.length) {
        if (s[i] == 'n' || s[i] == 'o' || s[i] == 'p' || s[i] == 'q' || s[i] == 'r' || s[i] == 's' || s[i] == 't' || s[i] == 'u' || s[i] == 'v' || s[i] == 'w' || s[i] == 'x' || s[i] == 'y' || s[i] == 'z') { 
           x++
        }
    i++
    }
    console.log(`${x}/${s.length}`)
}

printer_error('aaaxbbbbyyhwawiwjjjwwm')


//Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

let s1 = "xyaabbbccccdefww"
let s2 = "xxxxyyyyabklmopq"

function alpha(x, y) {
    let z = x + y;
    z = z.split('').sort();
    let newz = [];
    z.forEach((element) => {
        if (!newz.includes(element)) {
            newz.push(element);
        }
    });
    return newz.join('')
}


console.log(alpha(s1, s2))



const array = [1, 2, 3, 4];

function add(thing) {
    let sum = 0;
    for (let i = 0; i < thing.length; i++) {
        sum += thing[i]; 
    } 
    return sum
}

console.log(add(array))




function flower(flower1, flower2) {
    if ((flower1 + flower2)%2 !== 0) {
        return true
    } else {return false}
}

console.log(flower(4,4))




function numsort(numbers) {
    numbers = numbers.split(' ').sort((a, b) => a - b);
    `${numbers[0]} ${numbers[numbers.length -1]}`
}

console.log(numsort("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))

//Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

let arra = ['hello', 'world', 'this', 'is', 'great']

function smash(arr) {
    return arr.join(' ')
}

smash(arra)


//cannons ready?

let a = {'Mike':'aye','Joe':'aye','Johnson':'aye','Peter':'aye'};
console.log(typeof(a))

/*function ready(gunners) {
    let bool = true
    gunners.forEach((value) => {
        if (value == 'nay') {
            bool = false
        }
    })
    if (bool == true) {
        return "Fire"
    } else {
        "Shiver me timbers!"
    }
}
*/
function ready(gunners) {
    let cool = true;
    for (let i in gunners) {
        if (gunners[i] == 'nay') {
            cool = false
        } 
    }
    if (cool == true) {
        return "Fire"
    } else {
        "Shiver me timbers!"
    }
}
console.log(ready(a))




let strand = 'GTAT';

function dna(str) {
        let copy = str.split('').map(function(letter) { if (letter == "A") {
                return "T"
            } else if (letter == "T") {
                return "A"
            } else if (letter == "C") {
                return "G"
            } else if (letter == "G") {
                return "C"
            }
    })
    return copy.join('')

}

console.log(dna(strand))




function pillar(num_pill, dist, width) {
    if (num_pill <= 1) {
        return 0
    }  else if (num_pill >=2) {
        return ((num_pill - 1) * (dist * 100)) + ((width * num_pill) - (width * 2))
    }
    
}

console.log(pillar(11, 15, 30))

//Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.


const thing = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

const noGeese = thing.map(function(goose) {
    if (goose !== "African" && goose !== "Roman Tufted" && goose !== "Toulouse" && goose !== "Pilgrim" && goose !== "Steinbacher") {
        return goose
    } 
})

const noGeese2 = thing.filter(goose => (goose !== "African" && goose !== "Roman Tufted" && goose !== "Toulouse" && goose !== "Pilgrim" && goose !== "Steinbacher") )

console.log(noGeese2)


ducks = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"],["Mallard", "Hook Bill", "Crested", "Blue Swedish"]


function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
    const fuckducks = birds.filter(goose => (!geese.includes(goose)))
        return fuckducks
  };

  console.log(gooseFilter(ducks))


 //In this kata you will create a function that takes in a list and returns a list with the reverse order.

const astring = "9, 27, 2, 17, 30"
 
 function reverse(str) {
     str = str.split(', ').sort((a, b) => a - b).reverse().join(', ');
     console.log(str)
 }

 reverse(astring)


 const list = [3,1,5,4]
 function reverseList(list) {
    return list.reverse();

  }

  console.log(reverseList(list))


  //Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.


  function equal(a,b) {
        if (a === b) {
            return a || b;
        } 
        let small = Math.min(a, b);
        let big = Math.max(a,b); 
        let c = 0
        for (let i = small; i <= big; i++) {
            c = c + i

        }
        return c
  }



  console.log(equal(1, -2))

  //-1, 0, 1, 2, 3, 4, 


 // Implement a function which multiplies two numbers.

 let multi = (a, b) => (a*b)

 console.log(multi(2,3))


 let arr3 = [1, 3, 5, 6, 9];
 let arr4 = [10, 8, 6, 4, 2];

 function mergeArrays(arr1, arr2) {
     let arr3 = arr1.concat(arr2).sort((arr1, arr2) => (arr1 - arr2));
     for (let i = 0; i <= arr3.length; i++) {
         if (arr3[i] === arr3[i - 1])
         arr3.splice(arr3[i], 1)
     }
     return arr3
 }

 console.log(mergeArrays(arr3, arr4))

 //Given a number n, return the number of positive odd numbers below n, EASY!



 function oddCount(n) {
     if (n%2 == 0) {
         return n/2
         } else {
             return Math.floor((n/2))
         }
 }

 console.log(oddCount(15023))

5
 1,3

 6
 1,3,5

 10
 1,3,5,7,9


//You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog, NASM and COBOL) if it is possible and false (0 in Prolog, NASM and COBOL) if not. The input values are always positive.

 const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if (distanceToPump <= mpg * fuelLeft) {
        return true
    } else {
        return false
    }
  };

  const zeroFuel2 = (distanceToPump, mpg, fuelLeft) => {distanceToPump <= mpg * fuelLeft
  };

  console.log(zeroFuel2( 100, 50, 1))


  //Given an array of integers, return a new array with each value doubled.

    arra = [1, 2, 3]

  function double(arr) {
      const arr2 = arr.map(x => x *2)
      return arr2
  }

  console.log(double(arra))



  //Complete the function/method so that it returns the url with anything after the anchor (#) removed.
  
  let url = "www.codewars.com/katas/?page=1#about"

  function ack(url) {
      url = url.split('')
      if (url.includes('#')) {
        let hash = url.indexOf('#')
        return url2 = url.join('').slice(0 , hash)
      }
      else {
          return url.join('')
      }
  }

 console.log(ack(url)) 



//Alert if the string is a palindrome or not

function palin(str) {
    if (str === str.toLowerCase().split('').reverse().join('')) {
        console.log('palindrome')
 } else {
     console.log('not')
 }
}


palin('Abba')

//convert string to array

let string = 'I love arrays they are my favorite'
function stringToArray(string){

	return string.split(' ')

}

console.log(stringToArray(string))




let iso = "Dermatoglyphics"

function isogram(iso) {
   iso = iso.toLowerCase
    for (let i = 0; i < iso.length-1; i++) {
        for (let j = i + 1; j < iso.length; j++) {
            if (iso.charAt(i) == iso.charAt(j) || iso == '') {
                return false
            }
        }
    }
    return true
}


console.log(isogram(iso))



let consec = [1,2,3,4,5,6,7,8]


function consecutive(arr) {
    for (let i = 0; i < arr.length - 1; i ++) {
        if ((arr[i]) + 1 < arr[i + 1]) {
            return arr[i +1]

        } 
    }
    for (let i = 0; i < arr.length - 1; i ++) {
        if ((arr[i]) + 1 == arr[i + 1]) {
            return null
        }
    }
}

console.log(consecutive(consec))

//Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

let x = 4


var countSheep = function (num){
    let arr = []
    if (num == 0) {
        return ''
    } else if (num > 0) {
        for (let i = 1; i <= num; i++) {
            arr.push(i + " sheep...")
        }      
    }           
    return arr.join('')
}

  console.log(countSheep(x))



const orderedarray = [1, 2]


function isSortedAndHow(array) {
    let ascending = true
    let descending = true
    for (let i = 0; i < array.length - 1; i ++) {
      if ((array[i]) > array[i + 1]) {
         ascending = false}
      }

    for (let i = array.length -1; i > 0; i--) {
        if ((array[i]) > array[i - 1]) { 
          descending = false
      } 
  } if (descending === true) {
      return "yes, descending"
  } else if (ascending === true) {
      return "yes, ascending"
  } else {
      return "no"
    }
}


console.log(isSortedAndHow(orderedarray))





function getAge(inputString){
    let inputArray = inputString.split(' ')
    return parseInt(inputArray[0])
    }

console.log(getAge("4 years old"))



let even = [1,2,3,6,8,10]

function getEvenNumbers(numbersArray){
    let newArray = numbersArray.filter(odd => odd % 2 == 0)
    return newArray
  }

  console.log(getEvenNumbers(even))


  let integerarry = [10, 343445353, 3453445, 3453545353453]

  function integerSum(arr) {
      arr.sort((a,b) => a - b)
      return arr[0] + arr[1]
  }

  console.log(integerSum(integerarry))


 let pin1 = "-1.234"

  function pincode(pin) {
      if (pin.match(/^[0-9]+$/) != null && pin.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/) == null && pin.length == 4 || pin.length == 6) {
          return true
      } else {
          return false
      }
  }

  function containsAnyLetter(str) {
    return /[a-zA-Z]/.test(str);
  }
  

  console.log(pincode(pin1))

let usd = 465.33

  function usdcny(usd) {
    let cny = usd * 6.75
    return `${cny.toFixed(2)} Chinese Yuan1`
}

usdcny(usd)


let listofnum = [4,6,2,1,9,63,-134,566]


var min = function(list){
    list.sort((a, b) => a-b)
    return list[0];
}

var max = function(list){
    list.sort((a, b) => a-b).reverse()
    return list[0];
}
