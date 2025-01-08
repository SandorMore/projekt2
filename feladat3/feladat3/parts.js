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
    comp_types.innerText = tipus + " > " + component.name;
    comp_types.addEventListener("click", () => parts_page(tipus, datas))
    cards.innerHTML = "";

    let component_big = document.createElement("div");
    component_big.classList.add("comp_card_big");
    cards.appendChild(component_big);

    let name_div = document.createElement("div")
    name_div.classList.add("name_div")
    component_big.appendChild(name_div)
    let comp_name = document.createElement("h3");
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
            if (String(item.name) === String(component.name)) {
                if (item.specs) {
                    for (const [key, value] of Object.entries(item.specs)) {
                        let comp_spec = document.createElement("p")
                        comp_spec.classList.add("comp_spec")
                        comp_spec.innerText = key + " : " + value

                        specs_div.appendChild(comp_spec)
                    }
                }
            }
        }
    });
    let compare_div = document.createElement("div")
    compare_div.classList.add("compare_div")
    component_big.appendChild(compare_div)
    let compare_button = document.createElement("h4");
    compare_button.classList.add("compare_button");
    compare_button.innerText = "Összehasonlítás";
    compare_button.addEventListener("click", () => compare(datas, component, tipus))
    compare_div.appendChild(compare_button);

    let price_div = document.createElement("div")
    price_div.classList.add("price_div")
    component_big.appendChild(price_div)
    let comp_prize = document.createElement("h6");
    comp_prize.classList.add("comp_prize");
    comp_prize.innerText = component.price + " ft";
    price_div.appendChild(comp_prize);
}
function compare(datas, component, tipus) {
    comp_types.innerText = tipus + ' > összehasonlítás';
    comp_types.addEventListener("click", () => parts_page(tipus, datas))
    cards.innerHTML = "";

    let component_big = document.createElement("div");
    component_big.classList.add("comp_card_big_compare");
    cards.appendChild(component_big);

    let select_comp_div = document.createElement("select")
    select_comp_div.classList.add("select_comp_div")
    component_big.appendChild(select_comp_div)
    let placeholder = document.createElement("option")
    placeholder.textContent = 'Válasszon egy alkatrészt';
    placeholder.value = '';
    placeholder.disabled = true;
    placeholder.selected = true;
    select_comp_div.appendChild(placeholder)
    datas.forEach(item => {
        if (item.type === tipus) {
            let choice = document.createElement("option")
            choice.value = item.name
            choice.textContent = item.name
            select_comp_div.appendChild(choice)
        }
    })
    select_comp_div.addEventListener('change', () => {
        let itemToCompare = event.target.value
        let value = select_comp_div.value
        datas.forEach(item => {
            if (value === item.name) {
                let compared = document.getElementById("name_div_right")
                if (compared) {
                    document.querySelector(".name_div_right")?.remove()
                    document.querySelector(".specs_div_2")?.remove();
                    document.querySelector(".price_right_div")?.remove();
                }

                let name_div_right = document.createElement("div")
                name_div_right.id = "name_div_right"
                name_div_right.classList.add("name_div_right")
                component_big.appendChild(name_div_right)
                let comp_name_right = document.createElement("h3");
                comp_name_right.classList.add("comp_name_right");
                comp_name_right.innerText = item.name;
                name_div_right.appendChild(comp_name_right);

                let specs_div_2 = document.createElement("div")
                specs_div_2.classList.add("specs_div_2")
                component_big.appendChild(specs_div_2)
                datas.forEach(item2 => {
                    if (item2.type === tipus) {
                        if (String(item2.name) === itemToCompare) {
                            if (item2.specs) {
                                for (const [key, value] of Object.entries(item2.specs)) {
                                    let comp_spec2 = document.createElement("p")
                                    comp_spec2.classList.add("comp_spec2")
                                    comp_spec2.innerText = key + " : " + value
                                    specs_div_2.appendChild(comp_spec2)
                                }
                            }
                        }
                    }
                });
                let price_right_div = document.createElement("div")
                price_right_div.classList.add("price_right_div")
                component_big.appendChild(price_right_div)
                let comp_prize_right = document.createElement("h6");
                comp_prize_right.classList.add("comp_price_right");
                comp_prize_right.innerText = item.price + " ft";
                price_right_div.appendChild(comp_prize_right);
            }
        })
    })

    let name_div_left = document.createElement("div")
    name_div_left.classList.add("name_div_left")
    component_big.appendChild(name_div_left)
    let comp_name_left = document.createElement("h3");
    comp_name_left.classList.add("comp_name_left");
    comp_name_left.innerText = component.name;
    name_div_left.appendChild(comp_name_left);

    let specs_div = document.createElement("div")
    specs_div.classList.add("specs_div")
    component_big.appendChild(specs_div)
    datas.forEach(item => {
        if (item.type === tipus) {
            if (String(item.name) === String(component.name)) {
                if (item.specs) {
                    for (const [key, value] of Object.entries(item.specs)) {
                        let comp_spec = document.createElement("p")
                        comp_spec.classList.add("comp_spec")
                        comp_spec.innerText = key + " : " + value

                        specs_div.appendChild(comp_spec)
                    }
                }
            }
        }
    });
    let price_left_div = document.createElement("div")
    price_left_div.classList.add("price_left_div")
    component_big.appendChild(price_left_div)
    let comp_prize_left = document.createElement("h6");
    comp_prize_left.classList.add("comp_price_left");
    comp_prize_left.innerText = component.price + " ft";
    price_left_div.appendChild(comp_prize_left);

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
