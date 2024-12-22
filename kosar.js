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
    // SVG
    let iconSvgl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        let iconPathl1 = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'path'
        );
        let iconPathl2 = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'path'
          );
          let iconPathl3 = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'path'
          );
        iconSvgl.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
        iconSvgl.setAttribute('width', '30');
        iconSvgl.setAttribute('height', '30')
        iconSvgl.setAttribute('fill', 'currentColor');
        iconSvgl.setAttribute('viewBox', '0 0 16 16');

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
    iconSvgl.appendChild(iconPathl1)
    iconSvgl.appendChild(iconPathl2)
    iconSvgl.appendChild(iconPathl3)
    Row.appendChild(iconSvgl)
    tr.appendChild(Row)
    tr.appendChild(nev)
    tr.appendChild(specc)
    tr.appendChild(ar)
    let tbody = document.getElementById("tableB")
    tbody.appendChild(tr)

    if(data.name == localStorage.getItem("lap")){
        Row.classList.add("lap-row")

        iconSvgl.classList.add('bi');
        iconSvgl.classList.add('bi-motherboard');
    
        iconPathl1.setAttribute(
            'd',
            'M11.5 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m-10 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zM5 3a1 1 0 0 0-1 1h-.5a.5.5 0 0 0 0 1H4v1h-.5a.5.5 0 0 0 0 1H4a1 1 0 0 0 1 1v.5a.5.5 0 0 0 1 0V8h1v.5a.5.5 0 0 0 1 0V8a1 1 0 0 0 1-1h.5a.5.5 0 0 0 0-1H9V5h.5a.5.5 0 0 0 0-1H9a1 1 0 0 0-1-1v-.5a.5.5 0 0 0-1 0V3H6v-.5a.5.5 0 0 0-1 0zm0 1h3v3H5zm6.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z'
        )
        iconPathl2.setAttribute(
            'd',
            'M1 2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 9H1V8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6H1V5H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 2zm1 11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1z'
        );
    }
    if(data.name == localStorage.getItem("cpu")){
        Row.classList.add("cpu-row")
        
        iconSvgl.classList.add('bi');
        iconSvgl.classList.add('bi-cpu');
    
        iconPathl1.setAttribute(
            'd',
            'M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0m-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z'
        )
    }
    if(data.name == localStorage.getItem("gpu")){
        Row.classList.add("gpu-row")
        
        iconSvgl.classList.add('bi');
        iconSvgl.classList.add('bi-gpu');
    
        iconPathl1.setAttribute(
            'd',
            'M4 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m7.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3'
        )
        iconPathl2.setAttribute(
            'd',
            'M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .5.5V4h13.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H2v2.5a.5.5 0 0 1-1 0V2H.5a.5.5 0 0 1-.5-.5m5.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M9 8a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0'
        )
        iconPathl3.setAttribute(
            'd',
            'M3 12.5h3.5v1a.5.5 0 0 1-.5.5H3.5a.5.5 0 0 1-.5-.5zm4 1v-1h4v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5'
        )
    }
    if(data.name == localStorage.getItem("ram")){
        Row.classList.add("ram-row")
        
        iconSvgl.classList.add('bi');
        iconSvgl.classList.add('bi-memory');
    
        iconPathl1.setAttribute(
            'd',
            'M1 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.586a1 1 0 0 0 .707-.293l.353-.353a.5.5 0 0 1 .708 0l.353.353a1 1 0 0 0 .707.293H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm.5 1h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5m5 0h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5m4.5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zM2 10v2H1v-2zm2 0v2H3v-2zm2 0v2H5v-2zm3 0v2H8v-2zm2 0v2h-1v-2zm2 0v2h-1v-2zm2 0v2h-1v-2z'
        )
    }
    if(data.name == localStorage.getItem("memory")){
        Row.classList.add("memory-row")
        
        iconSvgl.classList.add('bi');
        iconSvgl.classList.add('bi-sd-card');
    
        iconPathl1.setAttribute(
            'd',
            'M6.25 3.5a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0zm2 0a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0zm2 0a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0zm2 0a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z'
        )
        iconPathl2.setAttribute(
            'd',
            'M5.914 0H12.5A1.5 1.5 0 0 1 14 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5V3.914c0-.398.158-.78.44-1.06L4.853.439A1.5 1.5 0 0 1 5.914 0M13 1.5a.5.5 0 0 0-.5-.5H5.914a.5.5 0 0 0-.353.146L3.146 3.561A.5.5 0 0 0 3 3.914V14.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5z'
        );
        iconPathl2.setAttribute(
            'fill-rule', 'evenodd'
        )
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

var snackbarr = document.getElementById("snackbar3")
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
    snackbarr.className = "show2";
    setTimeout(function(){ snackbarr.className = snackbarr.className.replace("show2", ""); }, 3000);
})

osszeg.innerHTML = sum

