// ------------------------------------------
// 1) HTML ELEMANLARINI SEÇME
// ------------------------------------------

// Görev yazma kutusu
const input = document.querySelector("#todoInput");

// Ekle butonu
const addBtn = document.querySelector("#addBtn");

// Görevlerin listelendiği <ul>
const todoList = document.querySelector("#todoList");

// Tema değiştirme butonu
const themeBtn = document.querySelector("#themeBtn");


// ------------------------------------------
// 2) SAYFA AÇILIR AÇILMAZ GÖREVLERİ YÜKLEME
// ------------------------------------------
document.addEventListener("DOMContentLoaded", loadTasks);

// Ekle butonuna tıklanınca görev ekle
addBtn.addEventListener("click", addTask);

// Tema butonuna tıklama
themeBtn.addEventListener("click", changeTheme);


// ------------------------------------------
// 3) BİLDİRİM (MESAJ) GÖSTERME FONKSİYONU
// ------------------------------------------
// Bu fonksiyon ekranda 2 saniyelik bilgi mesajı gösterir
function showMessage(text, type) {

    const box = document.querySelector("#messageBox");

    // Önce kutunun tüm class'larını resetle
    box.className = "";

    // Mesaj kutusunu görünür yap
    box.style.display = "block";

    // Mesaj metnini yerleştir
    box.textContent = text;

    // Renk türü belirle (success / error)
    if (type === "success") box.classList.add("success");
    else if (type === "error") box.classList.add("error");

    // 2 saniye sonra mesajı gizle
    setTimeout(() => {
        box.style.display = "none";
    }, 2000);
}


