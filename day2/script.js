// step1
let name = "Ogbonna Precous";
const age = 20;
let courseName = "Javascript fundamental";
let favProgrammingLang = "javascript";
let coursePaid = true;

// step2
console.log(
  `MTECH HUB STUDENT CARD:
  name: ${name} 
  age :${age}
   course:${courseName} 
   language:${favProgrammingLang}
    paid:${coursePaid}`,
);

// step 3
favProgrammingLang = "java";
coursePaid = false;
console.log(favProgrammingLang, coursePaid);

// step 4
console.log(typeof name);
console.log(typeof age);
console.log(typeof courseName);
console.log(typeof favProgrammingLang);
console.log(typeof coursePaid);

// task2 creating objects

let student = {
  name: "Ogbonna Precious",
  age: 20,
  course: "javascript",
};
let lang = ["python", "java", "javascript"];
// assigning newvalues

let student2 = student;
let lang2 = lang;
// modifying

student2.age = 22;
lang2.push("C++");
console.log(student, lang, student2, lang2);
