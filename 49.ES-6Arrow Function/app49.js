// function yazdir(){
//     console.log("Merhaba")
// }

// yazdir()

//ARROW FUNCTİON

// const yazdir = ()=>{
//     console.log("Merhaba")
// }

// yazdir()


// const yazdir =(firstName,lastName)=>console.log("Merhaba",firstName,lastName)

// yazdir("Enes","Bayram")

// const yazdir = firstName=> console.log("Merhaba",firstName)
// yazdir("Enes")

const kupAl = x => x * x * x
const kareAl = (x) => x * x



console.log("Değer ", kareAl(3))

// Arrow Function (=>) ile Normal Function farkı:
//
// 1) Daha kısa yazılır → okunması ve yazması hızlıdır.
//    function topla(a,b){ return a+b }
//    const topla = (a,b) => a+b
//
// 2) Arrow function kendi `this`’ini oluşturmaz.
//    `this` değerini bulunduğu scope’tan alır (en kritik fark).
//    Bu yüzden özellikle event, callback ve class içinde güvenlidir.
//
// 3) Arrow function `arguments` nesnesine sahip değildir.
//    Gerekirse rest (...) kullanılır.
//
// Özet: Kısa, modern, callback’ler için ideal.
// `this` ihtiyacı varsa arrow function tercih edilir.