// ------------------------------------------
// 4) GÖREV EKLEME FONKSİYONU
// ------------------------------------------
function addTask() {

    // Kullanıcı boş görev eklemeye çalışırsa uyar
    if (input.value.trim() === "") {
        alert("Görev yazmalısın!");
        return;
    }

    // Yeni bir görev satırı (li) oluştur
    const li = document.createElement("li");

    // ------------------------------------------
    // GÖREV METNİ → SPAN içine alınır
    // (Bunun sebebi: sadece yazının üstü çizilsin, butonlar çizilmesin)
    // ------------------------------------------
    const taskText = document.createElement("span");
    taskText.textContent = input.value;
    taskText.classList.add("task-text"); 

    // ------------------------------------------
    // ✔ TAMAMLAMA BUTONU
    // ------------------------------------------
    const completeBtn = document.createElement("span");
    completeBtn.textContent = "✔";
    completeBtn.classList.add("btn-tip");
    completeBtn.setAttribute("data-tip", "Tamamla");
    completeBtn.style.cursor = "pointer";
    completeBtn.style.color = "green";
    completeBtn.style.fontWeight = "bold";

    // ------------------------------------------
    // ↩ GERİ ALMA BUTONU
    // ------------------------------------------
    const undoBtn = document.createElement("span");
    undoBtn.textContent = "↩";
    undoBtn.classList.add("btn-tip");
    undoBtn.setAttribute("data-tip", "Geri al");
    undoBtn.style.cursor = "pointer";
    undoBtn.style.color = "orange";
    undoBtn.style.fontWeight = "bold";

    // ------------------------------------------
    // ✎ DÜZENLEME BUTONU
    // ------------------------------------------
    const editBtn = document.createElement("span");
    editBtn.textContent = "✎";
    editBtn.classList.add("btn-tip");
    editBtn.setAttribute("data-tip", "Düzenle");

    editBtn.style.cursor = "pointer";
    editBtn.style.color = "blue";
    editBtn.style.fontWeight = "bold";

    // ------------------------------------------
    // BUTON KAPSAYICI → tüm butonlar aynı hizada dursun
    // ------------------------------------------
    const btnContainer = document.createElement("div");
    btnContainer.style.display = "flex";
    btnContainer.style.gap = "10px";
    btnContainer.style.alignItems = "center";

    // Butonları bu container'a ekliyoruz
    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(undoBtn);
    btnContainer.appendChild(completeBtn);
    
    // ------------------------------------------
    // Lİ içine yazı ve butonları ekle
    // ------------------------------------------
    li.appendChild(taskText);
    li.appendChild(btnContainer);

    // Görev satırını listeye ekle
    todoList.appendChild(li);

    // ------------------------------------------
    // ✔ TAMAMLAMA EVENTİ
    // ------------------------------------------
    completeBtn.addEventListener("click", () => {

        // Eğer zaten tamamlanmışsa bir daha tamamlama
        if (li.classList.contains("completed")) return;

        // Tamamlandı sınıfı ekle → yazı çizilir
        li.classList.add("completed");

        saveTasks();
        showMessage("Görev Tamamlandı!", "success");
    });

    // ------------------------------------------
    // ↩ GERİ ALMA EVENTİ
    // ------------------------------------------
    undoBtn.addEventListener("click", () => {

        // Tamamlanmamış görevi geri alamayız
        if (!li.classList.contains("completed")) return;

        li.classList.remove("completed");

        saveTasks();
        showMessage("Görev Geri Alındı!", "error");
    });

    // ------------------------------------------
    // ✎ DÜZENLEME EVENTİ
    // ------------------------------------------
    editBtn.addEventListener("click", () => {

        const oldText = taskText.textContent;

        // Düzenleme inputu
        const editInput = document.createElement("input");
        editInput.type = "text";
        editInput.value = oldText;
        editInput.style.padding = "5px";
        editInput.style.width = "70%";

        // OK butonu
        const okBtn = document.createElement("span");
        okBtn.textContent = "OK";
        okBtn.style.cursor = "pointer";
        okBtn.style.color = "#8a6d3b";
        okBtn.style.fontWeight = "bold";
        okBtn.style.padding = "4px 8px";
        okBtn.style.borderRadius = "5px";
        okBtn.style.background = "#ffe082";
        okBtn.style.border = "1px solid #f0ad42";
        okBtn.classList.add("btn-tip");
        okBtn.setAttribute("data-tip", "Kaydet");


        // 1) Metni input’a çevir
        li.replaceChild(editInput, taskText);

        // 2) Edit yerine OK butonu gelsin
        btnContainer.replaceChild(okBtn, editBtn);

        editInput.focus();

        // OK’e tıklanınca düzenlemeyi kaydet
        okBtn.addEventListener("click", () => {

            const newText = editInput.value.trim();
            taskText.textContent = newText === "" ? oldText : newText;

            // input → span geri
            li.replaceChild(taskText, editInput);

            // OK → edit geri dönüşümü
            btnContainer.replaceChild(editBtn, okBtn);

            saveTasks();
            showMessage("Görev Düzenlendi!", "success");
        });
    });


    // ------------------------------------------
    // Görev eklendikten sonra input temizle
    // ------------------------------------------
    input.value = "";

    // Görevleri localStorage'a kaydet
    saveTasks();

    // Kullanıcıya bilgi mesajı göster
    showMessage("Görev Eklendi!", "success");
}


