// numeric enum
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readDate"] = 0] = "readDate";
    RequestType[RequestType["saveData"] = 1] = "saveData";
    RequestType[RequestType["deleteDate"] = 120] = "deleteDate";
})(RequestType || (RequestType = {}));
console.log(RequestType);
console.log(RequestType["deleteDate"]);
// string enum
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "READDATA";
    RequestType2["deleteData"] = "DELETEDATA";
})(RequestType2 || (RequestType2 = {}));
console.log(RequestType2);
console.log(RequestType2.deleteData);
console.log(RequestType2["deleteData"]);
// heterogeneous enum
var RequestType3;
(function (RequestType3) {
    RequestType3["readData"] = "READDATA";
    RequestType3["deleteData"] = "DELETEDATA";
    RequestType3[RequestType3["userId"] = 575125] = "userId";
})(RequestType3 || (RequestType3 = {}));
console.log(RequestType3);
console.log(RequestType3.userId);
console.log(RequestType3["userId"]);
console.log(RequestType2["deleteData"]);
