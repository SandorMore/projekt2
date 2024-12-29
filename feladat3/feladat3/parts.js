let main = document.getElementById("main");
let cards = document.getElementById("cards");
let comp_types = document.getElementById("comp_types");

function parts_page(tipus, datas) {
    cards.innerHTML = "";
    comp_types.innerText = tipus;
    datas.forEach((item) => {
        if (item.type === tipus) {
            let component = document.createElement("div");
            component.addEventListener("click", () => component_page(datas, item, tipus));
            component.classList.add("comp_card");
            cards.appendChild(component);
            let comp_name = document.createElement("h5");
            comp_name.classList.add("comp_name");
            comp_name.innerText = item.name;
            component.appendChild(comp_name);
            let comp_img = document.createElement("img");
            comp_img.classList.add("comp_img");
            component.appendChild(comp_img);
            let comp_prize = document.createElement("h6");
            comp_prize.classList.add("comp_prize");
            comp_prize.innerText = item.price + " ft";
            component.appendChild(comp_prize);
        }
    });
}
function component_page(datas, component, tipus) {
    console.log(component);
    comp_types.innerText = tipus + " > " + component.name;
    comp_types.addEventListener("click",()=>parts_page(tipus,datas))
    cards.innerHTML = "";
    let component_big = document.createElement("div");
    component_big.classList.add("comp_card_big");
    cards.appendChild(component_big);
    let name_div = document.createElement("div")    
    name_div.classList.add("name_div")
    component_big.appendChild(name_div)
    let comp_name = document.createElement("h5");
    comp_name.classList.add("comp_name");
    comp_name.innerText = component.name;
    name_div.appendChild(comp_name);
    let img_div = document.createElement("div")
    img_div.classList.add("img_div")
    component_big.appendChild(img_div)
    let comp_img = document.createElement("img");
    comp_img.classList.add("comp_img");
    img_div.appendChild(comp_img);
    let specs_div = document.createElement("div")
    specs_div.classList.add("specs_div")
    component_big.appendChild(specs_div)
    datas.forEach(item => {
        if (item.type === tipus) {
            console.log(item.name +" - "+ component.name)
            if (String(item.name) === String(component.name)) {
                console.log("megvan")
                if (item.specs) {
                    for (const [key, value] of Object.entries(item.specs)) {
                        let comp_spec = document.createElement("p")
                        comp_spec.classList.add("comp_spec")
                        console.log(key,value)
                        comp_spec.innerText = key + " : " + value
                        
                        specs_div.appendChild(comp_spec)
                    }
                }
            }
        }
    });
    let price_div = document.createElement("div")
    price_div.classList.add("price_div")
    component_big.appendChild(price_div)
    let comp_prize = document.createElement("h6");
    comp_prize.classList.add("comp_prize");
    comp_prize.innerText = component.price + " ft";
    price_div.appendChild(comp_prize);

}
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

window.onload = function () {
    const tipus = getQueryParam("tipus");
    if (tipus) {
        let file = "components.json";
        fetch(file)
            .then((res) => res.json())
            .then((adat) => {
                datas = adat;
                parts_page(tipus, datas);
            });
    }
};
