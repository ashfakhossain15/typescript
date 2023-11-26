var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("Username: ".concat(this.userName, " and age: ").concat(this.age));
    };
    return User;
}());
var user1 = new User("Ashfak Hossain ", 18);
user1.display();
