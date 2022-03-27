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
let tbBody ="";


if (localStorage.product != null) {
    dataItems = JSON.parse(localStorage.product);
}
else {
    dataItems = [];
}

class Item {
    constructor( title, price, taxes, options, discount, category) {
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
    if(dataItems !=''){
        displayData()
    }
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
    tbBody = document.getElementById("tbBody");

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
    clearInputs();
    displayData();
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
function displayData(){ 
    let table = '';
    console.log(dataItems.length)

    for(let i=0 ; i < dataItems.length;i++){
        console.log(i)
        table += `
        <tr>
            <td id="tdid">${i}</td>
            <td id="tdtitle">${dataItems[i].title}</td>
            <td id="tdprice">${dataItems[i].price}</td>
            <td id="tdtaxes">${dataItems[i].taxes}</td>
            <td id="tdOptions">${dataItems[i].options}</td>
            <td id="tddiscount">${dataItems[i].discount}</td>
            <td id="tdtotal">${dataItems[i].total}</td>
            <td id="tdcategory">${dataItems[i].category}</td>
            <td><button id="update">update</button></td>
            <td><button id="delet">delete</button></td>
        </tr> `;
    }
    tbBody.innerHTML=table;
}
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