// ------------------------------------------
// 5) GÖREVLERİ LOCALSTORAGE'A KAYDET
// ------------------------------------------
// (Sayfayı kapatsan bile veriler kaybolmasın!)
function saveTasks() {

    const items = document.querySelectorAll("#todoList li");

    let tasks = [];

    // Listedeki her <li> için metin + durum bilgisi kaydediliyor
    items.forEach(li => {

        tasks.push({
            text: li.querySelector(".task-text").textContent,
            completed: li.classList.contains("completed")
        });

    });

    // Diziyi JSON formatına çevirip localStorage'a yazıyoruz
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


// ------------------------------------------
// LOCALSTORAGE'DAN GÖREVLERİ YÜKLEME FONKSİYONU
// ------------------------------------------
function loadTasks() {

    // localStorage'da veri yoksa fonksiyondan çık
    const stored = localStorage.getItem("tasks");
    if (!stored) return;

    // JSON string → diziye dönüştür
    const tasks = JSON.parse(stored);

    // Her görev için bir <li> oluştur
    tasks.forEach(task => {

        const li = document.createElement("li");

        // -------------------------------
        // 1) GÖREV METNİ (span)
        // -------------------------------
        const taskText = document.createElement("span");
        taskText.textContent = task.text;
        taskText.classList.add("task-text");

        // Görev tamamlanmışsa class ekle
        if (task.completed) {
            li.classList.add("completed");
        }

        // -------------------------------
        // 2) BUTONLAR (✔ ↩ ✎) konteyneri
        // -------------------------------
        const btnContainer = document.createElement("div");
        btnContainer.style.display = "flex";
        btnContainer.style.gap = "10px";
        btnContainer.style.alignItems = "center";

        // ✔ TAMAMLAMA BUTONU
        const completeBtn = document.createElement("span");
        completeBtn.textContent = "✔";
        completeBtn.style.cursor = "pointer";
        completeBtn.style.color = "green";
        completeBtn.style.fontWeight = "bold";

        // ↩ GERİ ALMA BUTONU
        const undoBtn = document.createElement("span");
        undoBtn.textContent = "↩";
        undoBtn.style.cursor = "pointer";
        undoBtn.style.color = "orange";
        undoBtn.style.fontWeight = "bold";

        // ✎ DÜZENLEME BUTONU
        const editBtn = document.createElement("span");
        editBtn.textContent = "✎";
        editBtn.style.cursor = "pointer";
        editBtn.style.color = "blue";
        editBtn.style.fontWeight = "bold";

        // Butonları konteynere ekle
        btnContainer.appendChild(editBtn);
        btnContainer.appendChild(undoBtn);
        btnContainer.appendChild(completeBtn);

        // li içine hem yazıyı hem butonları ekle
        li.appendChild(taskText);
        li.appendChild(btnContainer);

        // Listeye ekle
        todoList.appendChild(li);

        // ------------------------------------------------
        // ✔ TAMAMLAMA EVENTİ
        // ------------------------------------------------
        completeBtn.addEventListener("click", (e) => {
            e.stopPropagation();

            // Zaten tamamlanmışsa tekrar tamamlanmasın
            if (li.classList.contains("completed")) return;

            li.classList.add("completed");
            saveTasks();
            showMessage("Görev Tamamlandı!", "success");
        });

        // ------------------------------------------------
        // ↩ GERİ ALMA EVENTİ
        // ------------------------------------------------
        undoBtn.addEventListener("click", (e) => {
            e.stopPropagation();

            // Zaten tamamlanmamışsa geri alınamaz
            if (!li.classList.contains("completed")) return;

            li.classList.remove("completed");
            saveTasks();
            showMessage("Görev Geri Alındı!", "error");
        });

        // ✎ DÜZENLEME EVENTİ (YENİ - OK butonu edit’in olduğu yere geçiyor)
        editBtn.addEventListener("click", () => {

            const oldText = taskText.textContent;

            // Düzenleme inputu
            const editInput = document.createElement("input");
            editInput.type = "text";
            editInput.value = oldText;
            editInput.style.padding = "5px";
            editInput.style.width = "70%";

            // OK butonu
            const okBtn = document.createElement("span");
            okBtn.textContent = "OK";
            okBtn.style.cursor = "pointer";
            okBtn.style.color = "#8a6d3b";
            okBtn.style.fontWeight = "bold";
            okBtn.style.padding = "4px 8px";
            okBtn.style.borderRadius = "5px";
            okBtn.style.background = "#ffe082";
            okBtn.style.border = "1px solid #f0ad42";

            // 1) Metni input’a çevir
            li.replaceChild(editInput, taskText);

            // 2) Edit yerine OK butonu gelsin
            btnContainer.replaceChild(okBtn, editBtn);

            editInput.focus();

            // OK’e tıklanınca düzenlemeyi kaydet
            okBtn.addEventListener("click", () => {

                const newText = editInput.value.trim();
                taskText.textContent = newText === "" ? oldText : newText;

                // input → span geri
                li.replaceChild(taskText, editInput);

                // OK → edit geri dönüşümü
                btnContainer.replaceChild(editBtn, okBtn);

                saveTasks();
                showMessage("Görev Düzenlendi!", "success");
            });
        });

    });
}


// ------------------------------------------
// 7) TEMA DEĞİŞTİRME (Dark / Light)
// ------------------------------------------
function changeTheme() {

    // body elementine dark isimli bir class ekler → tekrar basılırsa siler
    document.body.classList.toggle("dark");

    // Buton yazısını değiştir
    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "Açık";
    } else {
        themeBtn.textContent = "Koyu";
    }
}

