// Q10. Min and Max
// Congratulations on making up to this question. Let us give you a fairly simple array problem to solve. If you know how to iterate through the array, you will easily be able to solve this. The problem statement is simple- given N elements, find the minimum and maximum numbers among those elements.
// Input format
// First-line contains N representing the length of the array. The second line contains N space-separated integers.
 
// Output format
// Return minimum and maximum elements.
// Constraints
// 1<=N<1071<=<107 0<=A[i]<=1070<=[]<=107
// Example
// Input
// 66331144662277 Output
// 11 77
// Sample Test Case Explanation
// In the first test case minimum element = 11 and maximum element = 77
// In the second test case minimum element = 00 and maximum element = 00


function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];

    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]; 
        }
        if (arr[i] > max) {
            max = arr[i]; 
        }
    }

    console.log(min, max); 
}


let N = 6; 
let arr = [33, 11, 44, 66, 22, 77]; 
findMinMax(arr); 
