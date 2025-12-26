// OOP GİRİŞ

let a;

class Insan { // sınıf 
    /*
        1-Özellikler
        2-Yapıcı metot
        3-Function 
    */
    constructor(isim, soyisim, yas, maas) { // yapıcı metot
        this.isim = isim;
        this.soyisim = soyisim;
        this.yas = yas;
        this.maas = maas;
    }
    bilgileriGoster() {
        console.log(
            ` İsim : ${this.isim} 
              Soyisim : ${this.soyisim}
              Yaş : ${this.yas}
              Maaş : ${this.maas}`
        )
    }


}
const insan1 = new Insan("Enes", "Bayram", 23, 10000);
const insan2 = new Insan("Betül", "Çınar", 24, 7500);

console.log(insan1.isim)
console.log(insan2.isim)
// insan1.bilgileriGoster()
// insan2.bilgileriGoster()


// Constructor Nedir?
//
// 1) Class’tan nesne oluşturulurken OTOMATİK çalışır.
// 2) Nesnenin başlangıç (initial) değerlerini ayarlamak için kullanılır.
// 3) this ile nesneye ait property’ler tanımlanır.
//
// Örnek:
// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
//
// const user1 = new User("Furkan", 24);
//
// Özet: Nesne doğarken çalışan özel metot.