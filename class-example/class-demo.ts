class User {
  // properties , methods , constructor

  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }
  display(): void {
    console.log(`Username: ${this.userName} and age: ${this.age}`);
  }
}

let user1 = new User("Ashfak Hossain ", 18);
user1.display();

