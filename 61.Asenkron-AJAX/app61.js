// AJAX Nedir?
// AJAX (Asynchronous JavaScript And XML), sayfa yenilenmeden
// sunucudan veri alıp göndermemizi sağlar.
// Kullanım amacı: Daha hızlı, akıcı ve kullanıcıyı bekletmeyen uygulamalar yapmak.

// ------------------------------------------------------------
// URL HAZIRLAMA FONKSİYONU
// ------------------------------------------------------------
// Eğer id varsa URL'e ?postId=id şeklinde ekler
// Yoksa URL'i olduğu gibi döner
function prepareURL(url, id) {
    if (id === null) {
        return url;
    }
    return `${url}?postId=${id}`;
}

// ------------------------------------------------------------
// YORUM (COMMENTS) ÇEKME FONKSİYONU
// ------------------------------------------------------------
// XMLHttpRequest ile sunucuya GET isteği atar
// Gelen JSON verisini parse edip console'a basar
function getCommnets(url, id) {
    let newURL = prepareURL(url, id);

    const xhr = new XMLHttpRequest();

    // İstek durumu her değiştiğinde tetiklenir
    xhr.addEventListener("readystatechange", () => {

        // readyState 4 → işlem tamam
        // status 200 → istek başarılı
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText));
        }
    });

    xhr.open("GET", newURL);
    xhr.send();
}

// ------------------------------------------------------------
// GENEL VERİ ÇEKME FONKSİYONU
// ------------------------------------------------------------
// Verilen URL'den GET isteği ile veri çeker
// AJAX sayesinde sayfa yenilenmeden veri alınır
function getData(url) {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(JSON.parse(xhr.response));
        }
    });

    xhr.open("GET", url);
    xhr.send();
}

// ------------------------------------------------------------
// FONKSİYON ÇAĞRISI
// ------------------------------------------------------------
// JSONPlaceholder API'den postları çeker
getData("https://jsonplaceholder.typicode.com/posts");
//getCommnets("https://jsonplaceholder.typicode.com/comments",null);

