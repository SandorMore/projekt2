// JSON

let file = "components.json"
fetch(file)
.then(res => res.json())
.then(adat => {
    datas = adat
    tableBuilder(datas)
})

function BuildFunction(data){
    let tr = document.createElement("tr")
    let Row = document.createElement("th")
    let nev = document.createElement("td")
    nev.classList.add("nev-col")
    nev.innerHTML = data.name
    let specc = document.createElement("td")
    specc.classList.add("spec-col")
    for (spec in data.specs) {
        specc.innerHTML += data.specs[spec] + ", "
    }
    
    let ar = document.createElement("td")
    ar.classList.add("ar-col")
    ar.innerHTML = data.price
    let ft = document.createElement("span")
    ft.innerHTML = " Ft"

    // AppendChild

    ar.appendChild(ft)
    tr.appendChild(Row)
    tr.appendChild(nev)
    tr.appendChild(specc)
    tr.appendChild(ar)
    let tbody = document.getElementById("tableB")
    tbody.appendChild(tr)

    if(data.name == localStorage.getItem("lap")){
        Row.classList.add("lap-row")
        Row.innerHTML = "icon"
    }
    if(data.name == localStorage.getItem("cpu")){
        Row.classList.add("cpu-row")
        Row.innerHTML = "icon"
    }
    if(data.name == localStorage.getItem("gpu")){
        Row.classList.add("gpu-row")
        Row.innerHTML = "icon"
    }
    if(data.name == localStorage.getItem("ram")){
        Row.classList.add("ram-row")
        Row.innerHTML = "icon"
    }
    if(data.name == localStorage.getItem("memory")){
        Row.classList.add("memory-row")
        Row.innerHTML = "icon"
    }
}

function tableBuilder(){
    datas.forEach(data =>{
        if(data.name == localStorage.getItem("lap")){
            BuildFunction(data)
        }
        if(data.name == localStorage.getItem("cpu")){
            BuildFunction(data)
        }
        if(data.name == localStorage.getItem("gpu")){
            BuildFunction(data)
        }
        if(data.name == localStorage.getItem("ram")){
            BuildFunction(data)
        }
        if(data.name == localStorage.getItem("memory")){
            BuildFunction(data)
        }
    })
}

// KOSAR - SUM AR

var snackbar = document.getElementById("snackbar")
let osszeg = document.getElementById("osszeg")
let hText = document.getElementById("hText")
let hAlk = document.getElementById("hAlk")
let doneBtn = document.getElementById("realBtn")
let arak = [localStorage.getItem("lapAr"), localStorage.getItem("cpuAr"), localStorage.getItem("gpuAr"), localStorage.getItem("ramAr"), localStorage.getItem("memoryAr")]

let hianyzo = 0
let sum = 0



arak.forEach(ar =>{
    if(ar == null){
        hianyzo++
    }
    else{
        sum += ar * 1
    }
})

if(hianyzo != 0){
    hText.style.display = "flex"
    hAlk.innerText = hianyzo
    doneBtn.disabled = true
}
else{
    hText.style.display = "none"
    doneBtn.disabled = false
}

doneBtn.addEventListener("click", ()=>{
    snackbar.className = "show";
    setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000);
})

osszeg.innerHTML = sum

