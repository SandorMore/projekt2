// TODO ha nincs kivalasztva semmi
function myFunction(kivalhaz) {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
    
    x.className = "show";
    
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    
    // Add the "show" class to DIV
}


let kivallap = document.getElementById("valasztottlap")
let lapok = document.querySelectorAll(".lap")

lapok.forEach(hazfunc)

function hazfunc(lap){
    lap.addEventListener("click", ()=>{
        kivallap.innerHTML = lap.innerHTML
        kivallap.classList.add("kivalszin")
    })
}
