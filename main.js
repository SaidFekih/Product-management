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
let tbBody = "";
let deleteSection = "";
let mode = 'create';
let tmp;


setTimeout(() => {
    setVariable()
    if (dataItems != '') {
        displayData()
    }
}, 50);

if (localStorage.product != null) {
    dataItems = JSON.parse(localStorage.product);
}
else {
    dataItems = [];
}

class Item {
    constructor(id, title, price, taxes, options, discount, category, total) {
        this.id;
        this.title = title;
        this.price = price;
        this.taxes = taxes;
        this.options = options;
        this.discount = discount;
        this.category = category;
        this.total = total;
    }
}



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
    deleteSection = document.getElementById("deleteAllSection");
    var totalPrice = '';

    console.log(title, price, taxes, options, discount, count, total, category, search)

}
//Get total
function getTotal() {
    if (price.value != '' && price.value > 0) {

        totalPrice = (+price.value + +taxes.value + +options.value) - +discount.value;
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

    let newItem = new Item(0, title.value, price.value, taxes.value, options.value, discount.value, category.value, totalPrice);
    if (mode == 'create') {
        alert("create")
        if (count.value === '') {

            dataItems.push(newItem);
        }
        else {
            createMultipleItem(count.value);
        }
    } 
    else {
        alert("Update");
        dataItems[tmp] = newItem;
        mode ='create';
        submitProduct.textContent = "Create";
        count.style.display = "block";
    }
    saveLocalStorage();
    clearInputs();
    displayData();
}

//save data in localstorage
function saveLocalStorage() {

    localStorage.setItem('product', JSON.stringify(dataItems))
}

//Clean inputs
function clearInputs() {
    title.value = '';
    price.value = '';
    taxes.value = '';
    options.value = '';
    discount.value = '';
    total.textContent = '';
    count.value = '';
    category.value = '';
    getTotal();
}

//Read data
function displayData() {
    let table = '';
    console.log(dataItems.length)

    for (let i = 0; i < dataItems.length; i++) {
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
            <td><button onclick="getDataToUpdate(${i})" id="update">update</button></td>
            <td><button onclick="deleteData(${i})" id="delet">delete</button></td>
        </tr> `;
    }
    tbBody.innerHTML = table;

    if (dataItems.length > 0) {
        deleteSection.innerHTML = `<button onclick="deleteAllData()" id="deleteAll">Delete all  (${dataItems.length})</button>`;
    }
}

//Delete
function deleteData(index) {

    dataItems.splice(index, 1);
    console.log(dataItems)
    localStorage.product = (JSON.stringify(dataItems));
    displayData();
}

//Delete all data
function deleteAllData() {

    dataItems.splice(0, dataItems.length);
    localStorage.clear();
    document.getElementById("deleteAll").remove()

    displayData();
}

//Count
function createMultipleItem(numberOfItems) {
    for (i = 0; i < numberOfItems; i++) {
        let newItem = new Item(0, title.value, price.value, taxes.value, options.value, discount.value, category.value, totalPrice);
        dataItems.push(newItem);
    }
}

//Pudate
function getDataToUpdate(i) {

    title.value = dataItems[i].title;
    price.value = dataItems[i].price;
    taxes.value = dataItems[i].taxes;
    options.value = dataItems[i].options;
    discount.value = dataItems[i].discount;
    category.value = dataItems[i].category;
    getTotal()
    count.style.display = "none";
    submitProduct.textContent = "Update";
    mode = 'update';
    tmp = i;

}

//searche


function changed() {
    console.log("changed")
    console.log(price.value)
    console.log(taxes.value)
    console.log(options.value)
    console.log(discount.value)
    console.log()
}
function said() {
    Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonColor: "#48b8ec",
        confirmButtonText: 'OK'
    })
}