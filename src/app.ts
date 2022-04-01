const title = document.querySelector("#title") as HTMLInputElement;
let price = document.querySelector("#price") as HTMLInputElement;
let taxes = document.querySelector("#taxes") as HTMLInputElement;
let options = document.querySelector("#options") as HTMLInputElement;
let discount = document.querySelector("#discount") as HTMLInputElement;
let total = document.querySelector("#total") as HTMLElement;
let count = document.querySelector("#count") as HTMLInputElement;
let category = document.querySelector("#category") as HTMLInputElement;
let submitProduct = document.querySelector("#submit") as HTMLElement;
let search = document.querySelector("#search") as HTMLElement;
let result: number;
let result1: number;

console.log(
  title,
  price,
  taxes,
  options,
  discount,
  total,
  count,
  category,
  submitProduct,
  search
);

//Get total

function getTotal() {
  total.innerText = (
    +price.value +
    +taxes.value +
    +options.value +
    +discount.value
  ).toString();
}

//Create product
//save data in localstorage
//Clean inputs
//Read data
//Delete
//Delete all data
//Count
//Pudate
//searche
