let cart = [
    {item: "apple", quantity: 5}, 
    {item: "orange", quantity: 3},
];
// let cart =[{item:"", quantity:""},];
// let updatedCart = cart.map(removeItem());
// let updatedCart = new Map(cart.filter(item => item));
//  let updatedCart = cart.map(removeItem).filter(item => item.item === cart.item);


    function addItem(cart, item, quantity) {

        if(quantity < 0){
            return "Error a negative quantity cannot be entered";
        } else if (quantity === 0){
            return "Error: quantity cannot be equal to zero.";
        } else{
            cart = []; //shadow variable! 
            cart.push({item, quantity});
        }
        return cart;

    };

// function removeItem(cart, item) {
//         const index = cart.findIndex(cartItem => cartItem.item === item);
//         if(index === -1){
//             return "Error: This item is not in the cart. Item cannot be removed"
//         }
        
//         if (index !== -1) {
//           if (cart[index].quantity > 1) {
//             cart[index].quantity -= 1;
//           } else {
//             // Remove item completely if quantity is 1
//             cart.splice(index, 1);
//           }
//         }
//         return cart;
    // };
    function removeItem(cart, item ) {
        let updatedCart = [];// per the instructions we needed to return a new cart once the item was removed. Tried serval times to create this using map but kept failing. 
        filteredItem = cart.filter(cart => cart.item < 1);
        // for (let index of cart){
        if(cart.item === 0){
            return updatedCart;
        } 
        if (!cart.includes(item)) { //.includes() searches for an item within the arry. so I would wan this to return an error if the item could not be located. w3 schools.
            return "Error: This item is not in the cart. Item cannot be removed";
        };
        return cart.pop(...cart);//used .slice() to remove the last element in the cart array. 
    // }
            
};
    
    function getTotalItems(cart) {
        let totalItems = cart.reduce((sum,item) => sum + item.quantity, 0);
            return totalItems;
        // return cart.reduce (function (total, item) {
            // return total + item.quantity;
    };
    

module.exports = {addItem, removeItem, getTotalItems, cart }