var users = [];
var user1;
user1 = { userName: "ashfak", userId: 92 };
users.push(user1);
var user2;
user1 = { userName: "fahim", userId: 102 };
users.push(user1);
console.log(users);
for (var key in users) {
    console.log(users[key]["userName"]);
}
c;
