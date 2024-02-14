const border = document.querySelector(".img")
let bandera = true;

border.addEventListener("click", () => {
    if (bandera == true) {
        border.style.border = "2px solid red"
        bandera = false
    } else {
        border.style.border = "none"
        bandera = true
    }
})