/* -----ASYNC,WAIT-----*/
// ASYNC / AWAIT NEDİR?
// async, bir fonksiyonun Promise döndüreceğini belirtir.
// await, Promise tamamlanana kadar kodun o satırda beklemesini sağlar.
// Asenkron kodu senkron gibi okunabilir hale getirir.
// Hata yönetimi genellikle try / catch ile yapılır.


document.querySelector("#button").addEventListener("click", async () => {
    const post = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()
    const comments = await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json()
    console.log(post, comments)
})