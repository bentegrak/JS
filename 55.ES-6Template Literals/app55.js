// TEMPLATE LİTERALS

// function write(firstName , lastName){
//     // console.log("İsim : " + firstName +" " + "Soyisim :" + lastName)
//     //Template Literals ile kullanmak
//     // ALT GR + İKİ KEZ NOKTALI VİRGÜL TUŞU.

//     console.log(
//         `
//          İsim : ${firstName} 
//          Soyisim: ${lastName}
//          `

//         )
// }

// write("Enes" , "Bayram")


function getUserById(userId) {
    console.log(`http://localhost:8080/users/${userId}`)
}

getUserById(10)


// Template Literals Nedir?
//
// 1) Backtick (`) ile yazılır.
// 2) String içine değişken gömmeyi sağlar (${ }).
// 3) Çok satırlı string yazmayı kolaylaştırır.
//
// Örnek:
// const name = "Furkan";
// const age = 24;
// const text = `Benim adım ${name}, yaşım ${age}`;
//
// Özet: String + değişken = temiz ve okunur kod.
