/*---PROMISE---*/
// PROMISE NEDİR?
// Promise, asenkron (zaman alan) işlemlerin sonucunu temsil eden bir yapıdır.
// Bir işlem ya başarılı olur (resolve) ya da hata ile biter (reject).
// then() başarılı sonucu, catch() ise hatayı yakalamak için kullanılır.
// Özellikle API çağrıları, dosya okuma ve veri çekme işlemlerinde tercih edilir.


/* let check = false;

const promise1 = new Promise((resolve, reject) => {
    if (check) {
        resolve("Promise Başarılı");
    }
    else {
        reject("Promise Başarısız");
    }
})

console.log(promise1); */


/* let check = true;
function createPromise() {
    return new Promise((resolve, reject) => {
        if (check) {
            resolve("Promise'te herhangi bir sıkıntı yok")
        }
        else {
            reject("Sıkıntı büyük")
        }
    })
}

createPromise()
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() =>
        console.log("Herzaman çalışır")
    ) */


/*---PROMISE + XMLHTTPREQUEST---*/

/* function readStudents(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        try {
            xhr.addEventListener("readystatechange", () => {
                if (xhr.readyState === 4 & xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
            })
        }
        catch (error) {
            reject(error);
        }
        xhr.open("GET", url);
        xhr.send();
    })
}

readStudents("students.json")
    .then((data) => {
        console.log(data)
    })
    .then((error) => {
        console.log(error)
    })
 */


function getUsers(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", () => {
            try {
                if (xhr.readyState === 4 & xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
            }
            catch (error) {
                reject(error);
            }
        })
        xhr.open("GET", url)
        xhr.send();
    })
}

getUsers("https://jsonplaceholder.typicode.com/users")
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        //Mail Atma Kodlarını Yazarsınız
    })
