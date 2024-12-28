let main = document.getElementById("main")

let file = "components.json"
fetch(file)
.then(res => res.json())
.then(adat => {
    datas = adat
})

function parts_page(tipus){
    
    console.log(tipus)
    for(i in adat){
        console.log(i)
        if(i == tipus){
            console.log(datas.tipus)
        }
    }
}
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

window.onload = function () {
    const tipus = getQueryParam('tipus');
    if (tipus) {
        parts_page(tipus);
    }
}