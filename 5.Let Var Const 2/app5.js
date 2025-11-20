/*
?Değişken nedir?
*Değişken, bir veriyi (sayı, metin, obje, dizi vs.) hafızada tutmaya yarayan isimlendirilmiş bir kutudur.
*Yani bilgisayara diyorsun ki:
*“Bu bilgiyi bir yerde sakla, sonra ben onu kullanacağım.”
*/
/*
?1) var
*✔️ Eski sistem değişken
*✔️ Function-scope çalışır
*❌ Block-scope çalışmaz
*❌ Hoisting yüzünden saçma davranışlar yapar
*❌ Güncel projelerde önerilmez
*Örnek:*/
if (true) {
    var x = 10;
}
console.log(x); // 10 (Bloğun dışına çıktı!)
/*
*Neden kötü?
*var blokları takmaz → if/for içinde tanımlasan bile dışarı sızar.
*/

/*
?2) let
*✔️ Günlük kullanılan değişken
*✔️ Block-scope
*✔️ Değeri değiştirilebilir
*✔️ Güvenli ve modern
*Örnek:*/
if (true) {
    let y = 20;
}
console.log(y); // HATA: y tanımlı değil
/*
*let sadece { } içindeki alanda yaşar.
*Bu, hataları azaltır ve kodu daha güvenli hale getirir.
*/

/*
?3) const
*✔️ Değiştirilemez sabit değişken
*✔️ Block-scope
*✔️ Tanımlandığı anda değer verilmesi zorunlu
*❗ İçindeki referans değişmez ama içeriği değişebilir
*Örnek:
*/
const z = 30;
z = 40; // HATA
const dizi = [1, 2, 3];
dizi.push(2);   // ÇALIŞIR! (içerik değişir)
/*
*Çünkü const, referansı sabitler – içeriği değil.
*/
/*
*En basit tabloyla özet
*Özellik	                            var	                              let	                                             const
*Block scope	                        ❌	                             ✔️	                                                ✔️
*Function scope	                        ✔️	                              ✔️	                                             ✔️
*Hoisting	                           Kötü	                            Güvenli	                                            Güvenli
*Yeniden değer atama	                ✔️	                              ✔️	                                             ❌
*Tekrar tanımlama	                    ✔️	                              ❌	                                                ❌
*Ne zaman kullanılır?	             Kullanma	                     Normal değişken	                                 Sabit değişken
*/