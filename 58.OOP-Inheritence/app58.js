// Inheritance (Kalıtım) Nedir?
//
// 1) Bir class’ın başka bir class’tan özellik ve metotları almasıdır.
// 2) `extends` ile yapılır.
// 3) `super()` parent class’ın constructor’ını çağırır.
//
// Örnek:
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }
//
// class Dog extends Animal {
//   constructor(name, type) {
//     super(name);
//     this.type = type;
//   }
// }
//
// Özet: Ortak kodu yaz, tekrar etme.
