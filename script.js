// Currying & Uncurrying

// 1. Create a curried function that accepts 3 numbers one by one and prints their sum.
function curriedSum(a) {
    return function(b) {
        return function(c) {
            console.log(a + b + c);
        }
    }
}

curriedSum(22)(10)(5);


// 2. Create a curried function that accepts name, department, and salary and prints all three values.
function curriedEmployee(name) {
    return function(department) {
        return function(salary) {
            console.log(`Name: ${name}, Department: ${department}, Salary: ${salary}`);
        }
    }
}

curriedEmployee("Vijay Anand")("IT")(30000);


// 3. Create a curried function that accepts 3 numbers and prints their multiplication.
function curriedProduct(a) {
    return function(b) {
        return function(c) {
            console.log(a * b * c);
        }
    }
}

curriedProduct(22)(10)(5);


// 4. Convert a curried function that accepts a, b, and c into an uncurried function.
function uncurriedSum(a, b, c) {
    console.log(a + b + c);
}

uncurriedSum(22, 10, 5);


// 5. Write both curried and uncurried versions of a function that adds 4 numbers.
function curriedSum4(a) {
    return function(b) {
        return function(c) {
            return function(d) {
                console.log(a + b + c + d);
            }
        }
    }
}

curriedSum4(22)(10)(5)(3);


function uncurriedSum4(a, b, c, d) {
    console.log(a + b + c + d);
}

uncurriedSum4(22, 10, 5, 3);


// Spread Operator

// 6. Create two arrays of 5 numbers and merge them using the array spread operator.
let array1 = [22, 10, 5, 3, 2];
let array2 = [1, 6, 7, 8, 9];

let mergedArray = [...array1, ...array2];

console.log(mergedArray);


// 7. Create two arrays containing student names and merge them into one array using spread.
let students1 = ["Vijay Anand", "Arun", "Kumar"];
let students2 = ["Rahul", "Praveen", "Suresh"];

let mergedStudents = [...students1, ...students2];

console.log(mergedStudents);


// 8. Create an array and create another array containing the original values plus 3 new values using spread.
let originalArray = [22, 10, 5];

let newArray = [...originalArray, 20, 30, 40];

console.log(newArray);


// 9. Create two objects containing employee details and merge them using the object spread operator.
let employee1 = {
    name: "Vijay Anand",
    department: "IT"
};

let employee2 = {
    company: "Stackly",
    city: "Komarapalayam"
};

let mergedEmployee = {
    ...employee1,
    ...employee2
};

console.log(mergedEmployee);


// 10. Create an employee object and create a new object by copying it and adding a salary property using spread.
let employee = {
    name: "Vijay Anand",
    company: "Stackly"
};

let updatedEmployee = {
    ...employee,
    salary: 30000
};

console.log(updatedEmployee);


// 11. Create two objects with different properties and combine them into one object using spread.
let object1 = {
    name: "Vijay Anand",
    age: 22
};

let object2 = {
    qualification: "IT",
    city: "Komarapalayam"
};

let combinedObject = {
    ...object1,
    ...object2
};

console.log(combinedObject);


// 12. Create two arrays and use spread to create one array in reverse order.
let arr1 = [22, 10, 5];
let arr2 = [1, 2, 3];

let reversedArray = [...arr2, ...arr1];

console.log(reversedArray);


// Rest Operator in Functions

// 13. Create a function that accepts two fixed values and stores all remaining values using the rest operator.
function restFunction(a, b, ...rest) {
    console.log(`Fixed values: ${a}, ${b}`);
    console.log(`Remaining values: ${rest}`);
}

restFunction(22, 10, 5, 3, 2);


// 14. Create a function student(name, department, ...marks) and print the name, department, and marks.
function student(name, department, ...marks) {
    console.log(`Name: ${name}, Department: ${department}`);
    console.log(`Marks: ${marks}`);
}

student("Vijay Anand", "IT", 85, 90, 95);


