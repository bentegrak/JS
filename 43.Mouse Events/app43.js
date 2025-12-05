// MOUSE EVENTLARI

// DOMContentLoaded → HTML tamamen yüklendiğinde çalışır (resimler yüklenmese bile)
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded");
});

// load → Sayfadaki tüm kaynaklar (resim, CSS, JS) tamamen yüklendiğinde çalışır
window.addEventListener("load", function() {
    console.log("load");
});

// Element seçimi
const cardTitle = document.querySelectorAll(".card-title")[1];
const cardBody = document.querySelectorAll(".card-body")[1];

// click → Tek tıklama olayı
cardBody.addEventListener("click", function(e) {
    console.log("click");
});

// dblclick → Çift tıklama olayı
cardBody.addEventListener("dblclick", function(e) {
    console.log("dblclick");
});

// mouseover → Elementin üzerine girince tetiklenir (çocuk elementlerde tekrar tetiklenir)
cardBody.addEventListener("mouseover", function(e) {
    console.log("mouseover");
});

// mouseout → Elementten çıkınca tetiklenir (çocuk elementlerde tekrar tetiklenir)
cardBody.addEventListener("mouseout", function(e) {
    console.log("mouseout");
});

// mouseenter → Sadece elementin içine ilk girişte tetiklenir (çocuk elementlere girince tetiklenmez)
cardBody.addEventListener("mouseenter", function(e) {
    console.log("mouseenter");
});

// mouseleave → Sadece elementten çıkışta tetiklenir (çocuk elementlere girince tetiklenmez)
cardBody.addEventListener("mouseleave", function(e) {
    console.log("mouseleave");
});
