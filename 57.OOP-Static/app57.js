//!STATİC NEDİR ?

//!Bir function veya özellik static ise CLASS'a özgüdür
//!değilse nesneye özgüdür.

class StringUtil{
  static  isNull(){

    }
    static getCharacterLength(){

    }
}

// class Insan{

//     static languagesCount=10;

//     constructor(firstName , lastName, salary){
//         this.firstName = firstName;
//         this.lastName=lastName;
//         this.salary = salary;
//     }


//     writeInfo(){
//         console.log(this.firstName,this.lastName,
//             this.salary,this.languagesCount)
//     }
// }

// // const insan1 = new Insan("Enes","Bayram","10000");
// // insan1.writeInfo();

// console.log(Insan.languagesCount);


// class Matematik{

//    static topla(a,b){
//         console.log(a+b)
//     }

//     cikar(a,b){
//         console.log(a-b)
//     }

//    static carp(a,b){
//         console.log(a*b)
//     }

//     bol(a,b){
//         console.log(a/b)
//     }
    
// }
// //TypeScript

// const matematik = new Matematik();
// matematik.topla(10,5);
// matematik.carp(5,7)

//!Static olarak tanımlanmamışsa NESNE üzerinden erişilir.
//!Static ise CLASS İSMİ üzerinden erişilir.



//! const stringUtil = new StringUtil();


// static Nedir?
//
// 1) Class’a aittir, nesneye ait değildir.
// 2) Nesne oluşturmadan çağrılır.
// 3) Yardımcı (utility) metotlar için kullanılır.
//
// Örnek:
// class MathUtils {
//   static topla(a, b) {
//     return a + b;
//   }
// }
//
// MathUtils.topla(2, 3); // 5
//
// Özet: static = class’ın kendisi, nesne değil.







