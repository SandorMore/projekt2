// KOSAR - SUM AR

let arak = document.querySelectorAll(".ar")
let osszeg = document.getElementById("osszeg")

let sum = 0
arak.forEach((ar=>{
    sum += ar.innerHTML * 1
}))

osszeg.innerHTML = sum
