var tartalmazza = document.getElementById("snackbar")
var nemtartalmazza = document.getElementById("snackbar2")

// JSON

function cardBuilder(){
    datas.forEach(data =>{
        // createElement
        let col = document.createElement("div")
        col.classList.add("col-12")
        col.classList.add("col-md-5")
        let card = document.createElement("div")
        card.classList.add("card")
        let cardb = document.createElement("div")
        cardb.classList.add("card-body")
        let title = document.createElement("div")
        title.classList.add("card-title")
        title.innerText = data.name
        let text = document.createElement("div")
        text.classList.add("card-text")
        let ul = document.createElement("ul")
        ul.classList.add("list-group")
        ul.classList.add("list-group-flush")
        for (spec in data.specs) {
            let item = document.createElement("li")
            item.classList.add("list-group-item")
            item.innerText = spec + ": " + data.specs[spec]
            ul.appendChild(item)
        }
        let ar = document.createElement("li")
        ar.classList.add("list-group-item")
        ar.innerText = data.price
        let ft = document.createElement("span")
        ft.innerText = " Ft"
        
        // appendchild
        ar.appendChild(ft)
        ul.appendChild(ar)
        text.appendChild(ul)
        cardb.appendChild(title)
        cardb.appendChild(text)
        card.appendChild(cardb)
        col.appendChild(card)

        // find section
        if (data.type == 'alaplap'){
            col.classList.add("lap")
            let lapsec = document.getElementById("laprow")
            lapsec.appendChild(col)
            lapsec.style.overflowX = "scroll"
            lapBuilder(col)
        }
        if (data.type == 'processzor'){
            col.classList.add("cpu")
            let cpusec = document.getElementById("cpurow")
            cpusec.appendChild(col)
            cpuBuilder(col)
        }
        if (data.type == 'videókártya'){
            col.classList.add("gpu")
            let gpusec = document.getElementById("gpurow")
            gpusec.appendChild(col)
            gpuBuilder(col)
        }
        if (data.type == 'memória'){
            col.classList.add("ram")
            let ramsec = document.getElementById("ramrow")
            ramsec.appendChild(col)
            ramBuilder(col)
        }
        if (data.type == 'HDD/SSD'){
            col.classList.add("memory")
            let memsec = document.getElementById("memrow")
            memsec.appendChild(col)
            memBuilder(col)
        }
        if (data.type == 'monitor'){
            col.classList.add("monitor")
            let monitorsec = document.getElementById("monitorrow")
            monitorsec.appendChild(col)
            monitorBuilder(col)
        }
        if (data.type == 'billentyűzet'){
            col.classList.add("bill")
            let billsec = document.getElementById("billrow")
            billsec.appendChild(col)
            billBuilder(col)
        }
        if (data.type == 'egér'){
            col.classList.add("eger")
            let egersec = document.getElementById("egerrow")
            egersec.appendChild(col)
            egerBuilder(col)
        }
    })
}

let file = "components.json"
fetch(file)
.then(res => res.json())
.then(adat => {
    datas = adat
    cardBuilder()
})


// ALAPLAP
function lapBuilder(col){
    let kivallap = document.getElementById("valasztottlap")
        col.addEventListener("click", ()=>{
            kivallap.innerHTML = col.innerHTML
            kivallap.classList.add("kivalszin")
        })

    let lapAdd = document.getElementById("lapAdd")
    lapAdd.addEventListener("click", ()=>{
        if (kivallap.classList.contains("kivalszin")){
            tartalmazza.className = "show";
            setTimeout(function(){ tartalmazza.className = tartalmazza.className.replace("show", ""); }, 3000);
        }
        else{
            nemtartalmazza.className = "show";
            setTimeout(function(){ nemtartalmazza.className = nemtartalmazza.className.replace("show", ""); }, 3000);
        }
    })
}


// CPU

function cpuBuilder(col){
    let kivalcpu = document.getElementById("valasztottcpu")

    col.addEventListener("click", ()=>{
        kivalcpu.innerHTML = col.innerHTML
        kivalcpu.classList.add("kivalszin")
    })

    let cpuAdd = document.getElementById("cpuAdd")
    cpuAdd.addEventListener("click", ()=>{
        if (kivalcpu.classList.contains("kivalszin")){
            tartalmazza.className = "show";
            setTimeout(function(){ tartalmazza.className = tartalmazza.className.replace("show", ""); }, 3000);
        }
        else{
            nemtartalmazza.className = "show";
            setTimeout(function(){ nemtartalmazza.className = nemtartalmazza.className.replace("show", ""); }, 3000);
        }
    })
}


// GPU

function gpuBuilder(col){
    let kivalgpu = document.getElementById("valasztottgpu")

    col.addEventListener("click", ()=>{
        kivalgpu.innerHTML = col.innerHTML
        kivalgpu.classList.add("kivalszin")
    })

    let gpuAdd = document.getElementById("gpuAdd")
    gpuAdd.addEventListener("click", ()=>{
        if (kivalgpu.classList.contains("kivalszin")){
            tartalmazza.className = "show";
            setTimeout(function(){ tartalmazza.className = tartalmazza.className.replace("show", ""); }, 3000);
        }
        else{
            nemtartalmazza.className = "show";
            setTimeout(function(){ nemtartalmazza.className = nemtartalmazza.className.replace("show", ""); }, 3000);
        }
    })
}


