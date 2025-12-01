// -------------------------------------------------------
// SELECTORS (Seçiciler) - Temel Bilgiler
// -------------------------------------------------------
// 1) getElementById               → ID ile seçer (EN HIZLI SEÇİCİ)
// 2) getElementsByClassName       → Class’a göre seçer (HTMLCollection döner)
// 3) getElementsByTagName         → Tag adına göre seçer
// 4) querySelector                → İlk eşleşen elementi döner
// 5) querySelectorAll             → Tüm eşleşen elementleri döner (NodeList)
// -------------------------------------------------------


// -------------------------------------------------------
// getElementById ÖRNEK
// -------------------------------------------------------
// const button = document.getElementById("todoAddButton");
// console.log(button);
// console.log(button.id);
// console.log(button.getAttribute("id"));
// console.log(button.className);
// console.log(button.getAttribute("class"));


// -------------------------------------------------------
// classList ile class okumak
// -------------------------------------------------------
// const classListesi = button.classList;
// classListesi.forEach(function(c){
//     console.log(c); // her class'ı yazdırır
// });


// -------------------------------------------------------
// textContent vs innerHTML FARKI (ÖNEMLİ!!)
// -------------------------------------------------------
// textContent → sadece düz metin
// innerHTML   → HTML etiketlerini de okur/yazar
// -------------------------------------------------------

// let t1 = button.textContent;
// let t2 = button.innerHTML;

// console.log(t1);
// console.log(t2);

// button.innerHTML = "<b>Todo Ekleyin</b>";


// -------------------------------------------------------
// getElementsByClassName – Birden fazla elementi seçme
// -------------------------------------------------------
// const items = Array.from(document.getElementsByClassName("list-group-item"));
// items.forEach(function(item){
//     console.log(item.textContent);
// });


// -------------------------------------------------------
// getElementsByTagName – Tag seçme
// -------------------------------------------------------
// const forms = Array.from(document.getElementsByTagName("form"));
// forms.forEach(f => console.log(f));


// -------------------------------------------------------
// querySelector vs querySelectorAll (ÖNEMLİ!!)
// -------------------------------------------------------
// querySelector → İlk bulduğu elemanı döner
// querySelectorAll → Tüm elemanları döner

// const btn = document.querySelector("#todoClearButton"); // ID
// const list = document.querySelector(".list-group");    // class
// const firstLi = document.querySelector("li");          // ilk li
// const specialLi = document.querySelector("li:nth-child(3)"); // 3. li


// -------------------------------------------------------
// ------------------ EKSTRA ÖNEMLİ SELECTORLAR ------------------
// Bunlar genelde insanlar unutuyor ama ÇOK KULLANILIYOR!
// -------------------------------------------------------

// 1) attribute selector → "[type='text']"
// const input = document.querySelector("input[type='text']");

// 2) class'ın içindeki ilk eleman
// const firstChild = document.querySelector(".list-group li:first-child");

// 3) class'ın içindeki son eleman
// const lastChild = document.querySelector(".list-group li:last-child");

// 4) bir elementin direkt içindeki elemanlar (çocuk seçici)
// const directLis = document.querySelectorAll(".list-group > li");

// 5) aynı anda birden fazla class (çok kullanılan)
// const redButtons = document.querySelectorAll(".btn.btn-danger");


// -------------------------------------------------------
// Tek ve çift li elemanlarına stil verme (odd – even)
// -------------------------------------------------------

// li:nth-child(odd) → 1,3,5,7 gibi tek sıradakiler
// li:nth-child(even) → 2,4,6,8 gibi çift sıradakiler

const oddList = Array.from(document.querySelectorAll("li:nth-child(odd)"));
oddList.forEach(function(todo){
    todo.style.backgroundColor = "lightgrey";
});

console.log(oddList);


// -------------------------------------------------------
// EVEN (çiftler) RENKLENDİRME – UNUTULAN BİR DETAY
// -------------------------------------------------------
// Eğer çift satırları da boyamak istersen:

const evenList = Array.from(document.querySelectorAll("li:nth-child(even)"));
evenList.forEach(function(todo){
    todo.style.backgroundColor = "white";
});

// Bu önemliydi, genelde unutuluyor → odd + even beraber kullanılır.
// -------------------------------------------------------
