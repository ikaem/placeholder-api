const newOrderSelector = (order) => {
    const id = order._id;
    const { email, nameOnCard } = order.paymentDetails;
    const cartItems = order.cartItems.map(({ name, orderedQuantity, orderedPricePerItem }) => {
        return {name, orderedPricePerItem, orderedQuantity};
    });
    const { subtotal, grandTotal } = order.costDetails;
    const promocodeDiscounts = order.costDetails.promocodeDiscounts.map(({ description, discount }) => {
        return {description, discount};
    });

    return {
        id,
        nameOnCard,
        email,
        cartItems,
        subtotal,
        grandTotal,
        promocodeDiscounts
    }
};

module.exports = newOrderSelector;