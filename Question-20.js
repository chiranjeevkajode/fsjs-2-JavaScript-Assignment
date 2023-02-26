
// 20. In the following shopping cart add, remove, edit items
// => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// - add 'Meat' in the beginning of your shopping cart if it has not been already added
// - add Sugar at the end of your shopping cart if it has not been already added
// - remove 'Honey'
// - modify Tea to 'Green Tea'


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// adding Meat at the First 
shoppingCart.unshift("Meat");
console.log(shoppingCart);

// Adding Sugar At the end 
shoppingCart.push("Sugar");
console.log(shoppingCart);

// remove "Hnoney"

function func() {
    var array = ['Milk', 'Coffee', 'Tea', 'Honey'];
 
    for (var i = 0; i < array.length; i++) {
        if (array[i] === "Honey") {
            var spliced = array.splice(i, 1);
            console.log(array);
        }
    }
}
func();

// modify Tea to 'Green Tea'

shoppingCart[3] = "Green Tea";
console.log(shoppingCart);