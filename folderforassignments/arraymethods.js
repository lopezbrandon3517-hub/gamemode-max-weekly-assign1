const PromptSync = require("prompt-sync");

const prompt = require(`prompt-sync`)();


// let cool = []
// let numbers = prompt("please select how many things you would like in your list")
// for(let i = 0; i < numbers; i++){
//     let items = prompt("please enter names of your items")
//     cool.push(items)
// }
// console.log(cool)
//array and pushing items into array



// let arr = [5, 10, 15, 20, 25];
// let mapped = arr.map(element => element + 5);
// console.log(mapped);
// console.log(arr)
//this is showing the mapped function



// let arr = [1, 2, 3, 4, 5, 6];
// let filtered = arr.filter(element => element ===2 || element === 4)
// console.log(filtered)
//this is a example of using the filter() method



// let fruits = ["bananna", "orange", "apple", "mango"]
// fruits.sort();
// console.log(fruits)
//example using the .sort() function
//you can also do the exact same thing but use .reverse() and it will do the opposite



// let points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return a - b});
// console.log(points)
//perfect example of using the .sort to get numbers from smallest to largest



// let points = [40, 100, 1, 5, 25, 10]
// points.sort(function(a, b){return b - a});
// console.log(points)
//perfect example of using .sort but doing highest to smallest numbers



// let arr = [1, 2, 3]
// arr.forEach(element => {
//     console.log(element);
// });
//great example using the foreach() element. acts like a for loop and prints everything in your array



// let arr1 = ["a", "b", "c"];
// let arr2 = ["d", "e", "f"];
// console.log(arr1.concat(arr2));
//this is a good example using the .concat function to merge 2 arrays together



// let arr = ["m", "a", "n", "d", "e", "e", "p"]
// console.log(arr.join(''));
// console.log(arr)
//example of using the .join() function to concatenate the elements inside of the array



// let arr = ["danny", "mandeep", "john", "ruby"];
// let indexFinder = arr.indexOf("mandeep");
// console.log(indexFinder)//looks for index of mandeep which is 1 so output will be one
//perfect example of using the .indexof function to find the index value of your element youve searched for and printing in the terminal



// let arr = new Array(3);
// console.log(arr);
// console.log(arr.fill(10));
//example of using the fill() to make static array with empty values then print numbers in the array



// let arr = ["a", "b", "c", "d", "e"]
// let sliced =  arr.slice(2, 4)
// console.log(sliced)
//this is using the slice function() to get to elements inside the index into its own index while keeping the old index as well.



// let arr = [1, 2, 3];
// arr.reverse();
// console.log(arr)
//this is example using the .reverse() function. reverses your order of the array.



// let letters = new Set(["a", "b", "c",])
// console.log(letters)
//example using set and making a set



// let letters = new Set([]);
// letters.add("a")
// letters.add("b")
// letters.add("c")
// console.log(letters)
//example using set in diffrent way.



// let a = new Set();
// a.add("hello");
// a = Array.from(a);
// console.log(a)
//this is an example converting a set into an array



// let fruits = new Map([
//     ["apples", 500],
//     ["banannas", 300],
//     ["oranges", 200]
// ]);

// let x = fruits.get("oranges")
// console.log(x)
//example using maps and retrieving a value inside the map using .get



// let arr = ["john", "susan", "thomas", "alex", "bando"]
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }
//example of printing every item in a array using the .length and for loop



//working example of getting the odds only
// let arr = [2, 5, 3, 6, 8, 9]
// let filtered = arr.filter(n => n % 2 !== 0)
// console.log(filtered)






//problem 1 soloved
// function getodds(){
//     let filtered = arr.filter(n => n % 2 !== 0)//this is the function. previous was how i figured out how to make it give the odd. this is now stored as function
//     console.log(filtered)
// }

// arr = [2, 5, 3, 6, 8, 9]
// getodds()
//problem 1 solved




//problem 2
// let arr = (["a", "a", "b", "b", "c", "c"]);
// //this is a set next step make into array
// let removeduplicates = new Set(arr)
// //making the new set
// let convertedarray = [...removeduplicates]
// //converting set into array using ...
// console.log(convertedarray)//this was figuring stuff out not anwser. anwser is below


//working function to remove duplicates.
// function noduplicates(originalarray){
//     let removeduplicates = new Set(originalarray)
//     let convertedarray = [...removeduplicates]
//     return convertedarray
// }

// let arr = (["a", "a", "b", "b", "c", "c"]);
// let finalresult = noduplicates(arr)
// console.log(finalresult)
//working function to remove duplicates



//problemc 3 finding particular number in an array and giving true or false
// function findspecificnumber(arr, targetnumber){
//     for(let i = 0; i < arr.length; i++){
//         let currentnumber = arr[i];
//         if (currentnumber === targetnumber){
//             return true
//         }
//     }
//     return false
// }

// let arr =[1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]
// let x = findspecificnumber(arr, 11)
// console.log(x)
//finsished used forloop to find/ give true or false


