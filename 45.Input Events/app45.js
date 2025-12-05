// INPUT EVENTLARI

// focus  : Input alanına tıklandığında (odak geldiğinde) tetiklenir.
// blur   : Input alanından çıkıldığında (odak kaybolduğunda) tetiklenir.
// copy   : Input içindeki metin kopyalandığında tetiklenir.
// paste  : Input içine yapıştırma işlemi yapıldığında tetiklenir.
// cut    : Input içindeki metin kesildiğinde tetiklenir.
// select : Input içinde herhangi bir metin seçildiğinde tetiklenir.

const todo = document.querySelector("#todoName");

// focus → input'a tıklandığında çalışır
todo.addEventListener("focus", run);

// blur → input'tan çıkıldığında çalışır
todo.addEventListener("blur", run);

// copy → input içindeki metin kopyalanınca çalışır
todo.addEventListener("copy", run);

// paste → input içine yapıştırma yapılınca çalışır
todo.addEventListener("paste", run);

// cut → input içinden metin kesilince tetiklenir
todo.addEventListener("cut", run);

// select → Kullanıcı input içinde metin seçince tetiklenir
todo.addEventListener("select", run);

// Fonksiyon
function run(e) {
    console.log(e.type);
}
