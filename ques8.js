// Q8. Pass or Fail
// You are given an array A containing the maths marks of students in your class, and your task is to determine if all the students pass in your class or not. A student is declared pass if his maths marks are greater than or equal to 32.
// If all the students pass in your class, return "YES" (without quotes); otherwise, return "NO" (without quotes). Note: You have to complete isAllPass function. No need to take any input.
// Input Format
// The first line of the input contains an integer N, denoting the number of students in your class. The second line of the input contains N space-separated integers, denoting the maths marks of students in your class.
// Output Format
// Return "YES" (without quotes) if all the students pass in your class; otherwise, print "NO" (without quotes).
// Constraints
// 1≤N≤1001≤100 0≤Ai≤1000≤100
// Example
// Sample Input
// 7 13 89 45 98 67 45 54
// Sample Output
// NO

function isAllPass(marks) {
    for (let i = 0; i < marks.length; i++) {
        if (marks[i] < 32) {
            return "NO"; 
        }
    }
    return "YES"; 
}


let N = 7; // Number of students
let marks = [13, 89, 45, 98, 67, 45, 54]; 
console.log(isAllPass(marks)); 
