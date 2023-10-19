type User = { userName: string; userId: number };
let users: User[] = [];

let user1: User;
user1 = { userName: "ashfak", userId: 92 };

users.push(user1);

let user2: User;
user2 = { userName: "fahim", userId: 102 };

users.push(user2);

let user3: User;
user3 = { userName: "sohan", userId: 24 };

users.push(user3);

console.log(users);

type RequestType = "GET OUT" | "GET IN";

let getRequest: RequestType;
getRequest = "GET IN";

const request = (requestType: RequestType) => {
  console.log(request);
};
request("GET IN");
