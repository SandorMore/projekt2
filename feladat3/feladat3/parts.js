let main = document.getElementById("main")

let file = "components.json"
fetch(file)
.then(res => res.json())
.then(adat => {
    datas = adat
})

function parts_page(tipus){
    console.log(tipus)
    console.log(datas)
}