// 15. Create a function that accepts two numbers and any number of additional numbers using rest.
function sumWithRest(a, b, ...additionalNumbers) {
    let sum = a + b + additionalNumbers.reduce((acc, curr) => acc + curr, 0);

    console.log(`Sum: ${sum}`);
}

sumWithRest(22, 10, 5, 3, 2);


// 16. Create a function that prints the 5th value from the rest parameter.
function printFifthValue(...values) {
    if (values.length >= 5) {
        console.log(`5th value: ${values[4]}`);
    } else {
        console.log("Less than 5 values provided.");
    }
}

printFifthValue(22, 10, 5, 3, 2, 1);


// 17. Create a function that accepts product, price, and remaining values using rest and prints them.
function productDetails(product, price, ...remaining) {
    console.log(`Product: ${product}, Price: ${price}`);
    console.log(`Remaining values: ${remaining}`);
}

productDetails(
    "Laptop",
    50000,
    "Company: Stackly",
    "Owner: Vijay Anand",
    "City: Komarapalayam"
);


// 18. Create a function that receives 10 numbers and uses rest to store all values after the first two.
function storeRemainingNumbers(a, b, ...remainingNumbers) {
    console.log(`First two numbers: ${a}, ${b}`);
    console.log(`Remaining numbers: ${remainingNumbers}`);
}

storeRemainingNumbers(22, 10, 5, 3, 2, 1, 6, 7, 8, 9);


// Array Destructuring

// 19. Create an array of 4 values and extract all four values using array destructuring.
let valuesArray = [22, 10, 5, 3];

let [val1, val2, val3, val4] = valuesArray;

console.log(`Extracted values: ${val1}, ${val2}, ${val3}, ${val4}`);


// 20. Create an array of student details and extract the first, second, and third values using destructuring.
let studentDetails = [
    "Vijay Anand",
    "IT",
    "KSR Institute",
    85,
    90
];

let [
    studentName,
    studentDepartment,
    college,
    mark1,
    mark2
] = studentDetails;

console.log(
    `Name: ${studentName}, Department: ${studentDepartment}, College: ${college}, Marks: ${mark1}, ${mark2}`
);


// 21. Create an array of 5 numbers and extract only the first and fourth values using destructuring.
let numbersArray = [22, 10, 5, 3, 2];

let [firstNum, , , fourthNum] = numbersArray;

console.log(
    `First number: ${firstNum}, Fourth number: ${fourthNum}`
);


// 22. Create a nested array and extract its values using nested destructuring.
let nestedArray = [
    22,
    [10, 5],
    3,
    [2, 1]
];

let [
    num1,
    [num2, num3],
    num4,
    [num5, num6]
] = nestedArray;

console.log(
    `Extracted values: ${num1}, ${num2}, ${num3}, ${num4}, ${num5}, ${num6}`
);


// 23. Given a nested array containing numbers inside 3 levels, extract the required values using nested destructuring.
let deepNestedArray = [
    22,
    [10, [5, 3], 2],
    1
];

let [
    deepNum1,
    [deepNum2, [deepNum3, deepNum4], deepNum5],
    deepNum6
] = deepNestedArray;

console.log(
    `Extracted values: ${deepNum1}, ${deepNum2}, ${deepNum3}, ${deepNum4}, ${deepNum5}, ${deepNum6}`
);


// Object Destructuring

// 24. Create an employee object with name, designation, and salary. Extract all values using object destructuring.
let employeeObj = {
    name: "Vijay Anand",
    designation: "IT",
    salary: 30000
};

let {
    name,
    designation,
    salary
} = employeeObj;

console.log(
    `Name: ${name}, Designation: ${designation}, Salary: ${salary}`
);


// 25. Create a student object with name, department, and cgpa. Extract all values using destructuring.
let studentObj = {
    name: "Vijay Anand",
    department: "IT",
    cgpa: 8.5
};

let {
    name: studentNameObj,
    department: studentDepartmentObj,
    cgpa
} = studentObj;

