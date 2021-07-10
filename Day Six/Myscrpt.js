// 1. Write a JavaScript function to check whether an `input` is an array or not
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// True
function is_array(a1)
{
    return Array.isArray(a1);
}
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

console.log(Array.isArray('w3resource'));
console.log(Array.isArray([1, 2, 4, 0]));

// Write a JavaScript function to clone an array
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

function array_Clone(p1){
    let a1=p1.slice(0)
    return a1
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));



// Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []
function first(a1,num=1){
    return a1.slice(0,num);
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

// Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(','));
console.log(myColor.join('+'));
//  Write a JavaScript program to find the most frequent item of an array
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )
function max(a,b){
    if(a>b) return a;
    else return b;
}

function frequency(p1){
    var maximum=0,value;
    var arr=[];
    for(var i=0;i<p1.length;i++){
        var count=0;
        for(var j=i;j<p1.length;j++){
            if(p1[i]===p1[j]){
                count++;
            }
        }
        if(maximum<count){
            value=p1[i];
            maximum=max(maximum,count);
            
        }
    }
    for(var i=0;i<maximum;i++){
        arr.push(value);
    }
    return arr;
}
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(frequency(arr1));