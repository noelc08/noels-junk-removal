async function fetch_prices(){
    const response = await fetch("./assets/info.json");
    return await response.json();
}

async function update_info() {
    const data = await fetch_prices();

    document.getElementById("min_price").innerText = data.header.min_price;
    document.getElementById("max_price").innerText = data.header.max_price;

    const service_list = document.getElementById("services");

    if (!data.services || data.services.length === 0) {
        const invalid = document.createElement("li");
        invalid.innerText = "Call for services";
        service_list.appendChild(invalid);
    } else {
        for (let i = 0; i < data.services.length; i++) {
            const element = document.createElement("li");
            element.className = "service_item";
            element.innerText = data.services[i];
            service_list.appendChild(element);
        }
    }
    const phone_num = document.getElementById("phone_num");
    if(!phone_num || !data.contact || !data.contact.phone_num){
        return console.error("Could not update the phone number. Please report this error to the owner.");
    }
    phone_num.innerText = data.contact.phone_num;

    const name = document.getElementById("name");
    if(!name || !data.header || !data.header.name){
        return console.error("Could not update the name. Please report this error to the owner.");
    }
    name.innerText = data.header.name;
    document.getElementByTagName("title").innerText = data.header.name;
    const tagline = document.getElementById("tagline");
    if(!tagline || !data.header.tagline){
        return console.error("Could not update the tagline. Please report this error to the owner.");
    }
    tagline.innerText = data.header.tagline;


}

async function main(){
    await update_info();
    
}


document.addEventListener("DOMContentLoaded", async () => {
    await main();
});