console.log(
    `Name: ${studentNameObj}, Department: ${studentDepartmentObj}, CGPA: ${cgpa}`
);


// 26. Create an object with 5 properties and extract only 3 properties using object destructuring.
let objWithFiveProps = {
    name: "Vijay Anand",
    age: 22,
    qualification: "IT",
    city: "Komarapalayam",
    college: "KSR Institute"
};

let {
    name: personName,
    qualification: personQualification,
    college: personCollege
} = objWithFiveProps;

console.log(
    `Name: ${personName}, Qualification: ${personQualification}, College: ${personCollege}`
);


// 27. Create a nested object containing employee and team details. Extract the employee name and team member names using nested destructuring.
let nestedEmployeeObj = {
    employee: {
        name: "Vijay Anand",
        designation: "IT Developer"
    },
    team: {
        members: ["Arun", "Kumar", "Rahul"]
    }
};

let {
    employee: {
        name: employeeName
    },
    team: {
        members: teamMembers
    }
} = nestedEmployeeObj;

console.log(
    `Employee Name: ${employeeName}, Team Members: ${teamMembers}`
);


// 28. Create a nested object containing company → department → employee and extract the employee name using nested destructuring.
let companyObj = {
    company: {
        department: {
            employee: {
                name: "Vijay Anand",
                designation: "IT Developer"
            }
        }
    }
};

let {
    company: {
        department: {
            employee: {
                name: employeeNameNested
            }
        }
    }
} = companyObj;

console.log(
    `Employee Name: ${employeeNameNested}`
);


// Array Manipulation

// 29. Create an array of 5 fruits and add 3 more fruits at the end using push().
let fruits = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Mango"
];

fruits.push("Orange", "Grapes", "Pineapple");

console.log(fruits);


// 30. Create an array of 5 numbers and remove the last value using pop().
let numbers = [22, 10, 5, 3, 2];

numbers.pop();

console.log(numbers);


// 31. Create an array of 5 student names and remove the first student using shift().
let studentNames = [
    "Vijay Anand",
    "Arun",
    "Kumar",
    "Rahul",
    "Suresh"
];

studentNames.shift();

console.log(studentNames);


// 32. Create an array of 4 numbers and add 2 numbers at the beginning using unshift().
let numArray = [3, 4, 5, 6];

numArray.unshift(1, 2);

console.log(numArray);


// 33. Create an array [10,20,30,40,50] and replace 30 with 100 using splice().
let arr = [10, 20, 30, 40, 50];

arr.splice(2, 1, 100);

console.log(arr);


// 34. Create an array of 6 values and remove 2 values from the middle using splice().
let valuesArray2 = [
    "Vijay Anand",
    "IT",
    "KSR Institute",
    "Komarapalayam",
    "Stackly",
    22
];

valuesArray2.splice(2, 2);

console.log(valuesArray2);


// 35. Create an array and add 3 new values in the middle using splice().
let arr3 = [
    "Vijay Anand",
    "IT",
    "Stackly",
    "KSR Institute"
];

arr3.splice(
    2,
    0,
    "22",
    "Komarapalayam",
    "Developer"
);

console.log(arr3);


// 36. Create an array and remove 2 values and add 3 new values at the same position using splice().
let arr4 = [
    "Vijay Anand",
    "IT",
    "KSR Institute",
    "Komarapalayam",
    "Stackly"
];

arr4.splice(
    1,
    2,
    "22",
    "Developer",
    "Employee"
);

console.log(arr4);


// 37. Create a student list and remove one student from the middle using splice().
let studentList = [
    "Vijay Anand",
    "Arun",
    "Kumar",
    "Rahul",
    "Suresh"
];

studentList.splice(2, 1);

console.log(studentList);


// 38. Create a shopping cart array and perform push, pop, shift, and unshift operations on it.
let shoppingCart = [
    "Laptop",
    "Mobile",
    "Keyboard"
];

shoppingCart.push("Mouse");

console.log(shoppingCart);

shoppingCart.pop();

console.log(shoppingCart);

