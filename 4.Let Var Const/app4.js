/*1. Global Scope (Global Alan)

Bir değişken her yerden erişilebiliyorsa, yani tüm dosyada ya da pencere içerisinde kullanabiliyorsan → global scope.
*/
let x = 10; // global

function test() {
    console.log(x); // erişilir
}

test();
console.log(x); // buradan da erişilir

/*
Function Scope (Fonksiyon Kapsamı)

Bir değişken sadece tanımlandığı fonksiyonun içinde geçerliyse → function scope.

Bunu oluşturan: var, let, const (hepsi fonksiyon içinde function scope olur)
*/
function test() {
    let y = 20; // sadece bu fonksiyonda geçerli
    console.log(y); // çalışır
}

test();
console.log(y); // ❌ HATA: y tanımlı değil

/*
Block Scope (Blok Kapsamı)
Sadece süslü parantez {} içindeki alanda geçerliyse, bu block scope’tur.
Bunu oluşturan: let ve const
⚠️ var block-scoped değildir.
Block örnekleri:
if
switch
for
while
try/catch
normal {} blokları
*/
if (true) {
    let z = 30;
    console.log(z); // çalışır
}

console.log(z); // ❌ HATA