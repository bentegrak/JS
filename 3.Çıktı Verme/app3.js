//Document write ile çıktı verme

document.writeln("Furkan Teğrak <br> ");
document.write("fURKAN tEĞRAK");

console.log("Hello World");

let a = 5;
let b = 10;

console.log("a+b:", a + b);

//Alert uyarı amaçlı popup çıkarır

//alert("F5 tuşuna lütfen basmayın.")
alert("İki Sayının Toplamı:" + (a + b));

//Window içindeki alanları çağırarak işler yapabiliriz.
console.log(window);
console.log(window.location.port);

/*
!DevTools Sekmelerinin Kısa ve Net Açıklamaları

*1. Elements
Sayfanın HTML ve CSS yapısını görürsün.
Canlı şekilde HTML/CSS üzerinde değişiklik yapıp sonucu hemen görebilirsin.
Hangi elementin hangi CSS tarafından etkilendiğini kontrol edersin.

*2. Console
JavaScript hata ve log’larını gösterir.
console.log() çıktılarını burada görürsün.
Anlık JS kodu çalıştırabilirsin.

*3. Sources
Projenin tüm JS/CSS dosyalarını burada görürsün.
Breakpoint koyup kodun adım adım nasıl çalıştığını inceleyebilirsin.

*4. Network
Sayfanın yaptığı tüm request’leri gösterir.
API çağrılarının response’larını görebilirsin.
Yüklenmeyen dosyaları, yavaş istekleri, 404/500 hatalarını burada yakalarsın.

*5. Performance
Sayfanın performans kaydını gösterir.
FPS düşmesi, yavaş render, ağır JS işlemleri gibi şeyleri analiz eder.

*6. Memory
Hafıza kullanımını ölçer.
Memory leak (gereksiz hafıza dolması) tespiti için kullanılır.

*7. Application
LocalStorage / SessionStorage / Cookies gibi client-side verileri yönetirsin.
PWA, Service Worker, Cache vs. de burada.

*8. Security
Sayfanın HTTPS sertifikasını ve güvenlik durumunu gösterir.

*9. Lighthouse
Sayfanın otomatik performans, SEO, accessibility analizini yapar.
Site hızını ve optimize edilmesi gereken yerleri gösterir.

*/