let users: object[] = [];

let user1: { userName: string; userId: number };

user1 = { userName: "ashfak", userId: 92 };

users.push(user1);

let user2: { userName: string; userId: number };
user1 = { userName: "fahim", userId: 102 };

users.push(user1);
console.log(users);

for (const key in users) {
  console.log(users[key]["userName"]);
}
c 