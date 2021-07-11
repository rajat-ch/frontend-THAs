
// 1. Write a JavaScript program to list the properties of a JavaScript object.
//  Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
//  Sample Output: name,sclass,rollno


var student = { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12
};

console.log(Object.getOwnPropertyNames(student));



// 2. Write a JavaScript program to delete the rollno property from the following object.
//  Also print the object before or after deleting the property.
//   Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 


var student = { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12 
};
console.log(student);
delete student.rollno;
console.log(student);



// 3. Write a JavaScript program to get the length of a JavaScript object.  
// Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 


var student = { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12 
};
console.log(Object.keys(student).length);



// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
//  var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 


var library = [ 
    { 
        author: 'Bill Gates', 
        title: 'The Road Ahead', 
        readingStatus: true 
    }, 
    {
        author: 'Steve Jobs', 
        title: 'Walter Isaacson', 
        readingStatus: true 
    }, 
    { 
        author: 'Suzanne Collins', 
        title: 'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false 
    }
]; 

library.forEach(item => console.log(item));



// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
//  Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder.
//   Try To Attempt : Difficult Level Increased 


var dimension = {
    radius : 5,
    height : 10,
    volume : function(){
        var pi = 3.1428;
        return (pi*this.radius*this.radius*this.height).toFixed(4);
    }
};
console.log(dimension.volume());



// 6. Write a JavaScript program to sort an array of JavaScript objects. 
//  Sample Object : var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]; 
//  Expected Output: [[object Object] { author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" }, [object Object] { author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" }, [object Object] { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]


var library = [ 
    { 
        title: 'The Road Ahead', 
        author: 'Bill Gates', 
        libraryID: 1254 
    }, 
    { 
        title: 'Walter Isaacson', 
        author: 'Steve Jobs', 
        libraryID: 4264 
    }, 
    { 
        title: 'Mockingjay: The Final Book of The Hunger Games', 
        author: 'Suzanne Collins', 
        libraryID: 3245 
    }
]; 

function sort(name){
    for(var i=0;i<name.length;i++){
        for(var j=i+1;j<name.length;j++){
            if(name[i].libraryID<name[j].libraryID){
                var temp=name[i];
                name[i]=name[j];
                name[j]=temp;
            }
        }
    }
}
sort(library);
console.log(library);