const mv = document.querySelector("#mv");
const apr = document.querySelector("#apr");
const ele = document.querySelector("#ele");
const ex = document.querySelector("#ex");
const moveis = document.querySelector(".moveis");
const xchair = document.querySelector(".xchair");
const ld = document.querySelector(".ld");

mv.addEventListener("click", () => {
    mv.style.color = "#deff65";
    mv.style.borderColor = "#deff65";
    apr.style.color = "#ffffff";
    apr.style.borderColor = "#ffffff";
    ele.style.color = "#ffffff";
    ele.style.borderColor = "#ffffff";
    ex.style.color = "#ffffff";
    ex.style.borderColor = "#ffffff";
    prim();
});

apr.addEventListener("click", () => {
    apr.style.color = "#deff65";
    apr.style.borderColor = "#deff65";
    mv.style.color = "#ffffff";
    mv.style.borderColor = "#ffffff";
    ele.style.color = "#ffffff";
    ele.style.borderColor = "#ffffff";
    ex.style.color = "#ffffff";
    ex.style.borderColor = "#ffffff";
    seg();
});

ele.addEventListener("click", () => {
    ele.style.color = "#deff65";
    ele.style.borderColor = "#deff65";
    mv.style.color = "#ffffff";
    mv.style.borderColor = "#ffffff";
    apr.style.color = "#ffffff";
    apr.style.borderColor = "#ffffff";
    ex.style.color = "#ffffff";
    ex.style.borderColor = "#ffffff";
    ter();
});

ex.addEventListener("click", () => {
    ex.style.color = "#deff65";
    ex.style.borderColor = "#deff65";
    mv.style.color = "#ffffff";
    mv.style.borderColor = "#ffffff";
    apr.style.color = "#ffffff";
    apr.style.borderColor = "#ffffff";
    ele.style.color = "#ffffff";
    ele.style.borderColor = "#ffffff";
    qua();
});

function prim() {
    moveis.style.display = "grid";
}

function seg() {
    moveis.style.display = "none";
}

function ter() {
    moveis.style.display = "none";
}

function qua() {
    moveis.style.display = "none";
}

xchair.addEventListener("click", () => {

})