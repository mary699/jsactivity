//  Question
// 
// Discount App

//mp;pp Create a discount app; 
// 1. when customer buys 1-3 Items they get 10% discount; 
// 2. when customer buys 4-6 Items they get 20% discount; 
// 3. when customer buys 7-8 Items they get 30% discount; 
// 4. when customer buys 9-10 Items they get 40% discount;
// NOTE: This must be dynamic so that every business owners can use the app. 
// **For example I can input my product name and the price of my product. 
// **Tobi can input product name and the price of her product. 
// **Latunde can input product name and the price of his product. 
// **Utibe can input product name and the price of her product. 
// **Mistura can input product name and the price of her product.



// solution

// let productName = prompt("Enter productName");
// let productPrice = prompt("Enter productPrice");
// let peopleName = prompt("Enter peoplename");
// let discountTen = productPrice * 0.1;
// let discountTwenty = productPrice * 0.2;
// let discountThirty = productPrice * 0.3;
// let discountFourty = productPrice * 0.4;
// let numberOfItems = prompt("Enter numberOfItems");

// if (numberOfItems == 1 && numberOfItems <= 3) {
//     console.log(`${peopleName} sold ${numberOfItems} pieces of ${productName} at 10% for N${productPrice - discountTen} @ sum of N${numberOfItems * (productPrice -  discountTen)}`);
  

// } else if (numberOfItems > 3 && numberOfItems <= 6) {
//     console.log(`${peopleName} sold ${numberOfItems} pieces of ${productName} at 20%  for N${productPrice - discountTwenty} @ sum of N${numberOfItems * (productPrice - discountTwenty)}`);
   

// } else if (numberOfItems > 6 && numberOfItems <= 8) {
//     console.log(`${peopleName} sold ${numberOfItems}  pieces of ${productName} at 30%  for N${productPrice - discountThirty} @ sum of N${numberOfItems * (productPrice - discountThirty)}`);
    

// } else if (numberOfItems > 8 && numberOfItems <= 10) {
//     console.log(`${peopleName} sold ${numberOfItems} pieces of ${productName} at 40%  for N${productPrice - discountFourty} @  sum of N${numberOfItems * (productPrice - discountFourty)}`);
   

// } else {
//     console.log(
//         "empty"
//     );
// }




// using function
// firstly call the button

let myButton = document.getElementById("btn");



myButton.addEventListener("click", calPro);
function calPro(e) {
    e.preventDefault(); 

    // (e) this can be declared anything its to take off error

let productName= document.getElementById("pName").value;
let numberOfItems= document.getElementById("noOfItems").value;




let productPrice = 1000;
let discountTen = productPrice * 0.1;
let discountTwenty = productPrice * 0.2;
let discountThirty = productPrice * 0.3;
let discountFourty = productPrice * 0.4;


if (numberOfItems == 1 && numberOfItems <= 3) {
    console.log(` sold ${numberOfItems} pieces of ${productName} at 10% for N${productPrice - discountTen} @ sum of N${numberOfItems * (productPrice -  discountTen)}`);
  

} else if (numberOfItems > 3 && numberOfItems <= 6) {
    console.log(` sold ${numberOfItems} pieces of ${productName} at 20%  for N${productPrice - discountTwenty} @ sum of N${numberOfItems * (productPrice - discountTwenty)}`);
   

} else if (numberOfItems > 6 && numberOfItems <= 8) {
    console.log(` sold ${numberOfItems}  pieces of ${productName} at 30%  for N${productPrice - discountThirty} @ sum of N${numberOfItems * (productPrice - discountThirty)}`);
    

} else if (numberOfItems > 8 && numberOfItems <= 10) {
    console.log(`sold ${numberOfItems} pieces of ${productName} at 40%  for N${productPrice - discountFourty} @  sum of N${numberOfItems * (productPrice - discountFourty)}`);
   

} else {
    console.log(
        "empty"
    );
}
}











