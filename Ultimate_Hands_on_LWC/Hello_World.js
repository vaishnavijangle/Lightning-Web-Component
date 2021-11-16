console.log("Hello World..");
console.error("I am error");
console.warn("i am warning");
// single line comment
/* Multiline comment */
// Var is for global scope variable that's why on line-8 will print 9
for (var i = 0; i < 10; i++) { }
console.log(i);
// let has local scope j will be accessible only in for loop and throw error on line-12
//Hello_World.js:7 Uncaught ReferenceError: j is not defined
for (let j = 0; j < 10; j++) { console.log(j); }
//console.log(j); -> throw error.
// constant variable can't change there values otherwise they will throw error 
//Uncaught TypeError: Assignment to constant variable. on line-17
const constant_var = 5;
//constant_var = 6;
//console.log(constant_var); -> throw error.
console.log("hi- ", constant_var)
console.log("hi- " + constant_var)
let b = 5;
b += 9;
console.log(b);
//example of for loop for list of object and how we can access the values.
/* const student = {
    name: "Harry",
    age: 21,
    fees: undefined, isPresent: false,
    datesWhenAbsent: [5, 9],
    address: {
        street: "22nd  street",
        pincode: "324445",
        city: "xyz",
    },
};
const student1 = {
    name: "Harry1",
    age: 22,
    fees: undefined,
    datesWhenAbsent: [5, 9],
    address: {
        street: "22nd  street",
        pincode: "324445",
        city: "xyz",
    },
};
const student2 = {
    name: "Harry2",
    age: 213,
    fees: undefined,
    datesWhenAbsent: [5, 9],
    isPresent: false,
    address: {
        street: "22nd  street",
        pincode: "324445",
        city: "xyz",
    },
};
const student3 = {
    name: "Harry3",
    age: 214,
    fees: undefined,
    datesWhenAbsent: [5, 9],
    isPresent: false,
    address: {
        street: "22nd  street",
        pincode: "324445",
        city: "xyz",
    },
};
const students = [student, student1, student2, student3];
for (let prop in students) {
    console.log(`${prop} : ${students[prop]}`);
    console.log(`${JSON.stringify(students[prop])}`);
    console.log(`${JSON.stringify(students[prop].name)}`);
}

students.forEach(function (student) {
    console.log(student.name);
});

const newArr = students
    .filter((student) => {
        return student.isPresent === false;
    })
    .map((student) => student.name);
console.log(newArr);

const newArr1 = students
    .filter((student) => student.isPresent === false)
    .map((student) => student.name);
console.log(newArr1);
*/
const class2020 = [
    {
        name: "John",
        age: 23,
        isPresent: true,
    },
    {
        name: 'Aragorn',
        age: 56,
        isPresent: true,
    },
    {
        name: "Gimli",
        age: 34,
        isPresent: false,
    },
    {
        name: "Harry",
        age: 16,
        isPresent: true,
    },
    {
        name: "Ron",
        age: 17,
        isPresent: false,
    },
];

const class2021 = [
    {
        name: "Legolas",
        age: 32,
        isPresent: false,
    },
];
// combining 2 arrays
const totalStudents = [...class2020, ...class2021];
console.log(totalStudents);

// destructing
const [j, a, g] = totalStudents;
console.log(j);
console.log(a);
console.log(g);

const stu1 = {
    name: "John",
    age: 23,
};

const stu2 = {
    isPresent: false,
};

// combining 2 object
const student = { ...stu1, ...stu2, age: 30 };
console.log(student);

// destructing
const { name, isPresent, age } = student;
console.log(name);
console.log(isPresent);
console.log(age);



