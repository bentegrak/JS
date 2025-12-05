// KLAVYE EVENTLARI

// keypress : Sadece harf ve sayı tuşlarında tetiklenir (ÖRN: a, b, c, 1, 2, 3).
// keydown  : Tüm tuşlarda tetiklenir (Ctrl, Shift, Enter, Backspace dahil).
// keyup    : Tuştan elini kaldırdığın anda tetiklenir.

// ÖRNEK: keydown ile F5 engelleme
// document.addEventListener("keydown", run);

// function run(e) {
//   console.log(e.keyCode);
//   if (e.keyCode == 116) { // F5 tuşu
//     alert("Sayfa yenileme engellendi!");
//   }
//   e.preventDefault();
// }


// ELEMENT SEÇİMLERİ
const cardTitle = document.querySelectorAll(".card-title")[0];
const input = document.querySelector("#todoName");

// keyup → Tuştan elini kaldırınca çalışır
input.addEventListener("keyup", run);

// FONKSİYON
function run(e) {
    // Input içine yazılan değeri cardTitle içine aktarır
    cardTitle.textContent = e.target.value;
}
