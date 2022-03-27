let title = "";
let price = "";
let taxes = "";
let options = "";
let discount = "";
let total = "";
let count = "";
let category = "";
let submitProduct = "";
let search = "";
let dataItems = [];

if (localStorage.product != null) {
    dataItems = JSON.parse(localStorage.product);
}
else {
    dataItems = [];
}

class Item {
    constructor(id, title, price, taxes, options, discount, category) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.taxes = taxes;
        this.options = options;
        this.discount = discount;
        this.category = category;
    }
}

setTimeout(() => {
    setVariable()
}, 50);

function setVariable() {

    title = document.getElementById("title");
    price = document.getElementById("price");
    taxes = document.getElementById("taxes");
    options = document.getElementById("options");
    discount = document.getElementById("discount");
    total = document.getElementById("total");
    count = document.getElementById("count");
    category = document.getElementById("category");
    submitProduct = document.getElementById("submit");
    search = document.getElementById("search");

    console.log(title, price, taxes, options, discount, count, total, category, search)

}
//Get total
function getTotal() {
    if (price.value != '' && price.value > 0) {

        let totalPrice = (+price.value + +taxes.value + +options.value) - +discount.value;
        total.innerHTML = totalPrice;
        console.log(totalPrice);

        if (totalPrice != '') {
            total.style.backgroundColor = 'green'
            submitProduct.disabled = false;
        }
        else {
            total.style.backgroundColor = 'rgb(253, 77, 77)'
            submitProduct.disabled = true;
        }
    }
    else {
        total.style.backgroundColor = 'rgb(253, 77, 77)'
        total.innerHTML = 0;
        submitProduct.disabled = true;
    }
}

//Create product
function createProduct() {

    let newItem = new Item(0, title.value, price.value, taxes.value, options.value, discount.value, category.value);
    dataItems.push(newItem);
    console.log(dataItems);
    saveLocalStorage();
    clearInputs()
}

//save data in localstorage
function saveLocalStorage(){

    localStorage.setItem('product', JSON.stringify(dataItems))
}

//Clean inputs
function clearInputs(){
     title.value ='';
     price.value ='';
     taxes.value ='';
     options.value ='';
     discount.value ='';
     total.value ='';
     count.value ='';
     category.value ='';

}


//Read data
//Count
//Delete
//Pudate
//searche
//clean data

function changed() {
    console.log("changed")
    console.log(price.value)
    console.log(taxes.value)
    console.log(options.value)
    console.log(discount.value)
    console.log()
}