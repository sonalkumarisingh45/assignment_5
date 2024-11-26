// Q1. Find the Product.
// Write a program that takes an array as input from the user and find out the product of the elements. Note: You have to complete Find_Prod. No need to take any input.
// Input Format
// The input contains a single number N, followed by N numbers as array elements. Output Format
// Return the required answer.
// Constraints
// 1≤N≤201≤ElementoftheArray≤100
// Example
// Sample Input
// 512345
// Sample Output
// 120


function Find_Prod(arr) {
    let product = 1; 
    for (let i = 0; i < arr.length; i++) {
        product *= arr[i]; 
    }
    return product; 
}


let array = [5,1,2,3,4]; 
console.log(Find_Prod(array)); 
