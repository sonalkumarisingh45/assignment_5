// Q9. Unique Color Shirt
// Prepbuddy is very tasteful of clothes. He has N numbers of shirts hanging in the hanger in his wardrobe. Prepbuddy likes to wear different colored clothes. So, whenever he see there are two or more shirts with the same color, he removes all the shir t of that color from his wardrobe. Now, he wants to know how many M unique color shirts are left in the wardrobe. Prepbuddy wants you to find M.
// Note: As there are many shades of a color so consider integers as a color name. i.e, color of shirt is 0,1,2, ... , N. Input Format
// The first line of the input contains an integer N denoting the number of shirts in the wardrobe. The second line of the input contains N integers C1,C2,C3,C4,...,CN1,2,3,4,..., color of shirts (separated by space).
// Output Format
// Return a single integer M denoting the unique colored shirts left in the wardrobe. Constraints
// 1<=N<=1031<=103 1<=C[i]<=1031<=[]<=103
// Example
// Input
// 6324123
// Output
// 2

function uniqueColorShirts(shirts) {
    let colorCount = {}; 
    for (let i = 0; i < shirts.length; i++) {
        let j = shirts[i];
        colorCount[j] = (colorCount[j] || 0) + 1;
    }

    
    let uniqueColors = 0;
    for (let j in colorCount) {
        if (colorCount[j] === 1) {
            uniqueColors++;
        }
    }

    return uniqueColors;
}


let N = 6; 
let shirts = [6,3,2,4,1,2,3]; 
console.log(uniqueColorShirts(shirts));





