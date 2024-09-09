const mv = document.querySelector("#mv");
const apr = document.querySelector("#apr");
const ele = document.querySelector("#ele");
const ex = document.querySelector("#ex");
const moveis = document.querySelector(".moveis");
const prod1 = document.querySelector(".prod1");
const prodtxt = document.querySelector(".prodtxt");
const prodimg = document.querySelector(".prod img");
const prod = document.querySelector(".prod");
const ld = document.querySelector(".ld");
const newp = document.querySelector(".new");
const pr = document.querySelector(".pr");
const prc = document.querySelector(".prc");
const com = document.querySelector(".com");
const txtp = document.querySelector(".txtp");
const prej = document.querySelector("#prej");
const vol = document.querySelector("#vol");
const dv = document.querySelector("#dv");
const nov = document.querySelector("#nov");
const sch = document.querySelector("#sch");
const myUL = document.querySelector("#myUL");
const myLI = document.querySelector("#myUL li");

let parc;
let txtc;

mv.addEventListener("click", () => {
    mv.style.color = "#deff65";
    mv.style.borderColor = "#deff65";
    apr.style.color = "#ffffff";
    apr.style.borderColor = "#ffffff";
    ele.style.color = "#ffffff";
    ele.style.borderColor = "#ffffff";
    ex.style.color = "#ffffff";
    ex.style.borderColor = "#ffffff";
    dv.style.color = "#ffffff";
    dv.style.borderColor = "#ffffff";
    nov.style.color = "#ffffff";
    nov.style.borderColor = "#ffffff";
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
    dv.style.color = "#ffffff";
    dv.style.borderColor = "#ffffff";
    nov.style.color = "#ffffff";
    nov.style.borderColor = "#ffffff";
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
    dv.style.color = "#ffffff";
    dv.style.borderColor = "#ffffff";
    nov.style.color = "#ffffff";
    nov.style.borderColor = "#ffffff";
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
    dv.style.color = "#ffffff";
    dv.style.borderColor = "#ffffff";
    nov.style.color = "#ffffff";
    nov.style.borderColor = "#ffffff";
    qua();
});

dv.addEventListener("click", () => {
    ex.style.color = "#ffffff";
    ex.style.borderColor = "#ffffff";
    mv.style.color = "#ffffff";
    mv.style.borderColor = "#ffffff";
    apr.style.color = "#ffffff";
    apr.style.borderColor = "#ffffff";
    ele.style.color = "#ffffff";
    ele.style.borderColor = "#ffffff";
    dv.style.color = "#deff65";
    dv.style.borderColor = "#deff65";
    nov.style.color = "#ffffff";
    nov.style.borderColor = "#ffffff";
    qua();
});

nov.addEventListener("click", () => {
    ex.style.color = "#ffffff";
    ex.style.borderColor = "#ffffff";
    mv.style.color = "#ffffff";
    mv.style.borderColor = "#ffffff";
    apr.style.color = "#ffffff";
    apr.style.borderColor = "#ffffff";
    ele.style.color = "#ffffff";
    ele.style.borderColor = "#ffffff";
    dv.style.color = "#ffffff";
    dv.style.borderColor = "#ffffff";
    nov.style.color = "#deff65";
    nov.style.borderColor = "#deff65";
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

function amp() {
    newp.style.display = "none";
    ld.style.opacity = "0";
    prodtxt.style.display = "none";
    prod.style.width = "100vw";
    pr.style.display = "none";
    prod1.style.width = "70vw";
    prod1.style.height = "70vh";
    prodimg.style.height = "80%";
    com.style.display = "flex";
    vol.style.display = "flex";
    setTimeout(() => {
        com.style.right = "0vw";
        vol.style.left = "0vw";
    }, 50);
    setTimeout(() => {
        ld.style.display = "none";
    }, 300);
    prod1.style.cursor = "auto";
    txtp.textContent = prodtxt.textContent;
    prc.innerHTML = pr.innerHTML;
    txtc = pr.textContent.replace(".", "");
    parc = Math.round(txtc.slice(13) * 1 / 12);
    parc = parc.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    prej.textContent = `R$${parc}`;
}

prod1.addEventListener("click", () => {
    amp();
})

vol.addEventListener("click", () => {
    newp.style.display = "flex";
    ld.style.display = "block";
    prodtxt.style.display = "block";
    prod.style.width = "82vw";
    pr.style.display = "block";
    prod1.style.width = "25vw";
    prod1.style.height = "25vw";
    prodimg.style.height = "60%";
    com.style.right = "-30vw";
    vol.style.left = "-8vw";
    setTimeout(() => {
        ld.style.opacity = "1";
    }, 50)
    setTimeout(() => {
        com.style.display = "none";
        vol.style.display = "none";
        prod1.style.cursor = "pointer";
        txtp.textContent = "";
        prc.innerHTML = "";
    }, 300);
})

function myFunction() {
    let input, filter, ul, li, a, i, txtValue;
    input = sch;
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    ul.style.display = "flex";
  
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
sch.addEventListener("keyup", myFunction);

setInterval(() => {
    if(sch.value == "") {
        myUL.style.display = "none";
    }
}, 10)

window.addEventListener("click", () => {
    myUL.style.display = "none";
})

myLI.addEventListener("click", amp);