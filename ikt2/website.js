let kivalhaz = document.getElementById("valasztotthaz")
let h1 = document.getElementById("frst")
let h2 = document.getElementById("scnd")
let h3 = document.getElementById("thrd")


// TODO ha nincs kivalasztva semmi
function myFunction(kivalhaz) {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
    
        x.className = "show";
      
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    
    // Add the "show" class to DIV
  }




const els = [
    h1,
    h2,
    h3
]

els.forEach(hazfunc)

function hazfunc(el, index ,arr){
    arr[index].addEventListener("click", ()=>{
        kivalhaz.style.color = "black"
        kivalhaz.innerHTML = el.innerHTML
    })
}
