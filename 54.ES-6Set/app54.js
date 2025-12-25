//SET

const set = new Set();

//add metodu

set.add(true)
set.add(3.14)
set.add("Enes")
// set.add("Enes")
// set.add("Enes")
// set.add("Enes")
// set.add("Enes")
// set.add("Enes")
set.add(7)
set.add({ username: "enes", password: "1" });
set.add([1, 2, 3, 4])




//Size
// console.log(set.size)


//delete

// set.delete("Enes")
// set.delete(7)
// set.delete([1,2,3,4])
// console.log(set.size)


//Has
// console.log(set.has("Ali"))

//For of döngüsü
// for(let value of set){
//     console.log(value)
// }

// const values = Array.from(set);
// values.forEach((value)=>{
//     console.log(value)
// })


//SET DEN ARRAY OLUŞTURMA
// const values = Array.from(set);


//ARRAY DEN SET OLUŞTURMAK

// let array = [1,"Enes",true,"Mustafa",15,[1,2,3]]

// const newSet = new Set(array);
// console.log(newSet)


// Set Nedir?
//
// 1) Tekrarsız (unique) değerler tutar.
// 2) Key yok, sadece VALUE vardır.
// 3) Aynı değeri 2 kez eklesen de biri tutulur.
//
// Kullanım:
// const set = new Set();
// set.add(1);
// set.add(2);
// set.add(2); // eklenmez
//
// Metotlar:
// set.has(1);    // true
// set.delete(2);
// set.size;      // eleman sayısı
//
// Dolaşma:
// for (let v of set) { console.log(v); }
//
// Özet: Tekrar istemiyorsan → Set kullan.
