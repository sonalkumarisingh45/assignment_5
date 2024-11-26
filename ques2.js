// Q2. Find the Sum.
// Write a program which takes an array as input from the user and find out the sum of the array elements. Note: You have to complete Find_Sum. No need to take any input.
// Input Format
// The input contains a single number N, followed by N numbers as array elements. Output Format
// Return the required answer.
// Constraints
// 1≤N≤1001≤ElementoftheArray≤1000
// Note: You have to complete Find_Sum function. No need to take any input.
// Example
// Sample Input
// 512345
// Sample Output
// 15




function sum_of_array(num){
let sum=0;
for(let i=0;i<num.length;i++){
    sum+=num[i];}
    return sum;
}
console.log(sum_of_array([5,1,2,3,4]));

