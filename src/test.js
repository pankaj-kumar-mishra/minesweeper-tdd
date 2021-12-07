var t1;
var t2;
var t3;
var user = {
  name: "Pankaj",
  surname: "Mishra",
  age: 27,
  isAdmin: true,
};
var multiply = function (a, b) {
  return a * b;
};
multiply(10, 5);
var mul = function (a, b) {
  return a * b;
};
var div = function (a, b) {
  return a / b;
};
var add = function (a, b) {
  return a + b;
};
var sub = function (a, b) {
  return a - b;
};
var user1 = {
  name: "PK 1",
  surname: "Mishra",
  age: 27,
  isAdmin: true,
};
var user2 = {
  name: "PK 1",
  surname: "Mishra",
  age: 27,
  isAdmin: true,
  permissions: ["manager", "operator", "instructor"],
  address: "India",
};
var user3 = {
  name: "PK 1",
  surname: "Mishra",
  age: 27,
  isAdmin: true,
};
var user4 = {
  name: "PK 1",
  surname: "Mishra",
  age: 27,
  isAdmin: "yes",
};
var usersArr = [user1, user2, user3];
function getFirst(arr) {
  return arr[0];
}
getFirst(usersArr);
