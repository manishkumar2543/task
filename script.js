
// 1. *Create Student Objects*:
//    - Each student should have the following properties: id, name, and grades.
//    - The grades property should be an object with subjects as keys and corresponding grades as values.

// 2. *Store Students in an Array*:
//    - Create an array to store multiple student objects.

// 3. *Functions*:
//    - *Add a Student*: Create a function to add a new student to the array.
//    - *Remove a Student*: Create a function to remove a student from the array by their id.




let student={
    name:"manish",
    id:233,
    grade:"A+",

}
for(let result in student){
    console.log(result);
}

let obj={
    name:"mans",
    id:12,
    grade:"a",
}
let arr=[obj2];
console.log(arr);




// Define the structure of a student object
class Student {
    constructor(id, name, age, grade) {
      this.id = id;
      this.name = name;
      this.age = age;
      this.grade = grade;
    }
  }
  
//   arr
  let students = [];
  
//  add new stu
  function addStudent(id, name, age, grade) {
    let newStudent = new Student(id, name, age, grade);
    students.push(newStudent);
  }
  
//  remove
  function removeStudent(id) {
    students = students.filter(student => student.id !== id);
  }
  

  

