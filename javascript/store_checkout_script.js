(function () {
    if(LS.store) {storeId = LS.store.id} else {storeId = null};
    if(LS.product) {productId = LS.product.id} else {productId = null};
    if(LS.cart) {cartId = LS.cart.id} else {cartId = null};
    if(LS.order) {orderId = LS.order.id} else {orderId = null};
    if(LS.customer) {customer = LS.customer} else {customer = null};
    alert ("Store ID: " + storeId +"\n"+ "Product ID: " + productId +"\n"+ "Cart ID: " + cartId +"\n"+ "Order ID: " + orderId +"\n"+ "Customer: " + customer);
})();