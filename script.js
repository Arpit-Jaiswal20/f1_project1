/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  let developers = arr.map((obj, idx) => {
    if (obj.profession == "developer") return obj.name;
  });
  console.log(developers);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  let developers = [];
  arr.forEach((obj, idx) => {
    if (obj.profession == "developer") developers.push(obj.name);
  });
  console.log(developers);
}

function addData() {
  //Write your code here, just console.log
  arr.push({ id: 4, name: "susan", age: "20", profession: "intern" });
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter(obj => obj.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 5, name: "andrew", age: "21", profession: "SDE"},
    { id: 6, name: "steve", age: "22", profession: "software engineer"},
    { id: 7, name: "mike", age: "23", profession: "Test Engineer"},

  ];
      let result = arr.concat(arr2);
      console.log(result);
}

PrintDeveloperbyMap();
PrintDeveloperbyForEach();
addData();
removeAdmin();
concatenateArray();
