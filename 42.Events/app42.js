const clearButton = document.querySelector("#todoClearButton");

clearButton.addEventListener("click",changeTitle)

// function changeTitle(){
//     document.querySelectorAll('.card-title')[1].textContent="Todo Başlığını Değişti";
// }

function changeTitle(e){
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.textContent);
    console.log(e.target.className);
}