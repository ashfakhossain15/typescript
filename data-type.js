var firstName;
var lastName;
var fullName;
var userId;
var isActivated;
firstName = "Ashfak";
lastName = "Hossain";
userId = 575125;
isActivated = true;
fullName = firstName.concat(lastName);
console.log("Your User ID is ".concat(userId, " and userName is ").concat(fullName, "\naccount is").concat(isActivated));
console.log(fullName.split(" "));
console.log(fullName.split(""));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
var bioData = function () {
    console.log("My name is ".concat(fullName, " my userId is ").concat(userId));
};
bioData();
