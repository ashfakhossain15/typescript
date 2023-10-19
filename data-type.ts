let firstName: string;
let lastName: string;
let fullName: string;
let userId: number;
let isActivated: boolean;

firstName = "Ashfak";
lastName = "Hossain";
userId = 575125;
isActivated = true;
fullName = firstName.concat(lastName);

console.log(`Your User ID is ${userId} and userName is ${fullName}
account is${isActivated}`);
console.log(fullName.split(" "));
console.log(fullName.split(""));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

const bioData = (): void => {
  console.log(`My name is ${fullName} my userId is ${userId}`);
};
bioData();
