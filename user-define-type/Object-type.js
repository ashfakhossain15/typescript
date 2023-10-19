var users = [];
var user1;
user1 = { userName: "ashfak", userId: 92 };
users.push(user1);
var user2;
user2 = { userName: "fahim", userId: 102 };
users.push(user2);
console.log(users);
for (var key in users) {
    console.log(users[key]["userName"]);
}
