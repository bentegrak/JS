//For in  - For of Döngüleri

let names = ["Enes", "Ali", "Yusuf", "Betül", "Ceyda"];

// names.forEach(function(name){
//     console.log(name)
// })
// names.forEach(name=>console.log(name))


//For in Döngüsü

//  degiskenTanimlama ,in , diziİsmi
// for(let name in names){
//     console.log(name , names[name])
// }


//For of Döngüsü

// for(let isim of names){
//     console.log(isim , names.indexOf(isim))
// }

// for...in vs for...of
//
// for...in:
// 1) Object üzerinde kullanılır.
// 2) Key (anahtar) döner.
// 3) Object’te gezmek için idealdir.
//
// for...of:
// 1) Array, string, map, set gibi iterable yapılarda kullanılır.
// 2) Direkt VALUE (değer) döner.
// 3) Array elemanlarında gezmek için idealdir.
//
// Örnek:
// for (let key in user) { console.log(key); }   // name, age
// for (let value of arr) { console.log(value); } // 1,2,3
//
// Özet: Object → for...in | Array → for...of
