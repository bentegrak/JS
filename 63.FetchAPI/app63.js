/*-----FETCH API-----*/
// FETCH API NEDİR?
// Fetch API, sunucudan veri almak veya göndermek için kullanılan modern bir yöntemdir.
// Varsayılan olarak Promise döner ve XMLHttpRequest'e göre daha okunabilir yapıdadır.
// then / catch veya async / await ile kullanılır.
// Genellikle JSON veri çekme işlemlerinde tercih edilir.


/* function getStudents(url) {
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .then((error) => {
            console.log(error);
        })
}

getStudents("students.json"); */


function getData(url) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error))
}

getData("https://jsonplaceholder.typicode.com/users");

function saveStudents() {
    fetch("https://jsonplaceholder.typicode.com/albums", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "id": 2,
            "firstname": "Furkan",
            "lastname": "Teğrak"
        })
    })
}