// Object is a data type that is used in the JS to store the different key value pairs in the Object

// Object can be create using the two methods first using constructor and second the literal method

let person = {
  name: "Garv Thakral",
  age: 21,
};

//  we can access the value of the object using the keys syntax is (objectName.keyName)

console.log(person.name);
console.log(person.age);


// Adding a value in the object 
person.isAdmin = false;

// to remove a value from the object we can use the delete keyword

delete person.isAdmin;

// Multi word key is be must in the double quotes 

let personNew = {
    userName : "Hello Garv!",
    isProfilePic : "Hello Garv!",
    "You are in London" : false
}

