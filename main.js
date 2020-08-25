// Question
// cal the discount 
// the price of tigernut is #300
// if you buy 1 you dont have a discount
// if you buy 2-5 you get 10% discount
// if you buy 5 & above you get 20% discount



            // solution

            let itemName = 'Tigernut Milk';
let itemPrice = 300;
let tenPercentDiscount = 0.1 * itemPrice;
let twentyPercentDiscount = 0.2 * itemPrice;
let itemCount = 10;
if (itemCount == 1) {
    console.log(`You bought ${itemCount} bottle of ${itemName} at ${itemPrice}`);
} else if (itemCount > 1 && itemCount <= 5) {
    console.log(`You bought ${itemCount} bottles of ${itemName} at 10% Discount for ${itemPrice - tenPercentDiscount} each totaling ${itemCount * (itemPrice - tenPercentDiscount)}`);
} else if (itemCount > 5) {
    console.log(`You bought ${itemCount} bottles of ${itemName} at 20% Discount for ${itemPrice - twentyPercentDiscount} each totaling ${itemCount * (itemPrice - twentyPercentDiscount)}`);
} else {
    console.log(`no sale`);
}