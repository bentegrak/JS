let ad = prompt("Ad Giriniz:");
let tckn = prompt("TCKN Giriniz:");

kontrolEt(ad, tckn);

function kontrolEt(ad, tckn) {
    if (ad != "") {
        if (tckn.length == 11) {
            console.log("İsim ve TCKN Problemsiz Girildi.")
        }
        else {
            console.log("TCKN Eksik ya da Hatalı Girildi.")
        }
    }
    else {
        console.log("Lütfen İsim Alanını Doldurun.");
    }
}

