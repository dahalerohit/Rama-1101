/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  employees.map((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
   employees.forEach((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  employees.push(newEmployee);
  console.log(employees);
}

function removeAdmin() {
  //Write your code here, just console.log
  const filteredEmployees = employees.filter(employee => employee.profession !== "admin");
  console.log(filteredEmployees);
}

function concatenateArray() {
  //Write your code here, just console.log
  const newEmployees = [
    { id: 5, name: "alice", age: "22", profession: "manager" },
    { id: 6, name: "bob", age: "23", profession: "developer" },
    { id: 7, name: "eve", age: "21", profession: "designer" }
  ];
  const combinedArray = employees.concat(newEmployees);
  console.log(combinedArray)
}
