// -------------------------------------------------------------
// SESSION STORAGE NEDİR?
// -------------------------------------------------------------
// Tarayıcıda geçici veri saklamak için kullanılır.
// Sekme (tab) kapandığında veriler otomatik silinir.
// Yani kullanıcı sayfayı kapatınca tüm sessionStorage gider.
// Kalıcılık yoktur.
// -------------------------------------------------------------


// -------------------------------------------------------------
// Değer Ekleme (setItem)
// -------------------------------------------------------------
// Anahtar (key) ve değer (value) şeklinde çalışır.

sessionStorage.setItem("350", "Enes");
sessionStorage.setItem("216", "Yasin");
sessionStorage.setItem("154", "Bilal");
sessionStorage.setItem(552, 37);   // Key sayı da olabilir, value otomatik string olur.


// -------------------------------------------------------------
// Değer Silme (removeItem)
// -------------------------------------------------------------
// Belirtilen key'e sahip veriyi siler.

sessionStorage.removeItem("154");


// -------------------------------------------------------------
// Değer Alma (getItem)
// -------------------------------------------------------------
// Eğer key yoksa null döner.

let value = sessionStorage.getItem("350");
if (value === null) {
    console.log("Değer bulunamadı.");
} else {
    console.log("Değer bulundu :", value);
}


// -------------------------------------------------------------
// Tümünü Silme (clear)
// -------------------------------------------------------------
// sessionStorage içindeki tüm verileri siler.

// sessionStorage.clear();


// -------------------------------------------------------------
// getItem ile değer almak her zaman string döner (ÖNEMLİ!!)
// -------------------------------------------------------------
// let value = sessionStorage.getItem(552);
// console.log(typeof value); // → string çıktısını görürsün.


// -------------------------------------------------------------
// Session Storage - ARRAY kaydetmek
// -------------------------------------------------------------
// Storage SADECE string tutabildiği için array veya object
// KAYDETMEK İÇİN JSON.stringify kullanman gerekir.
// GERİ ALMAK İÇİN JSON.parse kullanılır.
// -------------------------------------------------------------

// let names = ["Ali","Enes","Kübra","Adem","Ayşenur"];

// sessionStorage.setItem("names", JSON.stringify(names));

// let value = JSON.parse(sessionStorage.getItem("names"));

// value.forEach(function(name){
//     console.log(name);
// });


// -------------------------------------------------------------
// ---------------------- LOCAL STORAGE ------------------------
// -------------------------------------------------------------
// LOCAL STORAGE NEDİR?
// -------------------------------------------------------------
// sessionStorage'dan farkı: veriler kalıcıdır.
// Sekme kapansa bile, tarayıcı kapansa bile veri durur.
// Kullanıcı manuel silene kadar kalır.
// -------------------------------------------------------------


// -------------------------------------------------------------
// Değer Ekleme
// -------------------------------------------------------------
// localStorage.setItem("motion1", "Push up");
// localStorage.setItem("motion2", "Barfix");
// localStorage.setItem("motion3", "Burpee");
// localStorage.setItem("motion4", "Squat");


// -------------------------------------------------------------
// Değer Alma
// -------------------------------------------------------------
// let value = localStorage.getItem("motion1");
// console.log(value);


// -------------------------------------------------------------
// Değer Silme
// -------------------------------------------------------------
// localStorage.removeItem("motion4");


// -------------------------------------------------------------
// Tümünü Silme
// -------------------------------------------------------------
// localStorage.clear();


// -------------------------------------------------------------
// Local Storage – Array İşlemleri (çok önemli kullanım!)
// -------------------------------------------------------------
// localStorage.clear();

// let motions = ["Push up","Barfix","Burpee","Squat","Chin Up"];

// // Array’i JSON formatında kaydet
// localStorage.setItem("motions", JSON.stringify(motions));

// // Array’i geri çekip normal array’e çevir
// let value = JSON.parse(localStorage.getItem("motions"));

// // Döngü ile yazdır
// value.forEach(function(motion) {
//     console.log(motion);
// });

// Neden Storage Kullanıyoruz?
// Bir kullanıcı…
// siteye tekrar girdiğinde form verisi kaybolmasın diye
// tema ayarı (dark/light mode) kaydedilsin diye
// sepet bilgisi kaybolmasın diye
// oyun skorları, level bilgisi silinmesin diye
// giriş yapmış kullanıcı bilgisi hatırlansın diye
// işte bunları saklamak için storage kullanıyoruz.
// Bu veriler tarayıcı kapanınca bile durabilir → Local Storage.
// Sadece o sekmede kalsın diyorsan → Session Storage.