// JSON

let file = "components.json"
fetch(file)
.then(res => res.json())
.then(adat => {
    datas = adat
    tableBuilder(datas)
})


function tableBuilder(){
    datas.forEach(data =>{
        if(data.name == localStorage.getItem("lap")){
            let tr = document.createElement("tr")
            let lapR = document.createElement("th")
            lapR.classList.add("lap-row")
            lapR.innerHTML = "icon"
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
            tr.appendChild(lapR)
            tr.appendChild(nev)
            tr.appendChild(specc)
            tr.appendChild(ar)
            let tbody = document.getElementById("tableB")
            tbody.appendChild(tr)
        } 
    })
}

// KOSAR - SUM AR

let arak = document.querySelectorAll(".ar")
let osszeg = document.getElementById("osszeg")

let sum = 0
arak.forEach((ar=>{
    sum += ar.innerHTML * 1
}))

osszeg.innerHTML = sum

