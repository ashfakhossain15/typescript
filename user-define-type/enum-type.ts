// numeric enum
enum RequestType {
  readDate,
  saveData,
  deleteDate = 120,
}

console.log(RequestType);

console.log(RequestType["deleteDate"]);

// string enum
enum RequestType2 {
  readData = "READDATA",
  deleteData = "DELETEDATA",
}
console.log(RequestType2);
console.log(RequestType2.deleteData);
console.log(RequestType2["deleteData"]);

// heterogeneous enum
enum RequestType3 {
  readData = "READDATA",
  deleteData = "DELETEDATA",
  userId = 575125,
}
console.log(RequestType3);
console.log(RequestType3.userId);
console.log(RequestType3["userId"]);
console.log(RequestType2["deleteData"]);
