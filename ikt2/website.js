var tartalmazza = document.getElementById("snackbar")
var nemtartalmazza = document.getElementById("snackbar2")

// ALAPLAP

let kivallap = document.getElementById("valasztottlap")
let lapok = document.querySelectorAll(".lap")

lapok.forEach((lap)=>{
    lap.addEventListener("click", ()=>{
        kivallap.innerHTML = lap.innerHTML
        kivallap.classList.add("kivalszin")
    })
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

// CPU

let kivalcpu = document.getElementById("valasztottcpu")
let cpuk = document.querySelectorAll(".cpu")

cpuk.forEach((cpu)=>{
    cpu.addEventListener("click", ()=>{
        kivalcpu.innerHTML = cpu.innerHTML
        kivalcpu.classList.add("kivalszin")
    })
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

// TAP

let kivaltap = document.getElementById("valasztotttap")
let tapok = document.querySelectorAll(".tap")

tapok.forEach((tap)=>{
    tap.addEventListener("click", ()=>{
        kivaltap.innerHTML = tap.innerHTML
        kivaltap.classList.add("kivalszin")
    })
})

let tapAdd = document.getElementById("tapAdd")
tapAdd.addEventListener("click", ()=>{
    if (kivaltap.classList.contains("kivalszin")){
        tartalmazza.className = "show";
        setTimeout(function(){ tartalmazza.className = tartalmazza.className.replace("show", ""); }, 3000);
    }
    else{
        nemtartalmazza.className = "show";
        setTimeout(function(){ nemtartalmazza.className = nemtartalmazza.className.replace("show", ""); }, 3000);
    }
})

// GPU

let kivalgpu = document.getElementById("valasztottgpu")
let gpuk = document.querySelectorAll(".gpu")


gpuk.forEach((gpu)=>{
    gpu.addEventListener("click", ()=>{
        kivalgpu.innerHTML = gpu.innerHTML
        kivalgpu.classList.add("kivalszin")
    })
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

// RAM

let kivalram = document.getElementById("valasztottram")
let ramok = document.querySelectorAll(".ram")

ramok.forEach((ram)=>{
    ram.addEventListener("click", ()=>{
        kivalram.innerHTML = ram.innerHTML
        kivalram.classList.add("kivalszin")
    })
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

// MEMORY

let kivalmemory = document.getElementById("valasztottmemory")
let memoryk = document.querySelectorAll(".memory")

memoryk.forEach((memory)=>{
    memory.addEventListener("click", ()=>{
        kivalmemory.innerHTML = memory.innerHTML
        kivalmemory.classList.add("kivalszin")
    })
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

// MONITOR

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

// BILL

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

// EGER

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