// RAM

function ramBuilder(col){
    let kivalram = document.getElementById("valasztottram")

    col.addEventListener("click", ()=>{
        kivalram.innerHTML = col.innerHTML
        kivalram.classList.add("kivalszin")
    })

    let ramAdd = document.getElementById("ramAdd")
    ramAdd.addEventListener("click", ()=>{
        if (kivalram.classList.contains("kivalszin")){
            tartalmazza.className = "show";
            setTimeout(function(){ tartalmazza.className = tartalmazza.className.replace("show", ""); }, 3000);
        }
        else{
            nemtartalmazza.className = "show";
            setTimeout(function(){ nemtartalmazza.className = nemtartalmazza.className.replace("show", ""); }, 3000);
        }
    })
}


// MEMORY

function memBuilder(col){
    let kivalmemory = document.getElementById("valasztottmemory")

    col.addEventListener("click", ()=>{
        kivalmemory.innerHTML = col.innerHTML
        kivalmemory.classList.add("kivalszin")
    })

    let memoryAdd = document.getElementById("memoryAdd")
    memoryAdd.addEventListener("click", ()=>{
        if (kivalmemory.classList.contains("kivalszin")){
            tartalmazza.className = "show";
            setTimeout(function(){ tartalmazza.className = tartalmazza.className.replace("show", ""); }, 3000);
        }
        else{
            nemtartalmazza.className = "show";
            setTimeout(function(){ nemtartalmazza.className = nemtartalmazza.className.replace("show", ""); }, 3000);
        }
    })
}


// MONITOR

function monitorBuilder(col){
    let kivalmonitor = document.getElementById("valasztottmonitor")
    let monitorok = document.querySelectorAll(".monitor")
    let nomonitor = document.getElementById("nomonitor")

    nomonitor.addEventListener("click", ()=>{
        nomonitor.classList.add("kivalasztottnemgomb")
        kivalmonitor.innerHTML = null
    })

    monitorok.forEach((monitor)=>{
        monitor.addEventListener("click", ()=>{
            nomonitor.classList.remove("kivalasztottnemgomb")
            kivalmonitor.innerHTML = monitor.innerHTML
            kivalmonitor.classList.add("kivalszin")
        })
    })

    let monitorAdd = document.getElementById("monitorAdd")
    monitorAdd.addEventListener("click", ()=>{
        if (kivalmonitor.classList.contains("kivalszin")){
            tartalmazza.className = "show";
            setTimeout(function(){ tartalmazza.className = tartalmazza.className.replace("show", ""); }, 3000);
        }
        else{
            nemtartalmazza.className = "show";
            setTimeout(function(){ nemtartalmazza.className = nemtartalmazza.className.replace("show", ""); }, 3000);
        }
    })
}


// BILL

function billBuilder(col){
    let kivalbill = document.getElementById("valasztottbill")
    let billek = document.querySelectorAll(".bill")
    let nobill = document.getElementById("nobill")

    nobill.addEventListener("click", ()=>{
        nobill.classList.add("kivalasztottnemgomb")
        kivalbill.innerHTML = null
    })

    billek.forEach((bill)=>{
        bill.addEventListener("click", ()=>{
            nobill.classList.remove("kivalasztottnemgomb")
            kivalbill.innerHTML = bill.innerHTML
            kivalbill.classList.add("kivalszin")
        })
    })

    let billAdd = document.getElementById("billAdd")
    billAdd.addEventListener("click", ()=>{
        if (kivalbill.classList.contains("kivalszin")){
            tartalmazza.className = "show";
            setTimeout(function(){ tartalmazza.className = tartalmazza.className.replace("show", ""); }, 3000);
        }
        else{
            nemtartalmazza.className = "show";
            setTimeout(function(){ nemtartalmazza.className = nemtartalmazza.className.replace("show", ""); }, 3000);
        }
    })
}


// EGER

function egerBuilder(col){
    let kivaleger = document.getElementById("valasztotteger")
    let egerek = document.querySelectorAll(".eger")
    let noeger = document.getElementById("noeger")

    noeger.addEventListener("click", ()=>{
        noeger.classList.add("kivalasztottnemgomb")
        kivaleger.innerHTML = null
    })

    egerek.forEach((eger)=>{
        eger.addEventListener("click", ()=>{
            noeger.classList.remove("kivalasztottnemgomb")
            kivaleger.innerHTML = eger.innerHTML
            kivaleger.classList.add("kivalszin")
        })
    })

    let egerAdd = document.getElementById("egerAdd")
    egerAdd.addEventListener("click", ()=>{
        if (kivaleger.classList.contains("kivalszin")){
            tartalmazza.className = "show";
            setTimeout(function(){ tartalmazza.className = tartalmazza.className.replace("show", ""); }, 3000);
        }
        else{
            nemtartalmazza.className = "show";
            setTimeout(function(){ nemtartalmazza.className = nemtartalmazza.className.replace("show", ""); }, 3000);
        }
    })
}





