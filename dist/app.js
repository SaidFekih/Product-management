"use strict";
const title = document.querySelector("#title");
let price = document.querySelector("#price");
let taxes = document.querySelector("#taxes");
let options = document.querySelector("#options");
let discount = document.querySelector("#discount");
let total = document.querySelector("#total");
let count = document.querySelector("#count");
let category = document.querySelector("#category");
let submitProduct = document.querySelector("#submit");
let search = document.querySelector("#search");
let result;
let result1;
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
