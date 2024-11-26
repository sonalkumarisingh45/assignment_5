// Q6. Higher Age
// You are given an array A containing the age of persons in your locality, and your task is to find and return an array
// containing the age of persons that are over 1818 (18(18 included)).
// Note: Also, in the output array, the age should be in the same order as in the input array. You have to complete highAge
// function. No need to take any input. Input Format
// The first line of the input contains an integer N, denoting the number of person in your locality. The second line of the input contains N space-separated integers, denoting the age of persons in your locality.
// Output Format
// Return the array containing the age of persons that are over 1818 (18(18 included)). Constraints
// 1≤N≤1001≤100 0≤Ai≤1000≤100
// Example
// Sample Input
// 6 11 23 3 45 72 68
// Sample Output
// 23 45 72 68

function highAge(ages) {
    
    return ages.filter(age => age >= 18);
}


const N = 6; 
const ages = [6 ,11,23, 3, 45, 72, 68]; 

console.log(highAge(ages)); 