shoppingCart.shift();

console.log(shoppingCart);

shoppingCart.unshift("Laptop");

console.log(shoppingCart);


// Array Merge & Extraction Methods

// 39. Create two arrays and merge them using concat().
let arrayA = [22, 10, 5];
let arrayB = [3, 2, 1];

let mergedArrayConcat = arrayA.concat(arrayB);

console.log(mergedArrayConcat);


// 40. Create three arrays and merge all three using concat().
let arrayC = [6, 7, 8];

let mergedAllArrays = arrayA.concat(
    arrayB,
    arrayC
);

console.log(mergedAllArrays);


// 41. Create an array of 8 values and extract values from index 2 to index 5 using slice().
let array8 = [
    "Vijay Anand",
    22,
    "IT",
    "Komarapalayam",
    "KSR Institute",
    "Stackly",
    "Developer",
    30000
];

let slicedArray = array8.slice(2, 6);

console.log(slicedArray);


// 42. Create an array of student names and extract the first 3 students using slice().
let studentNamesArray = [
    "Vijay Anand",
    "Arun",
    "Kumar",
    "Rahul",
    "Suresh"
];

let firstThreeStudents = studentNamesArray.slice(0, 3);

console.log(firstThreeStudents);


// 43. Create a nested array with 3 levels and convert it into a single-level array using flat().
let nestedArray3Levels = [
    22,
    ["IT", ["KSR Institute", "Stackly"], "Komarapalayam"],
    30000
];

let flatArray = nestedArray3Levels.flat(2);

console.log(flatArray);


// 44. Create a nested array with 4 levels and use flat() to remove the nesting.
let nestedArray4Levels = [
    "Vijay Anand",
    ["IT", ["KSR Institute", ["Stackly", "Komarapalayam"]]],
    22
];

let flatArray4Levels = nestedArray4Levels.flat(3);

console.log(flatArray4Levels);


// 45. Explain through code the difference between slice() and splice() by performing an operation with both.
let sliceArray = [
    "Vijay Anand",
    "IT",
    "KSR Institute",
    "Stackly",
    "Komarapalayam"
];

let splicedArray = [
    "Vijay Anand",
    "IT",
    "KSR Institute",
    "Stackly",
    "Komarapalayam"
];


// slice() does not change the original array
let sliced = sliceArray.slice(1, 4);

console.log("Slice result:", sliced);
console.log("Original array:", sliceArray);


// splice() changes the original array
splicedArray.splice(
    1,
    3,
    "22",
    "Developer",
    "Employee"
);

console.log("Splice result:", splicedArray);


// Search & Other Array Methods

// 46. Create an array of numbers and check whether 50 exists using includes().
let numbersArray2 = [22, 10, 50, 30, 5];

let exists = numbersArray2.includes(50);

console.log(`Does 50 exist? ${exists}`);


// 47. Create an array containing duplicate values and find the first occurrence of a value using indexOf().
let duplicateArray = [
    "Vijay Anand",
    "IT",
    "Vijay Anand",
    "Stackly",
    "IT"
];

let firstOccurrence = duplicateArray.indexOf("Vijay Anand");

console.log(
    `First occurrence of Vijay Anand is at index: ${firstOccurrence}`
);


// 48. Create an array containing duplicate values and find the last occurrence using lastIndexOf().
let lastOccurrence = duplicateArray.lastIndexOf("Vijay Anand");

console.log(
    `Last occurrence of Vijay Anand is at index: ${lastOccurrence}`
);


// 49. Create an array of numbers and sort it using sort().
let unsortedArray = [
    22,
    10,
    5,
    3,
    2,
    30
];

unsortedArray.sort((a, b) => a - b);

console.log(
    `Sorted array: ${unsortedArray}`
);


// 50. Create an array of numbers and reverse its order using reverse().
let arrayToReverse = [
    22,
    10,
    5,
    3,
    2
];

arrayToReverse.reverse();

console.log(
    `Reversed array: ${arrayToReverse}`
);
