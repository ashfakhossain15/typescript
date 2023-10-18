let userId: number | string;


userId: "575125";
userId: 575124;

const userInfo = (userId: string | number) => {
    console.log(userId  )
}

userInfo("575125");
userInfo(575125)
