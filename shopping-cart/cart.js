// let cart = [
//     {item: "apple", quantity: 5}, 
//     {item: "orange", quantity: 3}
// ];
let cart =[{item:"", quantity:""},];
// let updatedCart = cart.map(removeItem());
// let updatedCart = new Map(cart.filter(item => item));


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
        let updatedCart = cart.map(addItem).filter(item => item.item === cart.item);
        // for (let quantity of cart){
        if(cart.item === item){
            return updatedCart;
        };
        if () {
            return "Error: This item is not in the cart. Item cannot be removed";
        };
        
        return updatedCart.slice(...updatedCart);//used .slice() to remove the last element in the cart array. 
        
            
};
    
    function getTotalItems(cart) {
        return cart.reduce (function (total, item) {
            return total + item.quantity;
    }, 0);
    };

module.exports = {addItem, removeItem, getTotalItems, cart}