export class Utilities{
    randomEmail(){
        const currentTime = Date.now();
        const email =`nahin_${currentTime}@gmail.com`;
        return email;
    }
}

//   (function randomEmail(){
//         const currentTime =  Date.now();
//         const email =`nahin_${currentTime}@gmail.com`;
//         console.log(email);
//         return email;
//     })();