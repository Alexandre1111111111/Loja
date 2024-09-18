const btn1 = document.querySelector(".btn1");

const inn = document.querySelector("#inn");
const ine = document.querySelector("#ine");
const ins = document.querySelector("#ins");

btn1.addEventListener("click", () => {
    localStorage.nome = inn.value;
    localStorage.email = ine.value;
    localStorage.senha = ins.value;
    localStorage.logado = true;
    window.location.href = "index.html";
})